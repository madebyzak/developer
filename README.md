# Zak Faithfull — Personal Site

A fast, accessible one-page CV / portfolio site for Zak Faithfull, Senior Full
Stack Engineer. Minimal black-and-white design, a modern serif, and an
animated tech-stack marquee.

🔗 **Live:** https://zakfaithfull.vercel.app

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- [react-icons](https://react-icons.github.io/react-icons/) for brand marks
- Deployed on [Vercel](https://vercel.com)

The page is statically prerendered, so it loads quickly and scores well on
Core Web Vitals.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the local dev server       |
| `npm run build` | Create a production build        |
| `npm run start` | Serve the production build       |
| `npm run lint`  | Run ESLint                       |

## Project structure

```
src/
├── app/            # Layout, page, global styles, metadata
├── components/     # Profile header, experience, tech stack, reference, footer
└── lib/site.ts     # Name, role, contact details and social links
```

Content (roles, skills, contact details) is edited in `src/lib/site.ts` and the
individual components under `src/components/`.

