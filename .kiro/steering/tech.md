# Technology Stack

## Core Technologies

-   **Astro** - Static site generator with island architecture
-   **React 18** - Interactive components with TypeScript
-   **TypeScript** - Type-safe JavaScript
-   **Tailwind CSS** - Utility-first CSS framework
-   **Alpine.js** - Lightweight JavaScript framework for enhanced interactivity

## Astro Features

-   **Island Architecture** - Interactive components only where needed
-   **Static Site Generation** - Pre-rendered HTML for performance
-   **React Integration** - Use React components with `client:load` directive
-   **File-based routing** - Pages in `src/pages/` directory
-   **Layout system** - Shared layouts in `src/layouts/`

## Alpine.js Integration

-   Alpine.js initialized in Layout.astro and available globally
-   Use Alpine.js for lightweight interactive components
-   Direct attribute syntax works seamlessly: `x-data="..."`, `x-on:click="..."`
-   No JSX namespace issues (unlike React SWC setup)
-   TypeScript support available via `@types/alpinejs`

## Common Commands

### Development

```bash
npm run dev          # Start Astro development server
npm run build        # Production build
npm run preview      # Preview production build
npm run astro        # Astro CLI commands
npm run lint         # Run ESLint
```

### Astro-specific Commands

```bash
npm run astro add <integration>  # Add integrations
npm run astro check             # Type checking
npm run astro sync              # Sync content types
```

### Package Management

-   Uses npm with package-lock.json
-   All dependencies managed through npm
-   No alternative package managers configured

## Build Configuration

-   Astro config in `astro.config.mjs`
-   React integration with JSX support
-   Tailwind CSS integration
-   TypeScript with strict mode enabled
-   Path aliases (`@` -> `./src`)
-   Static output for deployment anywhere
