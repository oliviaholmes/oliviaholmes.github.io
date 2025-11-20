'use client'

import { useState, useEffect } from 'react'
import ExperienceSection from './components/ExperienceSection'
import VolunteerSection from './components/VolunteerSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import { useTheme } from './components/ThemeProvider'
import { portfolioConfig } from './config/portfolio'

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`min-h-screen transition-all duration-300 overflow-x-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 ${
        theme === 'dark' 
          ? 'bg-black/20 border-white/10' 
          : 'bg-white/20 border-gray-200/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className={`font-bold text-lg sm:text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              {portfolioConfig.personal.firstName}
            </div>
            <div className="flex items-center space-x-4 sm:space-x-8">
              <div className="hidden md:flex space-x-6 lg:space-x-8">
                {portfolioConfig.navigation.map((item) => (
                  <a 
                    key={item.name}
                    href={item.href} 
                    className={`transition-colors ${
                      theme === 'dark' ? 'text-white hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-white/10 hover:bg-white/20 text-white' 
                    : 'bg-gray-200/50 hover:bg-gray-200 text-gray-800'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
        {/* Floating Background Elements - Hidden on mobile */}
        <div className="absolute inset-0 pointer-events-none hidden md:block overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-500/10 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-pink-500/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        <div className={`text-center transform transition-all duration-1000 w-full max-w-4xl mx-auto px-4 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        } relative z-10`}>
          {/* Profile Photo */}
          <div className="w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-4xl sm:text-6xl font-bold text-white shadow-2xl overflow-hidden transition-transform duration-500 hover:scale-105">
            <img 
              src={portfolioConfig.personal.profileImage} 
              alt={portfolioConfig.personal.name} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              onError={(e) => {
                // Fallback to initials if image doesn't load
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-white" style={{display: 'none'}}>
              {portfolioConfig.personal.firstName.charAt(0)}{portfolioConfig.personal.name.split(' ').pop()?.charAt(0)}
            </div>
          </div>
          
          <h1 className={`text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in-up px-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}>
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {portfolioConfig.personal.firstName}
            </span>
          </h1>
          
          <div className={`text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 space-y-2 animate-fade-in-up stagger-2 px-4 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <p className="typing-animation">{portfolioConfig.personal.title}</p>
            <p className={`text-base sm:text-lg animate-fade-in-up stagger-3 ${theme === 'dark' ? 'text-blue-300' : 'text-blue-600'}`}>
              {portfolioConfig.personal.tagline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up stagger-4 px-4 w-full max-w-md sm:max-w-none mx-auto">
            <a href="#projects" className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover-glow relative overflow-hidden w-full sm:w-auto text-center">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
            <button className={`group border-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 relative overflow-hidden w-full sm:w-auto ${
              theme === 'dark'
                ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
            }`}>
              <span className="relative z-10">Download CV</span>
              <div className={`absolute inset-0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ${
                theme === 'dark' ? 'bg-blue-400' : 'bg-blue-500'
              }`}></div>
            </button>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-indigo-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 sm:py-20 px-4 overflow-hidden ${
        theme === 'dark' ? 'bg-black/20' : 'bg-white/30'
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 animate-fade-in-up ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}>
            About <span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className={`space-y-6 animate-fade-in-left ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {portfolioConfig.about.bio.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="space-y-6 animate-fade-in-right">
              <div className={`backdrop-blur-sm rounded-lg p-6 hover-lift hover-glow transition-all duration-500 ${
                theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-white/50 hover:bg-white/70'
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}>Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {portfolioConfig.about.skills.map((skill, index) => (
                    <span 
                      key={skill} 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium animate-scale-in transition-transform duration-300 hover:scale-110 hover-glow"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 sm:py-16 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            {portfolioConfig.stats.map((stat, index) => (
              <div 
                key={index} 
                className={`backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 transition-all duration-500 hover-lift hover-glow animate-scale-in ${
                  theme === 'dark' 
                    ? 'bg-white/10 hover:bg-white/20' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className={`text-lg sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`}>{stat.number}</div>
                <div className={`text-xs sm:text-sm md:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Volunteer Section */}
      <VolunteerSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className={`py-12 px-4 border-t ${
        theme === 'dark' 
          ? 'bg-black/40 border-white/10' 
          : 'bg-white/40 border-gray-200/50'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h3 className={`text-2xl font-bold mb-2 ${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}>Olivia Holmes</h3>
            <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Full Stack Developer</p>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className={`transition-colors ${
              theme === 'dark' 
                ? 'text-gray-400 hover:text-blue-400' 
                : 'text-gray-600 hover:text-blue-600'
            }`}>
              LinkedIn
            </a>
            <a href="#" className={`transition-colors ${
              theme === 'dark' 
                ? 'text-gray-400 hover:text-blue-400' 
                : 'text-gray-600 hover:text-blue-600'
            }`}>
              GitHub
            </a>
            <a href="#" className={`transition-colors ${
              theme === 'dark' 
                ? 'text-gray-400 hover:text-blue-400' 
                : 'text-gray-600 hover:text-blue-600'
            }`}>
              Twitter
            </a>
          </div>
          <p className={theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}>
            © 2025 Olivia Holmes. Built with Next.js and TailwindCSS.
          </p>
        </div>
      </footer>
    </div>
  )
}