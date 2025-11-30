import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../utils/LanguageContext'
import { getTranslation } from '../utils/translations'

export default function About() {
  const { language, isRTL } = useLanguage()

  return (
    <>
      <Head>
        <title>{getTranslation(language, 'about')} - {getTranslation(language, 'siteTitle')}</title>
        <meta name="description" content={getTranslation(language, 'siteDescription')} />
        <meta name="keywords" content={getTranslation(language, 'keywords')} />
      </Head>

      <div className="moroccan-pattern" dir={isRTL ? 'rtl' : 'ltr'}>
        <Header />
        
        {/* Page Header */}
        <section className="page-header" style={{
          background: `linear-gradient(135deg, rgba(194, 39, 45, 0.9), rgba(0, 102, 204, 0.9)), url('https://images.pexels.com/photos/1181356/pexels-photo-1181356.jpeg?auto=compress&cs=tinysrgb&w=1600&h=400&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '80px 0',
          textAlign: 'center'
        }}>
          <div className="container">
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>
              {getTranslation(language, 'about')}
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '0' }}>
              قصة عشق للتراث المغربي الأصيل
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="our-story" style={{ padding: '80px 0', backgroundColor: 'white' }}>
          <div className="container">
            <div className="grid grid-2" style={{ alignItems: 'center' }}>
              <div>
                <h2 style={{ color: '#c1272d', marginBottom: '1.5rem' }}>
                  {getTranslation(language, 'ourStory')}
                </h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                  انطلق رحلتنا في عام 2010 بشغف عميق للتراث المغربي ورغبة في الحفاظ على الحرف التقليدية التي ورثناها عن أجدادنا. بدأنا كورشة صغيرة في قلب مراكش العتيقة، حيث كنا نعمل بجد لإنتاج أجود أنواع القندورة والنعال الجلدي.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                  اليوم، وبعد أكثر من عقد من الخبرة، أصبحنا من أبرز المتاجر المتخصصة في الملابس التقليدية المغربية، نخدم آلاف العملاء في جميع أنحاء المملكة وخارجها، ونفتخر بأن كل قطعة ننتجها تحمل جزءاً من روح المغرب الأصيلة.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  نؤمن بأن الجودة والأصالة هما أساس نجاحنا، ونسعى دائماً لتقديم أفضل المنتجات التي تعكس ثقافتنا العريقة وتلبي توقعات عملائنا الكرام.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="ورشة العمل التقليدية"
                  style={{
                    width: '100%',
                    borderRadius: '15px',
                    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mission-vision" style={{ padding: '80px 0' }}>
          <div className="container">
            <h2 className="text-center" style={{ color: '#c1272d', marginBottom: '3rem' }}>
              {getTranslation(language, 'missionVision')}
            </h2>
            <div className="grid grid-2">
              <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
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
                  الحفاظ على التراث المغربي الأصيل من خلال تقديم منتجات عالية الجودة تجمع بين الأصالة والحداثة، ودعم الحرفيين المحليين وتطوير مهاراتهم.
                </p>
              </div>
              <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
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
                  أن نكون الوجهة الأولى للملابس التقليدية المغربية في العالم، وأن نكون جسراً يربط بين التراث العريق والأجيال الجديدة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="values" style={{ 
          padding: '80px 0', 
          backgroundColor: 'white',
          background: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600&h=600&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="container">
            <h2 className="text-center" style={{ color: '#c1272d', marginBottom: '3rem' }}>
              {getTranslation(language, 'values')}
            </h2>
            <div className="grid grid-4">
              <div className="text-center">
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
              <div className="text-center">
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
              <div className="text-center">
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
              <div className="text-center">
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
        </section>

        {/* Team */}
        <section className="team" style={{ padding: '80px 0' }}>
          <div className="container">
            <h2 className="text-center" style={{ color: '#c1272d', marginBottom: '3rem' }}>
              {getTranslation(language, 'ourTeam')}
            </h2>
            <div className="grid grid-3">
              <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                <img 
                  src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="المدير العام"
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    margin: '0 auto 1rem',
                    objectFit: 'cover'
                  }}
                />
                <h3 style={{ color: '#0066cc', marginBottom: '0.5rem' }}>يوسف الأصيل</h3>
                <p style={{ color: '#d4af37', marginBottom: '1rem' }}>المدير العام</p>
                <p>خبير في تجارة الملابس التقليدية بخبرة تزيد عن 15 عاماً</p>
              </div>
              <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                <img 
                  src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="مديرة التصميم"
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    margin: '0 auto 1rem',
                    objectFit: 'cover'
                  }}
                />
                <h3 style={{ color: '#0066cc', marginBottom: '0.5rem' }}>سارة التقنية</h3>
                <p style={{ color: '#d4af37', marginBottom: '1rem' }}>مديرة التصميم</p>
                <p>مصممة فنية متخصصة في التراث المغربي والتصاميم العصرية</p>
              </div>
              <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="رئيس الحرفيين"
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    margin: '0 auto 1rem',
                    objectFit: 'cover'
                  }}
                />
                <h3 style={{ color: '#0066cc', marginBottom: '0.5rem' }}>عبد الله الحرفي</h3>
                <p style={{ color: '#d4af37', marginBottom: '1rem' }}>رئيس الحرفيين</p>
                <p>حرفي محترف يدير فريقاً من أمهر الخياطين والحرفيين</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="contact-cta" style={{
          background: `linear-gradient(135deg, #c1272d, #0066cc)`,
          color: 'white',
          padding: '80px 0',
          textAlign: 'center'
        }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>
              {getTranslation(language, 'contactUs')}
            </h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              نحن هنا للإجابة على جميع استفساراتكم ومساعدتكم في اختيار المنتج المثالي
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+212600000000" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                📞 {getTranslation(language, 'contactUs')}
              </a>
              <a href="mailto:info@abououways.ma" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                ✉️ راسلنا
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}