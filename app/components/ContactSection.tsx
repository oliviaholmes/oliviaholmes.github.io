'use client'

import { useState } from 'react'
import { useTheme } from './ThemeProvider'
import { portfolioConfig } from '../config/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function ContactSection() {
  const { theme } = useTheme()
  const { ref, isVisible } = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 transition-all duration-700 tracking-tight ${
          isVisible ? 'animate-build-up opacity-100' : 'opacity-0 translate-y-10'
        } ${theme === 'dark' ? 'text-white' : 'text-neutral-dark'}`}>
          Let's <span className={theme === 'dark' ? 'text-gold-primary' : 'text-gold-dark'}>Connect</span> 💬
        </h2>
        <div className={`w-24 h-1 mx-auto mb-12 sm:mb-16 rounded-full transition-all duration-700 ${
          isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
        } ${theme === 'dark' ? 'bg-gold-primary' : 'bg-gold-dark'}`}></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <div className={`space-y-6 sm:space-y-8 transition-all duration-700 ${
            isVisible ? 'animate-fade-in-left opacity-100' : 'opacity-0 translate-x-10'
          }`}>
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-neutral-dark'
              }`}>Get in Touch ✨</h3>
              <p className={`text-lg leading-relaxed mb-8 font-medium ${
                theme === 'dark' ? 'text-neutral-smoke' : 'text-neutral-dark/70'
              }`}>
                {portfolioConfig.contact.description}
              </p>
            </div>
            
            <div className="space-y-4">
              {portfolioConfig.contact.socialCards.map((card, index) => (
                <a
                  key={index}
                  href={card.link}
                  className={`flex items-center space-x-4 p-4 backdrop-blur-sm rounded-brick transition-all duration-500 hover-lift hover-gold animate-snap-together border-3 ${
                    theme === 'dark' 
                      ? 'bg-neutral-charcoal/80 border-gray-700 hover:border-blue-primary' 
                      : 'bg-white/90 border-gray-200 hover:border-blue-primary'
                  }`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className={`w-12 h-12 rounded-brick flex items-center justify-center border-2 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-blue-primary to-blue-dark border-blue-light'
                      : 'bg-gradient-to-br from-blue-primary to-blue-light border-blue-primary'
                  }`}>
                    <span className="font-bold text-lg text-white">{card.icon}</span>
                  </div>
                  <div>
                    <p className={`font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-neutral-dark'
                    }`}>{card.label}</p>
                    <p className={`font-semibold ${
                      theme === 'dark' ? 'text-blue-light' : 'text-blue-primary'
                    }`}>
                      {card.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className={`space-y-6 transition-all duration-700 ${
            isVisible ? 'animate-fade-in-right opacity-100' : 'opacity-0 translate-x-10'
          }`}>
            <div>
              <label htmlFor="name" className={`block font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-neutral-dark'
              }`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 backdrop-blur-sm border-3 rounded-brick transition-all duration-300 focus:outline-none font-medium ${
                  theme === 'dark'
                    ? 'bg-neutral-charcoal/80 border-gray-700 text-white placeholder-neutral-smoke/50 focus:border-blue-primary focus:shadow-md'
                    : 'bg-white/90 border-gray-200 text-neutral-dark placeholder-neutral-dark/40 focus:border-blue-primary focus:shadow-md'
                }`}
                placeholder="Your Name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className={`block font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-neutral-dark'
              }`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 backdrop-blur-sm border-3 rounded-brick transition-all duration-300 focus:outline-none font-medium ${
                  theme === 'dark'
                    ? 'bg-neutral-charcoal/80 border-gray-700 text-white placeholder-neutral-smoke/50 focus:border-blue-primary focus:shadow-md'
                    : 'bg-white/90 border-gray-200 text-neutral-dark placeholder-neutral-dark/40 focus:border-blue-primary focus:shadow-md'
                }`}
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className={`block font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-neutral-dark'
              }`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 backdrop-blur-sm border-3 rounded-brick transition-all duration-300 focus:outline-none resize-none font-medium ${
                  theme === 'dark'
                    ? 'bg-neutral-charcoal/80 border-gray-700 text-white placeholder-neutral-smoke/50 focus:border-blue-primary focus:shadow-md'
                    : 'bg-white/90 border-gray-200 text-neutral-dark placeholder-neutral-dark/40 focus:border-blue-primary focus:shadow-md'
                }`}
                placeholder="Tell me about your project or just say hello!"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className={`group w-full rounded-brick px-8 py-4 transition-all duration-300 transform hover:scale-105 font-bold relative overflow-hidden border-3 shadow-brick hover:shadow-brick-hover ${
                theme === 'dark'
                  ? 'bg-blue-primary text-white border-blue-light hover:bg-blue-light'
                  : 'bg-blue-primary text-white border-blue-dark hover:bg-blue-dark'
              }`}
            >
              <span className="relative z-10">✉️ Send Message</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}