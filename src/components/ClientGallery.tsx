'use client'

import React, { useState, useEffect } from 'react'

interface ClientGalleryProps {
  screenshots: string[]
  clientName: string
  className?: string
}

export default function ClientGallery({ screenshots, clientName, className = "" }: ClientGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())
  const [isLoading, setIsLoading] = useState(false)

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return
      
      e.preventDefault()
      
      switch (e.key) {
        case 'Escape':
          closeModal()
          break
        case 'ArrowLeft':
          navigateImage('prev')
          break
        case 'ArrowRight':
          navigateImage('next')
          break
      }
    }

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyPress)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage, currentIndex])

  const handleImageError = (index: number) => {
    setImageErrors(prev => new Set(prev).add(index))
  }

  const createPlaceholderSvg = (text: string) => {
    return `data:image/svg+xml;base64,${btoa(`
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#667eea;stop-opacity:0.1" />
            <stop offset="100%" style="stop-color:#764ba2;stop-opacity:0.1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)" stroke="#e2e8f0" stroke-width="2" rx="16"/>
        <circle cx="200" cy="120" r="24" fill="#64748b" opacity="0.3"/>
        <rect x="176" y="96" width="48" height="48" fill="none" stroke="#64748b" stroke-width="2" rx="8" opacity="0.3"/>
        <path d="M188 108 L212 108 M188 116 L204 116 M188 124 L200 124" stroke="#64748b" stroke-width="2" opacity="0.3"/>
        <text x="50%" y="200" font-family="Inter, -apple-system, sans-serif" font-size="16" fill="#475569" text-anchor="middle" font-weight="600">${text}</text>
        <text x="50%" y="230" font-family="Inter, -apple-system, sans-serif" font-size="14" fill="#94a3b8" text-anchor="middle">Click to view full size</text>
      </svg>
    `)}`
  }

  const openModal = (src: string, index: number) => {
    if (imageErrors.has(index)) return
    
    setIsLoading(true)
    setSelectedImage(src)
    setCurrentIndex(index)
    
    // Preload image for smooth experience
    const img = new Image()
    img.onload = () => setIsLoading(false)
    img.onerror = () => {
      setIsLoading(false)
      handleImageError(index)
      setSelectedImage(null)
    }
    img.src = src
  }

  const closeModal = () => {
    setSelectedImage(null)
    setCurrentIndex(0)
    setIsLoading(false)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (screenshots.length <= 1) return

    let newIndex = currentIndex
    
    do {
      if (direction === 'next') {
        newIndex = (newIndex + 1) % screenshots.length
      } else {
        newIndex = newIndex === 0 ? screenshots.length - 1 : newIndex - 1
      }
    } while (imageErrors.has(newIndex) && newIndex !== currentIndex)

    if (!imageErrors.has(newIndex)) {
      setCurrentIndex(newIndex)
      setSelectedImage(screenshots[newIndex])
    }
  }

  if (!screenshots || screenshots.length === 0) {
    return (
      <div className="relative overflow-hidden">
        <div className="flex items-center justify-center h-80 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-3xl border-2 border-dashed border-slate-200">
          <div className="text-center p-8">
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L13.09 8.26L20 9L15 14L16.18 21L10 17.77L3.82 21L5 14L0 9L6.91 8.26L10 2Z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-700 mb-2">Project Gallery</h3>
            <p className="text-slate-500 leading-relaxed">Screenshots and visuals will be<br />available once the project is complete</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className={`${className} relative`}>
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((src, idx) => (
            <div key={idx} className="group relative cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200 hover:shadow-2xl hover:ring-blue-300 transition-all duration-700 transform hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={imageErrors.has(idx) ? createPlaceholderSvg(`Screenshot ${idx + 1}`) : src}
                    alt={`${clientName} screenshot ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onClick={() => openModal(src, idx)}
                    onError={() => handleImageError(idx)}
                    loading="lazy"
                  />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl transform scale-0 group-hover:scale-100 transition-all duration-500">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Bottom Info Bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="bg-white/20 backdrop-blur-md rounded-xl p-3">
                      <p className="text-white font-semibold text-sm">Click to view full size</p>
                    </div>
                  </div>
                </div>

                {/* Image Counter Badge */}
                <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  {idx + 1} / {screenshots.length}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gallery Footer Info */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-blue-900 font-bold">
                  {screenshots.length} Project Screenshot{screenshots.length !== 1 ? 's' : ''}
                </p>
                <p className="text-blue-600 text-sm">Click any image to view in full screen</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              </div>
            </div>
          )}
          
          {!isLoading && (
            <>
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{clientName}</h3>
                    <p className="text-white/70">Screenshot {currentIndex + 1} of {screenshots.length}</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="bg-white/20 hover:bg-white/30 rounded-xl p-3 transition-colors backdrop-blur-md"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Main Image */}
              <div 
                className="flex items-center justify-center h-full px-20 py-20"
                onClick={closeModal}
              >
                <img
                  src={selectedImage}
                  alt={`${clientName} enlarged screenshot`}
                  className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              {/* Navigation */}
              {screenshots.length > 1 && (
                <>
                  <button
                    onClick={() => navigateImage('prev')}
                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-xl p-4 transition-colors backdrop-blur-md"
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => navigateImage('next')}
                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-xl p-4 transition-colors backdrop-blur-md"
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {screenshots.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          if (!imageErrors.has(idx)) {
                            setCurrentIndex(idx)
                            setSelectedImage(screenshots[idx])
                          }
                        }}
                        className={`w-3 h-3 rounded-full transition-all ${
                          idx === currentIndex 
                            ? 'bg-white scale-125 shadow-lg' 
                            : imageErrors.has(idx)
                            ? 'bg-white/30'
                            : 'bg-white/50 hover:bg-white/70 hover:scale-110'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div className="text-white/80 text-sm bg-black/40 px-4 py-2 rounded-xl backdrop-blur-md">
                    Use ← → keys or ESC to close
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}
