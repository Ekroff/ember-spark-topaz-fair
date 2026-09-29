# Axiom

Premium interactive DSA practice. Phase 1 is the application shell — routing, catalog, and layout — with Floyd–Warshall as the first algorithm module.

No backend, authentication, or database. Student progress will use `localStorage` in a later phase.

## Stack

- React + TypeScript
- Vite / TanStack Start
- Tailwind CSS

## Scripts

```bash
npm install
npm run dev
npm run build
npm run typecheck
```

Deployable to Vercel from this repository.

## Folder structure

| Path | Purpose |
| --- | --- |
| `src/pages` | Home, Challenge, and Result screens |
| `src/routes` | File-based routing into those pages |
| `src/components` | Layout, home widgets, and shared UI |
| `src/algorithms` | Per-algorithm modules (Floyd–Warshall first) |
| `src/game` | Challenge session contracts |
| `src/data` | Static catalog and placeholder progress |
| `src/hooks` | Client hooks (`useProgress`) |
| `src/types` | Shared domain types |
| `src/utils` | Helpers (`cn`) |
