import Link from 'next/link'
import { useLanguage } from '../utils/LanguageContext'
import { getTranslation } from '../utils/translations'

export default function Footer() {
  const { language, isRTL } = useLanguage()

  return (
    <footer className="footer" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <h3>Abououways.ma</h3>
            <p>
              {getTranslation(language, 'aboutUsDescription')}
            </p>
            <div style={{ marginTop: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem', fontSize: '1.5rem' }}>
                <span style={{ cursor: 'pointer' }}>📱</span>
                <span style={{ cursor: 'pointer' }}>📘</span>
                <span style={{ cursor: 'pointer' }}>📷</span>
                <span style={{ cursor: 'pointer' }}>🐦</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>{getTranslation(language, 'quickLinks')}</h3>
            <ul>
              <li><Link href="/">{getTranslation(language, 'home')}</Link></li>
              <li><Link href="/products">{getTranslation(language, 'products')}</Link></li>
              <li><Link href="/about">{getTranslation(language, 'about')}</Link></li>
              <li><Link href="/cart">{getTranslation(language, 'cart')}</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h3>{getTranslation(language, 'categories')}</h3>
            <ul>
              <li><Link href="/products?category=قندورة">{getTranslation(language, 'gandoura')}</Link></li>
              <li><Link href="/products?category=أحذية جلد أصيل">{getTranslation(language, 'leatherShoes')}</Link></li>
              <li><Link href="/products?category=ملابس">{getTranslation(language, 'traditionalClothing')}</Link></li>
              <li><Link href="/products?category=إكسسوارات">{getTranslation(language, 'accessories')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h3>{getTranslation(language, 'contactInfo')}</h3>
            <ul>
              <li>📍 {getTranslation(language, 'address')}: {language === 'ar' ? 'قيسرية السعادة شارع المكسيك' : 'Kissariat Saada, Rue du Mexique'}</li>
              <li>📞 {getTranslation(language, 'phone')}: +212 5XX-XXXXXX</li>
              <li>📱 {getTranslation(language, 'mobile')}: +212 6XX-XXXXXX</li>
              <li>✉️ {getTranslation(language, 'email')}: info@abououways.ma</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Abououways.ma. {getTranslation(language, 'copyright')}.</p>
          <p>{getTranslation(language, 'designedWithLove')}</p>
        </div>
      </div>
    </footer>
  )
}