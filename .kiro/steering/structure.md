# Project Structure

## Root Directory

-   **src/** - Main application source code
-   **public/** - Static assets (favicon, images)
-   **.kiro/** - Kiro AI assistant configuration and steering rules
-   **astro.config.mjs** - Astro configuration
-   **tailwind.config.ts** - Tailwind CSS configuration
-   **tsconfig.json** - TypeScript configuration

## Source Code Organization (`src/`)

### Core Application

-   **pages/** - File-based routing (`.astro` files)
    -   **index.astro** - Main landing page
-   **layouts/** - Shared page layouts
    -   **Layout.astro** - Base layout with Alpine.js initialization
-   **index.css** - Global styles with Tailwind imports

### Component Architecture

-   **components/** - Reusable components
    -   **FrenchGame.tsx** - Main game component (React with `client:load`)

### Data & Types

-   **types/** - TypeScript type definitions
    -   **french.ts** - Game-specific interfaces (VerbChallenge, TextChallenge)
-   **data/** - Static data and content
    -   **exercisesSimple.ts** - French exercises in simplified format
-   **utils/** - Utility functions
    -   **exerciseParser.ts** - Converts simple format to full TextChallenge objects

## Astro Conventions

### File Types

-   **`.astro` files** - Astro components/pages with frontmatter and template
-   **`.tsx` files** - React components for interactive islands
-   **`.ts` files** - TypeScript utilities and types

### Import Patterns

-   Astro components: `import Layout from '../layouts/Layout.astro'`
-   React components: `import FrenchGame from '../components/FrenchGame'`
-   Types: `import type { TextChallenge } from '../types/french'`

### Client Directives

-   `client:load` - Hydrate component immediately
-   `client:idle` - Hydrate when browser is idle
-   `client:visible` - Hydrate when component is visible

## Alpine.js Integration

-   Initialized in Layout.astro script tag
-   Direct attribute syntax: `x-data`, `x-show`, `x-on:click`
-   No build configuration needed (unlike React SWC)
-   Works seamlessly with Astro's island architecture
