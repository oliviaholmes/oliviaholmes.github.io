'use client'

import { useTheme } from './ThemeProvider'
import { portfolioConfig } from '../config/portfolio'
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation'

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string
  skills: string[]
}

const ExperienceItem = ({ title, company, period, description, skills }: typeof portfolioConfig.experience[0]) => {
  const { theme } = useTheme()
  
  return (
    <div className="relative pl-8 pb-12 group">
      <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-full ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-blue-primary via-blue-light to-blue-primary' 
          : 'bg-gradient-to-b from-blue-primary via-blue-light to-blue-dark'
      }`}></div>
      <div className={`absolute left-0 top-2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 group-hover:scale-125 transition-all duration-300 shadow-md ${
        theme === 'dark'
          ? 'bg-blue-light border-neutral-dark'
          : 'bg-blue-primary border-white'
      }`}></div>
      
      <div className={`backdrop-blur-sm rounded-brick p-6 transition-all duration-300 transform hover-lift hover-gold border-3 ${
        theme === 'dark' 
          ? 'bg-neutral-charcoal/80 border-gray-700' 
          : 'bg-white/90 border-gray-200'
      }`}>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
          <h3 className={`text-lg sm:text-xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-neutral-dark'
          }`}>{title}</h3>
          <span className={`text-sm sm:text-base font-semibold px-3 py-1 rounded-brick border-2 mt-2 sm:mt-0 inline-block ${
            theme === 'dark' 
              ? 'text-blue-light border-blue-primary/40 bg-blue-primary/10' 
              : 'text-blue-primary border-blue-primary/50 bg-blue-50'
          }`}>{period}</span>
        </div>
        <p className={`text-sm sm:text-base font-bold mb-3 flex items-center gap-2 ${
          theme === 'dark' ? 'text-neutral-smoke' : 'text-neutral-dark/80'
        }`}>
          🏢 {company}
        </p>
        <p className={`mb-4 text-sm sm:text-base leading-relaxed ${
          theme === 'dark' ? 'text-neutral-smoke/90' : 'text-neutral-dark/70'
        }`}>{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={skill} 
              className={`px-2 sm:px-3 py-1 rounded-brick text-xs sm:text-sm font-semibold animate-snap-together transition-all duration-300 hover:scale-110 border-2 ${
                theme === 'dark' 
                  ? 'bg-blue-primary/20 text-blue-light border-blue-primary/40' 
                  : 'bg-blue-50 text-blue-primary border-blue-primary/30'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ExperienceSection() {
  const { theme } = useTheme()
  const { ref: sectionRef, isVisible } = useScrollAnimation()
  const { ref: itemsRef, visibleItems } = useStaggeredAnimation(portfolioConfig.experience.length, 200)

  return (
    <section id="experience" className={`py-16 sm:py-20 px-4 overflow-hidden ${
      theme === 'dark' ? 'bg-neutral-dark/40' : 'bg-neutral-smoke'
    }`} ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 transition-all duration-700 tracking-tight ${
          isVisible ? 'animate-build-up opacity-100' : 'opacity-0 translate-y-10'
        } ${theme === 'dark' ? 'text-white' : 'text-neutral-dark'}`}>
          My <span className={theme === 'dark' ? 'text-gold-primary' : 'text-gold-dark'}>Experience</span> 💼
        </h2>
        <div className={`w-24 h-1 mx-auto mb-12 sm:mb-16 rounded-full transition-all duration-700 ${
          isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
        } ${theme === 'dark' ? 'bg-gold-primary' : 'bg-gold-dark'}`}></div>
        
        <div className="relative" ref={itemsRef as React.RefObject<HTMLDivElement>}>
          {portfolioConfig.experience.map((exp, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                visibleItems.includes(index) 
                  ? 'animate-fade-in-left opacity-100' 
                  : 'opacity-0 translate-x-10'
              }`}
            >
              <ExperienceItem {...exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}