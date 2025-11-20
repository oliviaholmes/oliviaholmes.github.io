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
      className={`backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-500 transform hover-lift hover-tilt hover-glow group animate-scale-in ${
        theme === 'dark' 
          ? 'bg-white/10 hover:bg-white/20' 
          : 'bg-white/50 hover:bg-white/70'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
        <div className={`text-6xl font-bold text-white transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}>
          {title.charAt(0)}
        </div>
        <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-4 animate-bounce-gentle">
            {liveUrl && (
              <button className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 animate-pulse-glow">
                Live Demo
              </button>
            )}
            {githubUrl && (
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 animate-pulse-glow">
                GitHub
              </button>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-4 sm:p-6">
        <h3 className={`text-lg sm:text-xl font-bold mb-3 transition-all duration-300 animate-fade-in-up ${
          theme === 'dark' 
            ? 'text-white group-hover:text-blue-300' 
            : 'text-gray-800 group-hover:text-blue-600'
        }`}>
          {title}
        </h3>
        <p className={`mb-4 text-sm sm:text-base leading-relaxed animate-fade-in-up stagger-1 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={tech} 
              className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm animate-scale-in transition-transform duration-300 hover:scale-110 ${
                theme === 'dark' 
                  ? 'bg-blue-500/30 text-blue-200' 
                  : 'bg-blue-100 text-blue-700'
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
      theme === 'dark' ? 'bg-black/20' : 'bg-white/30'
    }`} ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 transition-all duration-700 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
        } ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          Featured <span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" ref={itemsRef as React.RefObject<HTMLDivElement>}>
          {portfolioConfig.projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                visibleItems.includes(index) 
                  ? 'animate-scale-in opacity-100' 
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
          <button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
            <span className="relative z-10">View All Projects</span>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>
      </div>
    </section>
  )
}