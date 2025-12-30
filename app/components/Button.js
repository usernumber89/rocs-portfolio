import React from 'react'
import PropTypes from 'prop-types'



export default function Button({ href, target = '_self', label, icon, classes }) {
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/CV-Rodrigo_Campos.pdf'
    link.download = 'CV-Rodrigo_Campos.pdf'
    link.click()
  }
  if (href) {
    return (
      <a
        href={href}
        target={target}
        onClick={handleDownloadCV}
        download
        className={
          "cursor-pointer px-6 py-2 rounded-xl bg-sky-500 text-white hover:bg-sky-600 transition-colors duration-200 font-medium flex items-center gap-2 " +
          classes
        }
      >
        {label}
        {icon ? <span>{icon}</span> : null}
      </a>
    )
  } else {
    return (
      <button
       onClick={handleDownloadCV}
        className={
          "cursor-pointer px-6 py-2 rounded-xl bg-sky-500 text-white hover:bg-sky-600 transition-colors duration-200 font-medium flex items-center gap-2 " +
          classes
        }
      >
        {label}
        {icon ? <span>{icon}</span> : null}
      </button>
    )
  }
}

Button.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  classes: PropTypes.string,
}
