"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fadeInUp } from "@/lib/animations";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitState = "idle" | "loading" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: { name: string; email: string; message: string }): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = "Ingresa tu nombre completo.";
  if (!EMAIL_REGEX.test(values.email)) errors.email = "Ingresa un correo electrónico válido.";
  if (values.message.trim().length < 10) errors.message = "Cuéntame un poco más (mínimo 10 caracteres).";
  return errors;
}

/**
 * Formulario de contacto (Prompt 3, sección 16). Validación en tiempo
 * real, estado de carga en el botón de envío, confirmación clara post-envío.
 * Envía a /api/contact — nunca expone credenciales de email en el cliente.
 */
export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [company, setCompany] = useState(""); // honeypot: debe permanecer vacío
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<SubmitState>("idle");

  function handleChange(field: keyof typeof values, value: string) {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);
    if (touched[field]) {
      setErrors(validate(nextValues));
    }
  }

  function handleBlur(field: keyof typeof values) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(values));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, company }),
      });

      if (!response.ok) throw new Error("Error en el envío");

      setStatus("success");
      setValues({ name: "", email: "", message: "" });
      setCompany("");
      setTouched({});
    } catch {
      setStatus("error");
    }
  }

  return (
    <motion.form
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
    >
      {/* Honeypot anti-spam: oculto para personas y lectores de pantalla, visible para bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
        <label htmlFor="company">No completar este campo</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text-primary">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => handleChange("name", e.target.value)}
          onBlur={() => handleBlur("name")}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="h-11 w-full rounded-md border border-border bg-surface px-4 text-sm text-text-primary placeholder:text-text-tertiary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-muted"
          placeholder="Tu nombre"
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 flex items-center gap-1.5 text-sm text-error">
            <AlertCircle className="h-3.5 w-3.5" strokeWidth={1.5} />
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text-primary">
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => handleChange("email", e.target.value)}
          onBlur={() => handleBlur("email")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="h-11 w-full rounded-md border border-border bg-surface px-4 text-sm text-text-primary placeholder:text-text-tertiary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-muted"
          placeholder="tucorreo@ejemplo.com"
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 flex items-center gap-1.5 text-sm text-error">
            <AlertCircle className="h-3.5 w-3.5" strokeWidth={1.5} />
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text-primary">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          onBlur={() => handleBlur("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="min-h-[120px] w-full resize-y rounded-md border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-muted"
          placeholder="Cuéntame sobre tu proyecto o vacante..."
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 flex items-center gap-1.5 text-sm text-error">
            <AlertCircle className="h-3.5 w-3.5" strokeWidth={1.5} />
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.5} />
            Enviando...
          </>
        ) : (
          <>
            Enviar mensaje
            <Send className="h-4 w-4" strokeWidth={1.5} />
          </>
        )}
      </Button>

      <div aria-live="polite">
        {status === "success" && (
          <p className="flex items-center gap-2 text-sm text-success">
            <CheckCircle2 className="h-4 w-4" strokeWidth={1.5} />
            Mensaje enviado. Te responderé lo antes posible.
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 text-sm text-error">
            <AlertCircle className="h-4 w-4" strokeWidth={1.5} />
            Ocurrió un error al enviar el mensaje. Intenta de nuevo o escríbeme directo por correo.
          </p>
        )}
      </div>
    </motion.form>
  );
}
