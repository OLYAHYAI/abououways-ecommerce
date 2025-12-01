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

      
      {/* Product Image */}
      <Link href={`/product/${product.id}`}>
        <div 
          className="image-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={product.image}
            alt={product.name?.[language] || product.name}
            className="card-image"
          />
        </div>
      </Link>

      <div className="card-content">
        {/* Title */}
        <h3 className="card-title">
          {product.name?.[language] || product.name}
        </h3>
        
        {/* Meta Information */}
        <div className="product-meta">
          <span className="material-info">
            {product.material?.[language] || product.material}
          </span>
          <span className="origin-info">
            {product.origin?.[language] || product.origin}
          </span>
        </div>

        {/* Description */}
        <p className="card-description">
          {product.description?.[language] || product.description}
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
            {getTranslation(language, 'sizes')}: {product.sizes.join(', ')}
          </div>
        </div>

        {/* Action Button */}
        <div className="product-actions">
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock || isAdding}
            className={`btn ${isAdding ? 'btn-success' : 'btn-primary'}`}
          >
            {isAdding ? (
              <span>✓ {getTranslation(language, 'added') || 'Added'}</span>
            ) : !product.inStock ? (
              getTranslation(language, 'notAvailable')
            ) : (
              getTranslation(language, 'addToCart')
            )}
          </button>
        </div>
      </div>

      <style jsx>{`
        .product-card {
          position: relative;
          overflow: visible;
        }



        .image-container {
          position: relative;
          overflow: hidden;
        }



        .product-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          gap: 0.5rem;
        }

        .material-info {
          font-size: 0.9rem;
          color: #666;
        }

        .origin-info {
          font-size: 0.9rem;
          color: #666;
        }

        .price-section {
          margin: 1.5rem 0;
        }

        .sizes-preview {
          margin-bottom: 1rem;
        }

        .sizes-label {
          font-size: 0.875rem;
          color: #666;
        }

        .product-actions {
          margin-top: 1rem;
        }

        .btn-success {
          background: #28a745 !important;
          color: white !important;
        }

        .btn-primary {
          background: #c1272d;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
        }

        .btn-primary:hover {
          background: #a02026;
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