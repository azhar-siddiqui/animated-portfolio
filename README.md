# 🚀 Animated Portfolio - Modern Frontend Developer Showcase

A beautiful, animated portfolio website built with Next.js, showcasing frontend development skills with smooth animations and modern design.

![Portfolio Preview](https://via.placeholder.com/800x400/2563eb/ffffff?text=Animated+Portfolio+Preview)

## ✨ Features

### 🎨 **Beautiful Design**
- Modern gradient designs with professional aesthetics
- Smooth animations using Framer Motion
- Responsive design that works on all devices
- Dark mode support with elegant transitions

### 🧩 **Portfolio Sections**
- **Hero Section**: Animated introduction with gradient text and call-to-action
- **About**: Developer journey, skills showcase, and professional stats
- **Experience**: Timeline of professional work history with achievements
- **Projects**: Showcase of completed work (admin-manageable)
- **Contact**: Professional contact form with elegant design

### 🛠 **Admin Features** (Coming Soon)
- Secure admin authentication (admin-only access)
- Project management dashboard
- CRUD operations for portfolio projects
- Real-time content updates

## 🚀 Tech Stack

### **Frontend**
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icons

### **Backend & Database**
- **Prisma** - Next-generation ORM
- **SQLite** - Lightweight database (easily switchable to PostgreSQL)
- **NextAuth.js** - Authentication for admin features
- **bcryptjs** - Password hashing
- **JWT** - Secure token management

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/animated-portfolio.git
   cd animated-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"
   ADMIN_EMAIL="admin@portfolio.com"
   ADMIN_PASSWORD="admin123"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Seed the admin user**
   ```bash
   curl -X GET http://localhost:3000/api/seed
   ```

6. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

7. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 📁 Project Structure

```
animated-portfolio/
├── src/
│   ├── app/
│   │   ├── admin/           # Admin dashboard pages
│   │   ├── api/             # API routes
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/
│   │   ├── portfolio/       # Portfolio page components
│   │   ├── providers/       # Context providers
│   │   └── ui/              # Reusable UI components
│   ├── lib/
│   │   ├── auth.ts         # Authentication utilities
│   │   ├── db.ts           # Database connection
│   │   └── utils.ts        # Utility functions
│   └── types/              # TypeScript type definitions
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── dev.db             # SQLite database
├── public/                 # Static assets
└── package.json
```

## 🎯 Usage

### **Customizing Your Portfolio**

1. **Update Personal Information**
   - Edit `src/components/portfolio/HeroSection.tsx` for your introduction
   - Modify `src/components/portfolio/AboutSection.tsx` for your story
   - Update `src/components/portfolio/ExperienceSection.tsx` with your work history

2. **Add Your Projects**
   - Use the admin dashboard at `/admin/login`
   - Or directly edit `src/components/portfolio/ProjectsSection.tsx`

3. **Contact Information**
   - Update `src/components/portfolio/ContactSection.tsx`
   - Modify `src/components/portfolio/Footer.tsx`

### **Admin Dashboard**

Access the admin dashboard at `/admin/login` using:
- **Email**: admin@portfolio.com (or your configured email)
- **Password**: admin123 (or your configured password)

## 🚀 Deployment

### **Deploy to Vercel (Recommended)**

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push!

### **Deploy to Netlify**

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Configure environment variables

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Prisma](https://prisma.io/) - Next-generation ORM

---

<div align="center">
  <p>Made with ❤️ by <strong>Azhar</strong></p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
