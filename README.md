# 🌟 Olivia Holmes - Personal Portfolio Website

A modern, interactive portfolio website built with Next.js and TypeScript. Features a beautiful blue/purple design theme with complete light/dark mode support.

## 🚀 Live Demo

Visit the live site: [oliviaholmes.github.io](https://oliviaholmes.github.io)

## ✨ Features

### 🎨 **Modern Design**
- Beautiful blue/purple gradient color scheme
- Glassmorphism design with backdrop blur effects
- Smooth animations and hover interactions
- Responsive design for all devices

### 🌓 **Theme System**
- Complete light/dark mode support
- Theme toggle button in navigation
- Persistent theme preference storage
- Automatic system theme detection

### 📱 **Sections**
- **Hero Section**: Animated introduction with typing effect
- **About Me**: Personal information and skills showcase
- **Experience**: Timeline-based work history
- **Projects**: Interactive project cards with hover effects
- **Contact**: Working contact form with social links
- **Stats**: Quick performance metrics

### ⚡ **Performance**
- Server-side rendering with Next.js
- Optimized images and fonts
- Fast page loads and smooth transitions
- SEO-friendly structure

## 🛠️ Built With

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: CSS transitions and keyframes
- **Icons**: Emoji-based design
- **Deployment**: GitHub Pages

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/oliviamallon/oliviamallon.github.io.git
   cd oliviamallon.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

### `npm run dev`
Starts the development server with hot-reload enabled.

### `npm run build`
Creates an optimized production build with static export.

### `npm run start`
Starts the production server (after build).

### `npm run lint`
Runs ESLint to check code quality.

## 🗂️ Project Structure

```
├── app/                    # Next.js App Router
│   ├── components/         # Reusable React components
│   │   ├── ThemeProvider.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   ├── globals.css         # Global styles and Tailwind
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Homepage
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Customization

### **Changing Colors**
Edit the gradient classes in components to customize the color scheme:
```typescript
// Example: Change from blue/purple to green/blue
className="bg-gradient-to-r from-green-500 to-blue-600"
```

### **Adding Sections**
1. Create a new component in `app/components/`
2. Import and add it to `app/page.tsx`
3. Add navigation link if needed

### **Updating Content**
- **Personal Info**: Edit the hero section in `app/page.tsx`
- **Experience**: Update the `experiences` array in `ExperienceSection.tsx`
- **Projects**: Modify the `projects` array in `ProjectsSection.tsx`
- **Skills**: Change the skills array in the About section

## 🌐 Deployment

The site is configured for GitHub Pages deployment with static export:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   - Push to the `main` branch
   - GitHub Actions will automatically deploy

## 🎯 Features to Add

- [ ] Blog section with MDX support
- [ ] Project filtering and search
- [ ] Enhanced animations with Framer Motion
- [ ] Contact form backend integration
- [ ] Analytics integration
- [ ] PDF resume download

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

**Olivia Mallon**
- Portfolio: [oliviamallon.github.io](https://oliviamallon.github.io)
- LinkedIn: [linkedin.com/in/oliviamallon](https://linkedin.com/in/oliviamallon)
- GitHub: [@oliviamallon](https://github.com/oliviamallon)
- Email: olivia@example.com

---

⭐ **Star this repo if you found it helpful!**
