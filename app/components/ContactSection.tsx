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
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 transition-all duration-700 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
        } ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          Let's <span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>Connect</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className={`space-y-6 sm:space-y-8 transition-all duration-700 ${
            isVisible ? 'animate-fade-in-left opacity-100' : 'opacity-0 translate-x-10'
          }`}>
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}>Get in Touch</h3>
              <p className={`text-lg leading-relaxed mb-8 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {portfolioConfig.contact.description}
              </p>
            </div>
            
            {/* Social Links */}
            <div className="space-y-4">
              {portfolioConfig.contact.socialCards.map((card, index) => (
                <a
                  key={index}
                  href={card.link}
                  className={`flex items-center space-x-4 p-4 backdrop-blur-sm rounded-lg transition-all duration-500 hover-lift hover-glow animate-scale-in ${
                    theme === 'dark' 
                      ? 'bg-white/10 hover:bg-white/20' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{card.icon}</span>
                  </div>
                  <div>
                    <p className={`font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}>{card.label}</p>
                    <p className={theme === 'dark' ? 'text-blue-300' : 'text-blue-600'}>
                      {card.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className={`space-y-6 transition-all duration-700 ${
            isVisible ? 'animate-fade-in-right opacity-100' : 'opacity-0 translate-x-10'
          }`}>
            <div>
              <label htmlFor="name" className={`block font-medium mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 backdrop-blur-sm border rounded-lg transition-all duration-300 focus:outline-none ${
                  theme === 'dark'
                    ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:bg-white/20'
                    : 'bg-white/50 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:bg-white/70'
                }`}
                placeholder="Your Name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className={`block font-medium mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 backdrop-blur-sm border rounded-lg transition-all duration-300 focus:outline-none ${
                  theme === 'dark'
                    ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:bg-white/20'
                    : 'bg-white/50 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:bg-white/70'
                }`}
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className={`block font-medium mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 backdrop-blur-sm border rounded-lg transition-all duration-300 focus:outline-none resize-none ${
                  theme === 'dark'
                    ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:bg-white/20'
                    : 'bg-white/50 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:bg-white/70'
                }`}
                placeholder="Tell me about your project or just say hello!"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="group w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium relative overflow-hidden"
            >
              <span className="relative z-10">Send Message</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}