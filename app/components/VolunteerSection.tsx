'use client'

import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation'
import { portfolioConfig } from '../config/portfolio'

export default function VolunteerSection() {
  const titleAnimation = useScrollAnimation()
  const itemsAnimation = useStaggeredAnimation(portfolioConfig.volunteer.length)

  // Professional icons for different volunteer roles
  const getVolunteerIcon = (title: string) => {
    if (title.includes('President') || title.includes('Events')) return '🎯'
    if (title.includes('Sunday School') || title.includes('Youth')) return '📚'
    if (title.includes('Camp') || title.includes('Holiday')) return '⛺'
    return '🤝'
  }

  return (
    <section id="volunteer" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div 
          ref={titleAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transform transition-all duration-700 ${
            titleAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Volunteer Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Making a difference in my community through service and leadership
          </p>
        </div>

        {/* Volunteer Experience Cards */}
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
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-slate-700">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-3">
                      {role.title}
                      <span className="text-xl">
                        {getVolunteerIcon(role.title)}
                      </span>
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-4">
                      <p className="text-lg font-medium text-slate-600 dark:text-slate-300">
                        {role.organization}
                      </p>
                      <span className="hidden sm:block text-gray-300 dark:text-gray-600">•</span>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">
                        {role.period}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {role.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-lg font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-slate-800 dark:bg-slate-700 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Community Involvement</h3>
            <p className="text-slate-200 max-w-2xl mx-auto">
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