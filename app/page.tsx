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
        ? 'bg-gradient-to-br from-neutral-dark via-neutral-charcoal to-neutral-dark' 
        : 'bg-gradient-to-br from-neutral-white via-neutral-smoke to-neutral-light'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b-2 transition-all duration-300 ${
        theme === 'dark' 
          ? 'bg-neutral-dark/80 border-gold-primary/30' 
          : 'bg-white/80 border-gold-primary/40'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className={`font-bold text-lg sm:text-xl tracking-tight ${
              theme === 'dark' ? 'text-gold-primary' : 'text-neutral-dark'
            }`}>
              {portfolioConfig.personal.firstName}
            </div>
            <div className="flex items-center space-x-4 sm:space-x-8">
              <div className="hidden md:flex space-x-6 lg:space-x-8">
                {portfolioConfig.navigation.map((item) => (
                  <a 
                    key={item.name}
                    href={item.href} 
                    className={`transition-all font-medium ${
                      theme === 'dark' 
                        ? 'text-neutral-smoke hover:text-gold-primary' 
                        : 'text-neutral-dark hover:text-gold-primary'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-brick transition-all duration-300 border-2 ${
                  theme === 'dark' 
                    ? 'bg-gold-primary/10 hover:bg-gold-primary/20 border-gold-primary text-gold-bright' 
                    : 'bg-gold-light hover:bg-gold-200 border-gold-primary text-neutral-dark'
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
        {/* Floating Background Elements - LEGO-inspired geometric shapes */}
        <div className="absolute inset-0 pointer-events-none hidden md:block overflow-hidden">
          <div className={`absolute top-20 left-10 w-20 h-20 rounded-brick border-4 animate-float ${
            theme === 'dark' ? 'bg-gold-primary/10 border-gold-primary/30' : 'bg-gold-light/50 border-gold-primary/40'
          }`}></div>
          <div className={`absolute top-40 right-20 w-16 h-16 rounded-brick border-4 animate-float ${
            theme === 'dark' ? 'bg-lego-blue/10 border-lego-blue/30' : 'bg-lego-blue/5 border-lego-blue/20'
          }`} style={{animationDelay: '2s'}}></div>
          <div className={`absolute bottom-40 left-20 w-12 h-12 rounded-brick border-4 animate-float ${
            theme === 'dark' ? 'bg-lego-yellow/10 border-lego-yellow/30' : 'bg-lego-yellow/5 border-lego-yellow/20'
          }`} style={{animationDelay: '4s'}}></div>
          <div className={`absolute bottom-20 right-10 w-24 h-24 rounded-brick border-4 animate-float ${
            theme === 'dark' ? 'bg-lego-red/10 border-lego-red/30' : 'bg-lego-red/5 border-lego-red/20'
          }`} style={{animationDelay: '1s'}}></div>
        </div>

        <div className={`text-center transform transition-all duration-1000 w-full max-w-4xl mx-auto px-4 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        } relative z-10`}>
          <div className={`w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-6 sm:mb-8 rounded-full border-4 flex items-center justify-center text-4xl sm:text-6xl font-bold shadow-brick overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-brick-hover ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-gold-primary to-gold-dark border-gold-bright' 
              : 'bg-gradient-to-br from-gold-light to-gold-primary border-gold-primary'
          }`}>
            <img 
              src={portfolioConfig.personal.profileImage} 
              alt={portfolioConfig.personal.name} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className={`w-full h-full flex items-center justify-center text-6xl font-bold ${
              theme === 'dark' ? 'text-neutral-dark' : 'text-white'
            }`} style={{display: 'none'}}>
              {portfolioConfig.personal.firstName.charAt(0)}{portfolioConfig.personal.name.split(' ').pop()?.charAt(0)}
            </div>
          </div>
          
          <h1 className={`text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 animate-snap-together px-4 tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-neutral-dark'
          }`}>
            Hi, I'm{' '}
            <span className={theme === 'dark' ? 'text-gold-primary' : 'text-gold-dark'}>
              {portfolioConfig.personal.firstName}
            </span>
            ✨
          </h1>
          
          <div className={`text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 space-y-2 animate-build-up px-4 ${
            theme === 'dark' ? 'text-neutral-smoke' : 'text-neutral-dark'
          }`}>
            <p className="typing-animation font-medium">{portfolioConfig.personal.title}</p>
            <p className={`text-base sm:text-lg font-semibold ${
              theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
            }`}>
              {portfolioConfig.personal.tagline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up stagger-4 px-4 w-full max-w-md sm:max-w-none mx-auto">
            <a href="#projects" className={`group relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 rounded-brick border-3 transition-all duration-300 transform hover:scale-105 shadow-brick hover:shadow-brick-hover w-full sm:w-auto text-center font-bold ${
              theme === 'dark'
                ? 'bg-gold-primary text-neutral-dark border-gold-bright hover:bg-gold-bright'
                : 'bg-gold-primary text-white border-gold-dark hover:bg-gold-dark'
            }`}>
              <span className="relative z-10">🎨 View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
            <button className={`group border-3 rounded-brick px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 transform hover:scale-105 relative overflow-hidden w-full sm:w-auto font-bold ${
              theme === 'dark'
                ? 'border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-neutral-dark'
                : 'border-gold-dark text-gold-dark hover:bg-gold-primary hover:text-white'
            }`}>
              <span className="relative z-10">📄 Download CV</span>
              <div className={`absolute inset-0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ${
                theme === 'dark' ? 'bg-gold-primary' : 'bg-gold-primary'
              }`}></div>
            </button>
          </div>

          {/* Floating LEGO brick elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={`absolute top-1/4 left-1/4 w-4 h-4 rounded-sm animate-pulse ${
              theme === 'dark' ? 'bg-gold-bright' : 'bg-gold-primary'
            }`}></div>
            <div className={`absolute top-1/3 right-1/4 w-2 h-2 rounded-sm animate-bounce ${
              theme === 'dark' ? 'bg-lego-yellow' : 'bg-lego-red'
            }`}></div>
            <div className={`absolute bottom-1/4 left-1/3 w-3 h-3 rounded-sm animate-pulse ${
              theme === 'dark' ? 'bg-lego-blue' : 'bg-lego-green'
            }`}></div>
          </div>
        </div>
      </section>

      <section id="about" className={`py-16 sm:py-20 px-4 overflow-hidden ${
        theme === 'dark' ? 'bg-neutral-dark/40' : 'bg-neutral-smoke'
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in-up tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-neutral-dark'
          }`}>
            About <span className={theme === 'dark' ? 'text-gold-primary' : 'text-gold-dark'}>Me</span>
          </h2>
          <div className={`w-24 h-1 mx-auto mb-12 sm:mb-16 rounded-full ${
            theme === 'dark' ? 'bg-gold-primary' : 'bg-gold-dark'
          }`}></div>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className={`space-y-6 animate-fade-in-left ${
              theme === 'dark' ? 'text-neutral-smoke' : 'text-neutral-dark/80'
            }`}>
              {portfolioConfig.about.bio.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="space-y-6 animate-fade-in-right">
              <div className={`backdrop-blur-sm rounded-brick p-6 hover-lift transition-all duration-500 border-3 ${
                theme === 'dark' ? 'bg-neutral-charcoal/80 border-gray-700 hover:border-blue-primary' : 'bg-white/90 border-gray-200 hover:border-blue-primary'
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-dark'
                }`}>Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {portfolioConfig.about.skills.map((skill, index) => (
                    <span 
                      key={skill} 
                      className={`px-4 py-2 rounded-brick text-sm font-semibold animate-scale-in transition-all duration-300 hover:scale-110 border-2 ${
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
          </div>
        </div>
      </section>

      <section className={`py-12 sm:py-16 px-4 overflow-hidden ${
        theme === 'dark' ? 'bg-neutral-dark/40' : 'bg-white'
      }`}>
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            {portfolioConfig.stats.map((stat, index) => (
              <div 
                key={index} 
                className={`backdrop-blur-sm rounded-brick p-3 sm:p-4 md:p-6 transition-all duration-500 hover-lift animate-scale-in border-3 ${
                  theme === 'dark' 
                    ? 'bg-neutral-charcoal/80 border-gray-700 hover:border-blue-primary' 
                    : 'bg-white border-gray-200 hover:border-blue-primary'
                }`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className={`text-lg sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 ${
                  theme === 'dark' ? 'text-gold-primary' : 'text-gold-dark'
                }`}>{stat.number}</div>
                <div className={`text-xs sm:text-sm md:text-base ${theme === 'dark' ? 'text-neutral-smoke' : 'text-neutral-dark/70'}`}>{stat.label}</div>
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
      {/* <ProjectsSection /> */}

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