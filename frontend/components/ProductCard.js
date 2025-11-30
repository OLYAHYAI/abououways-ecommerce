import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '../utils/CartContext'
import { useLanguage } from '../utils/LanguageContext'
import { getTranslation } from '../utils/translations'
import toast from 'react-hot-toast'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { language } = useLanguage()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = (e) => {
    e.preventDefault()
    setIsAdding(true)
    
    addToCart(product)
    
    setTimeout(() => {
      setIsAdding(false)
    }, 1000)
  }

  return (
    <div className="card product-card">
      {product.inStock && (
        <div className="product-badge">{getTranslation(language, 'available')}</div>
      )}
      
      <Link href={`/product/${product.id}`}>
        <img 
          src={product.image} 
          alt={product.name}
          className="card-image"
          style={{ cursor: 'pointer' }}
        />
      </Link>

      <div className="card-content">
        <h3 className="card-title">{product.name}</h3>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '0.25rem 0.75rem', 
            borderRadius: '15px', 
            fontSize: '0.9rem',
            color: '#6c757d'
          }}>
            {product.category}
          </span>
          <span style={{ 
            backgroundColor: '#d4af37', 
            color: 'white', 
            padding: '0.25rem 0.75rem', 
            borderRadius: '15px', 
            fontSize: '0.9rem'
          }}>
            {product.material}
          </span>
        </div>

        <p style={{ 
          color: '#6c757d', 
          fontSize: '0.95rem', 
          marginBottom: '1rem',
          lineHeight: '1.5',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {product.description}
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div className="card-price">
            {product.price} درهم
          </div>
          <div style={{ fontSize: '0.85rem', color: '#6c757d' }}>
            📍 {product.origin}
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <div style={{ fontSize: '0.9rem', color: '#6c757d', marginBottom: '0.5rem' }}>
            {getTranslation(language, 'sizes')}:
          </div>
          <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
            {product.sizes.slice(0, 4).map((size, index) => (
              <span 
                key={index}
                style={{ 
                  backgroundColor: '#f8f9fa', 
                  padding: '0.25rem 0.5rem', 
                  borderRadius: '5px', 
                  fontSize: '0.8rem',
                  border: '1px solid #dee2e6'
                }}
              >
                {size}
              </span>
            ))}
            {product.sizes.length > 4 && (
              <span style={{ 
                backgroundColor: '#f8f9fa', 
                padding: '0.25rem 0.5rem', 
                borderRadius: '5px', 
                fontSize: '0.8rem',
                border: '1px solid #dee2e6'
              }}>
                +{product.sizes.length - 4}
              </span>
            )}
          </div>
        </div>

        <div className="product-actions">
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock || isAdding}
            className="btn btn-primary"
            style={{
              flex: '1',
              fontSize: '0.95rem',
              padding: '0.75rem',
              backgroundColor: (!product.inStock || isAdding) ? '#6c757d' : undefined,
              cursor: (!product.inStock || isAdding) ? 'not-allowed' : 'pointer'
            }}
          >
            {isAdding ? getTranslation(language, 'available') : !product.inStock ? getTranslation(language, 'notAvailable') : getTranslation(language, 'addToCart')}
          </button>
          
          <Link href={`/product/${product.id}`}>
            <button 
              className="btn btn-outline"
              style={{
                padding: '0.75rem 1rem',
                fontSize: '0.95rem'
              }}
            >
              {getTranslation(language, 'viewDetails')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}