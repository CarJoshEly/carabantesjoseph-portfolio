import { NextRequest, NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
  /** Campo honeypot: invisible para personas, atractivo para bots. Si llega lleno, se descarta. */
  company?: string;
}

/**
 * Rate limiting en memoria (Prompt 7, corrección P0 de seguridad).
 * Limita a 5 solicitudes cada 10 minutos por IP. Es una protección básica
 * suficiente para un portafolio de bajo tráfico; en Vercel cada instancia
 * serverless mantiene su propio Map mientras esté "caliente", por lo que
 * NO es un límite global estricto entre regiones/instancias. Para
 * garantías más fuertes en producción, sustituir por Vercel KV / Upstash
 * Ratelimit (almacenamiento compartido entre instancias).
 */
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return false;
}

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

/**
 * Route Handler de contacto (Prompt 1: /api/contact).
 * Mantiene el envío server-side para no exponer credenciales de un
 * proveedor de email en el cliente. Por defecto solo valida y registra
 * el mensaje en el log del servidor; para enviarlo de verdad, conecta
 * un proveedor (ver README.md, sección "Formulario de contacto") y
 * añade su API key como variable de entorno (.env.local, ver .env.example).
 */
export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Intenta de nuevo en unos minutos." },
      { status: 429 }
    );
  }

  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  // Honeypot: los bots suelen rellenar todos los campos, incluidos los ocultos.
  // Si "company" llega con contenido, respondemos éxito sin procesar nada más,
  // para no delatar al bot que fue detectado.
  if (body.company && body.company.trim().length > 0) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (name.length < 2 || name.length > 100) {
    return NextResponse.json(
      { error: "El nombre debe tener entre 2 y 100 caracteres." },
      { status: 422 }
    );
  }
  if (!EMAIL_REGEX.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Ingresa un correo electrónico válido." }, { status: 422 });
  }
  if (message.length < 10 || message.length > 2000) {
    return NextResponse.json(
      { error: "El mensaje debe tener entre 10 y 2000 caracteres." },
      { status: 422 }
    );
  }

  // TODO: integrar un proveedor real de envío de correo, ej. Resend:
  //
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "portfolio@tu-dominio.com",
  //   to: process.env.CONTACT_EMAIL_TO!,
  //   subject: `Nuevo mensaje de ${name}`.slice(0, 200), // truncado, sin saltos de línea de `name`
  //   text: message,
  //   replyTo: email,
  // });
  console.info("[contacto] Nuevo mensaje recibido:", { name, email });

  return NextResponse.json({ success: true }, { status: 200 });
}
