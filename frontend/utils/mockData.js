export const products = [
  {
    id: 1,
    name: {
      ar: "حذاء جلد مغربي فاخر - كلاسيك",
      fr: "Chaussure Marocaine en Cuir de Luxe - Classique"
    },
    description: {
      ar: "حذاء جلد طبيعي 100% صناعة مغربية يدوية أصيلة. تصميم كلاسيكي أنيق يجمع بين الأصالة والراحة",
      fr: "Chaussure en cuir naturel 100%, artisanat marocain authentique fait main. Design classique élégant alliant authenticité et confort"
    },
    price: 1200,
    category: "shoes",
    image: "/babouche1_9f3efc3483.png",
    inStock: true,
    isNew: true,
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: {
      ar: ["أسود", "بني", "كحلي"],
      fr: ["Noir", "Marron", "Marine"]
    },
    material: {
      ar: "جلد طبيعي 100%",
      fr: "Cuir naturel 100%"
    },
    origin: {
      ar: "مراكش",
      fr: "Marrakech"
    }
  },
  {
    id: 2,
    name: {
      ar: "حذاء جلد مغربي فاخر - مودرن",
      fr: "Chaussure Marocaine en Cuir de Luxe - Moderne"
    },
    description: {
      ar: "حذاء جلد طبيعي 100% بتصميم عصري أنيق. يجمع بين التراث المغربي الأصيل واللمسات العصرية الراقية",
      fr: "Chaussure en cuir naturel 100% au design moderne et élégant. Allie l'authenticité marocaine traditionnelle et les touches contemporaines sophistiquées"
    },
    price: 1350,
    category: "shoes",
    image: "/babouche2_9bbe8faf14.png",
    inStock: true,
    isNew: true,
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: {
      ar: ["أسود", "بني", "كحلي"],
      fr: ["Noir", "Marron", "Marine"]
    },
    material: {
      ar: "جلد طبيعي 100%",
      fr: "Cuir naturel 100%"
    },
    origin: {
      ar: "فاس",
      fr: "Fès"
    }
  },
  {
    id: 3,
    name: {
      ar: "حذاء جلد مغربي فاخر - ملكي",
      fr: "Chaussure Marocaine en Cuir de Luxe - Royal"
    },
    description: {
      ar: "حذاء جلد طبيعي 100% بتصميم ملكي فاخر. قطعة فنية فريدة تجسد عظمة التراث المغربي",
      fr: "Chaussure en cuir naturel 100% au design royal luxueux. Pièce artistique unique incarnant la grandeur du patrimoine marocain"
    },
    price: 1500,
    category: "shoes",
    image: "/babouche3_3f97c55861.png",
    inStock: true,
    isNew: true,
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: {
      ar: ["أسود", "بني", "كحلي"],
      fr: ["Noir", "Marron", "Marine"]
    },
    material: {
      ar: "جلد طبيعي 100%",
      fr: "Cuir naturel 100%"
    },
    origin: {
      ar: "مراكش",
      fr: "Marrakech"
    }
  }
]

export const artisans = [
  {
    id: 1,
    name: "محمد الأمين",
    specialty: "خياطة القندورة التقليدية",
    experience: "25 عاماً",
    location: "مراكش",
    story: "ورثت حرفة الخياطة عن أبي وجدي، وأعمل في هذا المجال منذ أكثر من ربع قرن. كل قندورة أصنعها تحمل جزءاً من روحي وتراث أجدادي.",
    image: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    id: 2,
    name: "فاطمة الزهراء",
    specialty: "التطريز والتصميم الفاخر",
    experience: "20 عاماً",
    location: "فاس",
    story: "تعلمت فن التطريز من والدتي، وأطور الآن تصاميم تجمع بين التراث والحداثة. كل قطعة أطرزها هي عمل فني فريد.",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    id: 3,
    name: "عبد الكريم",
    specialty: "صناعة الأحذية الجلدية",
    experience: "30 عاماً",
    location: "مراكش",
    story: "أعمل في صناعة الأحذية منذ ثلاثين عاماً، وأستخدم أفضل أنواع الجلود الطبيعية. كل زوج من الأحذية يصنع بعناية فائقة لضمان الراحة والمتانة.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  }
]

export const categories = [
  {
    id: 1,
    name: "قندورة",
    description: "اللباس المغربي التقليدي الأصيل للرجال والنساء",
    image: "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
  },
  {
    id: 2,
    name: "أحذية جلد أصيل",
    description: "الأحذية الجلدية المغربية التقليدية الأصيلة",
    image: "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
  }
]