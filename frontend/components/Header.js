import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '../utils/CartContext'
import { useLanguage } from '../utils/LanguageContext'
import { getTranslation } from '../utils/translations'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cart } = useCart()
  const { language, changeLanguage, isRTL } = useLanguage()

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <header className="header" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container">
        <nav className="nav">
          <Link href="/" className="logo">
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #c1272d, #0066cc)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.2rem'
              }}>
                👑
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
                <span style={{ color: '#c1272d' }}>Abououways.ma</span>
                <span style={{ fontSize: '0.8rem', color: '#d4af37' }}>أبو أويس</span>
              </div>
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'none'
            }}
            className="mobile-menu-toggle"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          {/* Language Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={() => changeLanguage(language === 'ar' ? 'fr' : 'ar')}
              style={{
                background: 'linear-gradient(135deg, #c1272d, #0066cc)',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.05)'
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)'
              }}
            >
              {language === 'ar' ? 'FR' : 'AR'}
            </button>
          </div>

          {/* Navigation Links */}
          <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
            <li>
              <Link href="/" className="nav-link">
                {getTranslation(language, 'home')}
              </Link>
            </li>
            <li>
              <Link href="/products" className="nav-link">
                {getTranslation(language, 'products')}
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-link">
                {getTranslation(language, 'about')}
              </Link>
            </li>
            <li>
              <Link href="/cart" className="nav-link cart-icon">
                <span style={{ fontSize: '1.2rem' }}>🛒</span>
                {getTotalItems() > 0 && (
                  <span className="cart-count">{getTotalItems()}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: block !important;
          }

          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #c1272d, #0066cc);
            flex-direction: column;
            padding: 1rem;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }

          .nav-links.mobile-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .nav-links li {
            width: 100%;
            text-align: center;
            margin: 0.5rem 0;
          }
        }
      `}</style>
    </header>
  )
}