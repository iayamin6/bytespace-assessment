# ByteSpace

A responsive implementation of the ByteSpace Figma design for the Doin Tech frontend assessment.

[Live website](https://bytespace-frontend.vercel.app) · [Implementation PR](https://github.com/iayamin6/bytespace-assessment/pull/1)

## Setup

Use Node.js 22.12 or later.

```sh
npm ci
npm run dev
```

## Commands

```sh
npm run build
npm run preview
npm run lint
npm test
```

## Included

- Full landing page with course search, category filters, and course previews.
- Login and signup pages with form validation and password visibility controls.
- Responsive layouts and mobile navigation.

Built with React, TypeScript, Vite, React Router, and plain CSS. Shared components are in `src/components`, pages in `src/pages`, and sample course data in `src/data`.

## Limitations

Authentication, social login, and newsletter delivery are not connected to a backend. Forms validate input but do not store or send it. Course listings use sample data; categories without matching courses display an empty state.

## Design and assets

[Original Figma design](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1)

Images and brand artwork come from the supplied design. Fonts are Poppins and Satoshi, served locally. Interface icons use Lucide.

## Deployment

Hosted on Vercel. The build command is `npm run build`, and the output folder is `dist`. Route rewrites in `vercel.json` support direct links to `/login` and `/signup`.
