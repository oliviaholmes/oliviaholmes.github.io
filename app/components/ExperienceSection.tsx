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
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500"></div>
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 group-hover:scale-125 transition-transform duration-300"
           style={{ borderColor: theme === 'dark' ? '#0f172a' : '#f8fafc' }}></div>
      
      <div className={`backdrop-blur-sm rounded-lg p-6 transition-all duration-300 transform hover-lift hover-tilt hover-glow ${
        theme === 'dark' 
          ? 'bg-white/10 hover:bg-white/20' 
          : 'bg-white/50 hover:bg-white/70'
      }`}>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
          <h3 className={`text-lg sm:text-xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}>{title}</h3>
          <span className={`text-sm sm:text-base font-medium mt-1 sm:mt-0 ${
            theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
          }`}>{period}</span>
        </div>
        <p className={`text-sm sm:text-base font-medium mb-3 ${
          theme === 'dark' ? 'text-blue-300' : 'text-blue-600'
        }`}>{company}</p>
        <p className={`mb-4 text-sm sm:text-base leading-relaxed ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={skill} 
              className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm animate-scale-in transition-transform duration-300 hover:scale-110 ${
                theme === 'dark' 
                  ? 'bg-blue-500/30 text-blue-200' 
                  : 'bg-blue-100 text-blue-700'
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
    <section id="experience" className="py-16 sm:py-20 px-4 overflow-hidden" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 transition-all duration-700 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
        } ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          My <span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>Experience</span>
        </h2>
        
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