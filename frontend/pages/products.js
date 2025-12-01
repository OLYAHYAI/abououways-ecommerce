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
  const [sortBy, setSortBy] = useState('featured')
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)
  const { language, isRTL } = useLanguage()

  const categories = ['all', 'shoes']
  const priceRanges = [
    { label: 'all', min: 0, max: Infinity },
    { label: 'lessThan1500', min: 0, max: 1500 },
    { label: 'range1500to2000', min: 1500, max: 2000 },
    { label: 'moreThan2000', min: 2000, max: Infinity }
  ]

  const sortOptions = [
    { value: 'featured', label: language === 'ar' ? 'المميزة' : 'Mis en avant' },
    { value: 'price-low', label: language === 'ar' ? 'السعر: منخفض إلى مرتفع' : 'Prix: Croissant' },
    { value: 'price-high', label: language === 'ar' ? 'السعر: مرتفع إلى منخفض' : 'Prix: Décroissant' },
    { value: 'name', label: language === 'ar' ? 'الاسم' : 'Nom' }
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
      filtered = filtered.filter(product => {
        const name = product.name[language] || product.name
        const description = product.description[language] || product.description
        return name.toLowerCase().includes(searchTerm.toLowerCase()) ||
               description.toLowerCase().includes(searchTerm.toLowerCase())
      })
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'name':
        filtered.sort((a, b) => {
          const nameA = a.name[language] || a.name
          const nameB = b.name[language] || b.name
          return nameA.localeCompare(nameB)
        })
        break
      default: // featured
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
    }

    setFilteredProducts(filtered)
    setIsLoaded(true)
  }, [selectedCategory, selectedPriceRange, sortBy, searchTerm, language])

  const pageTitle = language === 'ar' 
    ? 'الأحذية الفاخرة - أبو أويس' 
    : 'Chaussures de Luxe - Abououways'

  const pageSubtitle = language === 'ar'
    ? 'اكتشف مجموعتنا الاستثنائية من الأحذية الجلدية المغربية الأصلية'
    : 'Découvrez notre collection exceptionnelle de chaussures en cuir marocaines authentiques'

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageSubtitle} />
        <meta name="keywords" content={language === 'ar' ? 'أحذية جلد مغربية، فاخرة، حرفية' : 'chaussures cuir marocain, luxe, artisanat'} />
      </Head>

      <div className={`luxury-products ${isLoaded ? 'loaded' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <Header />
        
        {/* Premium Page Header */}
        <section className="products-hero">
          <div className="hero-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <h1 className="page-title">
                {language === 'ar' ? 'مجموعة الأحذية الفاخرة' : 'Collection de Chaussures de Luxe'}
              </h1>
              <p className="page-subtitle">
                {pageSubtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="filters-luxury">
          <div className="container">
            <div className="filters-wrapper">
              {/* Sidebar Filters */}
              <div className="filters-sidebar">
                <h3 className="filters-title">
                  {language === 'ar' ? 'التصفية' : 'Filtres'}
                </h3>
                
                {/* Search */}
                <div className="filter-group">
                  <label className="filter-label">
                    {language === 'ar' ? 'البحث' : 'Recherche'}
                  </label>
                  <div className="search-input-wrapper">
                    <input
                      type="text"
                      placeholder={language === 'ar' ? 'ابحث عن منتج...' : 'Rechercher un produit...'}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="search-input"
                    />
                    <span className="search-icon">🔍</span>
                  </div>
                </div>

                {/* Category Filter */}
                <div className="filter-group">
                  <label className="filter-label">
                    {language === 'ar' ? 'الفئة' : 'Catégorie'}
                  </label>
                  <div className="category-options">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`category-option ${selectedCategory === category ? 'active' : ''}`}
                      >
                        {category === 'all' 
                          ? (language === 'ar' ? 'الكل' : 'Tous')
                          : (language === 'ar' ? 'أحذية' : 'Chaussures')
                        }
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="filter-group">
                  <label className="filter-label">
                    {language === 'ar' ? 'نطاق السعر' : 'Gamme de prix'}
                  </label>
                  <div className="price-options">
                    {priceRanges.map(range => (
                      <button
                        key={range.label}
                        onClick={() => setSelectedPriceRange(range.label)}
                        className={`price-option ${selectedPriceRange === range.label ? 'active' : ''}`}
                      >
                        {range.label === 'all' 
                          ? (language === 'ar' ? 'الكل' : 'Tous')
                          : range.label === 'lessThan1500'
                          ? (language === 'ar' ? 'أقل من 1500 درهم' : 'Moins de 1500 DH')
                          : range.label === 'range1500to2000'
                          ? (language === 'ar' ? '1500 - 2000 درهم' : '1500 - 2000 DH')
                          : (language === 'ar' ? 'أكثر من 2000 درهم' : 'Plus de 2000 DH')
                        }
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="products-main">
                {/* Top Bar */}
                <div className="products-topbar">
                  <div className="results-count">
                    <span className="count-number">{filteredProducts.length}</span>
                    <span className="count-text">
                      {language === 'ar' ? 'منتج متوفر' : 'produit(s) disponible(s)'}
                    </span>
                  </div>
                  
                  <div className="sort-wrapper">
                    <label className="sort-label">
                      {language === 'ar' ? 'ترتيب حسب' : 'Trier par'}
                    </label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="sort-select"
                    >
                      {sortOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="products-grid-luxury">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                      <div 
                        key={product.id} 
                        className="product-item"
                        style={{ 
                          animationDelay: `${index * 0.1}s`,
                          opacity: isLoaded ? 1 : 0,
                          transform: isLoaded ? 'translateY(0)' : 'translateY(20px)'
                        }}
                      >
                        <ProductCard product={product} />
                      </div>
                    ))
                   ) : (
                    <div className="no-products">
                      <div className="no-products-icon">🔍</div>
                      <h3 className="no-products-title">
                        {language === 'ar' ? 'لا توجد منتجات' : 'Aucun produit trouvé'}
                      </h3>
                      <p className="no-products-text">
                        {language === 'ar' 
                          ? 'جرب تغيير الفلاتر أو البحث عن شيء آخر'
                          : 'Essayez de modifier les filtres ou de rechercher autre chose'
                        }
                      </p>
                      <button 
                        onClick={() => {
                          setSelectedCategory('all')
                          setSelectedPriceRange('all')
                          setSearchTerm('')
                          setSortBy('featured')
                        }}
                        className="btn btn-outline"
                      >
                        {language === 'ar' ? 'إعادة تعيين الفلاتر' : 'Réinitialiser les filtres'}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="quality-assurance">
          <div className="container">
            <div className="quality-content">
              <h2 className="quality-title">
                {language === 'ar' ? 'ضمان الجودة والأصالة' : 'Garantie de Qualité et d\'Authenticité'}
              </h2>
              <p className="quality-subtitle">
                {language === 'ar'
                  ? 'جميع منتجاتنا مصنوعة يدوياً من خامات عالية الجودة وتحمل ضمان الأصالة المغربية'
                  : 'Tous nos produits sont fabriqués à la main à partir de matériaux de haute qualité et portent la garantie d\'authenticité marocaine'
                }
              </p>
              
              <div className="quality-features">
                <div className="quality-feature">
                  <div className="quality-icon">✨</div>
                  <h4>{language === 'ar' ? 'جودة استثنائية' : 'Qualité Exceptionnelle'}</h4>
                  <p>{language === 'ar' ? 'أفضل الخامات والخياطة الدقيقة' : 'Meilleurs matériaux et couture précise'}</p>
                </div>
                <div className="quality-feature">
                  <div className="quality-icon">🏆</div>
                  <h4>{language === 'ar' ? 'أصالة مضمونة' : 'Authenticité Garantie'}</h4>
                  <p>{language === 'ar' ? 'منتجات مغربية 100% أصيلة' : 'Produits marocains 100% authentiques'}</p>
                </div>
                <div className="quality-feature">
                  <div className="quality-icon">💎</div>
                  <h4>{language === 'ar' ? 'رضا العملاء' : 'Satisfaction Client'}</h4>
                  <p>{language === 'ar' ? 'آلاف العملاء السعداء' : 'Des milliers de clients satisfaits'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <style jsx>{`
        .luxury-products {
          min-height: 100vh;
          background: var(--cream);
        }

        .luxury-products.loaded {
          animation: fadeIn 0.6s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Products Hero */
        .products-hero {
          position: relative;
          height: 40vh;
          min-height: 300px;
          background: linear-gradient(135deg, rgba(194, 39, 45, 0.9), rgba(0, 102, 204, 0.9)), url('https://api.abououways.ma/uploads/Produit_page_acc856ff6a.png');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: white;
        }

        .page-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .page-subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Filters Section */
        .filters-luxury {
          padding: 3rem 0;
        }

        .filters-wrapper {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 3rem;
        }

        .filters-sidebar {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: var(--shadow);
          height: fit-content;
          position: sticky;
          top: 100px;
        }

        .filters-title {
          font-size: 1.3rem;
          margin-bottom: 2rem;
          color: var(--primary);
          font-weight: 600;
        }

        .filter-group {
          margin-bottom: 2rem;
        }

        .filter-label {
          display: block;
          margin-bottom: 0.75rem;
          font-weight: 600;
          color: var(--text);
        }

        .search-input-wrapper {
          position: relative;
        }

        .search-input {
          width: 100%;
          padding: 0.875rem 1rem 0.875rem 2.5rem;
          border: 2px solid rgba(201, 169, 97, 0.2);
          border-radius: 12px;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(201, 169, 97, 0.1);
        }

        .search-icon {
          position: absolute;
          left: 0.875rem;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0.5;
        }

        .category-options,
        .price-options {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .category-option,
        .price-option {
          padding: 0.75rem 1rem;
          border: 2px solid rgba(201, 169, 97, 0.2);
          border-radius: 10px;
          background: white;
          text-align: right;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .category-option:hover,
        .price-option:hover {
          border-color: rgba(201, 169, 97, 0.4);
          background: rgba(201, 169, 97, 0.05);
        }

        .category-option.active,
        .price-option.active {
          background: var(--gold);
          color: var(--primary);
          border-color: var(--gold);
        }

        /* Products Main */
        .products-main {
          min-height: 600px;
        }

        .products-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: white;
          border-radius: 15px;
          box-shadow: var(--shadow);
        }

        .results-count {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .count-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--gold);
        }

        .count-text {
          color: var(--muted);
        }

        .sort-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .sort-label {
          font-weight: 600;
          color: var(--text);
        }

        .sort-select {
          padding: 0.5rem 1rem;
          border: 2px solid rgba(201, 169, 97, 0.2);
          border-radius: 8px;
          background: white;
          cursor: pointer;
          font-size: 0.9rem;
        }

        .sort-select:focus {
          outline: none;
          border-color: var(--gold);
        }

        /* Products Grid */
        .products-grid-luxury {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }

        .product-item {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* No Products State */
        .no-products {
          grid-column: 1 / -1;
          text-align: center;
          padding: 4rem 2rem;
        }

        .no-products-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .no-products-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--primary);
        }

        .no-products-text {
          color: var(--muted);
          margin-bottom: 2rem;
        }

        /* Quality Assurance */
        .quality-assurance {
          padding: 4rem 0;
          background: white;
        }

        .quality-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .quality-title {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--primary);
        }

        .quality-subtitle {
          font-size: 1.1rem;
          color: var(--muted);
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        .quality-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .quality-feature {
          text-align: center;
        }

        .quality-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .quality-feature h4 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: var(--primary);
        }

        .quality-feature p {
          color: var(--muted);
          font-size: 0.9rem;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .filters-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .filters-sidebar {
            position: static;
            order: 2;
          }

          .products-main {
            order: 1;
          }
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2rem;
          }

          .products-grid-luxury {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .products-topbar {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .quality-features {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </>
  )
}