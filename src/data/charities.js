// Lebanese Charities organized by region

export const REGIONS = {
  BEIRUT: 'beirut',
  MOUNT_LEBANON: 'mount_lebanon',
  NORTH: 'north',
  SOUTH: 'south',
  BEKAA: 'bekaa',
  NABATIEH: 'nabatieh'
};

export const REGION_NAMES = {
  [REGIONS.BEIRUT]: { en: 'Beirut', ar: 'بيروت' },
  [REGIONS.MOUNT_LEBANON]: { en: 'Mount Lebanon', ar: 'جبل لبنان' },
  [REGIONS.NORTH]: { en: 'North Lebanon', ar: 'شمال لبنان' },
  [REGIONS.SOUTH]: { en: 'South Lebanon', ar: 'جنوب لبنان' },
  [REGIONS.BEKAA]: { en: 'Bekaa Valley', ar: 'البقاع' },
  [REGIONS.NABATIEH]: { en: 'Nabatieh', ar: 'النبطية' }
};

export const CATEGORIES = {
  FOOD: 'food',
  ORPHANS: 'orphans',
  MEDICAL: 'medical',
  EDUCATION: 'education',
  REFUGEES: 'refugees',
  EMERGENCY: 'emergency',
  MASJID: 'masjid'
};

export const CATEGORY_NAMES = {
  [CATEGORIES.FOOD]: { en: '🍽️ Food & Iftar', ar: '🍽️ طعام وإفطار' },
  [CATEGORIES.ORPHANS]: { en: '👶 Orphans', ar: '👶 أيتام' },
  [CATEGORIES.MEDICAL]: { en: '🏥 Medical', ar: '🏥 طبي' },
  [CATEGORIES.EDUCATION]: { en: '📚 Education', ar: '📚 تعليم' },
  [CATEGORIES.REFUGEES]: { en: '🏠 Refugees', ar: '🏠 لاجئين' },
  [CATEGORIES.EMERGENCY]: { en: '🆘 Emergency Relief', ar: '🆘 إغاثة طارئة' },
  [CATEGORIES.MASJID]: { en: '🕌 Mosque Support', ar: '🕌 دعم المساجد' }
};

export const charities = [
  // BEIRUT
  {
    id: 1,
    nameEn: 'Makassed Philanthropic Islamic Association',
    nameAr: 'جمعية المقاصد الخيرية الإسلامية',
    region: REGIONS.BEIRUT,
    categories: [CATEGORIES.MEDICAL, CATEGORIES.EDUCATION, CATEGORIES.FOOD],
    description: {
      en: 'Leading Lebanese charity providing healthcare, education, and food aid',
      ar: 'جمعية خيرية لبنانية رائدة توفر الرعاية الصحية والتعليم والمساعدات الغذائية'
    },
    phone: '+961 1 650000',
    website: 'https://www.makassed.org.lb',
    donationUrl: 'https://www.makassed.org.lb/donate',
    address: 'Beirut, Lebanon',
    verified: true
  },
  {
    id: 2,
    nameEn: 'Islamic Charity Projects Association (ICPA)',
    nameAr: 'جمعية المشاريع الخيرية الإسلامية',
    region: REGIONS.BEIRUT,
    categories: [CATEGORIES.FOOD, CATEGORIES.ORPHANS, CATEGORIES.EMERGENCY],
    description: {
      en: 'Food baskets, iftar meals, and orphan support across Lebanon',
      ar: 'سلال غذائية ووجبات إفطار ودعم الأيتام في جميع أنحاء لبنان'
    },
    phone: '+961 1 840840',
    website: 'https://icpa-lb.org',
    donationUrl: 'https://icpa-lb.org/donate',
    address: 'Hamra, Beirut',
    verified: true
  },
  {
    id: 3,
    nameEn: 'Al-Mabarrat Association',
    nameAr: 'جمعية المبرات الخيرية',
    region: REGIONS.BEIRUT,
    categories: [CATEGORIES.ORPHANS, CATEGORIES.EDUCATION, CATEGORIES.MEDICAL],
    description: {
      en: 'Orphanages, schools, and healthcare centers',
      ar: 'دور للأيتام ومدارس ومراكز رعاية صحية'
    },
    phone: '+961 1 850850',
    website: 'https://almabarrat.org.lb',
    donationUrl: 'https://almabarrat.org.lb/en/donate',
    address: 'Haret Hreik, Beirut',
    verified: true
  },
  {
    id: 4,
    nameEn: 'Beit El Zakat - Beirut',
    nameAr: 'بيت الزكاة - بيروت',
    region: REGIONS.BEIRUT,
    categories: [CATEGORIES.FOOD, CATEGORIES.EMERGENCY],
    description: {
      en: 'Zakat distribution, food aid, and emergency relief',
      ar: 'توزيع الزكاة والمساعدات الغذائية والإغاثة الطارئة'
    },
    phone: '+961 1 754754',
    donationUrl: 'tel:+9611754754',
    address: 'Beirut Central District',
    verified: true
  },

  // MOUNT LEBANON
  {
    id: 5,
    nameEn: 'Dar Al-Aytam Al-Islamyya',
    nameAr: 'دار الأيتام الإسلامية',
    region: REGIONS.MOUNT_LEBANON,
    categories: [CATEGORIES.ORPHANS, CATEGORIES.EDUCATION],
    description: {
      en: 'Historic orphanage and school serving children since 1916',
      ar: 'دار أيتام ومدرسة تاريخية تخدم الأطفال منذ عام 1916'
    },
    phone: '+961 1 815815',
    website: 'https://daralaytam.com',
    donationUrl: 'https://daralaytam.com/donate',
    address: 'Chouaifat, Mount Lebanon',
    verified: true
  },
  {
    id: 6,
    nameEn: 'Islamic Health Association',
    nameAr: 'جمعية الصحة الإسلامية',
    region: REGIONS.MOUNT_LEBANON,
    categories: [CATEGORIES.MEDICAL],
    description: {
      en: 'Free and subsidized healthcare for low-income families',
      ar: 'رعاية صحية مجانية ومدعومة للعائلات محدودة الدخل'
    },
    phone: '+961 1 830830',
    donationUrl: 'tel:+9611830830',
    address: 'Baabda, Mount Lebanon',
    verified: true
  },

  // NORTH LEBANON
  {
    id: 7,
    nameEn: 'Azm & Saade Association - Tripoli',
    nameAr: 'جمعية العزم والسعادة - طرابلس',
    region: REGIONS.NORTH,
    categories: [CATEGORIES.EDUCATION, CATEGORIES.MEDICAL, CATEGORIES.FOOD],
    description: {
      en: 'Large educational and healthcare network in North Lebanon',
      ar: 'شبكة تعليمية وصحية كبيرة في شمال لبنان'
    },
    phone: '+961 6 442000',
    website: 'https://azm-saade.org',
    donationUrl: 'https://azm-saade.org/donate',
    address: 'Tripoli, North Lebanon',
    verified: true
  },
  {
    id: 8,
    nameEn: 'Tripoli Islamic Charities',
    nameAr: 'الجمعيات الخيرية الإسلامية - طرابلس',
    region: REGIONS.NORTH,
    categories: [CATEGORIES.FOOD, CATEGORIES.ORPHANS],
    description: {
      en: 'Ramadan food baskets and daily iftar meals in Tripoli',
      ar: 'سلال رمضان ووجبات إفطار يومية في طرابلس'
    },
    phone: '+961 6 430000',
    donationUrl: 'tel:+9616430000',
    address: 'Tripoli Center',
    verified: true
  },
  {
    id: 9,
    nameEn: 'Akkar Relief Committee',
    nameAr: 'لجنة إغاثة عكار',
    region: REGIONS.NORTH,
    categories: [CATEGORIES.EMERGENCY, CATEGORIES.FOOD, CATEGORIES.REFUGEES],
    description: {
      en: 'Supporting displaced families and refugees in Akkar',
      ar: 'دعم العائلات النازحة واللاجئين في عكار'
    },
    phone: '+961 6 690000',
    donationUrl: 'tel:+9616690000',
    address: 'Akkar, North Lebanon',
    verified: true
  },

  // SOUTH LEBANON
  {
    id: 10,
    nameEn: 'Imam Al-Sadr Foundation',
    nameAr: 'مؤسسة الإمام الصدر',
    region: REGIONS.SOUTH,
    categories: [CATEGORIES.ORPHANS, CATEGORIES.EDUCATION, CATEGORIES.MEDICAL],
    description: {
      en: 'Comprehensive social services in South Lebanon',
      ar: 'خدمات اجتماعية شاملة في جنوب لبنان'
    },
    phone: '+961 7 740000',
    website: 'https://alsadr-foundation.org',
    donationUrl: 'https://alsadr-foundation.org/donate',
    address: 'Tyre, South Lebanon',
    verified: true
  },
  {
    id: 11,
    nameEn: 'Sidon Islamic Charities',
    nameAr: 'الجمعيات الخيرية الإسلامية - صيدا',
    region: REGIONS.SOUTH,
    categories: [CATEGORIES.FOOD, CATEGORIES.EMERGENCY],
    description: {
      en: 'Food aid and emergency support in Sidon area',
      ar: 'مساعدات غذائية ودعم طارئ في منطقة صيدا'
    },
    phone: '+961 7 720000',
    donationUrl: 'tel:+9617720000',
    address: 'Sidon, South Lebanon',
    verified: true
  },

  // BEKAA VALLEY
  {
    id: 12,
    nameEn: 'Bekaa Islamic Charity Association',
    nameAr: 'جمعية البقاع الإسلامية الخيرية',
    region: REGIONS.BEKAA,
    categories: [CATEGORIES.FOOD, CATEGORIES.REFUGEES, CATEGORIES.EDUCATION],
    description: {
      en: 'Supporting local families and Syrian refugees in Bekaa',
      ar: 'دعم العائلات المحلية واللاجئين السوريين في البقاع'
    },
    phone: '+961 8 800000',
    donationUrl: 'tel:+9618800000',
    address: 'Zahle, Bekaa',
    verified: true
  },
  {
    id: 13,
    nameEn: 'Baalbek Relief Association',
    nameAr: 'جمعية إغاثة بعلبك',
    region: REGIONS.BEKAA,
    categories: [CATEGORIES.FOOD, CATEGORIES.MEDICAL, CATEGORIES.EMERGENCY],
    description: {
      en: 'Emergency relief and medical aid in Baalbek-Hermel',
      ar: 'إغاثة طارئة ومساعدات طبية في بعلبك الهرمل'
    },
    phone: '+961 8 370000',
    donationUrl: 'tel:+9618370000',
    address: 'Baalbek, Bekaa',
    verified: true
  },

  // NABATIEH
  {
    id: 14,
    nameEn: 'Nabatieh Social Services',
    nameAr: 'خدمات النبطية الاجتماعية',
    region: REGIONS.NABATIEH,
    categories: [CATEGORIES.FOOD, CATEGORIES.ORPHANS, CATEGORIES.MEDICAL],
    description: {
      en: 'Social services and humanitarian aid in Nabatieh governorate',
      ar: 'خدمات اجتماعية ومساعدات إنسانية في محافظة النبطية'
    },
    phone: '+961 7 760000',
    donationUrl: 'tel:+9617760000',
    address: 'Nabatieh, South Lebanon',
    verified: true
  },

  // NATIONAL/ALL REGIONS
  {
    id: 15,
    nameEn: 'Lebanese Red Cross',
    nameAr: 'الصليب الأحمر اللبناني',
    region: REGIONS.BEIRUT,
    categories: [CATEGORIES.MEDICAL, CATEGORIES.EMERGENCY],
    description: {
      en: 'Emergency medical services and disaster relief nationwide',
      ar: 'خدمات طبية طارئة وإغاثة الكوارث على مستوى البلاد'
    },
    phone: '+961 1 373802',
    website: 'https://redcross.org.lb',
    donationUrl: 'https://redcross.org.lb/donate',
    address: 'Nationwide Coverage',
    verified: true
  }
];

// Helper functions
export const getCharitiesByRegion = (region) => {
  return charities.filter(charity => charity.region === region);
};

export const getCharitiesByCategory = (category) => {
  return charities.filter(charity => charity.categories.includes(category));
};

export const filterCharities = (region = null, category = null) => {
  let filtered = charities;
  
  if (region) {
    filtered = filtered.filter(charity => charity.region === region);
  }
  
  if (category) {
    filtered = filtered.filter(charity => charity.categories.includes(category));
  }
  
  return filtered;
};

