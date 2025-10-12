## Sumit Kumar — AI Engineer Portfolio

A personal portfolio showcasing my work in AI engineering, including multi‑agent systems, RAG, and memory‑augmented architectures. Designed and developed by me with a modern, performant frontend stack.

### Features
- Responsive, accessible UI with a clean, next‑gen look
- Sections: Hero, Experience, Projects, Skills, Education, Contact
- Smooth scrolling and subtle intersection‑based animations
- Single‑color branding with adjustable theme tokens

### Tech Stack
- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components
- React Router

### Getting Started
Requirements: Node.js 18+ and npm.

```sh
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Theming / Customization
All theme tokens are defined in `src/index.css` under the `:root` CSS variables. To adjust the brand color, edit the following variables:
- `--primary`
- `--secondary`
- `--accent`
- `--ring`

Animations and glows automatically use these tokens.

### Project Structure (high level)
- `src/pages` — route entries (home and 404)
- `src/components` — sections and UI components
- `src/components/ui` — shadcn/ui primitives
- `src/index.css` — Tailwind and design tokens

### Deployment
The app builds to static assets in `dist`. You can deploy to any static host (Vercel, Netlify, GitHub Pages, etc.).

### Contact
- Email: sklegacy789@gmail.com
- LinkedIn: linkedin.com/in/sumitkumar22
- GitHub: github.com/Sumit22012004
