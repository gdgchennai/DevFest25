# DevFest Chennai 2025 🚀

A modern, responsive website for **GDG Chennai's DevFest Chennai 2025** - the premier developer conference in Chennai, Tamil Nadu. Built with SvelteKit 5, TypeScript, and Tailwind CSS for optimal performance and user experience.

![DevFest Chennai 2025](https://img.shields.io/badge/DevFest-Chennai%202025-blue?style=for-the-badge&logo=google)
![SvelteKit](https://img.shields.io/badge/SvelteKit-5.0-ff3e00?style=for-the-badge&logo=svelte)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38bdf8?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

### 📱 **Responsive Design**

- Mobile-first approach with Tailwind CSS
- Optimized for all devices (mobile, tablet, desktop)
- Modern, clean UI with smooth animations

### 🎯 **Event Information**

- **Hero Section**: Compelling event introduction with call-to-action buttons
- **Event Highlights**: Key features and benefits of attending
- **Why Join**: Convincing reasons to attend DevFest Chennai
- **Experience Section**: What attendees can expect

### 👥 **Speakers & Tracks**

- **Speakers Section**: Featured speakers with profiles and expertise
- **Tracks Section**: Different technology tracks and sessions
- **Agenda Section**: Detailed event schedule and timeline

### 📍 **Venue & Logistics**

- **Venue Section**: Conference location and facilities
- **Transportation**: Cab booking options (Ola, Uber, Rapido)
- **Insider Tips**: Local recommendations and event tips

### 💼 **Sponsors & Support**

- **Sponsors Section**: Showcase of event sponsors
- **Community Partners**: GDG Chennai and community sponsors
- **Become a Sponsor**: Call-to-action for potential sponsors

### ❓ **Support & Information**

- **FAQ Section**: Common questions and answers
- **Final CTA**: Registration and engagement prompts

### 🔍 **SEO Optimized**

- Comprehensive meta tags for search engines
- Open Graph and Twitter Card support
- Structured data (JSON-LD) for rich snippets
- Sitemap and robots.txt for better indexing
- Location-specific SEO for Chennai, Tamil Nadu

## 🛠️ Tech Stack

- **Framework**: [SvelteKit 5](https://kit.svelte.dev/) - Full-stack web framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Package Manager**: [Bun](https://bun.sh/) - Fast JavaScript runtime & package manager
- **Testing**: [Playwright](https://playwright.dev/) - End-to-end testing
- **Linting**: [ESLint](https://eslint.org/) - Code quality and consistency
- **Icons**: Custom SVG icons and shapes

## 📁 Project Structure

```
devfest25/
├── src/
│   ├── app.css                 # Global styles
│   ├── app.d.ts               # TypeScript declarations
│   ├── app.html               # HTML template
│   ├── lib/
│   │   ├── components/        # Reusable Svelte components
│   │   │   ├── ui/           # UI components (buttons, etc.)
│   │   │   ├── misc/         # Miscellaneous components
│   │   │   └── *.svelte      # Main page sections
│   │   ├── utils/
│   │   │   ├── cn.ts         # Class name utility
│   │   │   └── seo.ts        # SEO utilities
│   │   └── assets/           # Static assets
│   └── routes/               # SvelteKit routes
├── static/                   # Static files
│   ├── cabs/                # Transportation logos
│   ├── sponsors/            # Sponsor logos
│   ├── robots.txt           # SEO robots file
│   └── sitemap.xml          # SEO sitemap
├── e2e/                     # End-to-end tests
└── package.json             # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Bun](https://bun.sh/) (recommended) or npm/yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd devfest25
   ```

2. **Install dependencies**

   ```bash
   bun install
   # or
   npm install
   ```

3. **Start development server**

   ```bash
   bun run dev
   # or
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Development Commands

```bash
# Start development server
bun run dev

# Start with auto-open browser
bun run dev -- --open

# Build for production
bun run build

# Preview production build
bun run preview

# Run tests
bun run test

# Run e2e tests
bun run test:e2e

# Lint code
bun run lint

# Type check
bun run check
```

## 🎨 Customization

### Adding New Sections

1. Create a new component in `src/lib/components/`
2. Export it from `src/lib/components/index.ts`
3. Import and use in `src/routes/+page.svelte`

### Updating Content

- **Event Details**: Update content in individual component files
- **SEO**: Modify `src/lib/utils/seo.ts` for SEO changes
- **Styling**: Use Tailwind CSS classes or modify `src/app.css`

### Adding New Pages

1. Create new route files in `src/routes/`
2. Update `static/sitemap.xml` for SEO
3. Add navigation links if needed

## 📱 Responsive Design

The website is built with a mobile-first approach:

- **Mobile**: Single column layout, optimized touch targets
- **Tablet**: Two-column grid layout
- **Desktop**: Three-column grid layout with enhanced spacing

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta tags for search engines
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific sharing
- **Structured Data**: JSON-LD for rich snippets
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Crawling instructions

## 🧪 Testing

### Unit Tests

```bash
bun run test
```

### End-to-End Tests

```bash
bun run test:e2e
```

### Visual Regression Tests

```bash
bun run test:visual
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build the project
bun run build

# Deploy to Netlify
netlify deploy --prod --dir=build
```

### Static Hosting

```bash
# Build for static hosting
bun run build

# The build output will be in the build/ directory
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **GDG Chennai** - For organizing DevFest Chennai 2025
- **SvelteKit Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Google Developer Groups** - For the DevFest initiative

## 📞 Contact

- **Website**: [devfest.gdgchennai.in](https://devfest.gdgchennai.in)
- **GDG Chennai**: [gdgchennai.in](https://gdgchennai.in)
- **Email**: [contact@gdgchennai.in](mailto:contact@gdgchennai.in)

---

**Built with ❤️ by GDG Chennai for the developer community**
