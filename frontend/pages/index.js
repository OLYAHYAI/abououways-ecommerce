import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { products } from '../utils/mockData'
import { useLanguage } from '../utils/LanguageContext'
import { getTranslation } from '../utils/translations'

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const { language, isRTL } = useLanguage()

  useEffect(() => {
    // Get first 3 products as featured
    setFeaturedProducts(products.slice(0, 3))
    setIsLoaded(true)
  }, [])

  const heroTitle = language === 'ar' 
    ? "أبو أويس: فخامة التراث المغربي الأصيل"
    : "Abououways: L'Élégance du Patrimoine Marocain Authentique"

  const heroSubtitle = language === 'ar'
    ? "اكتشف مجموعتنا الفاخرة من الأحذية الجلدية المصنوعة يدوياً بفخر في المغرب"
    : "Découvrez notre collection luxueuse de chaussures en cuir, fabriquées à la main avec fierté au Maroc"

  const brandStory = language === 'ar'
    ? "في أبو أويس، نحافظ على تراث قرون من الحرفية المغربية. كل قطعة في مجموعتنا هي شهادة على مهارة وصبر الحرفيين المغاربة، مصنوعة من أجود الجلود الطبيعية بحب لا يضاهى للتفاصيل."
    : "Chez Abououways, nous préservons un héritage de siècles d'artisanat marocain. Chaque pièce de notre collection est un témoignage du savoir-faire et de la patience des artisans marocains, fabriquée à partir des meilleurs cuirs naturels avec un amour inégalé du détail."

  return (
    <>
      <Head>
        <title>Abououways - {language === 'ar' ? 'فخامة التراث المغربي' : 'Élégance du Patrimoine Marocain'}</title>
        <meta name="description" content={heroSubtitle} />
        <meta name="keywords" content={language === 'ar' ? 'أحذية جلد مغربية، حرفية، فاخرة' : 'chaussures cuir marocain, artisanat, luxe'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`luxury-site ${isLoaded ? 'loaded' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <Header />
        
        {/* Premium Hero Section */}
        <section className="hero-luxury">
          <div className="hero-background">
            <img 
              src="/Home_page_302f2c30a9.png" 
              alt="Moroccan Luxury"
              className="hero-image"
            />
            <div className="hero-overlay"></div>
          </div>
          
          <div className="hero-content">
            <div className="container">
              <div className="hero-text">
                <h1 className="hero-title">
                  {heroTitle}
                </h1>
                <p className="hero-subtitle">
                  {heroSubtitle}
                </p>
                <div className="hero-actions">
                  <Link href="/products">
                    <button className="btn btn-luxury btn-large">
                      {language === 'ar' ? 'تسوق الآن' : 'Boutique'}
                    </button>
                  </Link>
                  <Link href="/about">
                    <button className="btn btn-white btn-large">
                      {language === 'ar' ? 'اكتشف قصتنا' : 'Notre Histoire'}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="scroll-indicator">
            <div className="scroll-arrow"></div>
            <span>{language === 'ar' ? 'اسحب للأسفل' : 'Défiler'}</span>
          </div>
        </section>

        {/* Brand Story Section */}
        <section className="brand-story">
          <div className="container">
            <div className="brand-content">
              <div className="brand-text">
                <h2 className="section-title">
                  {language === 'ar' ? 'قصة العلامة التجارية' : 'Notre Histoire'}
                </h2>
                <p className="luxury-text">
                  {brandStory}
                </p>
                <div className="brand-features">
                  <div className="feature-item">
                    <span className="feature-icon">✨</span>
                    <span>{language === 'ar' ? 'صناعة يدوية 100%' : 'Artisanat 100% Main'}</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🌿</span>
                    <span>{language === 'ar' ? 'جلد طبيعي فاخر' : 'Cuir Naturel Luxueux'}</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🏆</span>
                    <span>{language === 'ar' ? 'تراث عريق' : 'Héritage Authentique'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="featured-products-luxury">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                {language === 'ar' ? 'مجموعتنا المميزة' : 'Notre Collection d\'Exception'}
              </h2>
              <p className="section-subtitle">
                {language === 'ar' ? 'أحذية فاخرة تجمع بين الأصالة والأناقة' : 'Chaussures de luxe alliant authenticité et élégance'}
              </p>
            </div>
            
            <div className="products-grid">
              {featuredProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className="product-wrapper"
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? 'translateY(0)' : 'translateY(30px)'
                  }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            
            <div className="section-cta">
              <Link href="/products">
                <button className="btn btn-outline btn-large">
                  {language === 'ar' ? 'اكتشف المجموعة الكاملة' : 'Découvrez la Collection Complète'}
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Coming Soon - Gandoura */}
        <section className="coming-soon">
          <div className="container">
            <div className="coming-soon-content">
              <div className="coming-soon-text">
                <h2 className="section-title">
                  Collection Gandoura
                </h2>
                <p className="section-subtitle">
                  {language === 'ar' ? 'قريباً: مجموعة القندورة الملكية' : 'Bientôt Disponible'}
                </p>
                <p className="luxury-text">
                  {language === 'ar' 
                    ? 'نعمل حالياً على إطلاق مجموعتنا الفاخرة من القندورة التقليدية، تجمع بين الأصالة والتصميم العصري.'
                    : 'Nous travaillons actuellement sur le lancement de notre collection luxueuse de Gandouras traditionnelles, alliant authenticité et design contemporain.'
                  }
                </p>
                <button className="btn btn-luxury" disabled>
                  {language === 'ar' ? 'قريباً' : 'Bientôt Disponible'}
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <style jsx>{`
        .luxury-site {
          min-height: 100vh;
          background: var(--cream);
        }

        .luxury-site.loaded {
          animation: fadeIn 0.8s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Hero Section */
        .hero-luxury {
          position: relative;
          height: 100vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(26, 26, 26, 0.7) 0%,
            rgba(26, 26, 26, 0.5) 50%,
            rgba(201, 169, 97, 0.3) 100%
          );
          backdrop-filter: blur(2px);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .hero-text {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          color: white;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 3rem;
          line-height: 1.6;
          font-weight: 300;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-large {
          padding: 1.25rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          z-index: 2;
        }

        .scroll-arrow {
          width: 24px;
          height: 24px;
          border-right: 2px solid rgba(255, 255, 255, 0.7);
          border-bottom: 2px solid rgba(255, 255, 255, 0.7);
          transform: rotate(45deg);
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: rotate(45deg) translateY(0); }
          40% { transform: rotate(45deg) translateY(-10px); }
          60% { transform: rotate(45deg) translateY(-5px); }
        }

        /* Brand Story Section */
        .brand-story {
          padding: 6rem 0;
          background: white;
        }

        .brand-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: var(--primary);
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: var(--muted);
          margin-bottom: 3rem;
        }

        .brand-features {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-top: 3rem;
          flex-wrap: wrap;
        }

        .feature-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          color: var(--text);
        }

        .feature-icon {
          font-size: 2rem;
        }

        /* Featured Products */
        .featured-products-luxury {
          padding: 6rem 0;
          background: var(--cream);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .product-wrapper {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .section-cta {
          text-align: center;
        }

        /* Coming Soon Section */
        .coming-soon {
          padding: 6rem 0;
          background: linear-gradient(
            135deg,
            rgba(201, 169, 97, 0.1) 0%,
            rgba(201, 169, 97, 0.05) 100%
          );
          text-align: center;
        }

        .coming-soon-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .coming-soon-text {
          padding: 3rem;
          background: white;
          border-radius: 20px;
          box-shadow: var(--shadow-luxury);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .btn-large {
            width: 100%;
            max-width: 300px;
          }

          .products-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .brand-features {
            gap: 2rem;
          }

          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  )
}