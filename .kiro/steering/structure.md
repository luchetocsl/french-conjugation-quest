# Project Structure

## Root Directory

-   **src/** - Main application source code
-   **public/** - Static assets (favicon, images)
-   **.kiro/** - Kiro AI assistant configuration and steering rules
-   **.swcrc** - SWC configuration for Alpine.js attribute support
-   Configuration files at root level

## Source Code Organization (`src/`)

### Core Application

-   **main.tsx** - Application entry point
-   **App.tsx** - Root component with providers and routing
-   **App.css** - Global application styles
-   **index.css** - Base styles and Tailwind imports

### Component Architecture

-   **components/** - Reusable React components
    -   **ui/** - shadcn/ui component library (40+ components)
    -   **FrenchGame.tsx** - Main game component
    -   **VerbInput.tsx** - Input component for verb conjugation
    -   **AlpineHintsSimple.tsx** - Alpine.js powered hints component
-   **pages/** - Route-level page components
    -   **Index.tsx** - Main landing page

### Data & Types

-   **types/** - TypeScript type definitions
    -   **french.ts** - Game-specific interfaces (VerbChallenge, TextChallenge)
-   **data/** - Static data and content
    -   **sampleText.ts** - French exercise content

### Utilities

-   **lib/** - Utility functions
    -   **utils.ts** - Common utilities (likely cn() for className merging)
-   **hooks/** - Custom React hooks
    -   **use-toast.ts** - Toast notification hook
    -   **use-mobile.tsx** - Mobile detection hook

## Import Conventions

-   Use `@/` path alias for src imports
-   Import shadcn/ui components from `@/components/ui/`
-   Import custom components with relative paths when in same directory

## File Naming

-   React components use PascalCase (e.g., `FrenchGame.tsx`)
-   Utility files use kebab-case (e.g., `use-toast.ts`)
-   Type files use camelCase (e.g., `french.ts`)

## Component Structure

-   Components follow shadcn/ui patterns with forwardRef and proper TypeScript typing
-   Use Tailwind classes for styling
-   Implement proper accessibility with Radix UI primitives
