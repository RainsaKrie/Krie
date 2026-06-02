# Krie Personal Website

This repository contains the current baseline version of the `Krie` personal website.

It is a React + Vite + TailwindCSS project built around a white brutalist spec-sheet visual language:

- white background
- black structural lines
- red and blue auxiliary offsets
- zero radius
- zero shadow
- engineering-drawing style annotations

## Current Site Status

The homepage is currently structured as a `30 / 70` split layout.

### Left Rail

The left rail acts as a personal control panel and contains:

1. `Krie` main title
2. `profile / personal intro`
3. `ARCHITECT_X` identity panel
4. `TECHNICAL_SPECIFICATION`
5. `CONTACT_PORTAL`

### Right Rail

The right rail is the main project area and contains:

1. `PORTFOLIO / selected works`
2. a two-column project matrix
3. equal-height project cards

## Current Tech Stack

- React 19
- Vite 8
- TailwindCSS 3
- PostCSS

## Important Files

### App Structure

- `src/pages/home/HomePage.jsx`
  - current homepage composition
  - split layout
  - footer structure
  - hero placement

### Content Data

- `src/data/portfolio.js`
  - main editable content source
  - hero title and subtitle
  - profile data
  - skills data
  - contact data
  - project list
  - footer text

If you want to update public content, this is the first file to edit.

### Left Rail Sections

- `src/features/intro/Profile.jsx`
- `src/features/intro/TechSpec.jsx`

### Right Rail Sections

- `src/features/portfolio/MatrixList.jsx`
- `src/features/portfolio/ProjectCard.jsx`

### Visual Infrastructure

- `src/components/BlueprintLines.jsx`
- `src/components/CropMarks.jsx`
- `src/components/ActiveStatus.jsx`
- `src/components/GlitchTitle.jsx`

## What Is Data-Driven

These parts are already data-driven through `src/data/portfolio.js`:

- main title
- hero subtitle
- profile title
- bio
- status text
- skill groups
- contact info
- project cards
- footer label

## What Is Still Decorative

These parts are still hard-coded as visual decoration:

- blueprint lines
- crop marks
- engineering note labels
- background drafting details

## Current Visual Rules

- English titles use controlled red/blue offset styling
- Chinese subtitles stay restrained and non-glitch
- cards use hard edges and no rounded corners
- hierarchy comes from line structure instead of shadow
- the page is intended to feel like a printed technical layout

## Local Development

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Deployment

Recommended deployment path:

`GitHub -> Vercel`

Suggested Vercel settings:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

## Project Name

The public-facing site name is now:

`Krie`

This has already been aligned in:

- browser title
- Open Graph title
- Twitter title
- footer label
- package name

## Recommended Next Steps

1. Replace placeholder content in `src/data/portfolio.js`
2. Refine the left rail copy and personal introduction
3. Expand the site into multiple pages
4. Add real project details and public contact info
5. Finalize SEO metadata and domain settings

## One-Line Summary

This is not yet a fully populated final portfolio site; it is a structured, deployable baseline with the visual system, content model, layout skeleton, and deployment path already in place.
