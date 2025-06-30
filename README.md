# 📱 Wafy

<div align="center">
  <img src="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Wafy Banner" width="100%" height="300" style="object-fit: cover; border-radius: 10px;">
  
  **Generate WhatsApp links instantly with any phone number**
  
  [![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=netlify)](https://wafy.netlify.app)
  [![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
</div>

## ✨ Features

🌍 **Global Support** - Supports all international phone number formats and country codes  
📱 **Smart Validation** - Automatically validates and formats phone numbers using `libphonenumber-js`  
🔗 **Instant Links** - Generate WhatsApp chat links with a single click  
⚙️ **Customizable** - Set your default country code and save preferences  
🌙 **Dark Mode** - Beautiful light and dark themes with smooth transitions  
📱 **Responsive** - Fully responsive design that works on all devices  
💾 **Persistent Settings** - Your preferences are saved locally and restored on every visit  

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/wafy.git
   cd wafy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🛠️ Built With

- **[React 18](https://reactjs.org/)** - Modern React with hooks and functional components
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript for better development experience
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development
- **[Vite](https://vitejs.dev/)** - Lightning-fast build tool and dev server
- **[libphonenumber-js](https://github.com/catamphetamine/libphonenumber-js)** - Phone number parsing and validation
- **[country-telephone-data](https://github.com/madebybowtie/country-telephone-data)** - Country codes and telephone data
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon toolkit

## 📖 How to Use

1. **Enter a phone number** in any format:
   - `+91 9876543210`
   - `(555) 123-4567`
   - `9876543210` (uses default country code)

2. **Click "Start"** to generate the WhatsApp link

3. **Click "Go"** to open WhatsApp directly in a new tab

4. **Customize settings** by clicking the gear icon:
   - Set your default country code
   - Choose from 200+ countries

5. **Toggle theme** using the sun/moon icon for light/dark mode

## 🎨 Screenshots

<div align="center">
  <img src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Light Mode" width="45%" style="border-radius: 8px; margin: 10px;">
  <img src="https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Dark Mode" width="45%" style="border-radius: 8px; margin: 10px;">
</div>

## 🏗️ Project Structure

```
wafy/
├── src/
│   ├── components/          # React components
│   │   ├── PhoneInput.tsx   # Main phone input component
│   │   ├── Settings.tsx     # Settings modal
│   │   └── ThemeToggle.tsx  # Theme switcher
│   ├── hooks/               # Custom React hooks
│   │   ├── useLocalStorage.ts
│   │   └── useTheme.ts
│   ├── utils/               # Utility functions
│   │   └── phoneValidation.ts
│   ├── data/                # Static data
│   │   └── countries.ts
│   └── App.tsx              # Main app component
├── public/                  # Static assets
└── dist/                    # Production build
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🌟 Key Features Explained

### Phone Number Validation
- Uses Google's `libphonenumber-js` for accurate validation
- Supports international formats and country-specific rules
- Automatically formats numbers for better readability

### Smart Country Detection
- 200+ countries supported with accurate dial codes
- Intelligent default country selection
- Search functionality for quick country selection

### Theme System
- Smooth transitions between light and dark modes
- System preference detection
- Persistent theme selection across sessions

### Local Storage Integration
- Settings automatically saved and restored
- No server required - everything works offline
- Privacy-focused - no data leaves your browser

## 🚀 Deployment

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
   - Or connect your GitHub repository for automatic deployments

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

### Deploy to GitHub Pages

```bash
npm run build
# Push the dist folder to gh-pages branch
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use functional components with hooks
- Maintain responsive design principles
- Add proper error handling
- Write meaningful commit messages

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **WhatsApp** for providing the `wa.me` URL scheme
- **Google** for the libphonenumber library
- **Tailwind CSS** team for the amazing utility framework
- **React** team for the incredible framework
- **Lucide** for the beautiful icons

## 📞 Support

If you have any questions or need help:

- 🐛 **Bug Reports**: [Open an issue](https://github.com/yourusername/wafy/issues)
- 💡 **Feature Requests**: [Start a discussion](https://github.com/yourusername/wafy/discussions)
- 📧 **Email**: your.email@example.com

---

<div align="center">
  <p>Made with ❤️ for the WhatsApp community</p>
  <p>
    <a href="#top">⬆️ Back to Top</a>
  </p>
</div>