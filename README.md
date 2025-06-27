# 🚀 Devayan Mandal — Developer Portfolio

Welcome to my personal developer portfolio built using **React + Vite**. This portfolio showcases my projects, skills, resume, and contact options with a sleek UI, animations, and mobile-first responsive layout.

---

## 🌟 Features

- ⚛️ Built with **React + Vite** for blazing-fast performance
- 🎨 Responsive & minimal design with **CSS Modules**
- 🧠 **Framer Motion** animations for smooth transitions
- 💼 Categorized **Projects** with hover tilt and live/demo links
- 📊 Circular skill progress bars with icons
- 📎 Resume download and display integration
- 📬 Contact form powered by **EmailJS**
- 🌐 **Progressive Web App (PWA)** support with custom splash screen
- 🔍 SEO Optimized with Open Graph and meta tags
- 🌓 (Optional) Dark mode support (commented out for now)
- 🧭 Sidebar navigation with scroll-based active section highlight
- 📱 Fully mobile-responsive design

---

## 📁 Folder Structure

```

my-portfolio/
├── public/
│   ├── assets/
│   │   ├── img/                  # Favicon and splash icons
│   │   └── projects/            # Project banners (optional if imported via import)
│   ├── manifest.webmanifest     # PWA config
│   └── robots.txt               # SEO crawling rules
├── src/
│   ├── assets/                  # Static assets (images, fallback, etc.)
│   ├── components/              # All portfolio sections as components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   ├── SideNav.jsx
│   │   └── Skills.jsx
│   ├── styles/ (optional)       # If separating global or shared styles
│   ├── App.jsx                  # Main app entry
│   └── main.jsx                 # Root file for ReactDOM render
├── .eslintrc                   # Lint config
├── package.json
├── vite.config.js
└── README.md

```

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite
- **Styling**: CSS Modules, Bootstrap Icons, React Icons
- **Animation**: Framer Motion
- **Contact Form**: EmailJS
- **PWA**: `vite-plugin-pwa`
- **SEO**: `react-helmet-async`

---

## 🧪 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/devayanm/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

> Use `--legacy-peer-deps` if you face any dependency resolution error.

### 3. Run in Dev Mode

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

---

## 📱 PWA Setup

This portfolio supports **PWA** with:

- Offline access
- Add to Home screen
- Custom splash screen and icon set

> Ensure all icons and `manifest.webmanifest` are placed correctly under `/public` and configured via `vite.config.js`.

---

## 🛡️ Meta Tags & SEO

Optimized using `react-helmet-async` with:

- Page title, description, author
- Open Graph for social sharing
- Google site verification
- Robots directives for crawlers

---

## 📬 Contact

The **Contact** form is powered by **EmailJS**. Configure your EmailJS credentials in the component or `.env` for production use.

---

## 📸 Preview

![Preview Screenshot](./public/assets/img/screenshot.png)

---

## 🙏 Acknowledgements

- Icons by [React Icons](https://react-icons.github.io)
- Hosting via [Vercel](https://vercel.com/)
- Animation via [Framer Motion](https://www.framer.com/motion/)
- Email form via [EmailJS](https://www.emailjs.com/)
- Favicons via [Favicon.io](https://favicon.io)

---

## 📄 License

This project is licensed under the **Devayan Attribution-Only License** — free to use with credit.  
© 2025 [Devayan Mandal](https://github.com/devayanm)

---

Made with ❤️ by **Devayan Mandal**

```

```
