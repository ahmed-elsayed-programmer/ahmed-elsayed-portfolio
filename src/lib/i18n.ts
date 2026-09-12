export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(candidate: string): candidate is Locale {
  return locales.includes(candidate as Locale);
}

const sharedCopy = {
  github: "GitHub",
  linkedin: "LinkedIn",
  technologies: "Python / Django / React / Next.js",
};

export const portfolioCopy = {
  en: {
    ...sharedCopy,
    name: "Ahmed Elsayed",
    metadata: {
      title: "Ahmed Elsayed | Full-Stack Django & Next.js Engineer",
      description:
        "Full-Stack Engineer in Cairo building SaaS, e-commerce, and automotive products with Python, Django, React, and Next.js.",
    },
    navigation: {
      ariaLabel: "Portfolio navigation",
      linksAriaLabel: "Portfolio links",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      links: [
        ["Home", "#home"],
        ["Projects", "#projects"],
        ["Services", "#services"],
        ["About", "#about"],
        ["Experience", "#experience"],
        ["Contact", "#contact"],
      ],
      talk: "Let's talk",
      switchLanguage: "عرض الموقع بالعربية",
      alternateLanguage: "AR",
      home: "Home",
      downloadCv: "Download CV",
      switchToLightTheme: "Switch to light theme",
      switchToDarkTheme: "Switch to dark theme",
    },
    hero: {
      availability: "AVAILABLE FOR REMOTE ROLES & SELECT CLIENT WORK",
      titleLines: ["WEB PRODUCTS BUILT", "FOR REAL BUSINESS"],
      description:
        "I build SaaS, e-commerce, and automotive platforms end to end—from authenticated Django APIs and relational data to responsive React and Next.js interfaces.",
      viewWork: "View selected work",
      discussProject: "Discuss a project",
      imageAlt: "Futuristic curved architecture overlooking a blue coastal city",
      stack: {
        eyebrow: "END-TO-END DELIVERY",
        title: "FROM API TO INTERFACE.",
        description: "Business logic, authentication, permissions, relational data, responsive interfaces, integrations, and production delivery.",
        featuredLines: ["SELECTED", "PROJECTS"],
      },
      profile: {
        location: "Cairo, Egypt",
        summary: "Full-Stack Engineer specializing in Python and Django, with React and Next.js for complete products across SaaS, automotive, commerce, and education.",
        available: "OPEN TO WORK",
        remote: "REMOTE",
        cta: "START A CONVERSATION",
        emailAriaLabel: "Email Ahmed",
      },
    },
    projectsSection: {
      eyebrow: "Selected projects",
      title: "Live client products, backed by technical depth.",
      description:
        "A focused selection of commercial websites and product platforms across automotive, SaaS, e-commerce, education, and developer communities.",
      liveSite: "Visit live website",
      caseStudy: "Read case study",
      prototype: "View mobile prototype",
      repository: "View repository",
      privateWork: "Private product work",
      stackAriaLabel: "technology stack",
      imagePreview: "interface preview",
      roleLabel: "Contribution",
      evidenceLabel: "Evidence",
    },
    projects: {
      "otm-motors": {
        type: "Automotive platform",
        role: "Website implementation",
        evidence: "Live bilingual product",
        description:
          "A bilingual automotive experience for vehicle discovery, test-drive booking, finance tools, after-sales services, and vehicle care, with an AI-guided recommendation entry point.",
      },
      "first-group": {
        type: "Automotive commerce platform",
        role: "Backend, web, and mobile implementation",
        evidence: "Live product and private code review",
        description:
          "An end-to-end automotive catalogue and ordering platform with a Django REST API, bilingual Next.js web app, and Expo/React Native mobile app, covering products, categories, search, accounts, carts, and orders.",
      },
      "gold-boulevard": {
        type: "Multi-vendor e-commerce",
        role: "React and TypeScript implementation",
        evidence: "Public mobile prototype",
        description:
          "An Arabic mobile-first marketplace for gold products, covering authentication, product discovery and comparison, stores, favourites, cart, coupons, checkout, addresses, payments, notifications, and orders.",
      },
      "inventory-sales": {
        type: "Business SaaS",
        role: "Full-stack product development",
        evidence: "Private implementation reviewed",
        description:
          "A private business platform for organizations, branches, inventory, customers, sales, reporting, permissions, and operational dashboards.",
      },
      "learning-platform": {
        type: "Education platform",
        role: "Full-stack product development",
        evidence: "Private implementation reviewed",
        description:
          "A learning platform with course publishing, chapters, video, paid enrollment, learner progress, search, uploads, and teacher analytics.",
      },
      "dev-flow": {
        type: "Community product",
        role: "Full-stack application development",
        evidence: "Public source repository",
        description:
          "A developer community application with authentication, validated forms, questions, tags, profiles, collections, voting, and account workflows.",
      },
    },
    servicesSection: {
      eyebrow: "Services",
      title: "Product development for teams that need more than a landing page.",
      description:
        "I work across backend, frontend, and delivery to turn product requirements and supplied designs into maintainable web systems.",
    },
    services: [
      {
        title: "SaaS and internal systems",
        description: "Operational products for inventory, sales, reporting, permissions, and multi-step business workflows.",
        proof: "Django · PostgreSQL · Next.js",
      },
      {
        title: "E-commerce and catalogues",
        description: "Product discovery, search, accounts, cart, checkout, orders, and administration across web and mobile.",
        proof: "First Group · Gold Boulevard",
      },
      {
        title: "Django APIs and integrations",
        description: "REST APIs, relational data, authentication, permissions, validation, uploads, and frontend integration.",
        proof: "Python · Django REST Framework",
      },
      {
        title: "Bilingual product interfaces",
        description: "Responsive Arabic and English experiences with locale routing, RTL behavior, and shared product logic.",
        proof: "Next.js · React · TypeScript",
      },
    ],
    processSection: {
      eyebrow: "How I work",
      title: "A clear path from requirements to a product that can be verified.",
      description:
        "The exact activities depend on the project, but the delivery path remains visible from the first technical decision to release.",
      steps: [
        ["Understand", "Clarify users, workflows, constraints, supplied designs, and the evidence required for completion."],
        ["Model", "Define the data relationships, permissions, API boundaries, and frontend states before implementation."],
        ["Build", "Implement the backend and interface in connected slices so real workflows can be reviewed early."],
        ["Verify", "Check validation, error paths, responsive behavior, accessibility, integration, and deployment behavior."],
        ["Deliver", "Prepare the production path, documentation, and a clear record of what was implemented."],
      ],
    },
    about: {
      eyebrow: "About",
      title: "I take a web product from business rule to working interface.",
      paragraphs: [
        "I'm a Full-Stack Engineer based in Cairo, specializing in Python, Django, React, and Next.js. I build software for real operating needs across SaaS, automotive, e-commerce, education, inventory, and sales.",
        "My strongest area is the backend—APIs, relational data, authentication, permissions, and integrations—but I also build the responsive interface and connect the complete user workflow. That gives clients and product teams one engineer who can follow a feature across every layer.",
      ],
      facts: [
        ["Based in", "Cairo, Egypt"],
        ["Work preference", "Worldwide remote"],
        ["Availability", "Available now"],
        ["Education", "Al-Azhar University · 2027"],
      ],
    },
    experienceSection: {
      eyebrow: "Experience",
      title: "Building products, integrations, and practical learning experiences.",
      description:
        "Verified roles across full-stack product development, frontend engineering, teaching, and mentoring.",
    },
    experiences: {
      swaqly: {
        title: "Full Stack Developer",
        description:
          "Building Django and Django REST Framework backends, authentication and authorization, database improvements, and React/Next.js product features for web and mobile clients.",
        date: "Mar 2025 - Present",
      },
      "first-filter": {
        title: "Full Stack Developer",
        description:
          "Delivered web and mobile systems for automotive filter data using Django, DRF, React, Next.js, React Native, PostgreSQL, and MySQL.",
        date: "Jun 2024 - May 2025",
      },
      mega: {
        title: "Full Stack Developer",
        description:
          "Built responsive web applications, integrated third-party services, and prepared client work for reliable production deployment.",
        date: "Jan 2024 - Jun 2024",
      },
      valinteca: {
        title: "Frontend Developer",
        description:
          "Developed React e-commerce interfaces and reusable components, with attention to responsive design and frontend performance.",
        date: "Oct 2022 - Feb 2023",
      },
      amit: {
        title: "Full Stack Engineer — Teaching & Mentoring",
        description:
          "Taught and mentored learners in programming fundamentals through structured lessons and practical exercises.",
        date: "Jun 2024 - Dec 2024",
      },
    },
    capabilitiesSection: {
      eyebrow: "How I can help",
      title: "Product engineering for systems that need to work in practice.",
      description:
        "From a new product or client website to a complex business workflow, I build maintainable systems that connect the backend, interface, and deployment path.",
    },
    capabilities: {
      backend: {
        title: "APIs and backend systems",
        description:
          "API design, application logic, authentication, permissions, validation, and maintainable Django services.",
      },
      reliability: {
        title: "Business data and reliability",
        description:
          "Relational modelling, migrations, query behaviour, automated checks, and production-minded delivery.",
      },
      interfaces: {
        title: "Web and e-commerce experiences",
        description:
          "Responsive, bilingual product and commerce journeys connected cleanly to backend APIs and business rules.",
      },
      delivery: {
        title: "Delivery",
        description:
          "Containerized development, Linux deployment configuration, web serving, and production debugging.",
      },
    },
    contact: {
      eyebrow: "Contact",
      title: "Need a web product that works beyond the demo?",
      description:
        "I'm available for remote full-time engineering roles and selected client projects in SaaS, e-commerce, automotive, and business systems.",
      email: "Email Ahmed",
      projectInquiry: "Discuss a project",
      roleInquiry: "Discuss a role",
      location: "Cairo, Egypt",
      availability: "Open to remote work",
    },
    footer: "Ahmed Elsayed · Full-Stack Engineer",
  },
  ar: {
    ...sharedCopy,
    name: "أحمد السيد",
    metadata: {
      title: "أحمد السيد | مطوّر Full‑Stack متخصص في Django وNext.js",
      description:
        "مطوّر Full‑Stack من القاهرة يبني منصات SaaS وتجارة إلكترونية وحلول سيارات باستخدام Python وDjango وReact وNext.js.",
    },
    navigation: {
      ariaLabel: "التنقل في معرض الأعمال",
      linksAriaLabel: "روابط معرض الأعمال",
      openMenu: "فتح قائمة التنقل",
      closeMenu: "إغلاق قائمة التنقل",
      links: [
        ["الرئيسية", "#home"],
        ["المشاريع", "#projects"],
        ["الخدمات", "#services"],
        ["نبذة عني", "#about"],
        ["الخبرات", "#experience"],
        ["تواصل معي", "#contact"],
      ],
      talk: "لنتحدث",
      switchLanguage: "عرض الموقع بالإنجليزية",
      alternateLanguage: "EN",
      home: "الرئيسية",
      downloadCv: "تحميل السيرة الذاتية",
      switchToLightTheme: "التبديل إلى الوضع الفاتح",
      switchToDarkTheme: "التبديل إلى الوضع الداكن",
    },
    hero: {
      availability: "متاح للعمل عن بُعد ولمشاريع مختارة",
      titleLines: ["منتجات ويب تخدم الأعمال", "من النظام إلى الواجهة"],
      description:
        "أبني منصات SaaS ومتاجر إلكترونية وحلولًا لقطاع السيارات من البداية إلى النهاية: من واجهات Django API مزودة بالمصادقة والصلاحيات وقواعد البيانات العلائقية إلى واجهات React وNext.js المتجاوبة.",
      viewWork: "عرض الأعمال المختارة",
      discussProject: "ناقش مشروعك معي",
      imageAlt: "هندسة معمارية مستقبلية منحنية تطل على مدينة ساحلية زرقاء",
      stack: {
        eyebrow: "تطوير متكامل",
        title: "من الـ API إلى الواجهة.",
        description: "منطق الأعمال، والمصادقة والصلاحيات، وبيانات علائقية، وواجهات متجاوبة، وتكاملات وتجهيز للإطلاق.",
        featuredLines: ["مشاريع", "مختارة"],
      },
      profile: {
        location: "القاهرة، مصر",
        summary: "مطوّر Full‑Stack متخصص في Python وDjango، وأستخدم React وNext.js لبناء منتجات متكاملة في SaaS والسيارات والتجارة والتعليم.",
        available: "متاح للعمل",
        remote: "عن بُعد",
        cta: "ابدأ محادثة",
        emailAriaLabel: "مراسلة أحمد عبر البريد الإلكتروني",
      },
    },
    projectsSection: {
      eyebrow: "مشاريع مختارة",
      title: "منتجات حقيقية لعملاء، بعمق تقني واضح.",
      description:
        "نماذج مختارة من مواقع تجارية ومنصات رقمية في السيارات وSaaS والتجارة الإلكترونية والتعليم ومجتمعات المطورين.",
      liveSite: "زيارة الموقع",
      caseStudy: "قراءة دراسة الحالة",
      prototype: "عرض نموذج الهاتف",
      repository: "عرض المستودع",
      privateWork: "منتج خاص غير متاح للعامة",
      stackAriaLabel: "التقنيات المستخدمة",
      imagePreview: "معاينة لواجهة المشروع",
      roleLabel: "مساهمتي",
      evidenceLabel: "الدليل",
    },
    projects: {
      "otm-motors": {
        type: "منصة لقطاع السيارات",
        role: "تنفيذ الموقع",
        evidence: "منتج ثنائي اللغة متاح للعامة",
        description:
          "تجربة رقمية ثنائية اللغة لاكتشاف السيارات وحجز تجربة القيادة وأدوات التمويل وخدمات ما بعد البيع والعناية بالسيارة، مع مدخل لتوصية مدعومة بالذكاء الاصطناعي.",
      },
      "first-group": {
        type: "منصة تجارة ومنتجات سيارات",
        role: "تنفيذ النظام الخلفي والويب والهاتف",
        evidence: "منتج عام ومراجعة للكود الخاص",
        description:
          "منصة متكاملة لعرض منتجات السيارات وطلبها، تشمل واجهة Django REST API، وتطبيق ويب ثنائي اللغة بـ Next.js، وتطبيق هاتف بـ Expo وReact Native، مع المنتجات والتصنيفات والبحث والحسابات والسلة والطلبات.",
      },
      "gold-boulevard": {
        type: "متجر إلكتروني متعدد البائعين",
        role: "التنفيذ باستخدام React وTypeScript",
        evidence: "نموذج هاتف متاح للعامة",
        description:
          "سوق عربي للذهب مصمم للهاتف أولًا، ويشمل التسجيل واكتشاف المنتجات ومقارنتها والمتاجر والمفضلة والسلة والكوبونات والدفع والعناوين والإشعارات والطلبات.",
      },
      "inventory-sales": {
        type: "نظام SaaS للأعمال",
        role: "تطوير المنتج Full‑Stack",
        evidence: "تنفيذ خاص تمت مراجعته",
        description:
          "منصة أعمال خاصة لإدارة المؤسسات والفروع والمخزون والعملاء والمبيعات والتقارير والصلاحيات ولوحات التشغيل.",
      },
      "learning-platform": {
        type: "منصة تعليمية",
        role: "تطوير المنتج Full‑Stack",
        evidence: "تنفيذ خاص تمت مراجعته",
        description:
          "منصة لإدارة الدورات ونشرها، تشمل الفصول والفيديو والاشتراكات المدفوعة وتتبّع تقدم المتعلم والبحث والملفات وتحليلات المدرّس.",
      },
      "dev-flow": {
        type: "منتج لمجتمع المطورين",
        role: "تطوير تطبيق Full‑Stack",
        evidence: "مستودع كود متاح للعامة",
        description:
          "تطبيق لمجتمع المطورين يشمل المصادقة والنماذج المتحقق منها والأسئلة والوسوم والملفات الشخصية والحفظ والتصويت وإدارة الحساب.",
      },
    },
    servicesSection: {
      eyebrow: "الخدمات",
      title: "تطوير منتجات للفرق التي تحتاج إلى أكثر من صفحة تعريفية.",
      description:
        "أعمل عبر النظام الخلفي والواجهة ومسار التسليم لتحويل متطلبات المنتج والتصميمات المقدمة إلى أنظمة ويب قابلة للصيانة.",
    },
    services: [
      {
        title: "منصات SaaS وأنظمة التشغيل الداخلية",
        description: "منتجات لإدارة المخزون والمبيعات والتقارير والصلاحيات ومسارات العمل متعددة الخطوات.",
        proof: "Django · PostgreSQL · Next.js",
      },
      {
        title: "المتاجر والكتالوجات الإلكترونية",
        description: "اكتشاف المنتجات والبحث والحسابات والسلة وإتمام الطلبات والإدارة عبر الويب والهاتف.",
        proof: "First Group · Gold Boulevard",
      },
      {
        title: "واجهات Django API والتكاملات",
        description: "واجهات REST وبيانات علائقية ومصادقة وصلاحيات وتحقق ورفع ملفات وربط مع الواجهات.",
        proof: "Python · Django REST Framework",
      },
      {
        title: "واجهات منتجات ثنائية اللغة",
        description: "تجارب عربية وإنجليزية متجاوبة تدعم مسارات اللغات واتجاه RTL ومنطق المنتج المشترك.",
        proof: "Next.js · React · TypeScript",
      },
    ],
    processSection: {
      eyebrow: "طريقة العمل",
      title: "مسار واضح من المتطلبات إلى منتج يمكن التحقق منه.",
      description:
        "تختلف التفاصيل حسب المشروع، لكن مسار التسليم يظل واضحًا من أول قرار تقني حتى الإطلاق.",
      steps: [
        ["الفهم", "توضيح المستخدمين ومسارات العمل والقيود والتصميمات المقدمة ومعايير اكتمال المشروع."],
        ["النمذجة", "تحديد علاقات البيانات والصلاحيات وحدود API وحالات الواجهة قبل التنفيذ."],
        ["البناء", "تنفيذ النظام الخلفي والواجهة في أجزاء مترابطة لمراجعة المسارات الحقيقية مبكرًا."],
        ["التحقق", "فحص التحقق من البيانات وحالات الخطأ والتجاوب وإتاحة الاستخدام والتكامل والنشر."],
        ["التسليم", "تجهيز مسار الإنتاج والتوثيق وسجل واضح لما تم تنفيذه."],
      ],
    },
    about: {
      eyebrow: "نبذة عني",
      title: "أحوّل احتياج العمل إلى منتج ويب يعمل من البداية إلى النهاية.",
      paragraphs: [
        "أنا مطوّر Full‑Stack من القاهرة، متخصص في Python وDjango وReact وNext.js. أبني حلولًا لاحتياجات تشغيلية حقيقية في SaaS والسيارات والتجارة الإلكترونية والتعليم والمخزون والمبيعات.",
        "قوتي الأساسية في الأنظمة الخلفية: تصميم واجهات API، ونمذجة البيانات، والمصادقة، والصلاحيات، والتكاملات. وفي الوقت نفسه أبني الواجهة المتجاوبة وأربط رحلة المستخدم كاملة؛ لذلك أستطيع متابعة الميزة عبر جميع طبقات المنتج.",
      ],
      facts: [
        ["الموقع", "القاهرة، مصر"],
        ["نظام العمل المفضل", "عن بُعد عالميًا"],
        ["التوفر", "متاح الآن"],
        ["التعليم", "جامعة الأزهر · 2027"],
      ],
    },
    experienceSection: {
      eyebrow: "الخبرات",
      title: "خبرة عملية عبر دورة تطوير المنتج.",
      description:
        "أدوار موثقة في تطوير المنتجات المتكاملة، وهندسة الواجهات، والتعليم والإرشاد التقني.",
    },
    experiences: {
      swaqly: {
        title: "مطور Full‑Stack",
        description:
          "أطوّر أنظمة خلفية باستخدام Django وDjango REST Framework، وأنظمة المصادقة والصلاحيات، وتحسينات قواعد البيانات، وميزات React وNext.js لعملاء الويب والهاتف.",
        date: "مارس 2025 - الآن",
      },
      "first-filter": {
        title: "مطور Full‑Stack",
        description:
          "قدّمت أنظمة ويب وهاتف لبيانات فلاتر السيارات باستخدام Django وDRF وReact وNext.js وReact Native وPostgreSQL وMySQL.",
        date: "يونيو 2024 - مايو 2025",
      },
      mega: {
        title: "مطور Full‑Stack",
        description:
          "بنيت تطبيقات ويب متجاوبة، وربطت خدمات خارجية، وجهّزت أعمال العملاء للنشر الموثوق في بيئات الإنتاج.",
        date: "يناير 2024 - يونيو 2024",
      },
      valinteca: {
        title: "مطور واجهات أمامية",
        description:
          "طوّرت واجهات تجارة إلكترونية ومكونات قابلة لإعادة الاستخدام باستخدام React، مع الاهتمام بالتصميم المتجاوب وأداء الواجهة.",
        date: "أكتوبر 2022 - فبراير 2023",
      },
      amit: {
        title: "مهندس Full‑Stack — تعليم وإرشاد",
        description:
          "درّست وأرشدت المتعلمين في أساسيات البرمجة من خلال دروس منظمة وتمارين عملية.",
        date: "يونيو 2024 - ديسمبر 2024",
      },
    },
    capabilitiesSection: {
      eyebrow: "كيف أساعدك",
      title: "هندسة منتجات لأنظمة يجب أن تعمل في الواقع.",
      description:
        "سواء كان منتجًا جديدًا أو موقعًا لعميل أو مسار عمل معقّدًا، أبني نظامًا قابلًا للصيانة يربط الخلفية بالواجهة وبمسار الإطلاق.",
    },
    capabilities: {
      backend: {
        title: "واجهات API وأنظمة خلفية",
        description:
          "تصميم API، ومنطق التطبيقات، والمصادقة، والصلاحيات، والتحقق، وخدمات Django سهلة الصيانة.",
      },
      reliability: {
        title: "بيانات الأعمال والموثوقية",
        description:
          "نمذجة البيانات العلائقية، والترحيلات، وسلوك الاستعلامات، والفحوصات الآلية، والتسليم المناسب للإنتاج.",
      },
      interfaces: {
        title: "تجارب ويب وتجارة إلكترونية",
        description:
          "تجارب منتجات ومتاجر متجاوبة وثنائية اللغة، متصلة بوضوح بواجهات API وقواعد العمل في النظام الخلفي.",
      },
      delivery: {
        title: "التسليم والنشر",
        description:
          "بيئات تطوير معزولة بالحاويات، وإعدادات النشر على Linux، وخدمة الويب، وتشخيص مشكلات الإنتاج.",
      },
    },
    contact: {
      eyebrow: "تواصل معي",
      title: "هل تحتاج منتج ويب يتجاوز مرحلة العرض التجريبي؟",
      description:
        "أنا متاح لوظائف هندسة البرمجيات عن بُعد بدوام كامل، ولمشاريع مختارة في SaaS والتجارة الإلكترونية والسيارات وأنظمة الأعمال.",
      email: "راسل أحمد",
      projectInquiry: "ناقش مشروعك معي",
      roleInquiry: "ناقش فرصة عمل",
      location: "القاهرة، مصر",
      availability: "متاح للعمل عن بُعد",
    },
    footer: "أحمد السيد · مهندس برمجيات Full‑Stack",
  },
} as const;

export function getPortfolioCopy(locale: Locale) {
  return portfolioCopy[locale];
}
