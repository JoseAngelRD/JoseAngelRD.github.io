# José Ángel Romero Delgado · Portafolio

Portafolio personal de desarrollador de software: **Backend, Full-Stack, SQL. Móviles y escritorio.**
Incluye tres demos interactivas hechas a mano, una por proyecto:

| Proyecto | Demo | Tecnologías |
| --- | --- | --- |
| **Control Total** | Alta de una empresa: petición a la API y creación animada del árbol de carpetas | Java, JavaFX, Spring Boot, JPA, MySQL |
| **FlyEarth** | Geovalla de 30 m alrededor de un monumento real, con distancia calculada por Haversine | Kotlin, MapLibre, Retrofit, Django REST, MySQL |
| **IA para videojuegos** | Guardia con máquina de estados y cono de visión por raycasting | Unity, C#, Máquina de estados, NavMesh |

🌐 **Web:** https://joseangelrd.github.io/

## Stack del sitio

- [Astro](https://astro.build) · generación estática, sin frameworks de UI
- TypeScript, CSS propio y `canvas` para las animaciones
- Tipografías autoalojadas (Instrument Serif, Inter, JetBrains Mono)
- Respeta `prefers-reduced-motion`
- Despliegue automático en GitHub Pages con GitHub Actions

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build    # genera ./dist
npm run preview  # sirve ./dist
```

## Estructura

```
src/
├── components/        Hero, Nav, Project, Stack, Contact
│   └── demos/         FolderTree, Geofence, Stealth
├── data/profile.ts    Todo el contenido editable (textos, proyectos, enlaces)
├── layouts/Base.astro
├── pages/index.astro
└── styles/global.css
public/                Favicon y CV en PDF
```

Para cambiar textos, enlaces, métricas o la plantilla de carpetas basta con editar `src/data/profile.ts`.

## Despliegue

Cada `push` a `main` lanza `.github/workflows/deploy.yml`, que compila y publica en GitHub Pages
(*Settings → Pages → Source: GitHub Actions*).

## Contacto

📧 joseangelrds2003@gmail.com · [GitHub](https://github.com/JoseAngelRD)
