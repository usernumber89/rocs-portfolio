import React from 'react'
import SkillCard from './SkillCard'

export default function Skill() {
  const skillItems = [
    { imgSrc: '/images/powerbi.svg', label: 'Power BI', desc: 'Inteligencia de Negocios' },
    { imgSrc: '/images/excel.svg', label: 'Excel', desc: 'Análisis de Datos' },
    { imgSrc: '/images/react.svg', label: 'React', desc: 'Framework' },
    { imgSrc: '/images/nextjs.svg', label: 'NextJS', desc: 'Framework de React' },
    { imgSrc: '/images/prisma.svg', label: 'Prisma', desc: 'Base de Datos' },
    { imgSrc: '/images/figma.svg', label: 'Figma', desc: 'Herramienta de Diseño' },
    { imgSrc: '/images/css3.svg', label: 'CSS', desc: 'Interfaz de Usuario' },
  ]

  return (
    <section className='pt-20 lg:pt-32'>
      <div className='px-4 mx-auto lg:px-8 xl:max-w-6xl'>
        <h2 className='text-3xl lg:text-4xl lg:leading-tight font-semibold'>
          Herramientas Esenciales
        </h2>
        <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
          Descubre las herramientas y tecnologías que utilizo para crear experiencias digitales y soluciones de datos excepcionales.
        </p>

        <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
          {skillItems.map(({ imgSrc, label, desc }, index) => (
            <SkillCard
              key={index}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
