'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      location: "Remote",
      period: "2022 - Present",
      description: "Led frontend development for multiple client projects, specializing in React and Next.js applications with a focus on performance optimization and user experience.",
      achievements: [
        "Improved application performance by 40% through code splitting and lazy loading",
        "Mentored 3 junior developers and established coding best practices",
        "Built responsive web applications serving 100k+ users",
        "Implemented modern CI/CD pipelines with automated testing"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "New York, NY",
      period: "2021 - 2022",
      description: "Developed user-facing features for a fast-growing SaaS platform, working closely with designers and backend engineers to deliver exceptional user experiences.",
      achievements: [
        "Built the company's design system from scratch using Storybook",
        "Reduced bug reports by 60% through comprehensive testing implementation",
        "Collaborated with UX team to increase user engagement by 35%",
        "Optimized bundle size resulting in 25% faster load times"
      ],
      technologies: ["React", "Redux", "SASS", "Jest", "Cypress"]
    },
    {
      title: "Junior Frontend Developer",
      company: "Digital Agency Pro",
      location: "San Francisco, CA",
      period: "2020 - 2021",
      description: "Started my professional journey building websites and web applications for various clients, gaining experience in different technologies and project types.",
      achievements: [
        "Successfully delivered 15+ client projects on time and within budget",
        "Learned modern frontend development practices and tools",
        "Contributed to open-source projects and internal tooling",
        "Received 'Rising Star' award for exceptional learning and growth"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Vue.js", "WordPress"]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            My Professional Journey in Frontend Development
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                            {exp.title}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        
                        <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 p-6">
                      <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3 uppercase tracking-wide">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
              Ready for New Opportunities
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on challenging projects and collaborate with amazing teams. 
              Let's build something great together!
            </p>
            <div className="flex items-center justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2">
                <ExternalLink size={16} className="mr-2" />
                Available for Freelance
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <ExternalLink size={16} className="mr-2" />
                Open to Full-time
              </Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
