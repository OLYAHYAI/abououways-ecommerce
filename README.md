# Abououways.ma - متجر الملابس التقليدية المغربية

## نظرة عامة | Overview

متجر إلكتروني للملابس التقليدية المغربية (القندورة والأحذية الجلدية الأصيلة) مع دعم كامل للغة العربية والفرنسية وواجهة RTL/LTR.

An e-commerce website for traditional Moroccan clothing (Gandoura and authentic leather shoes) with full Arabic and French language support and RTL/LTR interface.

## المميزات | Features

### الأسبوع 1-2: الأساس (Foundation)
- ✅ واجهة Next.js مع دعم RTL/LTR للغة العربية والفرنسية
- ✅ نظام إدارة محتوى Strapi للمنتجات
- ✅ صفحات أساسية: الرئيسية، المنتجات، من نحن
- ✅ سلة تسوق بسيطة ومحاكاة عملية الدفع
- ✅ محاكاة سير عمل n8n لمعالجة الطلبات
- ✅ تصميم مغربي ملهم (ألوان: أحمر، أزرق، ذهبي)
- ✅ واجهة بالكاملة باللغة العربية والفرنسية
- ✅ شعار جديد لـ Abououways.ma
- ✅ تحديث فئات المنتجات (أحذية جلد أصيل بدلاً من نعال)

## هيكل المشروع | Project Structure

```
ecom_website/
├── frontend/                 # تطبيق Next.js
│   ├── pages/               # الصفحات
│   ├── components/          # المكونات
│   ├── styles/              # الأنماط
│   └── public/              # الملفات العامة
├── backend/                 # Strapi CMS
│   ├── api/                 # الـ API
│   └── config/              # الإعدادات
├── n8n/                     # n8n workflows
│   └── workflows/           # سير العمل
├── docker-compose.yml       # Docker Compose
└── README.md               # هذا الملف
```

## المتطلبات | Requirements

- Node.js 18+
- Docker & Docker Compose
- npm أو yarn

## التثبيت والتشغيل | Installation & Setup

### 1. تثبيت الحزم | Install Dependencies

```bash
# تثبيت حزم الواجهة الأمامية
cd frontend
npm install

# تثبيت حكم الواجهة الخلفية
cd ../backend
npm install
```

### 2. تشغيل مع Docker | Run with Docker

```bash
# تشغيل كل الخدمات مع Docker Compose
docker-compose up -d

# الواجهة الأمامية: http://localhost:3000
# الواجهة الخلفية: http://localhost:1337/admin
# n8n: http://localhost:5678
```

### 3. تشغيل يدوي | Manual Setup

```bash
# تشغيل Strapi (الواجهة الخلفية)
cd backend
npm run develop

# تشغيل Next.js (الواجهة الأمامية)
cd frontend
npm run dev

# تشغيل n8n
npx n8n start
```

## إعداد Strapi | Strapi Setup

1. افتح http://localhost:1337/admin
2. أنشئ حساب مدير
3. استورد محتوى المنتجات من `backend/data/products.json`

## المنتجات النموذجية | Sample Products

### القندورة | Gandoura
- القندورة المغربية الأصلية
- ألوان تقليدية
- خياطة يدوية

### الأحذية الجلدية الأصيلة | Authentic Leather Shoes
- جلد طبيعي عالي الجودة
- نقوش مغربية تقليدية
- راحة فائقة

## سير العمل | Workflows

### n8n Automation
- استلام الطلبات الجديدة
- إرسال إشعارات البريد الإلكتروني
- تحديث مخزون المنتجات
- إنشاء تقارير المبيعات

## التصميم | Design

### الألوان | Colors
- الأحمر التقليدي: #c1272d
- الأزرق المغربي: #0066cc
- الذهبي: #d4af37
- الأبيض: #ffffff
- البيج: #f5f5dc

### الخطوط | Fonts
- Amiri: للنصوص العربية
- Tajawal: للواجهات والعناوين

## واجهة المستخدم | UI/UX

- تصميم متجاوب للجوال
- واجهة RTL للغة العربية
- رسوم متحركة سلسة
- تجربة تسوق سهلة

## الدفع | Payment

محاكاة بوابة الدفع (Stripe/PayPal) للعرض التوضيحي.

## المستقبل | Future Features

### الأسبوع 3-6: المميزات الأساسية
- تحسين كتالوج المنتجات
- تكامل الدفع الحقيقي
- تحسين التصميم المتجاوب

### الأسبوع 7-10: طبقة الابتكار
- ميزة التجربة الافتراضية (AR)
- أتمتة n8n المتقدمة
- تكامل وسائل التواصل الاجتماعي

### الأسبوع 11-12: الإطلاق والتحسين
- الاختبار التجريبي
- حملات التسويق
- مراقبة الأداء

## المساهمة | Contributing

1. Fork المشروع
2. أنشئ فرعًا جديدًا (`git checkout -b feature/AmazingFeature`)
3. قم بالتغييرات
4. قم بالالتزام (`git commit -m 'Add some AmazingFeature'`)
5. ادفع إلى الفرع (`git push origin feature/AmazingFeature`)
6. افتح Pull Request

## الرخصة | License

MIT License - انظر ملف LICENSE للتفاصيل.

## التواصل | Contact

- البريد الإلكتروني: info@abououways.ma
- الموقع: www.abououways.ma

---

**ملاحظة:** هذا مشروع توضيحي للأسبوع 1-2 من خطة التنفيذ الممتدة لـ 12 أسبوعًا.