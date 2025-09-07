'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Eye } from 'lucide-react'
import Image from 'next/image'

export default function ProjectsSection() {
  // Mock projects data - this will be replaced with database data later
  const projects = [
    {
      id: '1',
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for managing online stores with real-time analytics and inventory management.',
      longDescription: 'Built with Next.js, TypeScript, and Prisma. Features include real-time sales tracking, inventory management, customer analytics, and automated reporting. Includes responsive design and dark mode support.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS', 'Chart.js'],
      imageUrl: '/api/placeholder/600/400',
      projectUrl: 'https://ecommerce-dashboard.example.com',
      githubUrl: 'https://github.com/yourusername/ecommerce-dashboard',
      featured: true
    },
    {
      id: '2',
      title: 'Social Media App',
      description: 'Modern social media platform with real-time messaging, post sharing, and interactive features.',
      longDescription: 'Full-stack social media application with user authentication, real-time chat, image uploads, and social interactions. Built with modern React patterns and optimized for performance.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'AWS S3'],
      imageUrl: '/api/placeholder/600/400',
      projectUrl: 'https://social-app.example.com',
      githubUrl: 'https://github.com/yourusername/social-media-app',
      featured: true
    },
    {
      id: '3',
      title: 'Task Management Tool',
      description: 'Collaborative project management tool with kanban boards, team collaboration, and deadline tracking.',
      longDescription: 'Professional task management application featuring drag-and-drop kanban boards, team collaboration tools, deadline tracking, and productivity analytics.',
      technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Docker'],
      imageUrl: '/api/placeholder/600/400',
      projectUrl: 'https://taskmanager.example.com',
      githubUrl: 'https://github.com/yourusername/task-manager',
      featured: false
    },
    {
      id: '4',
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with forecasts, maps, and personalized weather alerts.',
      longDescription: 'Elegant weather dashboard with detailed forecasts, interactive weather maps, location-based alerts, and beautiful animations. Features responsive design and offline capability.',
      technologies: ['React', 'Weather API', 'Leaflet', 'PWA'],
      imageUrl: '/api/placeholder/600/400',
      projectUrl: 'https://weather-dashboard.example.com',
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      featured: false
    }
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            A showcase of my best work and creative solutions
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className={`lg:flex ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="lg:w-1/2 relative h-64 lg:h-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10" />
                      <div className="w-full h-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                        <div className="text-slate-400 text-center">
                          <Eye size={48} />
                          <p className="mt-2 text-sm">Project Screenshot</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:w-1/2 p-8">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">Featured</Badge>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                          {project.title}
                        </h3>
                        
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          {project.longDescription}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex gap-4 pt-4">
                          {project.projectUrl && (
                            <Button asChild>
                              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink size={16} className="mr-2" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button variant="outline" asChild>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github size={16} className="mr-2" />
                                Code
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-center text-slate-800 dark:text-slate-200"
          >
            Other Projects
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="h-48 bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                      <div className="text-slate-400 text-center">
                        <Eye size={32} />
                        <p className="mt-2 text-sm">Project Screenshot</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        {project.projectUrl && (
                          <Button size="sm" asChild>
                            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={14} className="mr-1" />
                              Demo
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github size={14} className="mr-1" />
                              Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
