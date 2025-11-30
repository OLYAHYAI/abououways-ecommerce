import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '../utils/CartContext'
import { useLanguage } from '../utils/LanguageContext'
import { getTranslation } from '../utils/translations'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { language } = useLanguage()
  const [isAdding, setIsAdding] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsAdding(true)
    
    addToCart(product)
    
    setTimeout(() => {
      setIsAdding(false)
    }, 1500)
  }

  return (
    <div 
      className="card product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="product-badges">
        {product.isNew && (
          <div className="product-badge new">
            {getTranslation(language, 'new') || 'NEW'}
          </div>
        )}
        {product.inStock && (
          <div className="product-badge available">
            {getTranslation(language, 'available')}
          </div>
        )}
      </div>
      
      {/* Product Image */}
      <Link href={`/product/${product.id}`}>
        <div className="image-container">
          <img 
            src={product.image} 
            alt={product.name[language] || product.name}
            className="card-image"
          />
          <div className="image-overlay">
            <span className="view-details-text">
              {getTranslation(language, 'viewDetails')}
            </span>
          </div>
        </div>
      </Link>

      <div className="card-content">
        {/* Title */}
        <h3 className="card-title">
          {product.name[language] || product.name}
        </h3>
        
        {/* Meta Information */}
        <div className="product-meta">
          <span className="material-badge">
            ✨ {product.material[language] || product.material}
          </span>
          <span className="origin-badge">
            📍 {product.origin[language] || product.origin}
          </span>
        </div>

        {/* Description */}
        <p className="card-description">
          {product.description[language] || product.description}
        </p>

        {/* Price */}
        <div className="price-section">
          <div className="card-price">
            {product.price.toLocaleString()} {language === 'ar' ? 'درهم' : 'DH'}
          </div>
        </div>

        {/* Sizes Preview */}
        <div className="sizes-preview">
          <div className="sizes-label">
            {getTranslation(language, 'sizes')}:
          </div>
          <div className="sizes-list">
            {product.sizes.slice(0, 4).map((size, index) => (
              <span key={index} className="size-chip">
                {size}
              </span>
            ))}
            {product.sizes.length > 4 && (
              <span className="size-chip more">
                +{product.sizes.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="product-actions">
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock || isAdding}
            className={`btn ${isAdding ? 'btn-success' : 'btn-luxury'}`}
            style={{
              flex: '1',
              fontSize: '0.95rem',
              padding: '0.875rem',
              opacity: (!product.inStock || isAdding) ? 0.7 : 1,
              cursor: (!product.inStock || isAdding) ? 'not-allowed' : 'pointer'
            }}
          >
            {isAdding ? (
              <span>✓ {getTranslation(language, 'added') || 'Added'}</span>
            ) : !product.inStock ? (
              getTranslation(language, 'notAvailable')
            ) : (
              getTranslation(language, 'addToCart')
            )}
          </button>
          
          <Link href={`/product/${product.id}`}>
            <button className="btn btn-outline">
              {getTranslation(language, 'viewDetails')}
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .product-card {
          position: relative;
          overflow: visible;
        }

        .product-badges {
          position: absolute;
          top: 1rem;
          left: 1rem;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .product-badge {
          padding: 0.375rem 0.875rem;
          border-radius: 25px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .product-badge.new {
          background: linear-gradient(135deg, #C9A961, #F4E4C1);
          color: #1a1a1a;
        }

        .product-badge.available {
          background: rgba(26, 26, 26, 0.9);
          color: white;
          backdrop-filter: blur(10px);
        }

        .image-container {
          position: relative;
          overflow: hidden;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(26, 26, 26, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          backdrop-filter: blur(2px);
        }

        .product-card:hover .image-overlay {
          opacity: 1;
        }

        .view-details-text {
          color: white;
          font-weight: 500;
          font-size: 1rem;
          letter-spacing: 0.5px;
        }

        .product-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          gap: 0.5rem;
        }

        .material-badge {
          background: linear-gradient(135deg, #C9A961, #F4E4C1);
          color: #1a1a1a;
          padding: 0.375rem 0.875rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          flex: 1;
          text-align: center;
        }

        .origin-badge {
          background: rgba(156, 163, 175, 0.1);
          color: #6b7280;
          padding: 0.375rem 0.875rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .price-section {
          margin: 1.5rem 0;
        }

        .sizes-preview {
          margin-bottom: 1.5rem;
        }

        .sizes-label {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .sizes-list {
          display: flex;
          gap: 0.375rem;
          flex-wrap: wrap;
        }

        .size-chip {
          background: rgba(156, 163, 175, 0.1);
          color: #4b5563;
          padding: 0.25rem 0.625rem;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 500;
          border: 1px solid rgba(156, 163, 175, 0.2);
          transition: all 0.2s ease;
        }

        .size-chip:hover {
          background: rgba(201, 169, 97, 0.1);
          border-color: rgba(201, 169, 97, 0.3);
          color: #92400e;
        }

        .size-chip.more {
          background: rgba(201, 169, 97, 0.1);
          color: #92400e;
          border-color: rgba(201, 169, 97, 0.3);
        }

        .product-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }

        .btn-success {
          background: linear-gradient(135deg, #10b981, #059669) !important;
          color: white !important;
        }

        @media (max-width: 768px) {
          .product-meta {
            flex-direction: column;
            gap: 0.75rem;
          }

          .material-badge,
          .origin-badge {
            width: 100%;
            text-align: center;
          }

          .product-actions {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}