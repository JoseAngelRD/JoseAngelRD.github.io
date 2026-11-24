// Todo el contenido editable del portfolio vive aquí.
// Los enlaces vacíos ("") no se muestran en la web.

export const profile = {
  name: "José Ángel",
  surname: "Romero Delgado",
  role: "Desarrollador de software",
  tagline: "Backend, Full-Stack, SQL. Móviles y escritorio. Software completo, seguro y funcional.",
  stack: ["Java", "Spring Boot", "Kotlin", "Django"],
  location: "Huelva",
  coords: { lat: 37.2614, lon: -6.9447 },
  availability: "Disponible · remoto o reubicación",
  email: "joseangelrds2003@gmail.com",
  github: "https://github.com/JoseAngelRD",
  linkedin: "", // p. ej. "https://www.linkedin.com/in/tu-perfil"
  cv: `${import.meta.env.BASE_URL}Jose_Angel_Romero_CV.pdf`,
};

export const projects = {
  controlTotal: {
    index: "01",
    meta: "Freelance · Asesoría fiscal · 2026",
    title: "Control Total",
    lead: "Gestión documental para una asesoría: cada alta de cliente genera su archivo completo en el servidor.",
    metrics: [
      { value: "16", label: "endpoints REST" },
      { value: "54", label: "carpetas por alta" },
      { value: "3", label: "capas" },
    ],
    stack: ["Java", "JavaFX", "Spring Boot", "Spring Data JPA", "MySQL"],
    links: [{ label: "Ver demo", href: "https://youtu.be/YctNrVXNuIo" }],
  },
  flyEarth: {
    index: "02",
    meta: "Trabajo de Fin de Grado · Android",
    title: "FlyEarth",
    lead: "Juego multijugador de geolocalización: camina, desbloquea monumentos reales y conquístalos para tu equipo.",
    metrics: [
      { value: "12", label: "endpoints" },
      { value: "30 m", label: "radio de captura" },
      { value: "4", label: "equipos" },
    ],
    stack: ["Kotlin", "MapLibre", "Retrofit", "Django REST", "MySQL"],
    links: [
      { label: "App", href: "" }, // enlace al repo de la app
      { label: "Servidor", href: "" }, // enlace al repo del servidor
    ],
  },
  games: {
    index: "03",
    meta: "Proyectos personales · Unity",
    title: "IA para videojuegos",
    lead: "Enemigos con máquinas de estados: patrullan, sospechan y persiguen. Thief Game 3D y Boss Hunter 2D.",
    metrics: [
      { value: "3", label: "estados" },
      { value: "2", label: "juegos" },
      { value: "C#", label: "Unity" },
    ],
    stack: ["Unity", "C#", "Máquina de estados", "NavMesh", "Raycasting"],
    links: [{ label: "Juegos", href: "" }], // itch.io o GitHub
  },
};

export const stack = [
  { group: "backend", items: ["Spring Boot", "Spring Data JPA", "Django REST Framework", "API REST"] },
  { group: "lenguajes", items: ["Java", "Kotlin", "Python", "C#", "SQL", "C++"] },
  { group: "cliente", items: ["JavaFX", "Android", "Retrofit", "MapLibre", "Unity"] },
  { group: "datos", items: ["MySQL", "MariaDB", "Oracle", "SQLite"] },
  { group: "flujo", items: ["Git", "Maven", "Gradle", "SonarQube", "Scrum"] },
];

export const timeline = [
  { year: "2021", title: "Ingeniería Informática", detail: "Universidad de Huelva · Software" },
  { year: "2026", title: "Control Total", detail: "Freelance · mar – may" },
  { year: "2026", title: "FlyEarth", detail: "TFG · graduación" },
  { year: "Ahora", title: "Siguiente reto", detail: "", now: true },
];

// Plantilla de carpetas que crea Control Total por cada empresa (ejemplo ilustrativo)
export const folderTemplate = [
  "Dirección/Estrategia",
  "Dirección/Actas de Consejo",
  "Dirección/Poderes y Representación",
  "Clientes/Fichas de Cliente",
  "Clientes/Presupuestos",
  "Clientes/Pedidos/Pendientes",
  "Clientes/Pedidos/Entregados",
  "Clientes/Reclamaciones",
  "Proveedores/Homologación",
  "Proveedores/Catálogos y Tarifas",
  "Proveedores/Órdenes de Compra",
  "Proveedores/Evaluaciones",
  "Operaciones/Producción/Planificación",
  "Operaciones/Producción/Partes de Trabajo",
  "Operaciones/Producción/Control de Calidad",
  "Operaciones/Logística/Transporte",
  "Operaciones/Logística/Almacén",
  "Operaciones/Logística/Aduanas",
  "Operaciones/Mantenimiento",
  "Recursos Humanos/Selección/Ofertas",
  "Recursos Humanos/Selección/Entrevistas",
  "Recursos Humanos/Formación",
  "Recursos Humanos/Evaluación del Desempeño",
  "Recursos Humanos/Plantilla/Organigrama",
  "Recursos Humanos/Plantilla/Teletrabajo",
  "Finanzas/Tesorería/Cobros",
  "Finanzas/Tesorería/Pagos",
  "Finanzas/Facturación/Emitidas",
  "Finanzas/Facturación/Recibidas",
  "Finanzas/Presupuestos Internos",
  "Finanzas/Activos Fijos",
  "Marketing/Campañas/Redes Sociales",
  "Marketing/Campañas/Ferias y Eventos",
  "Marketing/Identidad Corporativa",
  "Marketing/Notas de Prensa",
  "Tecnología/Infraestructura/Servidores",
  "Tecnología/Infraestructura/Redes",
  "Tecnología/Software/Licencias",
  "Tecnología/Software/Desarrollo Interno",
  "Tecnología/Seguridad/Copias de Seguridad",
  "Tecnología/Seguridad/Protección de Datos",
  "Tecnología/Soporte Técnico",
  "Calidad y Medio Ambiente/Normas ISO",
  "Calidad y Medio Ambiente/Auditorías Internas",
  "Calidad y Medio Ambiente/Gestión de Residuos",
  "Proyectos/Propuestas",
  "Proyectos/En Curso",
  "Proyectos/Cerrados",
  "Seguros y Siniestros/Pólizas",
  "Seguros y Siniestros/Partes de Siniestro",
  "Normativa/Reglamento Interno",
  "Normativa/Código Ético",
  "Normativa/Canal de Denuncias",
  "Archivo Histórico",
];
