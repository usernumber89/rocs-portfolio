'use client'
import React, { useState } from 'react'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { SiReact, SiJavascript, SiTailwindcss, SiPowerbi } from "react-icons/si"

export default function Work() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const works = [
    {
      imgSrc: '/images/collage1.png',
      title: 'Dexpert – Construye Experiencia',
      description: 'Plataforma full-stack que conecta Jóvenes sin experiencia laboral con PYMEs que necesitan talento, facilitando la adquisición de experiencia laboral y el desarrollo profesional',
      tags: ['Full-Stack', 'NextJS', 'Wompi', 'API', 'Supabase',],
      projectLink: 'https://dexpert.app/',
      category: 'Aplicación Web'
    },
    {
      imgSrc: '/images/dash.png',
      title: 'Dashboard Interactivo en Power BI',
      description: 'Dashboard de visualización de datos que proporciona información procesable mediante analítica avanzada',
      tags: ['Datos', 'Power BI', 'Analítica'],
      projectLink: 'https://drive.google.com/file/d/1RNhWNItp8I9ifV7WqNqWopFm4ZmY1pM1/view?usp=sharing',
      category: 'Analítica de Datos'
    },
    {
      imgSrc: '/images/dinatours.png',
      title: 'App de Viajes Full Stack',
      description: 'Plataforma interactiva de viajes con gestión de destinos y autenticación de usuarios',
      tags: ['API', 'NextJS', 'Prisma', 'Clerk', 'Desarrollo'],
      projectLink: 'https://dinatours.vercel.app',
      category: 'Aplicación Web'
    },
  ]

  return (
    <section id="work" className="py-20 md:py-24 lg:py-32">
      <div className="px-4 mx-auto md:px-6 lg:px-8 xl:max-w-6xl">
        
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-zinc-700"></div>
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Portafolio</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-zinc-700"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-zinc-400 text-sm md:text-base text-center max-w-2xl mx-auto">
            Una selección de trabajos recientes que muestran desarrollo full-stack y experiencia en analítica de datos
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {works.map((work, index) => (
            <a
              key={index}
              href={work.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <article className="relative h-full">
                {/* Card Container */}
                <div className="relative overflow-hidden rounded-2xl bg-zinc-800/40 border border-zinc-700/50 hover:border-sky-400/50 transition-all duration-500 h-full flex flex-col">
                  
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden bg-zinc-900">
                    <img
                      src={work.imgSrc}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 text-xs font-medium bg-black/60 backdrop-blur-md text-sky-400 rounded-full border border-sky-400/30">
                        {work.category}
                      </span>
                    </div>

                    {/* External Link Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-sky-400 group-hover:border-sky-400 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-sky-400 transition-colors duration-300">
                      {work.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-zinc-400 mb-4 flex-1">
                      {work.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {work.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-medium bg-zinc-700/50 text-zinc-300 rounded-full border border-zinc-600/50 group-hover:border-sky-400/30 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sky-400/0 to-transparent group-hover:via-sky-400/80 transition-all duration-500"></div>
                </div>
              </article>
            </a>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-zinc-800/40 border border-zinc-700/50 hover:border-sky-400/50 transition-all duration-300">
            <span className="text-zinc-400">Explora más proyectos en</span>
            <a 
              href="https://github.com/usernumber89" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors font-medium"
            >
              <Github className="w-5 h-5" />
              GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}