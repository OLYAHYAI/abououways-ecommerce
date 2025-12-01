import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { products } from '../../utils/mockData'
import { useCart } from '../../utils/CartContext'
import { useLanguage } from '../../utils/LanguageContext'
import { getTranslation } from '../../utils/translations'

export async function getStaticPaths() {
  const paths = products.map((product) => ({
    params: { id: product.id.toString() }
  }))
  
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const product = products.find(p => p.id.toString() === params.id)
  
  return {
    props: {
      productData: product || null
    }
  }
}

export default function ProductDetail({ productData }) {
  const router = useRouter()
  const { addToCart } = useCart()
  const { language, isRTL } = useLanguage()
  
  const [product, setProduct] = useState(productData)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  useEffect(() => {
    if (productData) {
      setProduct(productData)
      setSelectedSize(productData.sizes?.[0] || '')
      setSelectedColor(productData.colors?.[0] || '')
    }
  }, [productData])

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        ...product,
        selectedSize,
        selectedColor,
        quantity
      })
      alert(getTranslation(language, 'addedToCart'))
    }
  }

  if (!product) {
    return (
      <div className="moroccan-pattern" dir={isRTL ? 'rtl' : 'ltr'}>
        <Header />
        <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
          <h2>{getTranslation(language, 'productNotFound')}</h2>
          <Link href="/products">
            <button className="btn btn-primary" style={{ marginTop: '2rem' }}>
              {getTranslation(language, 'backToProducts')}
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{product.name?.[language] || product.name} - {getTranslation(language, 'siteTitle')}</title>
        <meta name="description" content={product.description?.[language] || product.description} />
      </Head>

      <div className="moroccan-pattern" dir={isRTL ? 'rtl' : 'ltr'}>
        <Header />

        {/* Breadcrumb */}
        <div className="container" style={{ padding: '2rem 0 1rem' }}>
            <nav style={{ fontSize: '0.9rem', color: '#6c757d' }}>
              <Link href="/" style={{ color: '#0066cc' }}>{getTranslation(language, 'home')}</Link>
              {' > '}
              <Link href="/products" style={{ color: '#0066cc' }}>{getTranslation(language, 'products')}</Link>
              {' > '}
              <span>{product.name?.[language] || product.name}</span>
            </nav>
        </div>

        {/* Product Detail */}
        <section className="product-detail" style={{ padding: '40px 0 80px' }}>
          <div className="container">
            <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'start' }}>
              
              {/* Product Images */}
              <div>
                <div style={{
                  width: '100%',
                  height: '500px',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  marginBottom: '1rem',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}>
                  <img 
                    src={product.images ? product.images[selectedImageIndex] : product.image} 
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      backgroundColor: '#f8f9fa',
                      transition: 'opacity 0.3s ease'
                    }}
                  />
                </div>
                
                {/* Image Thumbnails */}
                {product.images && product.images.length > 1 && (
                  <div style={{ 
                    display: 'flex', 
                    gap: '0.5rem', 
                    marginTop: '1rem',
                    justifyContent: 'center'
                  }}>
                    {product.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${product.name} ${index + 1}`}
                        onClick={() => setSelectedImageIndex(index)}
                        style={{
                          width: '80px',
                          height: '80px',
                          objectFit: 'contain',
                          backgroundColor: '#f8f9fa',
                          borderRadius: '8px',
                          border: selectedImageIndex === index ? '2px solid #c1272d' : '1px solid #ddd',
                          cursor: 'pointer',
                          opacity: selectedImageIndex === index ? 1 : 0.7,
                          transition: 'all 0.3s ease'
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div>
                <h1 style={{ 
                  fontSize: '2.5rem', 
                  color: '#c1272d', 
                  marginBottom: '1rem' 
                }}>
                  {product.name?.[language] || product.name}
                </h1>

                <div style={{ 
                  fontSize: '2rem', 
                  color: '#0066cc', 
                  fontWeight: 'bold',
                  marginBottom: '1.5rem' 
                }}>
                  {product.price} {getTranslation(language, 'currency')}
                </div>

                <div style={{
                  padding: '1.5rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '10px',
                  marginBottom: '2rem'
                }}>
                  <p style={{ 
                    fontSize: '1.1rem', 
                    lineHeight: '1.8',
                    margin: 0 
                  }}>
                    {product.description?.[language] || product.description}
                  </p>
                </div>

                {/* Product Details */}
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <strong>{getTranslation(language, 'category')}:</strong> {product.category}
                  </div>
                  {product.artisan && (
                    <div style={{ marginBottom: '1rem' }}>
                      <strong>{getTranslation(language, 'artisan')}:</strong> {product.artisan}
                    </div>
                  )}
                   {product.material && (
                     <div style={{ marginBottom: '1rem' }}>
                       <strong>{getTranslation(language, 'material')}:</strong> {product.material?.[language] || product.material}
                     </div>
                   )}
                   {product.origin && (
                     <div style={{ marginBottom: '1rem' }}>
                       <strong>{getTranslation(language, 'origin')}:</strong> {product.origin?.[language] || product.origin}
                     </div>
                   )}
                  <div style={{ marginBottom: '1rem' }}>
                    <strong>{getTranslation(language, 'availability')}:</strong>{' '}
                    <span style={{ color: product.inStock ? '#28a745' : '#dc3545' }}>
                      {product.inStock ? getTranslation(language, 'inStock') : getTranslation(language, 'outOfStock')}
                    </span>
                  </div>
                </div>

                {/* Size Selection */}
                {product.sizes && product.sizes.length > 0 && (
                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.75rem',
                      fontWeight: '600',
                      fontSize: '1.1rem'
                    }}>
                      {getTranslation(language, 'size')}:
                    </label>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {product.sizes.map(size => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          style={{
                            padding: '0.75rem 1.5rem',
                            border: selectedSize === size ? '2px solid #c1272d' : '2px solid #dee2e6',
                            backgroundColor: selectedSize === size ? '#c1272d' : 'white',
                            color: selectedSize === size ? 'white' : '#333',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: '500',
                            transition: 'all 0.3s'
                          }}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Color Selection */}
                {product.colors && product.colors.length > 0 && (
                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '0.75rem',
                      fontWeight: '600',
                      fontSize: '1.1rem'
                    }}>
                      {getTranslation(language, 'color')}:
                    </label>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {product.colors.map((color) => (
                        <button
                          key={color.hex}
                          onClick={() => setSelectedColor(color)}
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: color.hex,
                            border: selectedColor?.hex === color.hex ? '3px solid #c1272d' : '2px solid #ddd',
                            cursor: 'pointer',
                            position: 'relative',
                            transition: 'all 0.3s ease'
                          }}
                          title={color.name[language]}
                        >
                          {selectedColor?.hex === color.hex && (
                            <span style={{ 
                              position: 'absolute', 
                              top: '50%', 
                              left: '50%', 
                              transform: 'translate(-50%, -50%)',
                              color: 'white',
                              fontSize: '1.2rem'
                            }}>✓</span>
                          )}
                        </button>
                      ))}
                    </div>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
                      {getTranslation(language, 'selectedColor')}: {selectedColor?.name?.[language] || ''}
                    </p>
                  </div>
                )}

                {/* Quantity */}
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.75rem',
                    fontWeight: '600',
                    fontSize: '1.1rem'
                  }}>
                    {getTranslation(language, 'quantity')}:
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      style={{
                        width: '40px',
                        height: '40px',
                        border: '2px solid #dee2e6',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '1.2rem'
                      }}
                    >
                      -
                    </button>
                    <span style={{ 
                      fontSize: '1.2rem', 
                      fontWeight: '600',
                      minWidth: '40px',
                      textAlign: 'center'
                    }}>
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      style={{
                        width: '40px',
                        height: '40px',
                        border: '2px solid #dee2e6',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '1.2rem'
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '1rem 2rem',
                    fontSize: '1.2rem',
                    marginBottom: '1rem'
                  }}
                >
                  {getTranslation(language, 'addToCart')}
                </button>

                <Link href="/products">
                  <button className="btn btn-secondary" style={{ width: '100%', padding: '1rem 2rem' }}>
                    {getTranslation(language, 'backToProducts')}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
