## Sumit Kumar — AI Engineer Portfolio

A modern, interactive portfolio showcasing my expertise in AI engineering, specializing in multi-agent systems, RAG (Retrieval-Augmented Generation), and memory-augmented architectures. Built with cutting-edge web technologies and featuring elegant 3D transitions for an immersive user experience.

🌐 **Live Site:** [https://sumit22012004.github.io/Portfolio/](https://sumit22012004.github.io/Portfolio/)

### ✨ Features
- **Interactive 3D Transitions**: Smooth perspective transforms and tilt effects on hover
- **Mouse-Tracking Cards**: Cards that respond to cursor movement with realistic 3D depth
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional interface with subtle animations and glows
- **Performance Optimized**: GPU-accelerated CSS transforms for smooth 60fps animations
- **Comprehensive Sections**: Hero, Experience, Projects, Skills, Education, and Contact
- **Accessible**: Built with semantic HTML and ARIA labels for screen reader support

### 🛠️ Tech Stack
- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS + Custom CSS Animations
- **UI Components**: shadcn/ui
- **Routing**: React Router (Hash-based for GitHub Pages compatibility)
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

### 🚀 Getting Started

**Requirements**: Node.js 18+ and npm

```sh
# Clone the repository
git clone https://github.com/Sumit22012004/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

### 🎨 Theming / Customization

All theme tokens are defined in `src/index.css` under the `:root` CSS variables. The portfolio uses a professional blue color scheme that can be easily customized:

**Primary Color Variables:**
- `--primary` — Main accent color (default: blue)
- `--secondary` — Secondary accent color
- `--accent` — Additional accent color
- `--ring` — Focus ring color

**3D Animation Variables:**
- `--transition-smooth` — Smooth easing transitions
- `--transition-spring` — Spring-like bounce effects
- `--glow-primary` — Primary glow effects
- `--glow-secondary` — Secondary glow effects

All animations and 3D effects automatically adapt to these color tokens.

### 📁 Project Structure

```
Portfolio/
├── src/
│   ├── pages/          # Route components (Index, NotFound)
│   ├── components/     # Main section components
│   │   ├── ui/        # Reusable UI components (shadcn/ui)
│   │   ├── Hero.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   ├── Navbar.tsx
│   │   └── Tilt.tsx   # 3D tilt effect component
│   ├── index.css      # Global styles & 3D animations
│   └── App.tsx        # Main app component
├── public/            # Static assets
└── dist/             # Production build output
```

### 🎭 3D Features

The portfolio includes several advanced 3D animation features:

1. **Tilt Component**: Interactive mouse-tracking 3D tilt effect
2. **Perspective Transforms**: Depth-aware card animations on scroll
3. **Hover Effects**: Cards lift and tilt in 3D space on hover
4. **Floating Elements**: Gentle 3D floating animations for background elements
5. **Smooth Transitions**: Custom cubic-bezier easing for natural motion

All 3D effects are GPU-accelerated for optimal performance across devices.

### 🌐 Deployment

The portfolio is deployed on **GitHub Pages** and automatically rebuilds on push to the `main` branch.

**To deploy your own version:**
1. Fork this repository
2. Update `package.json` homepage: `"homepage": "https://yourusername.github.io/Portfolio/"`
3. Run `npm run deploy`
4. Enable GitHub Pages in repository settings (Source: `gh-pages` branch)

### 📧 Contact

- **Email**: [sklegacy789@gmail.com](mailto:sklegacy789@gmail.com)
- **LinkedIn**: [linkedin.com/in/sumitkumar22](https://linkedin.com/in/sumitkumar22)
- **GitHub**: [github.com/Sumit22012004](https://github.com/Sumit22012004)

---

⭐ **If you find this portfolio inspiring, please consider giving it a star!**

Built with ❤️ by Sumit Kumar
