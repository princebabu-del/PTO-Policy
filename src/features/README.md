# features/

One folder per product capability (e.g. `policy-builder/`, `accruals/`). A feature owns its
components, hooks, types and API calls:

```
features/policy-builder/
  components/
  hooks/
  api.ts
  types.ts
  index.ts   <- the feature's public surface; import only from here
```

Anything shared by two or more features moves up into `src/components/ui`, `src/hooks`,
`src/lib` or `src/utils`.
