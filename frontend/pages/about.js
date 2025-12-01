import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../utils/LanguageContext'
import { getTranslation } from '../utils/translations'

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { language, isRTL } = useLanguage()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const reviewsAR = [
    {
      name: "أحمد المرابط",
      city: "الدار البيضاء",
      rating: 5,
      text: "جودة ممتازة! اشتريت حذاء جلدي وكانت الخامة رائعة. التوصيل سريع والخدمة محترمة جداً. أنصح بشدة!",
      date: "منذ أسبوعين"
    },
    {
      name: "فاطمة الزهراء",
      city: "مراكش",
      rating: 5,
      text: "أفضل متجر للأحذية التقليدية! الجلد طبيعي 100% والتصميم أنيق. سعر معقول مقارنة بالجودة.",
      date: "منذ شهر"
    },
    {
      name: "يوسف بنعلي",
      city: "طنجة",
      rating: 5,
      text: "خدمة ممتازة من البداية للنهاية. الحذاء مريح جداً ومناسب للاستعمال اليومي. شكراً لكم!",
      date: "منذ 3 أسابيع"
    },
    {
      name: "خديجة السعيدي",
      city: "فاس",
      rating: 4,
      text: "منتجات أصيلة وجميلة. التوصيل استغرق وقت أطول قليلاً لكن يستحق الانتظار. راضية جداً عن الشراء.",
      date: "منذ شهرين"
    }
  ]

  const reviewsFR = [
    {
      name: "Sophie Martin",
      city: "Paris",
      rating: 5,
      text: "Qualité exceptionnelle! J'ai acheté des babouches en cuir et elles sont magnifiques. Livraison rapide et service client très professionnel.",
      date: "Il y a 2 semaines"
    },
    {
      name: "Jean Dubois",
      city: "Lyon",
      rating: 5,
      text: "Meilleur site pour les chaussures marocaines authentiques! Le cuir est 100% naturel et le design est élégant. Prix raisonnable pour la qualité.",
      date: "Il y a 1 mois"
    },
    {
      name: "Marie Lefebvre",
      city: "Marseille",
      rating: 5,
      text: "Service excellent du début à la fin. Les chaussures sont très confortables et parfaites pour un usage quotidien. Merci beaucoup!",
      date: "Il y a 3 semaines"
    },
    {
      name: "Pierre Rousseau",
      city: "Toulouse",
      rating: 4,
      text: "Produits authentiques et magnifiques. La livraison a pris un peu plus de temps mais ça vaut l'attente. Très satisfait de mon achat.",
      date: "Il y a 2 mois"
    }
  ]

  const reviews = language === 'ar' ? reviewsAR : reviewsFR

  return (
    <>
      <Head>
        <title>{getTranslation(language, 'about')} - {getTranslation(language, 'siteTitle')}</title>
        <meta name="description" content={getTranslation(language, 'siteDescription')} />
        <meta name="keywords" content={getTranslation(language, 'keywords')} />
      </Head>

      <div className={`luxury-site ${isLoaded ? 'loaded' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <Header />
        
        {/* Premium Hero Section */}
        <section className="hero-luxury">
          <div className="hero-background">
            <div 
              className="hero-image"
              style={{
                background: `linear-gradient(135deg, rgba(194, 39, 45, 0.9), rgba(0, 102, 204, 0.9)), url('https://api.abououways.ma/uploads/cart_db9a055e75.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%'
              }}
            ></div>
            <div className="hero-overlay"></div>
          </div>
          
          <div className="hero-content">
            <div className="container">
              <div className="hero-text">
                <h1 className="hero-title">
                  {getTranslation(language, 'about')}
                </h1>
                <p className="hero-subtitle">
                  {language === 'ar' ? 'قصة عشق للتراث المغربي الأصيل' : 'Une histoire d\'amour pour le patrimoine marocain authentique'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Story Section */}
        <section className="brand-story">
          <div className="container">
            <div className="brand-content">
              <div className="brand-text">
                <h2 className="section-title">
                  {getTranslation(language, 'ourStory')}
                </h2>
                <div className="luxury-text">
                  <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                    {language === 'ar' ? 'العنوان: قيسرية السعادة شارع المكسيك' : 'Adresse: Kissariat Saada, Rue du Mexique'}
                  </p>
                  <p style={{ marginBottom: '1rem' }}>
                    {language === 'ar'
                      ? 'انطلقت رحلتنا في عام 1955 من قلب مدينة طنجة، حيث بدأت عائلتنا في صناعة وبيع الملابس التقليدية المغربية بشغف عميق وحب كبير للتراث الأصيل. منذ ذلك الحين، انتقلت هذه الحرفة من جيل إلى جيل، محافظين على نفس القيم والجودة عبر السنين.'
                      : 'Notre voyage a commencé en 1955 au cœur de la ville de Tanger, où notre famille a débuté la fabrication et la vente de vêtements traditionnels marocains avec une passion profonde et un grand amour pour le patrimoine authentique. Depuis lors, ce savoir-faire s\'est transmis de génération en génération, en préservant les mêmes valeurs et la même qualité au fil des années.'
                    }
                  </p>
                  <p style={{ marginBottom: '1rem' }}>
                    {language === 'ar'
                      ? 'على مدى أكثر من 70 عاماً من الخبرة، تطورت معرفتنا وتوسعت مهاراتنا، لكننا حافظنا دائماً على الأصالة والجودة التي ميزتنا منذ البداية. اليوم، نضع هذه الخبرة العريقة في خدمتكم، نقدم لكم أجود أنواع القندورة والنعال الجلدي الطبي المصنوع من جلد طبيعي 100%.'
                      : 'Avec plus de 70 ans d\'expérience, nos connaissances se sont développées et nos compétences se sont élargies, mais nous avons toujours maintenu l\'authenticité et la qualité qui nous ont distingués depuis le début. Aujourd\'hui, nous mettons cette riche expérience à votre service, en vous offrant les meilleures gandouras et babouches en cuir médical fabriquées à partir de cuir naturel 100%.'
                    }
                  </p>
                  <p style={{ marginBottom: '1rem' }}>
                    {language === 'ar'
                      ? 'كل قطعة ننتجها تحمل جزءاً من تاريخنا العائلي وروح المغرب الأصيلة. نؤمن بأن الجودة والأصالة هما أساس نجاحنا، ونسعى دائماً لتقديم أفضل المنتجات التي تعكس ثقافتنا العريقة وتلبي توقعات عملائنا الكرام.'
                      : 'Chaque pièce que nous produisons porte une partie de notre histoire familiale et l\'esprit authentique du Maroc. Nous croyons que la qualité et l\'authenticité sont la base de notre succès, et nous nous efforçons toujours d\'offrir les meilleurs produits qui reflètent notre riche culture et répondent aux attentes de nos précieux clients.'
                    }
                  </p>
                  <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                    {language === 'ar' ? 'من طنجة... منذ 1955... جيلاً بعد جيل' : 'De Tanger... Depuis 1955... De génération en génération'}
                  </p>
                </div>
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

        {/* Mission & Vision */}
        <section className="featured-products-luxury">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                {getTranslation(language, 'missionVision')}
              </h2>
            </div>
            <div className="products-grid">
              <div className="product-wrapper">
                <div className="coming-soon-text">
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#d4af37',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    fontSize: '2rem'
                  }}>
                    🎯
                  </div>
                  <h3 style={{ color: '#0066cc', marginBottom: '1rem' }}>{getTranslation(language, 'mission')}</h3>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    {language === 'ar'
                      ? 'الحفاظ على التراث المغربي الأصيل من خلال تقديم منتجات عالية الجودة تجمع بين الأصالة والحداثة، ودعم الحرفيين المحليين وتطوير مهاراتهم.'
                      : 'Préserver le patrimoine marocain authentique en offrant des produits de haute qualité alliant authenticité et modernité, et en soutenant les artisans locaux.'
                    }
                  </p>
                </div>
              </div>
              <div className="product-wrapper">
                <div className="coming-soon-text">
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#d4af37',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    fontSize: '2rem'
                  }}>
                    👁️
                  </div>
                  <h3 style={{ color: '#0066cc', marginBottom: '1rem' }}>{getTranslation(language, 'vision')}</h3>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    {language === 'ar'
                      ? 'أن نكون الوجهة الأولى للملابس التقليدية المغربية في العالم، وأن نكون جسراً يربط بين التراث العريق والأجيال الجديدة.'
                      : 'Devenir la destination première pour les vêtements traditionnels marocains dans le monde, et être un pont entre le patrimoine ancestral et les nouvelles générations.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="coming-soon">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                {getTranslation(language, 'values')}
              </h2>
            </div>
            <div className="products-grid">
              <div className="product-wrapper">
                <div className="coming-soon-text">
                  <div style={{
                    width: '70px',
                    height: '70px',
                    backgroundColor: '#c1272d',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontSize: '1.5rem',
                    color: 'white'
                  }}>
                    🏆
                  </div>
                  <h4 style={{ color: '#0066cc', marginBottom: '0.5rem' }}>{getTranslation(language, 'quality')}</h4>
                  <p>{getTranslation(language, 'qualityDescription')}</p>
                </div>
              </div>
              <div className="product-wrapper">
                <div className="coming-soon-text">
                  <div style={{
                    width: '70px',
                    height: '70px',
                    backgroundColor: '#c1272d',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontSize: '1.5rem',
                    color: 'white'
                  }}>
                    🤝
                  </div>
                  <h4 style={{ color: '#0066cc', marginBottom: '0.5rem' }}>{getTranslation(language, 'trust')}</h4>
                  <p>{getTranslation(language, 'trustDescription')}</p>
                </div>
              </div>
              <div className="product-wrapper">
                <div className="coming-soon-text">
                  <div style={{
                    width: '70px',
                    height: '70px',
                    backgroundColor: '#c1272d',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontSize: '1.5rem',
                    color: 'white'
                  }}>
                    🌍
                  </div>
                  <h4 style={{ color: '#0066cc', marginBottom: '0.5rem' }}>{getTranslation(language, 'authenticity')}</h4>
                  <p>{getTranslation(language, 'authenticityDescription')}</p>
                </div>
              </div>
              <div className="product-wrapper">
                <div className="coming-soon-text">
                  <div style={{
                    width: '70px',
                    height: '70px',
                    backgroundColor: '#c1272d',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontSize: '1.5rem',
                    color: 'white'
                  }}>
                    💡
                  </div>
                  <h4 style={{ color: '#0066cc', marginBottom: '0.5rem' }}>{getTranslation(language, 'innovation')}</h4>
                  <p>{getTranslation(language, 'innovationDescription')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Customer Reviews */}
        <section className="featured-products-luxury">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                {language === 'ar' ? 'آراء عملائنا' : 'Avis de nos clients'}
              </h2>
              <p className="section-subtitle">
                {language === 'ar' 
                  ? 'ماذا يقول عملاؤنا عن تجربتهم مع منتجاتنا'
                  : 'Ce que nos clients disent de leur expérience avec nos produits'
                }
              </p>
            </div>
            <div className="reviews-grid">
              {reviews.map((review, index) => (
                <div 
                  key={index} 
                  className="review-card"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  <div className="review-header">
                    <div className="review-rating">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`star ${i < review.rating ? 'filled' : ''}`}>
                          ★
                        </span>
                      ))}
                    </div>
                    <div className="review-date">{review.date}</div>
                  </div>
                  <div className="review-content">
                    <p className="review-text">{review.text}</p>
                  </div>
                  <div className="review-footer">
                    <div className="review-author">
                      <div className="author-name">{review.name}</div>
                      <div className="author-city">{review.city}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="coming-soon">
          <div className="container">
            <div className="coming-soon-content">
              <div className="coming-soon-text">
                <h2 className="section-title">
                  {getTranslation(language, 'contactUs')}
                </h2>
                <p className="section-subtitle">
                  {language === 'ar' 
                    ? 'نحن هنا للإجابة على جميع استفساراتكم ومساعدتكم في اختيار المنتج المثالي'
                    : 'Nous sommes là pour répondre à toutes vos questions et vous aider à choisir le produit parfait'
                  }
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                  <a href="tel:+212630969496" className="btn btn-luxury" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                    📞 {getTranslation(language, 'contactUs')}
                  </a>
                  <a href="https://wa.me/212656599581" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                    💬 WhatsApp
                  </a>
                  <a href="mailto:contact@abouoways.ma" className="btn btn-outline" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                    ✉️ {language === 'ar' ? 'راسلنا' : 'Contactez-nous'}
                  </a>
                </div>
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
          height: 70vh;
          min-height: 500px;
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

        .luxury-text {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          text-align: left;
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

        /* Reviews Section */
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .review-card {
          background: white;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 1px solid rgba(201, 169, 97, 0.1);
        }

        .review-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          border-color: rgba(201, 169, 97, 0.2);
        }

        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .review-rating {
          display: flex;
          gap: 2px;
        }

        .star {
          font-size: 1.2rem;
          color: #ddd;
          transition: color 0.2s ease;
        }

        .star.filled {
          color: #d4af37;
        }

        .review-date {
          font-size: 0.85rem;
          color: #999;
          font-style: italic;
        }

        .review-content {
          margin-bottom: 1.5rem;
        }

        .review-text {
          font-size: 1rem;
          line-height: 1.6;
          color: #333;
          font-style: italic;
        }

        .review-footer {
          border-top: 1px solid #f0f0f0;
          padding-top: 1rem;
        }

        .review-author {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .author-name {
          font-weight: 600;
          color: #0066cc;
          font-size: 1.1rem;
        }

        .author-city {
          font-size: 0.9rem;
          color: #666;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .products-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .reviews-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .brand-features {
            gap: 2rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .review-card {
            padding: 1.5rem;
          }

          .review-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
    </>
  )
}