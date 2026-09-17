# PTO Policy Config

Front-end for configuring PTO policies. React 19 + TypeScript + Vite.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with HMR on http://localhost:5173 |
| `npm run build` | Type-check and build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run test` | Run the Vitest suite once (`test:watch` to watch) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint over the repo |
| `npm run format` | Prettier over `src/` |

## Structure

```
index.html            App shell; Vite's entry HTML
public/               Served as-is at the site root (favicon, robots.txt)
src/
  main.tsx            Mounts React, installs the router
  App.tsx             Route table
  assets/             Imported images, icons, fonts (hashed by Vite)
  components/
    layout/           App shell: header, footer, page frame
    ui/               Reusable presentational primitives (Button, Card, ...)
  constants/          App-wide constants and env-derived config
  context/            React context providers
  features/           Self-contained product capabilities (see features/README.md)
  hooks/              Reusable hooks
  lib/                Framework-level infrastructure (API client, etc.)
  pages/              Route-level components
  services/           Typed wrappers over backend endpoints
  styles/             Design tokens, reset, global CSS
  types/              Shared TypeScript types
  utils/              Pure helpers
tests/                Vitest setup and tests
```

## Conventions

- `@/` is an alias for `src/` (configured in both `vite.config.ts` and `tsconfig.app.json`).
- Styling is CSS Modules (`Component.module.css`) over the tokens in `src/styles/tokens.css`.
  Components read tokens, never hard-coded colors or spacing.
- One component per file, default-exported, named the same as the file.
- Cross-feature code moves up out of `features/` into `components/ui`, `hooks`, `lib` or `utils`.
