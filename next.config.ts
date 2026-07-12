import type { NextConfig } from "next";

/**
 * Headers de seguridad estándar (Prompt 7, corrección P1).
 * No son obligatorios para un sitio estático, pero cierran una brecha
 * fácil y mejoran directamente el score en herramientas como Mozilla
 * Observatory / securityheaders.com.
 */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    // CSP conservadora: permite scripts/estilos propios e inline (necesario
    // para el JSON-LD y los estilos de Tailwind/Next), imágenes propias y
    // de data URIs, y conexiones solo al propio origen.
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
