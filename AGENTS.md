# Repository Guidelines

## Project Structure & Module Organization
This is a **Nuxt 3** portfolio website using **Tailwind CSS**.

- **`app/`**: Contains the primary application source code.
    - **`components/`**: Reusable Vue components.
    - **`pages/`**: Application routes (Nuxt file-based routing).
    - **`layouts/`**: Shared page layouts.
    - **`assets/`**: Local static assets like images and CSS.
- **`shared/types/`**: Project-wide TypeScript interface and type definitions.
- **`public/`**: Static assets served at the root path (e.g., `favicon.ico`, `robots.txt`).

## Build, Test, and Development Commands
The project uses `npm` for dependency management.

- **`npm install`**: Install dependencies.
- **`npm run dev`**: Start the development server on `http://localhost:8000`.
- **`npm run build`**: Build the application for production.
- **`npm run generate`**: Static site generation.
- **`npm run preview`**: Locally preview the production build.
- **`npm run postinstall`**: Run `nuxt prepare` to generate internal types.

## Coding Style & Naming Conventions
Enforced by **ESLint** and **Prettier**.

- **Semicolons**: Always required (`"semi": true`).
- **Quotes**: Use single quotes (`'`) for strings.
- **Indentation**: 2 spaces.
- **Trailing Commas**: None (`"trailingComma": "none"`).
- **Print Width**: 100 characters.
- **TypeScript**: Strictly used for all logic. Ensure types are defined in `shared/types/` when appropriate.
- **Naming**: Components use PascalCase (e.g., `SkillBlock.vue`), while other files use kebab-case.

## Commit Guidelines
Commit messages should be descriptive and concise. Based on history, messages are primarily in **Slovak**.

- **Example**: `reorganizácia a refaktorovanie komponentov projektov, pridanie typov`
- **Pattern**: `[činnosť] [predmet], [dodatočné info]`
