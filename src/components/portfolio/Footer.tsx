'use client'

import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Azhar
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Frontend Developer passionate about creating beautiful, interactive web experiences 
              with modern technologies and smooth animations.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:azhar.dev@example.com"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Let's Connect</h3>
            <div className="space-y-2 text-sm">
              <p className="text-slate-400">
                <strong className="text-slate-300">Email:</strong><br />
                azhar.dev@example.com
              </p>
              <p className="text-slate-400">
                <strong className="text-slate-300">Location:</strong><br />
                New York, NY
              </p>
              <p className="text-slate-400">
                <strong className="text-slate-300">Available for:</strong><br />
                Freelance & Full-time
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center text-sm text-slate-400 mb-4 sm:mb-0">
            <span>© {currentYear} Azhar. Made with</span>
            <Heart className="mx-1 text-red-400" size={16} />
            <span>using Next.js & Tailwind CSS</span>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="border-slate-600 text-slate-300 hover:text-white hover:border-slate-500"
          >
            <ArrowUp size={16} className="mr-1" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  )
}
