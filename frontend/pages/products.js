import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { products } from '../utils/mockData'
import { useLanguage } from '../utils/LanguageContext'
import { getTranslation } from '../utils/translations'

export default function Products() {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPriceRange, setSelectedPriceRange] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const { language, isRTL } = useLanguage()

  const categories = ['all', 'قندورة', 'أحذية جلد أصيل']
  const priceRanges = [
    { label: 'all', min: 0, max: Infinity },
    { label: 'lessThan500', min: 0, max: 500 },
    { label: 'range500to1000', min: 500, max: 1000 },
    { label: 'range1000to2000', min: 1000, max: 2000 },
    { label: 'moreThan2000', min: 2000, max: Infinity }
  ]

  useEffect(() => {
    let filtered = products

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Filter by price range
    const priceRange = priceRanges.find(range => range.label === selectedPriceRange)
    if (priceRange) {
      filtered = filtered.filter(product => 
        product.price >= priceRange.min && product.price <= priceRange.max
      )
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredProducts(filtered)
  }, [selectedCategory, selectedPriceRange, searchTerm])

  return (
    <>
      <Head>
        <title>{getTranslation(language, 'products')} - {getTranslation(language, 'siteTitle')}</title>
        <meta name="description" content={getTranslation(language, 'siteDescription')} />
        <meta name="keywords" content={getTranslation(language, 'keywords')} />
      </Head>

      <div className="moroccan-pattern" dir={isRTL ? 'rtl' : 'ltr'}>
        <Header />
        
        {/* Page Header */}
        <section className="page-header" style={{
          background: `linear-gradient(135deg, rgba(194, 39, 45, 0.9), rgba(0, 102, 204, 0.9)), url('https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1600&h=400&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '80px 0',
          textAlign: 'center'
        }}>
          <div className="container">
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>
              {getTranslation(language, 'products')}
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '0' }}>
              اكتشف مجموعتنا الفاخرة من الملابس التقليدية المغربية الأصلية
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="filters" style={{ padding: '40px 0', backgroundColor: 'white' }}>
          <div className="container">
            <div className="filter-controls" style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              {/* Search */}
              <div style={{ flex: '1', minWidth: '250px' }}>
                <input
                  type="text"
                  placeholder={getTranslation(language, 'search')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '2px solid #dee2e6',
                    borderRadius: '25px',
                    fontSize: '1rem',
                    fontFamily: 'Tajawal, sans-serif'
                  }}
                />
              </div>

              {/* Category Filter */}
              <div style={{ minWidth: '200px' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  {getTranslation(language, 'category')}
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="form-select"
                  style={{ borderRadius: '25px' }}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? getTranslation(language, 'all') : 
                       category === 'قندورة' ? getTranslation(language, 'gandoura') :
                       getTranslation(language, 'leatherShoes')}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div style={{ minWidth: '200px' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  {getTranslation(language, 'priceRange')}
                </label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="form-select"
                  style={{ borderRadius: '25px' }}
                >
                  {priceRanges.map(range => (
                    <option key={range.label} value={range.label}>
                      {getTranslation(language, range.label)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <p style={{ fontSize: '1.1rem', color: '#6c757d' }}>
                {getTranslation(language, 'productsFound')}: {filteredProducts.length}
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="products-grid" style={{ padding: '60px 0' }}>
          <div className="container">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
             ) : (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <h3 style={{ color: '#c1272d', marginBottom: '1rem' }}>
                  {getTranslation(language, 'noProductsFound')}
                </h3>
                <p style={{ fontSize: '1.1rem', color: '#6c757d' }}>
                  {getTranslation(language, 'tryDifferentFilters')}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Info Section */}
        <section className="info-section" style={{
          background: `linear-gradient(135deg, #07632a, #0066cc)`,
          color: 'white',
          padding: '60px 0',
          textAlign: 'center'
        }}>
          <div className="container">
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>
              ضمان الجودة والأصالة
            </h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              جميع منتجاتنا مصنوعة يدوياً من خامات عالية الجودة وتحمل ضمان الأصالة المغربية
            </p>
            <div className="grid grid-3">
              <div>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#d4af37',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '1.5rem'
                }}>
                  ✓
                </div>
                <h4 style={{ marginBottom: '0.5rem' }}>جودة عالية</h4>
                <p>أفضل الخامات والخياطة الدقيقة</p>
              </div>
              <div>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#d4af37',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '1.5rem'
                }}>
                  ✓
                </div>
                <h4 style={{ marginBottom: '0.5rem' }}>أصالة مضمونة</h4>
                <p>منتجات مغربية 100% أصيلة</p>
              </div>
              <div>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#d4af37',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '1.5rem'
                }}>
                  ✓
                </div>
                <h4 style={{ marginBottom: '0.5rem' }}>رضا العملاء</h4>
                <p>آلاف العملاء السعداء</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}