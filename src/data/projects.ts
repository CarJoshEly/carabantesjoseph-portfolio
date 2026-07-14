import { Project } from "@/types/project";
import { validateProjects } from "@/lib/validate-data";

/**
 * ============================================================
 *  FUENTE DE VERDAD DE PROYECTOS
 * ============================================================
 * Para agregar un proyecto nuevo:
 *   1. Copia sus imágenes a /public/images/projects/{slug}/
 *   2. Agrega un objeto que cumpla la interfaz `Project` al array.
 *   3. Guarda. TypeScript marcará error si falta un campo obligatorio,
 *      y `validateProjects()` lanzará un error descriptivo en runtime
 *      si algún valor no cumple el formato esperado (fecha, slug, color,
 *      URLs, etc.) o si dos proyectos comparten el mismo slug.
 *
 * No necesitas tocar ningún componente: ProjectsGrid, ProjectCard,
 * los filtros y las páginas /proyectos y /proyectos/[slug] leen
 * este array automáticamente.
 *
 * Ejemplo de forma (no un proyecto real, solo referencia de campos):
 *
 * {
 *   id: "",
 *   slug: "",
 *   name: "",
 *   shortDescription: "",
 *   longDescription: "",
 *   category: "full-stack",
 *   status: "completado",
 *   featured: false,
 *   date: "2026-01-01",
 *   coverImage: { src: "/images/projects/.../cover.webp", alt: "" },
 *   gallery: [],
 *   icon: "LayoutGrid",
 *   color: "#10B981",
 *   technologies: [{ name: "Next.js", icon: "Globe" }],
 *   tags: [],
 *   links: { github: "", demo: "" },
 * }
 * ============================================================
 */

export const projects: Project[] = [
  {
    id: "factus-ai",
    slug: "factus-ai",
    name: "FactusAI",
    shortDescription:
      "Gestión inteligente de facturas: sube una imagen o PDF y la IA extrae los datos automáticamente para tu contabilidad.",
    longDescription:
      "Aplicación web para la digitalización y gestión de facturas mediante inteligencia artificial. El usuario sube una imagen o PDF de un comprobante (hasta 50MB) y el sistema extrae automáticamente los datos clave —proveedor, fecha, monto, categoría, tipo y documento— para que solo queden por confirmar antes de guardarse, con la opción de marcar si la factura es física.\n\nEl panel principal (dashboard) muestra un resumen ejecutivo con el total de facturas registradas, el monto acumulado y el monto del mes en curso. El módulo de Reportes permite seleccionar un período, generar un resumen en PDF y enviarlo por correo electrónico o WhatsApp, con un historial de los envíos realizados. Configuración permite editar los datos de la cuenta y actualizar la contraseña.\n\nConstruida con React, TypeScript y Node.js en el frontend/backend, Supabase como base de datos y autenticación, y la API de Google Generative AI (Gemini) para la extracción automática de los datos de cada factura.\n\nNota: la demo corre sobre el plan gratuito de Supabase, que pausa la base de datos por inactividad. Si al entrar solo se ve la pantalla de inicio de sesión, es porque la base está en pausa — puede tardar unos segundos en reactivarse.",
    category: "full-stack",
    status: "completado",
    featured: true,
    date: "2026-05-01",
    coverImage: {
      src: "/images/projects/factus-ai/registrar-factura.webp",
      alt: "Panel de registro de factura de FactusAI con carga de comprobante y extracción automática de datos",
    },
    gallery: [
      {
        src: "/images/projects/factus-ai/registrar-factura.webp",
        alt: "Registrar factura: subir comprobante y verificar los datos extraídos por IA",
      },
      {
        src: "/images/projects/factus-ai/login.webp",
        alt: "Pantalla de inicio de sesión de FactusAI",
      },
      {
        src: "/images/projects/factus-ai/registro.webp",
        alt: "Pantalla de creación de cuenta de FactusAI",
      },
      {
        src: "/images/projects/factus-ai/dashboard.webp",
        alt: "Dashboard con resumen ejecutivo: total de facturas, monto total y monto del mes",
      },
      {
        src: "/images/projects/factus-ai/reportes.webp",
        alt: "Reportes mensuales: generación y envío de resumen en PDF por correo o WhatsApp",
      },
      {
        src: "/images/projects/factus-ai/configuracion.webp",
        alt: "Pantalla de configuración de cuenta y seguridad",
      },
    ],
    icon: "Sparkles",
    color: "#0D9488",
    technologies: [
      { name: "React", icon: "Code2" },
      { name: "TypeScript", icon: "FileCode2" },
      { name: "Node.js", icon: "Server" },
      { name: "Supabase", icon: "Cloud" },
      { name: "Google Generative AI", icon: "Sparkles" },
    ],
    tags: ["ia", "saas", "facturacion"],
    links: {
      github: "https://github.com/CarJoshEly/Factus-AI",
      demo: "https://factus-ai-eta.vercel.app/",
    },
  },
  {
    id: "workana-mvp",
    slug: "workana-mvp",
    name: "WorkanaMVP",
    shortDescription:
      "Plataforma de empleo independiente con doble rol (cliente/freelancer): publica proyectos, envía propuestas y gestiona contratos.",
    longDescription:
      "Plataforma web (MVP) para la gestión de empleo independiente, con un sistema de doble rol: el usuario se registra como Cliente (quien publica proyectos y contrata) o como Freelancer (quien explora proyectos y envía propuestas), cada uno con su propio panel y navegación.\n\nComo cliente: dashboard con resumen de proyectos publicados, propuestas recibidas, contratos y monto gastado; formulario para publicar un nuevo proyecto (título, categoría, presupuesto, descripción); gestión de \"Mis Proyectos\" con edición y cierre; y una vista de Contratos y propuestas donde puede aceptar o rechazar cada propuesta recibida.\n\nComo freelancer: exploración de proyectos abiertos, envío de propuestas con precio y mensaje de presentación, y seguimiento de sus propias propuestas. Ambos roles comparten un módulo de chat en tiempo real por proyecto para coordinar el trabajo, y una sección de perfil para editar nombre, biografía, foto y contraseña.\n\nConstruida con React y Node.js en el frontend/backend, y Supabase como base de datos, autenticación y gestión de roles, desplegada en Vercel.\n\nNota: al igual que FactusAI, la demo corre sobre el plan gratuito de Supabase, que pausa la base de datos por inactividad — si al entrar no puedes iniciar sesión, es porque la base está en pausa y necesita unos segundos para reactivarse.",
    category: "full-stack",
    status: "completado",
    featured: true,
    date: "2026-06-01",
    coverImage: {
      src: "/images/projects/workana-mvp/landing.webp",
      alt: "Landing page de WorkanaMVP: 'Conecta talento con oportunidades reales'",
    },
    gallery: [
      {
        src: "/images/projects/workana-mvp/landing.webp",
        alt: "Landing page con las opciones Publica proyectos, Encuentra talento y Trabaja sin límites",
      },
      {
        src: "/images/projects/workana-mvp/registro.webp",
        alt: "Registro de cuenta con selección de rol: Cliente o Freelancer",
      },
      {
        src: "/images/projects/workana-mvp/dashboard-cliente.webp",
        alt: "Dashboard de cliente con proyectos publicados, propuestas recibidas, contratos y gastado",
      },
      {
        src: "/images/projects/workana-mvp/publicar-proyecto.webp",
        alt: "Formulario para publicar un nuevo proyecto con título, categoría, presupuesto y descripción",
      },
      {
        src: "/images/projects/workana-mvp/mis-proyectos.webp",
        alt: "Listado de proyectos publicados por el cliente con opciones de editar y cerrar",
      },
      {
        src: "/images/projects/workana-mvp/detalle-proyecto-cliente.webp",
        alt: "Vista de detalle de proyecto para el cliente, con presupuesto y propuestas recibidas",
      },
      {
        src: "/images/projects/workana-mvp/detalle-proyecto-freelancer.webp",
        alt: "Vista de detalle de proyecto para el freelancer, con formulario para enviar propuesta",
      },
      {
        src: "/images/projects/workana-mvp/contratos-propuestas.webp",
        alt: "Contratos y propuestas: aceptar o rechazar propuestas recibidas",
      },
      {
        src: "/images/projects/workana-mvp/chat.webp",
        alt: "Chat en tiempo real entre cliente y freelancer sobre un proyecto",
      },
      {
        src: "/images/projects/workana-mvp/perfil.webp",
        alt: "Pantalla de perfil con edición de información y cambio de contraseña",
      },
    ],
    icon: "Briefcase",
    color: "#16A34A",
    technologies: [
      { name: "React", icon: "Code2" },
      { name: "Node.js", icon: "Server" },
      { name: "Supabase", icon: "Cloud" },
    ],
    tags: ["marketplace", "roles", "chat-en-tiempo-real"],
    links: {
      github: "https://github.com/CarJoshEly/Workana_MVP",
      demo: "https://workana-mvp.vercel.app/",
    },
  },
  {
    id: "control-habitos-movil",
    slug: "control-habitos-movil",
    name: "Control Hábitos UNICAH",
    shortDescription:
      "App móvil de seguimiento de hábitos con un módulo de IA universitaria: sugerencias, análisis de productividad, chat motivacional y rutinas.",
    longDescription:
      "Aplicación móvil para el seguimiento de hábitos cotidianos, desarrollada en equipo para la cátedra de Negocios Web II. Permite crear, editar y eliminar hábitos, con calendario de cumplimiento, rachas, estadísticas por hábito, notificaciones/alarmas personalizadas, modo oscuro y autenticación por correo o Google.\n\nSobre esa base se construyó un módulo adicional de \"IA Universitaria\" con 4 herramientas impulsadas por la API de OpenAI (modelo gpt-4o-mini): un sugeridor de hábitos personalizado según la carrera del estudiante, un análisis de productividad que revisa los hábitos registrados y da recomendaciones, un chat motivacional tipo coach universitario, y un generador de rutinas semanales adaptadas al semestre y objetivos del estudiante.\n\nMi rol incluyó el desarrollo de la app en Flutter/Dart, la integración con Firebase (Auth, Firestore, Storage y Cloud Messaging) y la construcción del servicio de IA (`ai_service.dart`) que gestiona las llamadas a la API de OpenAI y el diseño del contexto conversacional en español para el entorno académico hondureño.",
    category: "mobile",
    status: "completado",
    featured: false,
    date: "2026-03-01",
    coverImage: {
      src: "/images/projects/control-habitos-movil/login.webp",
      alt: "Pantalla de inicio de sesión de Control Hábitos UNICAH con correo institucional y acceso con Google",
    },
    gallery: [
      {
        src: "/images/projects/control-habitos-movil/login.webp",
        alt: "Pantalla de inicio de sesión con correo institucional UNICAH y acceso con Google",
      },
      {
        src: "/images/projects/control-habitos-movil/nuevo-habito.webp",
        alt: "Modal para crear un nuevo hábito con nombre, descripción, frecuencia y recordatorio",
      },
      {
        src: "/images/projects/control-habitos-movil/ia-universitaria.webp",
        alt: "Menú del módulo IA Universitaria con Sugeridor de Hábitos, Análisis de Productividad, Chat Motivacional y Generador de Rutinas",
      },
      {
        src: "/images/projects/control-habitos-movil/estadisticas.webp",
        alt: "Pantalla de estadísticas con hábitos activos, racha combinada y mejor racha",
      },
    ],
    icon: "Sparkles",
    color: "#2563EB",
    technologies: [
      { name: "Flutter", icon: "Smartphone" },
      { name: "Dart", icon: "Smartphone" },
      { name: "Firebase", icon: "Cloud" },
      { name: "OpenAI API", icon: "Sparkles" },
    ],
    tags: ["universidad", "equipo", "ia", "movil"],
    links: {
      github: "https://github.com/CarJoshEly/ProyectoControlHabitos",
    },
  },
  {
    id: "control-habitos-web",
    slug: "control-habitos-web",
    name: "Control Hábitos UNICAH (Web)",
    shortDescription:
      "Migración de la app móvil a una plataforma web full-stack, con automatización real vía Zapier (3 Zaps) y asistente de IA.",
    longDescription:
      "Proyecto final de la cátedra de Negocios Web: migración y ampliación de Control Hábitos UNICAH desde Flutter hacia una plataforma web completa con Node.js + Express en el backend, React (Vite) en el frontend y Firebase como base de datos en la nube. Mantiene el módulo de autenticación exclusivo con correo institucional @unicah.edu, el dashboard de hábitos con calendario deslizable y estadísticas, el módulo de progreso/historial con heatmap, y el asistente de IA (OpenAI GPT-4o-mini) con chat motivacional, análisis de productividad, sugeridor de hábitos y generador de rutinas semanales.\n\nComo herramienta de automatización obligatoria del curso, integré Zapier con tres flujos reales conectados al backend mediante ngrok: un Zap que registra hábitos completados en Google Sheets cada hora, un reporte diario por correo con el resumen del día anterior, y un recordatorio automático por correo para el hábito programado en cada hora, con un paso de Filter by Zapier que evita enviar correos vacíos.\n\nLa seguridad de las rutas privadas se maneja con Firebase Admin SDK verificando tokens JWT en cada petición. La principal limitación identificada fue la dependencia de ngrok para exponer el backend local a los webhooks de Zapier — en producción esto se resolvería desplegando el backend en Render o Railway.",
    category: "full-stack",
    status: "completado",
    featured: false,
    date: "2026-04-08",
    coverImage: {
      src: "/images/projects/control-habitos-web/login.webp",
      alt: "Pantalla de login de Control Hábitos UNICAH web con correo institucional y acceso con Google",
    },
    gallery: [
      {
        src: "/images/projects/control-habitos-web/login.webp",
        alt: "Pantalla de login con correo institucional @unicah.edu y acceso con Google",
      },
      {
        src: "/images/projects/control-habitos-web/dashboard-nuevo-habito.webp",
        alt: "Dashboard con calendario semanal y modal de creación de un nuevo hábito",
      },
      {
        src: "/images/projects/control-habitos-web/asistente-ia.webp",
        alt: "Asistente de IA con pestañas de Chat, Análisis, Sugerencias y Rutina",
      },
      {
        src: "/images/projects/control-habitos-web/perfil.webp",
        alt: "Pantalla de perfil de usuario con preferencias de tema y notificaciones (correo difuminado)",
      },
    ],
    icon: "Workflow",
    color: "#1D4ED8",
    technologies: [
      { name: "React", icon: "Code2" },
      { name: "Vite", icon: "Rocket" },
      { name: "Node.js", icon: "Server" },
      { name: "Express.js", icon: "Server" },
      { name: "Firebase", icon: "Cloud" },
      { name: "OpenAI API", icon: "Sparkles" },
      { name: "Zapier", icon: "Workflow" },
    ],
    tags: ["universidad", "equipo", "automatizacion", "ia"],
    links: {
      github: "https://github.com/CarJoshEly/Control_Habitos_WEB",
    },
  },
  {
    id: "gestor-vehiculos",
    slug: "gestor-vehiculos",
    name: "Gestor de Vehículos",
    shortDescription:
      "Sistema web para el alquiler y control de un inventario de vehículos, con gestión CRUD completa.",
    longDescription:
      "Sistema web para la administración y control de vehículos de alquiler. Permite registrar un vehículo indicando modelo, marca, año y precio por día, y muestra el inventario completo en un panel con tarjetas que indican si cada vehículo está disponible o alquilado. El botón de acción cambia dinámicamente entre \"Alquilar\" y \"No disponible\" según el estado del vehículo, sobre operaciones CRUD completas (crear, leer, actualizar el estado y eliminar) contra una base de datos real.",
    category: "full-stack",
    status: "completado",
    featured: false,
    date: "2026-03-10",
    coverImage: {
      src: "/images/projects/gestor-vehiculos/panel.webp",
      alt: "Panel de gestión de alquiler de vehículos con formulario de registro y tarjetas de vehículos disponibles y alquilados",
    },
    icon: "Car",
    color: "#4F46E5",
    technologies: [
      { name: "React", icon: "Code2" },
      { name: "Node.js", icon: "Server" },
      { name: "TypeScript", icon: "FileCode2" },
      { name: "Prisma", icon: "Boxes" },
      { name: "SQLite", icon: "Database" },
    ],
    tags: ["crud", "administrativo"],
    links: {
      github: "https://github.com/CarJoshEly/Gestor_Vehiculos",
    },
  },
  {
    id: "gestor-productos",
    slug: "gestor-productos",
    name: "Gestor de Productos",
    shortDescription:
      "Inventario web con productos y categorías propias, precios en Lempiras y operaciones CRUD completas.",
    longDescription:
      "Aplicación web para administrar un inventario de productos de forma simple. Permite registrar productos con nombre, descripción, precio (en Lempiras) y categoría, y organizarlos por categorías propias creadas por el usuario (cada categoría con nombre y descripción, y un contador de cuántos productos contiene). Cada producto se muestra en una tarjeta con su categoría, precio y acciones para editar o eliminar, sobre operaciones CRUD completas tanto para productos como para categorías.\n\nArquitectura de backend y frontend separados: un backend en Node.js con Prisma como ORM contra una base de datos SQLite, y un frontend en React servido con Vite.",
    category: "full-stack",
    status: "completado",
    featured: false,
    date: "2026-03-01",
    coverImage: {
      src: "/images/projects/gestor-productos/productos.webp",
      alt: "Panel de gestión de productos con formulario de registro y tarjetas de productos por categoría",
    },
    gallery: [
      {
        src: "/images/projects/gestor-productos/productos.webp",
        alt: "Listado de productos (Queso, Leche) con precio, categoría y acciones de editar/eliminar",
      },
      {
        src: "/images/projects/gestor-productos/categorias.webp",
        alt: "Gestión de categorías con formulario para crear una nueva categoría",
      },
    ],
    icon: "Boxes",
    color: "#7C3AED",
    technologies: [
      { name: "React", icon: "Code2" },
      { name: "Vite", icon: "Rocket" },
      { name: "Node.js", icon: "Server" },
      { name: "Prisma", icon: "Boxes" },
      { name: "SQLite", icon: "Database" },
    ],
    tags: ["crud", "inventario"],
    links: {
      github: "https://github.com/CarJoshEly/Gestor_Productos",
    },
  },
  {
    id: "chatbot-unicah",
    slug: "chatbot-unicah",
    name: "ChatBot UNICAH",
    shortDescription:
      "Chatbot web para la cátedra de Negocios Web, con respuestas generadas mediante una API de IA.",
    longDescription:
      "Chatbot web desarrollado para la cátedra de Negocios Web, con una interfaz simple de conversación: el usuario escribe su pregunta y el bot responde en tiempo real. Las respuestas se generan mediante una API de inteligencia artificial en el servidor, en vez de un árbol de respuestas fijas.\n\nArquitectura de cliente y servidor separados: el cliente en React + TypeScript servido con Vite, y el servidor en Node.js con una base de datos SQLite propia para persistencia.",
    category: "full-stack",
    status: "completado",
    featured: false,
    date: "2026-01-28",
    coverImage: {
      src: "/images/projects/chatbot-unicah/chat.webp",
      alt: "Interfaz del ChatBot UNICAH mostrando el mensaje de bienvenida y el campo para escribir una pregunta",
    },
    icon: "MessageSquareCode",
    color: "#0EA5E9",
    technologies: [
      { name: "React", icon: "Code2" },
      { name: "TypeScript", icon: "FileCode2" },
      { name: "Vite", icon: "Rocket" },
      { name: "Node.js", icon: "Server" },
      { name: "SQLite", icon: "Database" },
      { name: "OpenAI API", icon: "Sparkles" },
    ],
    tags: ["universidad", "ia", "chatbot"],
    links: {
      github: "https://github.com/CarJoshEly/Chatbot-Unicah",
    },
  },
];

validateProjects(projects);
