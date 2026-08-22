const u = (id, w = 2000) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const media = {
  heroVideo: "/videos/hero.mp4",
  heroPoster: u("photo-1550745165-9bc0b252726f", 2400),

  pages: {
    about: u("photo-1522071820081-009f0129c71c"),
    services: u("photo-1555066931-4365d14bab8c"),
    work: u("photo-1551288049-bebda4e38f71"),
    industries: u("photo-1486406146926-c627a92ad1ab"),
    process: u("photo-1517430816045-df4b7de11d1d"),
    careers: u("photo-1552664730-d307ca884978"),
    contact: u("photo-1519389950473-47ba027781c5"),
  },

    services: {
    "digital-marketing": u("photo-1460925895917-afdab827c52f"),        // شاشات تحليلات وتسويق
    "web-development": u("photo-1555066931-4365d14bab8c"),              // كود على شاشة
    "mobile-app-development": u("photo-1512941937669-90a1b58e7e9c"),    // موبايل على خلفية داكنة
    "ui-ux-design": u("photo-1561070791-2526d30994b5"),                 // شغل تصميم وهوية
    "digital-strategy-consulting": u("photo-1552664730-d307ca884978"),  // جلسة استراتيجية فريق
    "company-profile-corporate-branding": u("photo-1542744173-8e7e53415bb0"), // براندينج مؤسسي
  },

      industries: {
    "ecommerce-retail": "/images/work/freshcart.png",   // ← صورتك الحقيقية بدل رابط Unsplash المكسور
    "real-estate": u("photo-1486406146926-c627a92ad1ab"),
    "healthcare-clinics": u("photo-1576091160399-112ba8d25d1d"),
    "food-beverage": u("photo-1514933651103-005eec06c04b"),
    "logistics-mobility": u("photo-1586528116311-ad8dd3c8310d"),
    education: u("photo-1523240795612-9a054b0db644"),
    "saas-tech": u("photo-1551288049-bebda4e38f71"),
    "digital-transformation": u("photo-1552664730-d307ca884978"),
  },

  workImages: {
    "nova-market-ecommerce-platform": u("photo-1556742044-332a44304553"),
    "meridian-residences-real-estate-app": u("photo-1486406146926-c627a92ad1ab"),
    "clarity-clinic-booking-platform": u("photo-1576091160399-112ba8d25d1d"),
    "atlas-logistics-growth-program": u("photo-1586528116311-ad8dd3c8310d"),
    "form-and-field-brand-identity": u("photo-1561070791-2526d30994b5"),
    "pathway-learning-platform": u("photo-1523240795612-9a054b0db644"),
    "orbit-analytics-saas-platform": u("photo-1551288049-bebda4e38f71"),
    "cairo-capital-properties-platform": u("photo-1560518883-ce09059eeffa"),
    "helix-health-patient-portal": u("photo-1576091160550-b0b9977d0661"),
    "national-retail-transformation": u("photo-1552664730-d307ca884978"),
  },
};