'use client'

import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation'
import { portfolioConfig } from '../config/portfolio'
import { useTheme } from './ThemeProvider'

export default function VolunteerSection() {
  const { theme } = useTheme()
  const titleAnimation = useScrollAnimation()
  const itemsAnimation = useStaggeredAnimation(portfolioConfig.volunteer.length)

  const getVolunteerIcon = (title: string) => {
    if (title.includes('President') || title.includes('Events')) return '🎯'
    if (title.includes('Sunday School') || title.includes('Youth')) return '📚'
    if (title.includes('Camp') || title.includes('Holiday')) return '⛺'
    return '🤝'
  }

  return (
    <section id="volunteer" className={`py-20 ${
      theme === 'dark' ? 'bg-neutral-dark/40' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div 
          ref={titleAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-4 transform transition-all duration-700 ${
            titleAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark dark:text-white mb-4 tracking-tight">
            Volunteer <span className="text-gold-dark dark:text-gold-primary">Experience</span> 🌟
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 rounded-full transition-all duration-700 ${
            titleAnimation.isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          } bg-gold-dark dark:bg-gold-primary`}></div>
          <p className="text-lg text-neutral-dark/70 dark:text-neutral-smoke max-w-2xl mx-auto font-medium">
            Making a difference in my community through service and leadership
          </p>
        </div>

        <div 
          ref={itemsAnimation.ref as React.RefObject<HTMLDivElement>}
          className="space-y-8"
        >
          {portfolioConfig.volunteer.map((role, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                itemsAnimation.visibleItems.includes(index)
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-neutral-smoke dark:bg-neutral-charcoal/80 rounded-brick p-8 hover:shadow-brick-hover transition-all duration-300 border-3 border-gray-200 dark:border-gray-700 hover:border-blue-primary hover-lift">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-neutral-dark dark:text-white mb-2 flex items-center gap-3">
                      {role.title}
                      <span className="text-xl">
                        {getVolunteerIcon(role.title)}
                      </span>
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-4">
                      <p className="text-lg font-bold text-neutral-dark/80 dark:text-neutral-smoke">
                        {role.organization}
                      </p>
                      <span className="hidden sm:block text-blue-primary">•</span>
                      <p className="text-blue-primary dark:text-blue-light font-semibold px-3 py-1 rounded-brick bg-blue-primary/10 dark:bg-blue-primary/20 border-2 border-blue-primary/30 inline-block">
                        {role.period}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-neutral-dark/70 dark:text-neutral-smoke/90 leading-relaxed mb-6">
                  {role.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-primary/10 dark:bg-blue-primary/20 text-blue-primary dark:text-blue-light text-sm rounded-brick font-semibold border-2 border-blue-primary/30 dark:border-blue-primary/40 hover:scale-110 transition-transform duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-blue-primary to-blue-dark dark:from-blue-dark dark:to-blue-primary rounded-brick p-8 text-white border-4 border-blue-light dark:border-blue-light/50 shadow-brick">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              🤝 Community Involvement
            </h3>
            <p className="text-white/95 max-w-2xl mx-auto font-medium leading-relaxed">
              Through volunteering, I've developed strong leadership, communication, and organisational skills 
              whilst making a positive impact in my community. These experiences have shaped my collaborative 
              approach and passion for helping others succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}