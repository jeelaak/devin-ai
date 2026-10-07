# devin-ai

## react-app

A React + TypeScript single-page app scaffolded with [Vite](https://vite.dev/) and styled with [Material UI](https://mui.com/) (Roboto font, light/dark theme in `src/theme.ts`).

```
react-app/src/
├── components/   # Reusable UI components (e.g. Header)
├── hooks/        # Custom React hooks
├── pages/        # Page-level components
├── theme.ts      # MUI createTheme() configuration
├── App.tsx
└── main.tsx      # ThemeProvider + CssBaseline setup
```

### Running locally

Requires Node.js 20.19+ (or 22.12+).

```bash
cd react-app
npm install       # install dependencies
npm run dev       # start the dev server at http://localhost:5173
npm run build     # type-check and build for production into dist/
npm run lint      # lint with oxlint
npm run preview   # preview the production build
```
