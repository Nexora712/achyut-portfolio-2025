'use client'

import React from 'react'

interface ClientCardProps {
  client: {
    name: string
    industry: string
    logo?: string
    services: string[]
    projectCost: string
    duration: string
    results?: string
    liveUrl: string
    screenshots?: string[]
    testimonial?: string
    technologies?: string[]
  }
}

export default function ClientCard({ client }: ClientCardProps) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2NjdlZWE7c3RvcC1vcGFjaXR5OjAuMiIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3NjRiYTI7c3RvcC1vcGFjaXR5OjAuMiIgLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIiByeD0iMTIiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIyMCIgZmlsbD0iIzY0NzQ4YiIgb3BhY2l0eT0iMC4zIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJJbnRlciIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzQ3NTU2OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg=='
  }

  // Enhanced Technology Icons
  const getTechIcon = (tech: string) => {
    const iconMap: { [key: string]: { icon: JSX.Element; color: string } } = {
      'Next.js': {
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.5429.0445h-.4570l-.0698-.0814c-.0516-.0845-.0628-.1103-.0516-.1748.0067-.0538.0235-.1214.0235-.1748.0516-.1446.1548-.2227.4570-.3426.1103-.0445.5429-.0445.6231 0 .3426.186.4570.3426.4570.6232 0 .1103-.0141.1748-.0516.2134-.0633.0537-.0633.0537-.1547.0537-.0537 0-.1214-.0235-.1517-.0537l-.0516-.0537v-.4570c0-.2508-.0094-.4876-.0235-.5216-.0235-.0537-.0949-.0537-.1885-.0537s-.1651 0-.1885.0537c-.0141.034-.0235.2708-.0235.5216v.4570l-.0516.0537c-.0303.0302-.0979.0537-.1517.0537-.0914 0-.0914 0-.1547-.0537-.0375-.0386-.0516-.1031-.0516-.2134 0-.2806.1144-.4376.4570-.6232.081-.0445.5128-.0445.6231 0z"/>
          </svg>
        ),
        color: 'text-gray-900 bg-gray-100'
      },
      'React': {
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.01-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.87.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005 1.07-1.427 2.186-3.75 2.942-.1.033-.202.065-.32.094-.17-.417-.4-.835-.634-1.257-.243-.41-.488-.82-.749-1.215.262-.39.5-.8.742-1.204.238-.42.467-.84.632-1.26.12-.005.237-.01.35-.017.113-.003.226-.007.332-.01zm-13.395.004c.1.001.19.005.287.01.1.007.2.013.3.02.33.41.66.826 1.005 1.23.34.4.69.804 1.034 1.207-.31.392-.623.79-.93 1.18-.306.39-.605.78-.895 1.17-.04-.022-.08-.044-.12-.068-.22-.12-.44-.245-.66-.38-1.735-.74-2.852-1.706-2.852-2.474 0-.768 1.128-1.734 2.852-2.476.42-.18.88-.342 1.375-.498zm6.678 3.99c.11.56.215 1.11.304 1.66.09.52.168 1.04.23 1.55-.317.037-.643.055-.975.055-.326 0-.651-.018-.973-.055.063-.51.14-1.03.23-1.55.09-.55.194-1.1.304-1.66.03-.17.065-.34.095-.51.03.17.065.34.095.51zm5.712-2.824c.085.34.16.69.22 1.043.058.348.104.696.14 1.043-.296.027-.6.045-.915.045-.31 0-.61-.018-.91-.045.037-.348.083-.695.14-1.043.06-.354.135-.703.22-1.043l.052-.196.048.196zm-11.01.08c.082.33.16.67.22 1.01.058.33.1.66.14 1-.3.03-.6.05-.92.05-.31 0-.61-.02-.92-.05.04-.34.08-.67.14-1 .06-.34.135-.68.22-1.01l.06-.2.06.2zm6.678 4.285c-.11.56-.215 1.11-.304 1.66-.09.52-.168 1.04-.23 1.55.317-.037.643-.055.975-.055.326 0 .651.018.973.055-.063.51-.14 1.03-.23 1.55-.09.55-.194 1.1-.304 1.66-.03.17-.065.34-.095.51-.03-.17-.065-.34-.095-.51zm2.595 2.507c.225-.89.4-1.89.52-2.94.48-.38.960-.8 1.44-1.26l-.017-.033c-.696-.755-1.416-1.458-2.137-2.118.701.66 1.421 1.363 2.137 2.118l.017.033c-.48.46-.96.88-1.44 1.26-.12 1.05-.295 2.05-.52 2.94zm-5.69 2.507c-.225.89-.4 1.89-.52 2.94-.48.38-.96.8-1.44 1.26l.017.033c.696.755 1.416 1.458 2.137 2.118-.701-.66-1.421-1.363-2.137-2.118l-.017-.033c.48-.46.96-.88 1.44-1.26.12-1.05.295-2.05.52-2.94z"/>
          </svg>
        ),
        color: 'text-cyan-600 bg-cyan-50'
      },
      'TypeScript': {
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
          </svg>
        ),
        color: 'text-blue-600 bg-blue-50'
      },
      'Tailwind CSS': {
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,11.382,8.976,10,6.001,12z"/>
          </svg>
        ),
        color: 'text-teal-600 bg-teal-50'
      },
      'Framer Motion': {
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L24 8v8L12 24 0 16V8L12 0z"/>
          </svg>
        ),
        color: 'text-purple-600 bg-purple-50'
      }
    }
    
    return iconMap[tech] || {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      color: 'text-amber-600 bg-amber-50'
    }
  }

  return (
    <div className="group h-full flex flex-col bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 overflow-hidden border border-slate-200 hover:border-indigo-300 relative">
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
      
      {/* Header Section */}
      <div className="relative p-8 pb-6">
        <div className="flex items-start gap-6">
          {client.logo ? (
            <div className="relative">
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="w-20 h-20 rounded-2xl object-cover shadow-lg border-4 border-white group-hover:scale-110 transition-all duration-500"
                onError={handleImageError}
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full border-4 border-white flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          ) : (
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-all duration-500">
                {client.name.split(' ').map(n => n.charAt(0)).join('').slice(0, 2)}
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full border-4 border-white flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          )}
          
          <div className="flex-1 min-w-0">
            <h3 className="text-2xl font-bold text-slate-800 group-hover:text-indigo-700 transition-colors line-clamp-2 mb-2">
              {client.name}
            </h3>
            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-200 rounded-full">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-semibold text-slate-600">{client.industry}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="relative flex-1 px-8 pb-8 flex flex-col">
        
        {/* Services Section - Enhanced */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg text-slate-800">Services Delivered</h4>
              <p className="text-sm text-slate-500">What we accomplished together</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-5 border border-blue-100 shadow-inner">
            <div className="max-h-32 overflow-y-auto custom-scrollbar space-y-3">
              {client.services.map((service, index) => (
                <div key={index} className="flex items-start gap-3 group/service">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex-shrink-0 mt-2 group-hover/service:scale-125 transition-transform"></div>
                  <span className="text-slate-700 font-medium leading-relaxed group-hover/service:text-indigo-700 transition-colors">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies - Completely Redesigned */}
        {client.technologies && client.technologies.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-800">Tech Stack</h4>
                <p className="text-sm text-slate-500">Technologies we used</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 rounded-2xl p-5 border border-purple-100 shadow-inner">
              <div className="flex flex-wrap gap-3 max-h-28 overflow-y-auto custom-scrollbar">
                {client.technologies.map((tech, idx) => {
                  const { icon, color } = getTechIcon(tech)
                  return (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 cursor-default border-2 border-transparent hover:border-white ${color}`}
                    >
                      {icon}
                      <span>{tech}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Project Investment */}
        <div className="mb-8 p-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl border-2 border-emerald-100 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-200 rounded-full blur-2xl opacity-30"></div>
          
          <div className="relative grid grid-cols-2 gap-6">
            <div className="text-center group/stat">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover/stat:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <p className="text-xs text-emerald-600 font-bold mb-1 uppercase tracking-wide">Investment</p>
              <p className="text-3xl font-black text-emerald-800">{client.projectCost}</p>
            </div>
            
            <div className="text-center group/stat">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover/stat:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs text-blue-600 font-bold mb-1 uppercase tracking-wide">Timeline</p>
              <p className="text-2xl font-black text-blue-800">{client.duration}</p>
            </div>
          </div>
          
          {client.results && (
            <div className="mt-6 pt-6 border-t-2 border-emerald-200 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full border border-emerald-200">
                <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-bold text-emerald-700">{client.results}</span>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Gallery Preview */}
        {client.screenshots && client.screenshots.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-800">Project Gallery</h4>
                <p className="text-sm text-slate-500">Visual preview of the work</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 via-red-50 to-pink-50 rounded-2xl p-5 border border-orange-100 shadow-inner">
              <div className="flex gap-3 overflow-x-auto custom-scrollbar pb-2">
                {client.screenshots.slice(0, 3).map((src, idx) => (
                  <div key={idx} className="relative group cursor-pointer flex-shrink-0">
                    <img
                      src={src}
                      alt={`${client.name} preview ${idx + 1}`}
                      className="w-36 h-20 rounded-xl object-cover border-2 border-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                      onError={handleImageError}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-xl transition-colors flex items-center justify-center">
                      <svg className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                ))}
                
                {client.screenshots.length > 3 && (
                  <div className="w-36 h-20 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-dashed border-slate-300 flex items-center justify-center flex-shrink-0">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-400 mb-1">+{client.screenshots.length - 3}</div>
                      <div className="text-xs text-slate-500 font-medium">more</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Testimonial */}
        {client.testimonial && (
          <div className="mb-8 p-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-2xl border-l-4 border-indigo-400 shadow-lg relative">
            <div className="absolute top-4 right-4 opacity-20">
              <svg className="w-12 h-12 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>
            <blockquote className="text-slate-700 italic font-medium leading-relaxed line-clamp-4 relative z-10">
              "{client.testimonial}"
            </blockquote>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-1 h-8 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full"></div>
              <cite className="text-indigo-700 font-bold text-sm not-italic">— {client.name}</cite>
            </div>
          </div>
        )}
        
        {/* Enhanced Action Buttons */}
        <div className="flex gap-4 mt-auto">
          <a
            href={client.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-4 px-6 text-center font-bold border-3 border-indigo-300 text-indigo-700 bg-white rounded-2xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group/btn"
          >
            <svg className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Live
          </a>
          
          <button className="flex-1 py-4 px-6 text-center font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group/btn">
            <svg className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Case Study
          </button>
        </div>
      </div>
    </div>
  )
}
