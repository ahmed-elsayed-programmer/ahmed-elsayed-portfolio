import type { Locale } from "@/lib/i18n";

const firstGroupCaseStudy = {
  en: {
    metadata: {
      title: "First Group Case Study | Ahmed Elsayed",
      description:
        "How Ahmed Elsayed implemented an automotive catalogue and ordering platform across Django REST, Next.js, and React Native from supplied UI/UX designs.",
    },
    navigation: {
      back: "Back to portfolio",
      live: "Visit live website",
      switchLanguage: "عرض دراسة الحالة بالعربية",
      alternateLanguage: "AR",
    },
    hero: {
      eyebrow: "Case study · Automotive commerce",
      title: "First Group",
      summary:
        "An automotive catalogue and ordering platform implemented across a Django REST API, bilingual Next.js web application, and Expo/React Native mobile application.",
      imageAlt: "First Group bilingual automotive website interface",
      attribution: "UI/UX supplied · Software implementation by Ahmed Elsayed",
    },
    facts: [
      ["Role", "Full-Stack Developer"],
      ["Scope", "Backend, web, and mobile"],
      ["Languages", "Arabic and English"],
      ["Status", "Public website live"],
    ],
    overview: {
      index: "01",
      label: "Overview",
      title: "One product system, implemented across every software layer.",
      paragraphs: [
        "First Group needed a digital product for presenting automotive filters and connecting product information with the vehicles and manufacturers each filter supports.",
        "Working from UI/UX designs supplied by another person, I implemented the software end to end: the data model and REST API, the bilingual web interface, and the mobile product and ordering experience.",
      ],
    },
    ownership: {
      index: "02",
      label: "My contribution",
      title: "Complete implementation from supplied UI/UX to working product.",
      items: [
        {
          title: "Backend and data",
          description: "Built the Django REST API and PostgreSQL models for categories, products, automotive applications, orders, and order items.",
        },
        {
          title: "Bilingual web application",
          description: "Implemented the Next.js and TypeScript interface with Arabic/English routing, RTL support, authentication, search, catalogue, and cart state.",
        },
        {
          title: "Mobile application",
          description: "Built the Expo and React Native application for accounts, product discovery, categories, search, cart, checkout, and order submission.",
        },
        {
          title: "System integration",
          description: "Connected the web and mobile clients to the shared API, including session refresh, product media, and ordering workflows.",
        },
      ],
    },
    architecture: {
      index: "03",
      label: "Architecture",
      title: "A shared product API serving web and mobile experiences.",
      description:
        "The implementation separates the product interfaces from the Django REST backend while keeping catalogue and order data in PostgreSQL.",
      nodes: {
        web: { label: "Web application", value: "Next.js 14 · TypeScript · next-intl · Redux Toolkit" },
        api: { label: "Application API", value: "Django 5.1 · Django REST Framework · JWT/Djoser" },
        data: { label: "Relational data", value: "PostgreSQL · products · applications · orders" },
        mobile: { label: "Mobile application", value: "Expo · React Native · Expo Router · RTK Query" },
      },
    },
    model: {
      index: "04",
      label: "Product model",
      title: "Catalogue data reflects how automotive products are selected.",
      description:
        "Products belong to categories and include application records that connect a product with manufacturer and vehicle-use information. Orders preserve a separate set of order items linked to products.",
      relationships: [
        ["Category", "Product"],
        ["Product", "Automotive application"],
        ["Order", "Order item"],
        ["Order item", "Product"],
      ],
    },
    flow: {
      index: "05",
      label: "Product journey",
      title: "The same core workflow is available from web and mobile.",
      steps: [
        ["Discover", "Browse categories or search product names."],
        ["Evaluate", "Open product details and review automotive applications."],
        ["Select", "Add products and manage quantities in the cart."],
        ["Order", "Provide delivery details and submit the order through the API."],
      ],
    },
    decisions: {
      index: "06",
      label: "Implementation decisions",
      title: "Technical decisions visible in the working implementation.",
      items: [
        ["Shared REST API", "Both clients use the same catalogue, authentication, and ordering backend."],
        ["URL-based localization", "The web application gives Arabic and English their own locale routes and document direction."],
        ["Client-specific sessions", "The web client uses credentialed cookie-based JWT requests; the mobile client persists and refreshes tokens locally."],
        ["Reusable product relationships", "Automotive applications are modeled separately from products so each product can carry multiple usage records."],
      ],
    },
    outcome: {
      index: "07",
      label: "Verified outcome",
      title: "A public bilingual product backed by complete web, API, and mobile implementations.",
      description:
        "The public website is live, and the implementation repositories contain the backend, web, and mobile application code. Quantitative traffic, order, revenue, and performance outcomes are not available, so none are claimed here.",
    },
    stack: {
      label: "Technology used",
      items: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Next.js", "TypeScript", "React", "Redux Toolkit", "Expo", "React Native"],
    },
    contact: {
      label: "Have a product that needs web, API, and mobile delivery?",
      title: "Let's turn the design and business rules into a working system.",
      email: "Discuss a project",
      portfolio: "View more work",
    },
  },
  ar: {
    metadata: {
      title: "دراسة حالة First Group | أحمد السيد",
      description:
        "كيف نفّذ أحمد السيد منصة لعرض منتجات السيارات وطلبها عبر Django REST وNext.js وReact Native انطلاقًا من تصميم UI/UX جاهز.",
    },
    navigation: {
      back: "العودة إلى معرض الأعمال",
      live: "زيارة الموقع",
      switchLanguage: "View the case study in English",
      alternateLanguage: "EN",
    },
    hero: {
      eyebrow: "دراسة حالة · تجارة ومنتجات سيارات",
      title: "First Group",
      summary:
        "منصة لعرض منتجات السيارات وطلبها، نفّذتها عبر واجهة Django REST API وتطبيق ويب ثنائي اللغة بـ Next.js وتطبيق هاتف بـ Expo وReact Native.",
      imageAlt: "واجهة موقع First Group ثنائية اللغة لمنتجات السيارات",
      attribution: "تصميم UI/UX مقدم من طرف آخر · التنفيذ البرمجي: أحمد السيد",
    },
    facts: [
      ["الدور", "مطور Full‑Stack"],
      ["النطاق", "النظام الخلفي والويب والهاتف"],
      ["اللغات", "العربية والإنجليزية"],
      ["الحالة", "الموقع متاح للعامة"],
    ],
    overview: {
      index: "01",
      label: "نظرة عامة",
      title: "نظام منتج واحد نُفّذ عبر جميع الطبقات البرمجية.",
      paragraphs: [
        "احتاجت First Group إلى منتج رقمي لعرض فلاتر السيارات وربط معلومات كل منتج بالسيارات والشركات المصنّعة التي يناسبها.",
        "انطلاقًا من تصميم UI/UX أعدّه طرف آخر، نفّذت النظام البرمجي كاملًا: نموذج البيانات وواجهة REST API، وتطبيق الويب ثنائي اللغة، وتجربة تصفح المنتجات وطلبها على الهاتف.",
      ],
    },
    ownership: {
      index: "02",
      label: "مساهمتي",
      title: "تنفيذ كامل من تصميم UI/UX المقدم إلى منتج يعمل.",
      items: [
        {
          title: "النظام الخلفي والبيانات",
          description: "بنيت واجهة Django REST API ونماذج PostgreSQL للتصنيفات والمنتجات واستخداماتها في السيارات والطلبات وعناصر الطلب.",
        },
        {
          title: "تطبيق ويب ثنائي اللغة",
          description: "نفّذت واجهة Next.js وTypeScript بمسارات عربية وإنجليزية ودعم RTL والمصادقة والبحث والكتالوج والسلة.",
        },
        {
          title: "تطبيق الهاتف",
          description: "بنيت تطبيق Expo وReact Native للحسابات وتصفح المنتجات والتصنيفات والبحث والسلة وإتمام الطلب وإرساله.",
        },
        {
          title: "تكامل النظام",
          description: "ربطت تطبيقي الويب والهاتف بواجهة API المشتركة، بما يشمل تجديد الجلسة وصور المنتجات ومسار الطلب.",
        },
      ],
    },
    architecture: {
      index: "03",
      label: "البنية التقنية",
      title: "واجهة منتجات مشتركة تخدم تطبيقي الويب والهاتف.",
      description:
        "يفصل التنفيذ بين واجهات المنتج ونظام Django REST الخلفي، مع حفظ بيانات الكتالوج والطلبات في PostgreSQL.",
      nodes: {
        web: { label: "تطبيق الويب", value: "Next.js 14 · TypeScript · next-intl · Redux Toolkit" },
        api: { label: "واجهة التطبيق", value: "Django 5.1 · Django REST Framework · JWT/Djoser" },
        data: { label: "البيانات العلائقية", value: "PostgreSQL · المنتجات · الاستخدامات · الطلبات" },
        mobile: { label: "تطبيق الهاتف", value: "Expo · React Native · Expo Router · RTK Query" },
      },
    },
    model: {
      index: "04",
      label: "نموذج المنتجات",
      title: "بيانات الكتالوج تعكس طريقة اختيار منتجات السيارات.",
      description:
        "ينتمي كل منتج إلى تصنيف، وترتبط به سجلات استخدام توضّح الشركة المصنّعة ومعلومات السيارة المناسبة له. ويحتفظ كل طلب بعناصر مستقلة مرتبطة بالمنتجات.",
      relationships: [
        ["التصنيف", "المنتج"],
        ["المنتج", "الاستخدام في السيارة"],
        ["الطلب", "عنصر الطلب"],
        ["عنصر الطلب", "المنتج"],
      ],
    },
    flow: {
      index: "05",
      label: "رحلة المنتج",
      title: "مسار العمل الأساسي نفسه متاح عبر الويب والهاتف.",
      steps: [
        ["الاكتشاف", "تصفح التصنيفات أو البحث بأسماء المنتجات."],
        ["المراجعة", "فتح تفاصيل المنتج ومراجعة استخداماته في السيارات."],
        ["الاختيار", "إضافة المنتجات إلى السلة وتعديل الكميات."],
        ["الطلب", "إدخال بيانات التوصيل وإرسال الطلب عبر واجهة API."],
      ],
    },
    decisions: {
      index: "06",
      label: "قرارات التنفيذ",
      title: "قرارات تقنية موثقة في التنفيذ الفعلي.",
      items: [
        ["واجهة REST مشتركة", "يستخدم تطبيقا الويب والهاتف النظام الخلفي نفسه للكتالوج والمصادقة والطلبات."],
        ["توطين قائم على المسارات", "يمنح تطبيق الويب العربية والإنجليزية مسارات مستقلة واتجاه الصفحة المناسب."],
        ["جلسات مناسبة لكل عميل", "يستخدم الويب طلبات JWT مع ملفات الارتباط، بينما يحفظ تطبيق الهاتف الرموز محليًا ويجددها."],
        ["علاقات منتجات قابلة لإعادة الاستخدام", "فُصلت استخدامات السيارات عن المنتجات حتى يحتفظ المنتج بعدة سجلات استخدام."],
      ],
    },
    outcome: {
      index: "07",
      label: "النتيجة الموثقة",
      title: "منتج عام ثنائي اللغة تدعمه تطبيقات مكتملة للويب وAPI والهاتف.",
      description:
        "الموقع العام يعمل، وتحتوي المستودعات على تنفيذ النظام الخلفي وتطبيقي الويب والهاتف. لا تتوفر بيانات موثقة عن الزيارات أو الطلبات أو الإيرادات أو تحسين الأداء، لذلك لا أعرض أرقامًا غير مثبتة.",
    },
    stack: {
      label: "التقنيات المستخدمة",
      items: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Next.js", "TypeScript", "React", "Redux Toolkit", "Expo", "React Native"],
    },
    contact: {
      label: "هل لديك منتج يحتاج إلى تنفيذ الويب وAPI والهاتف؟",
      title: "لنحوّل التصميم وقواعد العمل إلى نظام يعمل.",
      email: "ناقش مشروعك معي",
      portfolio: "عرض المزيد من الأعمال",
    },
  },
} as const;

export function getFirstGroupCaseStudy(locale: Locale) {
  return firstGroupCaseStudy[locale];
}
