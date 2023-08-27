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

# Folder Setup

...

# Clerk Authentication

www.clerk.com
Sign in for free account
Dashboard - Add application
Application name: ai-companion

- Provider: Google, Email
- Create application
- copy environment variables
- add to .env
- Continue in docs

npm install @clerk/nextjs

add to .env
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Navbar

npx shadcn-ui@latest add button
npm i next-themes@latest
npx shadcn-ui@latest add dropdown-menu

# Sidebar

npx shadcn-ui@latest add sheet

# Search Filter

npx shadcn-ui@latest add input
npm i query-string

# Category Filter (Prisma, PlanetScale)

npm i -D prisma
npx prisma init

\*Planetscale Config + add Category model

npx prisma generate
npx prisma db push
npm i @prisma/client

npx prisma studio
node scripts/seed.ts

# Companion Creation Form (Cloudinary)

<Companion model>
npx prisma generate
npx prisma db push

npx shadcn-ui@latest add -y form
npx shadcn-ui@latest add -y textarea
npx shadcn-ui@latest add -y separator
npx shadcn-ui@latest add -y select

add NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME to .env
Cloudinary - Settings - Upload - "Add Upload Preset - "Signing Mode - Unsigned" - "Save"

- Copy add to NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET then components/image-upload.tsx

# Companion Creation API

npx shadcn-ui@latest add -y toast

# Companion List

<Message model>
npx prisma generate
npx prisma db push

npx shadcn-ui@latest add -y card

# Chat Header

npx shadcn-ui@latest add -y avatar

# Chat UI 

npm i ai
npm i react-spinners

# Memory Service

npm i @pinecone-database/pinecone
npm i @upstash/redis
npm i @upstash/ratelimit
npm i langchain

* Pinecone setup:
https://www.pinecone.io/ - create account - create index 
name: companion - dim: 1536 - starter - create index
- click connect - lang: node - unhidden - copy api_key & env to .env

.env
PINECONE_INDEX="companion"
PINECONE_ENVIRONMENT=
PINECONE_API_KEY=

* Upstash setup:
https://www.upstash.com/ - login - create database - 
- name: ai-companion - global - region(prim/read): us-east-1 / us-west-1 - enable tls & eviction - create
- scroll to rest api - select: .env (show) - copy to .env

.env
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

* OpenAI setup:
https://platform.openai.com - login - "personal - view api keys" - create key: ai-companion-tutorial
- copy secret_key to .env

.env
OPENAI_API_KEY=

# Chat API

npm i dotenv
npm i replicate
npm i openai
npm i openai-edge

Replicate setup:
https://replicate.com/ - login - profile - api tokens - create token: companion-tutorial - copy to .env

.env
REPLICATE_API_TOKEN=r8_3bo4eFLLlnosHzMd5eJqdaodnQomSoZ4cQvjq

