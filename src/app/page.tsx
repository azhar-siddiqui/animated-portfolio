import HeroSection from '@/components/portfolio/HeroSection'
import AboutSection from '@/components/portfolio/AboutSection'
import ExperienceSection from '@/components/portfolio/ExperienceSection'
import ProjectsSection from '@/components/portfolio/ProjectsSection'
import ContactSection from '@/components/portfolio/ContactSection'
import Navbar from '@/components/portfolio/Navbar'
import Footer from '@/components/portfolio/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
