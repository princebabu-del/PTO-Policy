# context/

App-wide React context providers (auth, theme, feature flags). Each file exports the provider
and a `useX()` hook; keep the context value narrow to avoid needless re-renders.
