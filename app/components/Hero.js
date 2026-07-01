'use client'
import React from 'react'
import { Linkedin, ChevronDown, Sparkles } from 'lucide-react'
import { IoDownload } from 'react-icons/io5'
import { motion } from 'motion/react'

function DownloadButton() {
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/CV-Rodrigo_Campos.pdf'
    link.download = 'CV-Rodrigo_Campos.pdf'
    link.click()
  }

  return (
    <button
      onClick={handleDownloadCV}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-sky-400 text-white font-medium hover:shadow-lg hover:shadow-sky-500/30 active:scale-[0.97] transition-all duration-300"
    >
      <IoDownload />
      Descargar CV
    </button>
  )
}

function LinkedInButton() {
  return (
    <a
      href="https://www.linkedin.com/in/rodrigo-campos8/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-600 text-zinc-200 font-medium hover:bg-zinc-800 hover:border-zinc-500 active:scale-[0.97] transition-all duration-300"
    >
      <Linkedin />
      LinkedIn
    </a>
  )
}

export default function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about') || document.querySelector('section:nth-of-type(2)')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id='home' className='relative min-h-screen flex items-center pt-24 md:pt-28 lg:pt-32 overflow-hidden'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-1/4 -left-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 -right-32 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl' />
      </div>

      <div className='relative w-full px-4 mx-auto md:px-6 lg:px-8 xl:max-w-5xl'>
        <div className='md:grid md:grid-cols-2 items-center md:gap-12 lg:gap-16'>
          
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className='text-center md:text-left'
          >
           
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight mx-auto md:mx-0'
            >
              Transformando la{' '}
              <span className='bg-gradient-to-r from-sky-400 to-blue-300 bg-clip-text text-transparent'>
                complejidad en claridad
              </span>
              <br />
              mediante análisis de datos
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='text-zinc-400 text-base md:text-lg mt-5 max-w-lg mx-auto md:mx-0 leading-relaxed'
            >
              Estudiante de Gestión Tecnológica y Análisis de Datos apasionado por convertir datos en decisiones estratégicas que generen impacto real.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className='flex flex-wrap justify-center md:justify-start gap-3 mt-8'
            >
              <DownloadButton />
              <LinkedInButton />
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className='hidden md:flex justify-center items-center mt-10 md:mt-0'
          >
            <div className='relative'>
              {/* Glow effect */}
              <div className='absolute -inset-4 bg-gradient-to-b from-sky-500/20 via-transparent to-transparent rounded-full blur-2xl' />
              
              <figure className='relative w-[260px] lg:w-[320px] aspect-square mx-auto bg-gradient-to-b from-sky-400/20 via-sky-400/5 to-transparent rounded-[40px] overflow-hidden border border-zinc-700/50 shadow-2xl shadow-sky-500/10'>
                <img
                  src='/images/23.jpg'
                  width={320}
                  height={320}
                  alt='Foto de perfil'
                  className='w-full h-full object-cover'
                />
              </figure>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={scrollToNextSection}
        className='absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-100 transition-colors group'
        aria-label='Desplazar a siguiente sección'
      >
        <span className='text-xs font-medium tracking-widest uppercase'>Desliza</span>
        <ChevronDown className='w-5 h-5 animate-bounce group-hover:translate-y-0.5 transition-transform' />
      </motion.button>
    </section>
  )
}
