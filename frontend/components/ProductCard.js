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
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <Link href={`/product/${product.id}`}>
        <div className="image-container">
          <img
            src={isHovered && product.hoverImage ? product.hoverImage : product.image}
            alt={product.name?.[language] || product.name}
            className="product-image"
          />
        </div>
      </Link>

      <div className="card-content">
        {/* Title */}
        <h3 className="product-name">
          {product.name?.[language] || product.name}
        </h3>
        
        {/* Price */}
        <p className="product-price">
          {product.price.toLocaleString()} {language === 'ar' ? 'درهم' : 'DH'}
        </p>

        {/* Action Button */}
        <div className="product-actions">
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock || isAdding}
            className={`btn-add-cart ${isAdding ? 'btn-success' : ''}`}
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
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }

        .image-container {
          position: relative;
          overflow: hidden;
        }

        .product-image {
          width: 100%;
          height: 300px;
          object-fit: contain;
          background-color: #f8f9fa;
          transition: opacity 0.3s ease;
        }

        .card-content {
          padding: 1.5rem;
          text-align: center;
        }

        .product-name {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: #333;
          font-weight: 600;
          line-height: 1.3;
        }

        .product-price {
          font-size: 1.5rem;
          font-weight: bold;
          color: #c1272d;
          margin-bottom: 1rem;
        }

        .product-actions {
          margin-top: 1rem;
        }

        .btn-add-cart {
          width: 100%;
          padding: 0.75rem;
          background: #c1272d;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 500;
          transition: background-color 0.3s ease;
        }

        .btn-add-cart:hover {
          background: #a02026;
        }

        .btn-add-cart.btn-success {
          background: #28a745;
        }

        @media (max-width: 768px) {
          .product-image {
            height: 250px;
          }
          
          .card-content {
            padding: 1rem;
          }
          
          .product-name {
            font-size: 1rem;
          }
          
          .product-price {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </div>
  )
}