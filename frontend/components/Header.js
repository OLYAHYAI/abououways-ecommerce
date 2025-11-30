import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '../utils/CartContext'
import { useLanguage } from '../utils/LanguageContext'
import { getTranslation } from '../utils/translations'
import Logo from './Logo'
import LanguageToggle from './LanguageToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { cart } = useCart()
  const { language, isRTL } = useLanguage()

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  // Handle scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 20)
    })
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container">
        <nav className="nav">
          <Link href="/" className="logo-link">
            <Logo size="medium" />
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-desktop">
            <ul className="nav-links">
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
            </ul>

            <div className="nav-actions">
              <LanguageToggle />
              
              <Link href="/cart" className="cart-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" fill="currentColor"/>
                  <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" fill="currentColor"/>
                  <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {getTotalItems() > 0 && (
                  <span className="cart-count">{getTotalItems()}</span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                {getTranslation(language, 'home')}
              </Link>
            </li>
            <li>
              <Link href="/products" onClick={() => setIsMenuOpen(false)}>
                {getTranslation(language, 'products')}
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                {getTranslation(language, 'about')}
              </Link>
            </li>
            <li>
              <Link href="/cart" onClick={() => setIsMenuOpen(false)}>
                {getTranslation(language, 'cart')} ({getTotalItems()})
              </Link>
            </li>
          </ul>
          <div className="mobile-nav-actions">
            <LanguageToggle />
          </div>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(26, 26, 26, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(201, 169, 97, 0.2);
          transition: all 0.3s ease;
        }

        .header.scrolled {
          background: rgba(26, 26, 26, 0.98);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }

        .logo-link {
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .logo-link:hover {
          transform: scale(1.02);
        }

        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
          align-items: center;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #C9A961, #F4E4C1);
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #C9A961;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .cart-icon {
          position: relative;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          padding: 0.5rem;
          border-radius: 50%;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cart-icon:hover {
          color: #C9A961;
          background: rgba(201, 169, 97, 0.1);
        }

        .cart-count {
          position: absolute;
          top: -4px;
          right: -4px;
          background: linear-gradient(135deg, #C9A961, #F4E4C1);
          color: #1a1a1a;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(201, 169, 97, 0.3);
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .hamburger {
          display: block;
          width: 24px;
          height: 20px;
          position: relative;
        }

        .hamburger span {
          display: block;
          position: absolute;
          height: 2px;
          width: 100%;
          background: #C9A961;
          border-radius: 2px;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: all 0.3s ease;
        }

        .hamburger span:nth-child(1) {
          top: 0px;
        }

        .hamburger span:nth-child(2) {
          top: 9px;
        }

        .hamburger span:nth-child(3) {
          top: 18px;
        }

        .hamburger.active span:nth-child(1) {
          top: 9px;
          transform: rotate(135deg);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
          left: -60px;
        }

        .hamburger.active span:nth-child(3) {
          top: 9px;
          transform: rotate(-135deg);
        }

        .mobile-nav {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(26, 26, 26, 0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(201, 169, 97, 0.2);
          transform: translateY(-100%);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .mobile-nav.open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .mobile-nav-links {
          list-style: none;
          padding: 2rem;
          margin: 0;
        }

        .mobile-nav-links li {
          margin-bottom: 1.5rem;
        }

        .mobile-nav-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          transition: color 0.3s ease;
          display: block;
          padding: 0.5rem 0;
        }

        .mobile-nav-links a:hover {
          color: #C9A961;
        }

        .mobile-nav-actions {
          padding: 0 2rem 2rem;
          display: flex;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .nav-desktop {
            display: none;
          }

          .mobile-menu-toggle {
            display: block;
          }

          .nav {
            padding: 0.75rem 0;
          }
        }
      `}</style>
    </header>
  )
}