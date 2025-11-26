'use client'

import { useState } from 'react'
import { useTheme } from './ThemeProvider'
import { portfolioConfig } from '../config/portfolio'
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation'

interface ProjectProps {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

const ProjectCard = ({ title, description, image, technologies, liveUrl, githubUrl }: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const { theme } = useTheme()

  return (
    <div 
      className={`backdrop-blur-sm rounded-brick overflow-hidden transition-all duration-500 transform hover-lift hover-gold group animate-snap-together border-3 ${
        theme === 'dark' 
          ? 'bg-neutral-charcoal/80 border-blue-primary/30 hover:border-blue-primary' 
          : 'bg-white/90 border-gray-200 hover:border-blue-primary'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative h-48 flex items-center justify-center overflow-hidden ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-blue-dark via-blue-primary to-blue-light'
          : 'bg-gradient-to-br from-blue-primary via-blue-light to-blue-primary'
      }`}>
        <div className={`text-6xl font-bold transition-all duration-500 text-white ${
          isHovered ? 'scale-110' : ''
        }`}>
          {title.charAt(0)}
        </div>
        <div className={`absolute inset-0 bg-neutral-dark/60 flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-4 animate-bounce-gentle">
            {liveUrl && (
              <button className="px-4 py-2 rounded-brick font-bold transition-all duration-300 transform hover:scale-105 border-2 bg-white text-blue-primary border-white hover:bg-blue-50">
                ✨ Live Demo
              </button>
            )}
            {githubUrl && (
              <button className="px-4 py-2 rounded-brick font-bold transition-all duration-300 transform hover:scale-105 border-2 bg-blue-primary text-white border-blue-primary/50 hover:bg-blue-light">
                🔗 GitHub
              </button>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-4 sm:p-6">
        <h3 className={`text-lg sm:text-xl font-bold mb-3 transition-all duration-300 animate-fade-in-up ${
          theme === 'dark' 
            ? 'text-white group-hover:text-blue-light' 
            : 'text-neutral-dark group-hover:text-blue-primary'
        }`}>
          {title}
        </h3>
        <p className={`mb-4 text-sm sm:text-base leading-relaxed animate-fade-in-up stagger-1 ${
          theme === 'dark' ? 'text-neutral-smoke' : 'text-neutral-dark/80'
        }`}>
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={tech} 
              className={`px-2 sm:px-3 py-1 rounded-brick text-xs sm:text-sm font-semibold animate-snap-together transition-all duration-300 hover:scale-110 border-2 ${
                theme === 'dark' 
                  ? 'bg-blue-primary/20 text-blue-light border-blue-primary/40 hover:bg-blue-primary/30' 
                  : 'bg-blue-50 text-blue-primary border-blue-primary/30 hover:border-blue-primary'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const { theme } = useTheme()
  const { ref: sectionRef, isVisible } = useScrollAnimation()
  const { ref: itemsRef, visibleItems } = useStaggeredAnimation(portfolioConfig.projects.length, 300)

  return (
    <section id="projects" className={`py-16 sm:py-20 px-4 overflow-hidden ${
      theme === 'dark' ? 'bg-neutral-dark/40' : 'bg-neutral-smoke'
    }`} ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 transition-all duration-700 tracking-tight ${
          isVisible ? 'animate-build-up opacity-100' : 'opacity-0 translate-y-10'
        } ${theme === 'dark' ? 'text-white' : 'text-neutral-dark'}`}>
          Featured <span className={theme === 'dark' ? 'text-gold-primary' : 'text-gold-dark'}>Projects</span> 🚀
        </h2>
        <div className={`w-24 h-1 mx-auto mb-12 sm:mb-16 rounded-full transition-all duration-700 ${
          isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
        } ${theme === 'dark' ? 'bg-gold-primary' : 'bg-gold-dark'}`}></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" ref={itemsRef as React.RefObject<HTMLDivElement>}>
          {portfolioConfig.projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                visibleItems.includes(index) 
                  ? 'animate-snap-together opacity-100' 
                  : 'opacity-0 scale-90'
              }`}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-8 sm:mt-12 transition-all duration-700 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <button className={`group rounded-brick px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 transform hover:scale-105 font-bold relative overflow-hidden border-3 shadow-brick hover:shadow-brick-hover ${
            theme === 'dark'
              ? 'bg-blue-primary text-white border-blue-light hover:bg-blue-light'
              : 'bg-blue-primary text-white border-blue-dark hover:bg-blue-dark'
          }`}>
            <span className="relative z-10">View All Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>
      </div>
    </section>
  )
}