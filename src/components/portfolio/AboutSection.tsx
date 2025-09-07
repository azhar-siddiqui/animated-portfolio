'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code2, Palette, Zap, Users } from 'lucide-react'

export default function AboutSection() {
  const skills = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Expert in React, Next.js, TypeScript, and modern JavaScript frameworks",
      technologies: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces with modern design principles",
      technologies: ["Figma", "Adobe XD", "Tailwind CSS", "Styled Components", "SASS"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance & Animation",
      description: "Building fast, smooth, and engaging user experiences",
      technologies: ["Framer Motion", "GSAP", "Web Vitals", "Optimization", "PWA"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration & Tools",
      description: "Working effectively with teams using modern development workflows",
      technologies: ["Git", "GitHub", "Vercel", "Docker", "Agile", "Scrum"]
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            My Frontend Development Journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-200">
              Passionate About Creating Digital Experiences
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <p>
                I started my frontend development journey with a curiosity about how websites work. 
                What began as simple HTML and CSS experiments quickly evolved into a passion for 
                creating beautiful, functional web applications.
              </p>
              <p>
                Over the years, I've mastered modern frameworks like React and Next.js, and I love 
                staying up-to-date with the latest technologies and best practices. I believe that 
                great frontend development is where technical skill meets creative design.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, contributing to 
                open-source projects, or learning about emerging web technologies. I'm always 
                excited to take on new challenges and push the boundaries of what's possible on the web.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Available Support</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-blue-600 mb-4">{skill.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {skill.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
