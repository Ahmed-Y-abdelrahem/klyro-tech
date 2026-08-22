export const industries = [
  {
    slug: "ecommerce-retail",
    title: "E-commerce & Retail",
    titleAr: "التجارة الإلكترونية والتجزئة",
    summary: "Storefronts and growth systems built for conversion at scale.",
    summaryAr: "متاجر وأنظمة نمو مصممة لتحقيق التحويل على نطاق واسع.",
    description:
      "We help retail and e-commerce brands build storefronts, catalogs, and marketing systems that turn browsing into revenue, across web and mobile.",
    descriptionAr:
      "نساعد علامات التجزئة والتجارة الإلكترونية في بناء متاجر وكتالوجات وأنظمة تسويق تحوّل التصفح إلى إيرادات، عبر الويب والجوال.",
    focus: [
      "Conversion-optimized storefronts",
      "Catalog & inventory systems",
      "Retention & performance marketing",
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate Developers",
    titleAr: "مطورو العقارات",
    summary: "Digital platforms that present developments and capture qualified leads.",
    summaryAr: "منصات رقمية تعرض المشاريع العقارية وتجذب العملاء الجادين.",
    description:
      "From project microsites to listing platforms, we design digital experiences that reflect the quality of the development and convert serious buyers.",
    descriptionAr:
      "من المواقع التعريفية للمشاريع إلى منصات العرض، نصمم تجارب رقمية تعكس جودة التطوير العقاري وتحوّل المشترين الجادين إلى عملاء.",
    focus: [
      "Project & listing websites",
      "Lead capture systems",
      "Virtual tour integration",
    ],
  },
  {
    slug: "healthcare-clinics",
    title: "Healthcare & Clinics",
    titleAr: "الرعاية الصحية والعيادات",
    summary: "Booking systems and websites built around patient trust.",
    summaryAr: "أنظمة حجز ومواقع رقمية تقوم على ثقة المريض.",
    description:
      "We design clear, accessible digital experiences for clinics and healthcare providers — from appointment booking to patient information.",
    descriptionAr:
      "نصمم تجارب رقمية واضحة وسهلة الوصول للعيادات ومقدمي الرعاية الصحية — من حجز المواعيد إلى معلومات المرضى.",
    focus: [
      "Appointment booking platforms",
      "Accessible patient-facing design",
      "Local & search visibility",
    ],
  },
  {
    slug: "food-beverage",
    title: "Food & Beverage",
    titleAr: "الأغذية والمشروبات",
    summary: "Ordering experiences and brand systems for hospitality brands.",
    summaryAr: "تجارب طلب وأنظمة هوية لعلامات الضيافة.",
    description:
      "We build ordering platforms, delivery integrations, and brand systems for restaurants and F&B brands competing for local attention.",
    descriptionAr:
      "نبني منصات طلب وتكاملات توصيل وأنظمة هوية للمطاعم وعلامات الأغذية والمشروبات التي تنافس على الحضور المحلي.",
    focus: [
      "Ordering & delivery platforms",
      "Menu & brand systems",
      "Local marketing programs",
    ],
  },
  {
    slug: "logistics-mobility",
    title: "Logistics & Mobility",
    titleAr: "اللوجستيات والنقل",
    summary: "Operational platforms for tracking, dispatch, and fleet visibility.",
    summaryAr: "منصات تشغيلية للتتبع وإدارة الأساطيل والرؤية اللحظية.",
    description:
      "We build the software layer that keeps logistics and mobility operations visible and efficient, from dispatch to delivery.",
    descriptionAr:
      "نبني الطبقة البرمجية التي تُبقي عمليات اللوجستيات والنقل مرئية وفعّالة، من الإسناد إلى التسليم.",
    focus: [
      "Fleet & dispatch platforms",
      "Real-time tracking systems",
      "Operational dashboards",
    ],
  },
  {
    slug: "education",
    title: "Education",
    titleAr: "التعليم",
    summary: "Learning platforms and enrollment systems for education providers.",
    summaryAr: "منصات تعليم وأنظمة تسجيل لمقدمي خدمات التعليم.",
    description:
      "We design and build platforms that support enrollment, learning delivery, and communication for schools, institutes, and education businesses.",
    descriptionAr:
      "نصمم ونبني منصات تدعم التسجيل وتقديم المحتوى التعليمي والتواصل، للمدارس والمعاهد وشركات التعليم.",
    focus: [
      "Enrollment & admissions platforms",
      "Learning management systems",
      "Institutional branding",
    ],
  },
  {
    slug: "saas-tech",
    title: "SaaS & Tech Companies",
    titleAr: "شركات البرمجيات والتقنية",
    summary: "Product-grade marketing sites and design systems for tech companies.",
    summaryAr: "مواقع تسويقية بمستوى عالمي وأنظمة تصميم لشركات التقنية.",
    description:
      "We help SaaS and technology companies present their product with the same precision it was built with — from marketing site to design system.",
    descriptionAr:
      "نساعد شركات البرمجيات والتقنية على عرض منتجاتها بالدقة ذاتها التي بُنيت بها — من الموقع التسويقي إلى نظام التصميم.",
    focus: [
      "Product marketing sites",
      "Design systems",
      "Growth & lifecycle marketing",
    ],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation Programs",
    titleAr: "برامج التحول الرقمي",
    summary: "Modernization partners for organizations across Egypt, Saudi Arabia, and the GCC.",
    summaryAr: "شريك التحول الرقمي للمؤسسات في مصر والسعودية والخليج.",
    description:
      "We partner with organizations across Egypt, Saudi Arabia, and the wider GCC on digital transformation programs that modernize legacy processes and systems.",
    descriptionAr:
      "نشارك المؤسسات في مصر والسعودية ودول الخليج في برامج تحول رقمي تُحدّث العمليات والأنظمة القديمة.",
    focus: [
      "Digital roadmaps",
      "Legacy system modernization",
      "Change-ready implementation",
    ],
  },
];

export const getIndustryBySlug = (slug) =>
  industries.find((industry) => industry.slug === slug);