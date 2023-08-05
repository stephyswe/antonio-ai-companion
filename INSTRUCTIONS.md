# Environment Setup

npx create-next-app@latest ai-companion --typescript --tailwind --eslint
√ Would you like to use `src/` directory with this project? ... No
√ Use App Router (recommended)? ... Yes
√ Would you like to customize the default import alias? ... No

cd ai-companion

npx shadcn-ui@latest init
√ Would you like to use TypeScript (recommended)? ... yes
√ Which style would you like to use? » Default
√ Which color would you like to use as base color? » Neutral
√ Where is your global CSS file? ... app/globals.css
√ Would you like to use CSS variables for colors? ... yes
√ Where is your tailwind.config.js located? ... tailwind.config.js
√ Configure the import alias for components: ... @/components
√ Configure the import alias for utils: ... @/lib/utils
√ Are you using React Server Components? ... yes
√ Write configuration to components.json. Proceed? ... yes

- npm run dev

npm i @trivago/prettier-plugin-sort-imports

npm run format
