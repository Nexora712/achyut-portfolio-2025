import React from 'react'
import ClientCard from '@/components/ClientCard'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Success Stories - Achyut Pandey | Professional Web Development',
  description: 'See real projects I\'ve built for clients with transparent pricing. From ₹2,500 to ₹25,000 - professional web development services that deliver results.',
}

const clientsData = [
  {
    id: 'antriksh-mahato',
    name: "Antriksh Mahato",
    industry: "Computer Science Student - IIITD",
    logo: "/client/antriksh/antriksh-avatar.jpg",
    services: [
      "Personal Portfolio Website",
      "Project Showcase Platform", 
      "Resume & Skills Integration",
      "Mobile Optimization"
    ],
    projectCost: "₹2,500",
    duration: "2 weeks",
    results: "Professional online presence established",
    liveUrl: "http://antriksh-portfolio-2025.vercel.app",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    screenshots: [
      "/client/antriksh/ss1.jpg",
      "/client/antriksh/ss2.jpg",
      "/client/antriksh/ss3.jpg"
    ],
    testimonial: "Achyut created exactly what I needed for my professional portfolio. Great communication and delivered on time!"
  },
  {
    id: '2',
    name: "Archit Pandey",
    industry: "9th class student - TAFS",
    logo: "/client/archit/hero.jpg",
    services: [
      "Personal Portfolio Website",
      "Project Showcase Platform", 
      "Resume & Skills Integration",
      "Mobile Optimization",
      "SEO Optimization",
      "Advanced Animations",
      "Anime Theme Design"
    ],
    projectCost: "Free [Early Bird Offer]",
    duration: "2 days",
    results: "Professional online presence established",
    liveUrl: "http://archit-domain.vercel.app",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    screenshots: [
      "/client/archit/ss1.jpg",
      "/client/archit/ss2.jpg",
      "/client/archit/ss3.jpg"
    ],
    testimonial: "Achyut created exactly what I needed for my professional portfolio. Great communication and delivered on time!"
  }
]

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-tertiary/30 to-white">
      {/* Hero Section with Modern Design */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        
        <div className="relative container mx-auto px-6 py-24">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Proven Track Record
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              Client Success
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
                Stories
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
              Real projects, real results, transparent pricing. 
              <span className="text-primary font-semibold"> See what I've built for clients like you.</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                href="/contact"
                className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Start Your Project
                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/services"
                className="btn-secondary text-lg px-8 py-4 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>
          
          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { number: "5+", label: "Projects Completed", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              { number: "100%", label: "Client Satisfaction", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
              { number: "₹2K-25K", label: "Project Range", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" },
              { number: "2-4 Weeks", label: "Average Delivery", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 text-center hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-secondary font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary/90 to-primary text-white p-8 md:p-12">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-white/5 rounded-full"></div>
            
            <div className="relative text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                🚀 Limited Time Offer
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Professional Portfolio Websites
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Starting at just <span className="text-3xl font-bold text-white">₹499</span>
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Start Your Project Today
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Featured Success Stories
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Discover how I've helped businesses and individuals achieve their goals through professional web development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {clientsData.map((client) => (
              <div key={client.id} className="group">
                <ClientCard client={client} />
                <div className="mt-6 text-center">
                  <Link
                    href={`/clients/${client.id}`}
                    className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group-hover:translate-x-1 transform duration-300"
                  >
                    View Full Case Study
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-tertiary via-white to-tertiary">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Ready to Join These Success Stories?
            </h2>
            <p className="text-xl text-secondary mb-8 leading-relaxed">
              Whether you need a portfolio, business website, or e-commerce store, 
              I'll create something that works for your goals and budget.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <Link 
                href="/contact"
                className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Your Quote - From ₹499
              </Link>
              <Link 
                href="/services"
                className="btn-secondary text-lg px-8 py-4 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
            
            <div className="mt-12 flex items-center justify-center space-x-8 text-secondary">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Money-back Guarantee
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Free Revisions
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
