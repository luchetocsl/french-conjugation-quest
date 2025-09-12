# Technology Stack

## Core Technologies

-   **React 18** - Frontend framework with TypeScript
-   **Vite** - Build tool and development server
-   **TypeScript** - Type-safe JavaScript
-   **Tailwind CSS** - Utility-first CSS framework
-   **Alpine.js** - Lightweight JavaScript framework for enhanced interactivity

## UI Framework

-   **shadcn/ui** - Component library built on Radix UI primitives
-   **Radix UI** - Headless UI components for accessibility
-   **Lucide React** - Icon library
-   **class-variance-authority** - Component variant management

## State Management & Data

-   **React Query (@tanstack/react-query)** - Server state management
-   **React Hook Form** - Form handling with Zod validation
-   **React Router DOM** - Client-side routing

## Development Tools

-   **ESLint** - Code linting with TypeScript support
-   **PostCSS** - CSS processing with Autoprefixer
-   **SWC** - Fast TypeScript/JavaScript compiler

## Common Commands

### Development

```bash
npm run dev          # Start development server on port 8080
npm run build        # Production build
npm run build:dev    # Development build
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Package Management

-   Uses npm with package-lock.json
-   Also has bun.lockb indicating Bun compatibility

## Build Configuration

-   Vite config includes path aliases (`@` -> `./src`)
-   Development server runs on `::` (all interfaces) port 8080
-   Lovable-specific development tooling integrated

## Alpine.js Integration

-   Alpine.js is initialized in `main.tsx` and available globally
-   Use Alpine.js for lightweight interactive components that complement React
-   **SWC Configuration**: `.swcrc` file configures SWC with `"throwIfNamespace": false` to allow Alpine.js attributes
-   **Recommended approach**: Use spread operator syntax `{...{ 'x-data': '...' }}` for all Alpine.js attributes
-   Alpine.js attributes are typed using TypeScript declarations in `vite-env.d.ts`
-   TypeScript support available via `@types/alpinejs`
-   Use `useRef` and `Alpine.initTree()` for dynamic initialization if needed

-   Alpine.js is initialized in `main.tsx` and available globally
-   Use Alpine.js for lightweight interactive components that complement React
-   Alpine.js components can be embedded within React components using `x-data` attributes
-   TypeScript support available via `@types/alpinejs`
