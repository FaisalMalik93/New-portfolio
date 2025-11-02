# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern portfolio website for Faisal Habib, built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. The site features interactive 3D elements, animations, and a dark theme with cyan/purple gradient accents.

## Development Commands

### Running the development server
```bash
pnpm dev
```
Starts the Next.js development server on http://localhost:3000

### Building for production
```bash
pnpm build
```
Creates an optimized production build. Note: TypeScript errors are ignored during build (`ignoreBuildErrors: true` in next.config.mjs).

### Running production build locally
```bash
pnpm start
```

### Linting
```bash
pnpm lint
```

## Architecture & Code Organization

### Directory Structure
- `app/` - Next.js App Router pages using the new App Directory structure
  - Each route has a `page.tsx` file (e.g., `app/about/page.tsx`, `app/projects/page.tsx`)
  - `layout.tsx` - Root layout with fonts (Geist, Geist Mono), analytics, and loading screen
  - `globals.css` - Global styles with Tailwind v4 imports and custom animations
- `components/` - Reusable React components (all client components using `"use client"`)
  - `ui/` - shadcn/ui component library (60+ pre-built components)
  - Top-level components are page-specific sections (hero-section, navbar, footer, etc.)
- `hooks/` - Custom React hooks (`use-mobile.ts`, `use-toast.ts`)
- `lib/` - Utility functions (currently only `utils.ts` with `cn()` helper)
- `styles/` - Additional CSS files
- `public/` - Static assets

### Key Technical Details

**Styling System:**
- Uses Tailwind CSS v4 with `@tailwindcss/postcss` plugin
- Custom CSS variables defined in `app/globals.css` for theming
- Custom utility classes: `.gradient-text`, `.glassmorphism`, `.neon-glow`
- Custom animations: `fadeInUp`, `slideInLeft`, `slideInRight`, `float`, `glow-pulse`
- Custom cursor effect applied globally
- Design tokens use oklch color space for dark theme

**Component Patterns:**
- All page components and most UI components use `"use client"` directive
- Heavy use of Framer Motion for animations (`motion` components, `variants` pattern)
- Animation patterns typically use `containerVariants` with `staggerChildren` and `itemVariants` for coordinated animations
- Components use `whileInView` for scroll-triggered animations
- Path aliases configured: `@/*` maps to root directory

**shadcn/ui Integration:**
- Configured in `components.json` with "new-york" style
- Uses Radix UI primitives under the hood
- Icon library: Lucide React
- All components support className override via `cn()` utility

**Page Structure Pattern:**
All pages follow this structure:
```tsx
"use client"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
// ... page content
```

**TypeScript Configuration:**
- Target: ES6
- Module resolution: bundler
- Strict mode enabled
- Path alias: `@/*` for root imports

**Important Config Notes:**
- TypeScript build errors are ignored (`ignoreBuildErrors: true`)
- Images are unoptimized (`unoptimized: true`)
- Uses pnpm as package manager
- No git repository initialized yet

## Component Development Guidelines

### Animation Patterns
When creating new sections with animations, use this pattern:
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1-0.2,
      delayChildren: 0.2-0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6-0.8, ease: "easeOut" },
  },
}
```

### Styling Conventions
- Primary color: cyan (#00d4ff)
- Secondary color: purple (#8b5cf6)
- Accent color: pink (#ec4899)
- Background: pure black (#000000)
- Use gradient text for headings: `className="gradient-text"`
- Use glassmorphism for cards: `className="glassmorphism"`
- Use neon glow for highlights: `className="neon-glow"`

### Interactive 3D Elements
The portfolio uses custom 3D components built with:
- CSS transforms and perspective
- Framer Motion for rotation animations
- Mouse tracking for interactive effects
- See `components/tech-sphere.tsx` for reference implementation

## Adding New Pages

1. Create a new directory in `app/` (e.g., `app/new-page/`)
2. Add `page.tsx` with the standard structure
3. Import and use Navbar and Footer
4. Add the route to `navItems` in `components/navbar.tsx`
5. Use consistent animation patterns from existing pages

## Analytics

Vercel Analytics is integrated via `@vercel/analytics/next` in the root layout.
