"use client"

import React, { useState } from 'react'

export default function ResumeButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href="/Michele_Barrantes_Resume.pdf"
      download
      style={{
        padding: '0.75rem 1.5rem',
        backgroundColor: hovered ? '#00dddd' : '#00ffff',
        color: '#000',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'background 0.3s',
        cursor: 'pointer',
        display: 'inline-block',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Download Resume
    </a>
  )
}
