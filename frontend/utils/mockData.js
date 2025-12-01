export const products = [
  {
    id: 1,
    name: {
      ar: "حذاء جلد كلاسيكي",
      fr: "Chaussure Classique en Cuir"
    },
    description: {
      ar: "الثمن جد مغري للحذاء الصاعد. جلد أصلي عالي الجودة، مريح للاستعمال اليومي. توصيل مجاني",
      fr: "Prix très attractif pour cette chaussure montante. Cuir authentique de haute qualité, confortable pour un usage quotidien. Livraison gratuite"
    },
    price: 330,
    category: "shoes",
    images: [
      "https://api.abouoways.ma/uploads/1_916ac0ac25.jpg",
      "https://api.abouoways.ma/uploads/Chaussure1b_5bd797c332.jpg",
      "https://api.abouoways.ma/uploads/1c_6535a8fcdf.jpg"
    ],
    image: "https://api.abouoways.ma/uploads/1_916ac0ac25.jpg",
    hoverImage: "https://api.abouoways.ma/uploads/Chaussure1b_5bd797c332.jpg",
    inStock: true,
    isNew: true,
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: [
      { name: { ar: "أسود", fr: "Noir" }, hex: "#000000", available: true },
      { name: { ar: "بني", fr: "Marron" }, hex: "#8B4513", available: true }
    ],
    material: {
      ar: "جلد طبيعي 100%",
      fr: "Cuir naturel 100%"
    },
    origin: {
      ar: "طنجة",
      fr: "Tanger"
    },
    features: {
      ar: ["توصيل مجاني", "جلد أصلي", "مريح"],
      fr: ["Livraison gratuite", "Cuir authentique", "Confortable"]
    }
  },
  {
    id: 2,
    name: {
      ar: "حذاء شتوي طبي",
      fr: "Chaussure d'Hiver Médicale"
    },
    description: {
      ar: "حذاء طالع لفصل الشتاء. جلد أصلي مع فراشة طبية. متوفر بالأسود والبني. توصيل مجاني",
      fr: "Chaussure montante pour l'hiver. Cuir authentique avec semelle médicale. Disponible en noir et marron. Livraison gratuite"
    },
    price: 340,
    category: "shoes",
    images: [
      "https://api.abouoways.ma/uploads/Chaussure3_39b8d831c3.jpg",
      "https://api.abouoways.ma/uploads/Chaussure3b_596b1b78e0.jpg",
      "https://api.abouoways.ma/uploads/Chaussure3c_bc4cac8326.jpg"
    ],
    image: "https://api.abouoways.ma/uploads/Chaussure3_39b8d831c3.jpg",
    hoverImage: "https://api.abouoways.ma/uploads/Chaussure3b_596b1b78e0.jpg",
    inStock: true,
    isNew: true,
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: [
      { name: { ar: "أسود", fr: "Noir" }, hex: "#000000", available: true },
      { name: { ar: "بني", fr: "Marron" }, hex: "#8B4513", available: true }
    ],
    material: {
      ar: "جلد طبيعي 100%",
      fr: "Cuir naturel 100%"
    },
    origin: {
      ar: "طنجة",
      fr: "Tanger"
    },
    features: {
      ar: ["توصيل مجاني", "فراشة طبية", "مناسب للشتاء"],
      fr: ["Livraison gratuite", "Semelle médicale", "Idéal pour l'hiver"]
    }
  },
  {
    id: 3,
    name: {
      ar: "حذاء طبي جلد خالص",
      fr: "Chaussure Médicale Cuir Pur"
    },
    description: {
      ar: "حذاء طبي من الجلد الخالص. الثمن 330 درهم. متوفر بالأسود والبني. توصيل مجاني",
      fr: "Chaussure médicale en cuir pur. Prix 330 DH. Disponible en noir et marron. Livraison gratuite"
    },
    price: 330,
    category: "shoes",
    images: [
      "https://api.abouoways.ma/uploads/Chaussure6_1a96c1aaed.jpg",
      "https://api.abouoways.ma/uploads/Chaussure6b_0b68248f24.jpg",
      "https://api.abouoways.ma/uploads/Chaussure6c_88959baac5.jpg"
    ],
    image: "https://api.abouoways.ma/uploads/Chaussure6_1a96c1aaed.jpg",
    hoverImage: "https://api.abouoways.ma/uploads/Chaussure6b_0b68248f24.jpg",
    inStock: true,
    isNew: false,
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: [
      { name: { ar: "أسود", fr: "Noir" }, hex: "#000000", available: true },
      { name: { ar: "بني", fr: "Marron" }, hex: "#8B4513", available: true }
    ],
    material: {
      ar: "جلد طبيعي 100%",
      fr: "Cuir naturel 100%"
    },
    origin: {
      ar: "طنجة",
      fr: "Tanger"
    },
    features: {
      ar: ["توصيل مجاني", "جلد خالص", "طبي"],
      fr: ["Livraison gratuite", "Cuir pur", "Médical"]
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