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
  const { language, isRTL } = useLanguage()

  useEffect(() => {
    // Get first 3 products as featured
    setFeaturedProducts(products.slice(0, 3))
  }, [])

  return (
    <>
      <Head>
        <title>{getTranslation(language, 'siteTitle')}</title>
        <meta name="description" content={getTranslation(language, 'siteDescription')} />
        <meta name="keywords" content={getTranslation(language, 'keywords')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="moroccan-pattern" dir={isRTL ? 'rtl' : 'ltr'}>
        <Header />
        
        {/* Hero Section */}
        <section className="hero" style={{
          background: `linear-gradient(135deg, rgba(194, 39, 45, 0.9), rgba(0, 102, 204, 0.9)), url('https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=1600&h=800&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '100px 0',
          textAlign: 'center'
        }}>
          <div className="container">
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'white' }}>
              {getTranslation(language, 'welcomeTitle')}
            </h1>
            <p style={{ fontSize: '1.3rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              {getTranslation(language, 'welcomeSubtitle')}
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/products">
                <button className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                  {getTranslation(language, 'shopNow')}
                </button>
              </Link>
              <Link href="/about">
                <button className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                  {getTranslation(language, 'learnMore')}
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features" style={{ padding: '80px 0', backgroundColor: 'white' }}>
          <div className="container">
            <h2 className="text-center" style={{ color: '#c1272d', marginBottom: '3rem' }}>
              {getTranslation(language, 'whyChooseUs')}
            </h2>
            <div className="grid grid-3">
              <div className="text-center">
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#d4af37',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '2rem'
                }}>
                  🧵
                </div>
                <h3 style={{ color: '#0066cc', marginBottom: '1rem' }}>{getTranslation(language, 'handmadeCraftsmanship')}</h3>
                <p>{getTranslation(language, 'handmadeDescription')}</p>
              </div>
              <div className="text-center">
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#d4af37',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '2rem'
                }}>
                  🎨
                </div>
                <h3 style={{ color: '#0066cc', marginBottom: '1rem' }}>{getTranslation(language, 'authenticHeritage')}</h3>
                <p>{getTranslation(language, 'authenticDescription')}</p>
              </div>
              <div className="text-center">
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#d4af37',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '2rem'
                }}>
                  🚚
                </div>
                <h3 style={{ color: '#0066cc', marginBottom: '1rem' }}>{getTranslation(language, 'fastDelivery')}</h3>
                <p>{getTranslation(language, 'fastDeliveryDescription')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="featured-products" style={{ padding: '80px 0' }}>
          <div className="container">
            <h2 className="text-center" style={{ color: '#c1272d', marginBottom: '3rem' }}>
              {getTranslation(language, 'featuredProducts')}
            </h2>
            <div className="grid grid-3">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-4">
              <Link href="/products">
                <button className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                  {getTranslation(language, 'viewAllProducts')}
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Artisan Spotlight */}
        <section className="artisan-spotlight" style={{ 
          padding: '80px 0', 
          backgroundColor: 'white',
          background: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1600&h=600&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="container">
            <h2 className="text-center" style={{ color: '#c1272d', marginBottom: '3rem' }}>
              {getTranslation(language, 'featuredArtisans')}
            </h2>
            <div className="grid grid-2">
              <div>
                <h3 style={{ color: '#0066cc', marginBottom: '1rem' }}>محمد الأمين</h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                  خبير في خياطة القندورة التقليدية بخبرة تزيد عن 25 عاماً. ورث هذه الحرفة عن أجداده ويعمل على الحفاظ على الأصالة في كل قطعة يصنعها.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  "كل قندورة أصنعها هي قصة تحكي تراثنا العريق وأصالتنا المغربية"
                </p>
              </div>
              <div>
                <h3 style={{ color: '#0066cc', marginBottom: '1rem' }}>فاطمة الزهراء</h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                  فنانة في فن التطريز والتصميم الفاخر. متخصصة في القندورة الملكية المطرزة بخيوط الذهب والفضة.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  "أجمل ما في عملي هو إضافة لمسة من الروح المغربية إلى كل قطعة"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta" style={{
          background: `linear-gradient(135deg, #c1272d, #0066cc)`,
          color: 'white',
          padding: '80px 0',
          textAlign: 'center'
        }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>
              {getTranslation(language, 'welcomeTitle')}
            </h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              انضم إلى آلاف العملاء الراضين الذين اختاروا الأصالة والجودة العالية
            </p>
            <Link href="/products">
              <button className="btn btn-secondary" style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }}>
                {getTranslation(language, 'shopNow')}
              </button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}