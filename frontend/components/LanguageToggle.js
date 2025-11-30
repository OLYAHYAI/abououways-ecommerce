import React from 'react'
import { useLanguage } from '../utils/LanguageContext'

export default function LanguageToggle({ className = "" }) {
  const { language, changeLanguage } = useLanguage()

  return (
    <div className={`language-toggle ${className}`}>
      <button
        onClick={() => changeLanguage(language === 'ar' ? 'fr' : 'ar')}
        className="toggle-button"
        aria-label="Toggle language"
      >
        <div className="toggle-content">
          <span className={`flag ${language === 'ar' ? 'active' : ''}`}>
            🇲🇦
          </span>
          <span className="divider"></span>
          <span className={`flag ${language === 'fr' ? 'active' : ''}`}>
            🇫🇷
          </span>
        </div>
        <div className="toggle-indicator" style={{
          transform: language === 'ar' ? 'translateX(0)' : 'translateX(100%)'
        }}></div>
      </button>

      <style jsx>{`
        .language-toggle {
          position: relative;
          z-index: 100;
        }

        .toggle-button {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(201, 169, 97, 0.3);
          border-radius: 25px;
          padding: 8px 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          overflow: hidden;
          min-width: 100px;
        }

        .toggle-button:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(201, 169, 97, 0.6);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(201, 169, 97, 0.2);
        }

        .toggle-content {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 2;
        }

        .flag {
          font-size: 18px;
          transition: all 0.3s ease;
          opacity: 0.6;
          filter: grayscale(0.3);
        }

        .flag.active {
          opacity: 1;
          filter: grayscale(0);
          transform: scale(1.1);
        }

        .divider {
          width: 1px;
          height: 20px;
          background: rgba(201, 169, 97, 0.3);
          margin: 0 8px;
        }

        .toggle-indicator {
          position: absolute;
          top: 2px;
          left: 2px;
          width: calc(50% - 4px);
          height: calc(100% - 4px);
          background: linear-gradient(135deg, #C9A961, #F4E4C1);
          border-radius: 20px;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
          box-shadow: 0 2px 8px rgba(201, 169, 97, 0.3);
        }

        @media (max-width: 768px) {
          .toggle-button {
            min-width: 80px;
            padding: 6px 12px;
          }

          .flag {
            font-size: 16px;
          }

          .divider {
            height: 16px;
            margin: 0 6px;
          }
        }
      `}</style>
    </div>
  )
}