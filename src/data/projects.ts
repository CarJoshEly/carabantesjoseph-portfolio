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
    date: "2025-01-01",
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
    date: "2025-01-01",
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
    date: "2026-04-01",
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
