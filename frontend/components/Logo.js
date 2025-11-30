import React from 'react'

export default function Logo({ className = "", size = "medium" }) {
  const sizes = {
    small: { width: 120, height: 40 },
    medium: { width: 160, height: 50 },
    large: { width: 200, height: 60 }
  }

  const { width, height } = sizes[size] || sizes.medium

  return (
    <div className={`logo-container ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      {/* Moroccan-inspired SVG Logo */}
      <svg 
        width={width * 0.35} 
        height={height * 0.8} 
        viewBox="0 0 60 80" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
      >
        {/* Moroccan Arch Pattern */}
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#C9A961', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#F4E4C1', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#C9A961', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="darkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1a1a1a', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#2D2D2D', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        {/* Outer Arch */}
        <path 
          d="M 10 60 Q 30 10, 50 60 L 50 70 L 10 70 Z" 
          fill="url(#darkGradient)" 
          stroke="url(#goldGradient)" 
          strokeWidth="2"
        />
        
        {/* Inner Arch */}
        <path 
          d="M 15 55 Q 30 20, 45 55 L 45 65 L 15 65 Z" 
          fill="url(#goldGradient)" 
          opacity="0.8"
        />
        
        {/* Moroccan Geometric Pattern */}
        <g transform="translate(30, 40)">
          {/* Center Diamond */}
          <path 
            d="M 0 -8 L 6 0 L 0 8 L -6 0 Z" 
            fill="url(#darkGradient)" 
            opacity="0.9"
          />
          {/* Corner Triangles */}
          <path d="M -12 -12 L -6 -6 L -12 0 Z" fill="url(#goldGradient)" opacity="0.7" />
          <path d="M 12 -12 L 6 -6 L 12 0 Z" fill="url(#goldGradient)" opacity="0.7" />
          <path d="M -12 12 L -6 6 L -12 0 Z" fill="url(#goldGradient)" opacity="0.7" />
          <path d="M 12 12 L 6 6 L 12 0 Z" fill="url(#goldGradient)" opacity="0.7" />
        </g>
        
        {/* Base Line */}
        <rect x="8" y="68" width="44" height="4" fill="url(#goldGradient)" />
      </svg>

      {/* Brand Name */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
        <span 
          style={{ 
            fontFamily: "'Playfair Display', 'Tajawal', serif",
            fontSize: `${width * 0.18}px`,
            fontWeight: '700',
            color: '#1a1a1a',
            letterSpacing: '0.5px'
          }}
        >
          ABOUOUWAYS
        </span>
        <span 
          style={{ 
            fontFamily: "'Tajawal', sans-serif",
            fontSize: `${width * 0.11}px`,
            fontWeight: '500',
            color: '#C9A961',
            letterSpacing: '1px'
          }}
        >
          LUXURY CRAFT
        </span>
      </div>

      <style jsx>{`
        .logo-container {
          transition: all 0.3s ease;
        }
        
        .logo-container:hover {
          transform: scale(1.02);
        }
        
        .logo-container:hover svg {
          filter: drop-shadow(0 4px 8px rgba(201, 169, 97, 0.3));
        }
      `}</style>
    </div>
  )
}