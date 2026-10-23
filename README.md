# Mars365 AI

A static, responsive AI solutions company website built with React, TypeScript, Vite, and Tailwind CSS. It includes service, solution, industry, company, insight, contact, and privacy pages, with content stored locally in the application.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Local Development

```sh
npm install
npm run dev
```

Vite prints the local development URL when the server starts.

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Type-check the app and create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. Run `npm run build` first. |

## Site Content and Configuration

Edit `src/data.ts` to update the company configuration and the structured content for services, illustrative solutions, industries, articles, and navigation. Company fields include:

- `name` and `tagline`
- `email`, `linkedin`, and `office`
- `confirmedTechnologies`

Contact details and technology claims are empty by default. Add only confirmed information. The site does not submit contact forms; a configured business email enables `mailto:` and copy-email actions.

The solution examples describe possible approaches, not shipped products, customer deployments, or guaranteed outcomes. Update the visual system in `src/styles.css` and replace the supporting image at `public/images/teams-at-work.jpg` as needed.

## Pages and Features

- Home: `/`
- Services and service details: `/services` and `/services/:slug`
- Robotics training for young people: `/services/robotics-training`
- Solutions and solution details: `/solutions` and `/solutions/:slug`
- Industries and industry details: `/industries` and `/industries/:slug`
- About: `/about`
- Insights and articles: `/insights` and `/insights/:slug`
- Contact: `/contact`
- Privacy: `/privacy`

The site includes client-side search, solution and article filters, responsive navigation, a light/dark theme toggle, and a custom not-found page. Theme preference is stored in browser local storage. The app is static and does not use a backend, database, analytics, or form submission.

## Production Build

```sh
npm run build
npm run preview
```

The production files are written to `dist/`.

## GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds and deploys the site to GitHub Pages when changes are pushed to `main`. It can also be started manually from the repository's Actions tab. In repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

The workflow defaults `VITE_BASE_PATH` to the repository path, such as `/mars365ai/` for `https://<owner>.github.io/mars365ai/`. To deploy at the root of a custom domain or a GitHub Pages user site, add a repository Actions variable named `VITE_BASE_PATH` with the value `/`. The workflow copies the built entry page to `dist/404.html` so browser-based routes can load on direct visits and refreshes.

To build locally for the project-site path:

```sh
VITE_BASE_PATH=/mars365ai/ npm run build
```

For a root domain, build with `VITE_BASE_PATH=/`. Configure the custom domain and DNS in the repository's Pages settings. The built static files are published from `dist/` by the workflow.

## Project Structure

```text
public/
	images/
src/
	App.tsx         Routes and page titles
	components.tsx  Shared navigation, cards, footer, and UI
	data.ts         Company settings and local content
	main.tsx        React application entry point
	pages.tsx       Page content and route views
	styles.css      Design tokens, component styles, and responsive rules
```
