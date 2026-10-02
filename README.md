# Riyan Zakaria Zulkarnain — Portfolio

Personal portfolio website of **Riyan Zakaria Zulkarnain**, a Software
Engineering Technology (TRPL) student at Politeknik Negeri Madiun and a
developer building web and mobile products.

## About

An interactive, bilingual (EN/ID) portfolio with a dark/light theme, smooth
scroll animations, a command palette, an experience timeline, and a working
contact form. Built as a single-page experience on Next.js 16 and React 19.

## Features

- Bilingual content (English / Bahasa Indonesia) with a language toggle
- Dark & light themes with an animated theme toggler
- Command palette (keyboard-first navigation)
- Project showcase with bento grid, detail modals, and a social dock
- Experience timeline and tech-stack sections
- Smooth scrolling (Lenis) and physics-based motion throughout (Motion)
- Contact form with server-side validation (Zod) and email delivery (Resend),
  protected by a honeypot anti-spam field

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack), React 19, TypeScript
- **Styling:** Tailwind CSS 4, shadcn/ui, Radix primitives
- **State:** Zustand
- **Forms & validation:** React Hook Form, Zod
- **Email:** Resend (Server Actions)
- **Animation:** Motion, Lenis
- **Deployment:** Vercel

## Projects

| Project | Stack | Links |
| --- | --- | --- |
| Nusantara Jok (Auto-Stitch OS) — business management system with Kanban, smart calculator, and dynamic pricing | Laravel, Blade, Alpine.js, Tailwind | [GitHub](https://github.com/Riyanzakaria/nusantarajok) |
| AmoreSync — modern web application | TypeScript, Next.js, Tailwind | [GitHub](https://github.com/Riyanzakaria/amoresync) · [Live](https://amoresync.vercel.app) |
| Lexilink — real-time Android vocabulary game | Kotlin, Jetpack Compose, Firebase | [GitHub](https://github.com/Riyanzakaria/UTS-Mobile-2) |
| Harmonix — full-stack web application | PHP, MySQL | [GitHub](https://github.com/Riyanzakaria/harmonix) |

## Getting Started

Prerequisites: Node.js 20+ and npm.

```bash
git clone https://github.com/Riyanzakaria/portofolio.git
cd portofolio
npm install
npm run dev
```

Open http://localhost:3000.

### Environment variables

The site runs without any of these, but the contact form only delivers email
when the Resend key is configured:

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | For contact form | Resend API key used by the contact server action |
| `CONTACT_TO_EMAIL` | No | Inbox that receives contact messages (defaults to the owner's Gmail) |
| `RESEND_FROM_EMAIL` | No | Verified sender identity in Resend |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical site URL used for SEO/OpenGraph metadata |

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | TypeScript check (`tsc --noEmit`) |

## Deployment

Deployed on Vercel from the `main` branch. Pushes to `main` are verified by
the CI workflow (lint, typecheck, build) in `.github/workflows/ci.yml`.

## License

MIT — see [LICENSE](LICENSE).

## Contact

- Email: zriyan191@gmail.com
- GitHub: [@Riyanzakaria](https://github.com/Riyanzakaria)
