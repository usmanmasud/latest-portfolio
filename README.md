# usmanmasud.vercel.app

Personal site of Usman Masud Aliyu — Software Engineer, Cloud & DevOps.

Built with Next.js 15 (App Router), React 19, TypeScript and Tailwind CSS v4. Every page is statically generated.

## Editing content

All content lives in `content/`. Pages and components read from these files, so updating the site never means touching layout code.

| File | What it controls |
| --- | --- |
| `content/site.ts` | Name, role, headline, email, location/timezone, availability, social links, résumé PDF link, navigation |
| `content/projects.ts` | Projects, case studies (`/work/[slug]`), featured work on the home page. Contains a commented template for cloud/DevOps case studies |
| `content/experience.ts` | Work experience and leadership roles (`kind: "work" \| "leadership"`) |
| `content/profile.ts` | Capabilities/skills, principles, about text, education, certifications |

Optional fields and empty lists are hidden automatically. Education and Certifications, for example, appear once you add an entry.

Project images go in `public/` (or `public/projects/`). Pass their pixel `width` and `height` so Next.js can reserve space and avoid layout shift.

## Pages

- `/` — hero, selected work, capabilities, experience
- `/work` — project index with category filters
- `/work/[slug]` — case study: overview, problem, approach, architecture, outcomes, metrics, stack
- `/about` — bio, principles, capabilities, experience, leadership, education & credentials
- `/resume` — printable résumé generated from the same content (Save as PDF produces an A4 document)
- `/contact` — email, socials, availability

Also generated: `sitemap.xml`, `robots.txt`, an Open Graph image, and Person JSON-LD.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # type-checks and lints as part of the build
```
