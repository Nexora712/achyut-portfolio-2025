import React from 'react'
import Link from 'next/link'
import ClientGallery from '@/components/ClientGallery'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

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
      "Mobile Optimization",
      "SEO Optimization"
    ],
    projectCost: "₹2,500",
    duration: "3 days",
    results: "Professional online presence established",
    liveUrl: "http://antriksh-portfolio-2025.vercel.app",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    screenshots: [
      "/client/antriksh/ss1.jpg",
      "/client/antriksh/ss2.jpg",
      "/client/antriksh/ss3.jpg"
    ],
    testimonial: "Achyut created exactly what I needed for my professional portfolio. Great communication and delivered on time!",
    challenge: "Antriksh needed a professional portfolio to showcase his gaming projects and technical skills for internship applications.",
    solution: "I created a modern, interactive portfolio highlighting his game development projects, technical skills, and academic achievements with smooth animations.",
    outcome: "Antriksh now has a professional online presence that effectively showcases his technical abilities for internship applications."
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
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    screenshots: [
      "/client/archit/ss1.jpg",
      "/client/archit/ss2.jpg",
      "/client/archit/ss3.jpg"
    ],
    testimonial: "Achyut created a stunning website which I myself didn't thought of. He went a bit far, put in extra efforts to deliver above expectation. Great communication, amazing design and delivered before time, in just two days!",
    challenge: "Archit needed a anime themed portfolio to showcase his video editing skills, youtube metrics & edits and his sports achievements for possible opportunities. He's young and is trying to build a career early so I had to deliver the best I could to support him kickstart his journey.",
    solution: "I created a animated, interactive portfolio highlighting his video editing skills, amazing yt metrics and edits, athletic achievements in football, and his hardworking mentality with smooth transitions across devices.",
    outcome: "Archit has gained a lot of attraction in his peer group, class and among teachers with his exceptionally attractive and out of the box personal portfolio website. His connections have seen a significant increase and he's constantly getting more popular in his school."
  }
]

interface PageProps {
  params: { clientId: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const client = clientsData.find(c => c.id === params.clientId)
  
  if (!client) {
    return {
      title: 'Client Not Found - Achyut Pandey',
      description: 'The requested client case study was not found.'
    }
  }

  return {
    title: `${client.name} Case Study - Professional Web Development by Achyut Pandey`,
    description: `See how I built ${client.name}'s ${client.industry.toLowerCase()} website. Investment: ${client.projectCost}, Timeline: ${client.duration}. ${client.results}`,
  }
}

export default function ClientDetailPage({ params }: PageProps) {
  const client = clientsData.find(c => c.id === params.clientId)

  if (!client) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-tertiary/20 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        
        <div className="relative container mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-secondary">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/clients" className="hover:text-primary transition-colors">Clients</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-primary font-medium">{client.name}</span>
            </div>
          </nav>

          {/* Client Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Success Story
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 leading-tight">
              {client.name}
            </h1>
            <p className="text-2xl text-secondary mb-8">{client.industry}</p>
            
            {/* Key Metrics */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl px-6 py-3">
                <span className="text-sm text-secondary">Investment:</span>
                <div className="text-2xl font-bold text-primary">{client.projectCost}</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl px-6 py-3">
                <span className="text-sm text-secondary">Timeline:</span>
                <div className="text-2xl font-bold text-primary">{client.duration}</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl px-6 py-3">
                <span className="text-sm text-secondary">Result:</span>
                <div className="text-lg font-semibold text-green-600">Success</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={client.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Live Website
              </a>
              <Link
                href="/contact"
                className="btn-secondary text-lg px-8 py-4 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      {client.screenshots && client.screenshots.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Project Gallery</h2>
              <ClientGallery screenshots={client.screenshots} clientName={client.name} />
            </div>
          </div>
        </section>
      )}

      {/* Content Sections */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Left Column */}
              <div className="space-y-12">
                {/* The Challenge */}
                {client.challenge && (
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-red-100 shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.767 0L3.047 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-primary">The Challenge</h3>
                    </div>
                    <p className="text-secondary leading-relaxed text-lg">{client.challenge}</p>
                  </div>
                )}

                {/* Services Provided */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-blue-100 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Services Provided</h3>
                  </div>
                  <ul className="space-y-3">
                    {client.services.map((service, index) => (
                      <li key={index} className="flex items-center text-lg">
                        <div className="w-2 h-2 bg-primary rounded-full mr-4 flex-shrink-0"></div>
                        <span className="text-secondary">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-12">
                {/* The Solution */}
                {client.solution && (
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-green-100 shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-primary">The Solution</h3>
                    </div>
                    <p className="text-secondary leading-relaxed text-lg">{client.solution}</p>
                  </div>
                )}

                {/* Technologies Used */}
                {client.technologies && client.technologies.length > 0 && (
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-purple-100 shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-primary">Technologies Used</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {client.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary to-primary/80 text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Details */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-yellow-100 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Project Details</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-secondary font-medium">Investment:</span>
                      <span className="text-2xl font-bold text-primary">{client.projectCost}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary font-medium">Timeline:</span>
                      <span className="text-lg font-semibold text-primary">{client.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary font-medium">Industry:</span>
                      <span className="text-lg font-semibold text-primary">{client.industry}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Outcome */}
      {client.outcome && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-12 text-white text-center shadow-2xl">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">The Outcome</h3>
                <p className="text-xl leading-relaxed text-white/90">{client.outcome}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Client Testimonial */}
      {client.testimonial && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-primary/10 shadow-lg">
                <svg className="w-12 h-12 text-primary/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                <blockquote className="text-2xl md:text-3xl text-primary italic font-medium mb-8 leading-relaxed">
                  "{client.testimonial}"
                </blockquote>
                <cite className="text-xl font-bold text-primary">— {client.name}</cite>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create Your Own Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get the same professional results for your project. Starting from just ₹499 for portfolio websites.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transform hover:scale-105 transition-all duration-300 shadow-lg text-lg"
              >
                Start Your Project - From ₹499
              </Link>
              <Link 
                href="/clients"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300 text-lg"
              >
                View More Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export async function generateStaticParams() {
  return clientsData.map((client) => ({
    clientId: client.id,
  }))
}
