import type { Locale } from "@/lib/i18n";

export type CaseStudyCopy = {
  metadata: { title: string; description: string };
  navigation: { back: string; live: string; switchLanguage: string; alternateLanguage: string };
  hero: { eyebrow: string; title: string; summary: string; imageAlt: string; attribution: string };
  facts: ReadonlyArray<readonly [string, string]>;
  overview: { index: string; label: string; title: string; paragraphs: ReadonlyArray<string> };
  ownership: {
    index: string;
    label: string;
    title: string;
    items: ReadonlyArray<{ title: string; description: string }>;
  };
  architecture: {
    index: string;
    label: string;
    title: string;
    description: string;
    nodes: Record<"web" | "api" | "data" | "mobile", { label: string; value: string }>;
  };
  model: {
    index: string;
    label: string;
    title: string;
    description: string;
    relationships: ReadonlyArray<readonly [string, string]>;
  };
  flow: {
    index: string;
    label: string;
    title: string;
    steps: ReadonlyArray<readonly [string, string]>;
  };
  decisions: {
    index: string;
    label: string;
    title: string;
    items: ReadonlyArray<readonly [string, string]>;
  };
  outcome: { index: string; label: string; title: string; description: string };
  stack: { label: string; items: ReadonlyArray<string> };
  contact: { label: string; title: string; email: string; portfolio: string };
};

export const caseStudySlugs = ["first-group", "tijaraos"] as const;
export type CaseStudySlug = (typeof caseStudySlugs)[number];

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
} as const satisfies Record<Locale, CaseStudyCopy>;

const tijaraOsCaseStudy = {
  en: {
    metadata: {
      title: "TijaraOS Case Study | Ahmed Elsayed",
      description:
        "How Ahmed Elsayed built a private retail-operations SaaS with tenant-aware Django APIs, transactional inventory, Next.js, Expo, PostgreSQL, and release checks.",
    },
    navigation: {
      back: "Back to portfolio",
      live: "Open read-only demo",
      switchLanguage: "عرض دراسة الحالة بالعربية",
      alternateLanguage: "AR",
    },
    hero: {
      eyebrow: "Case study · Retail operations SaaS",
      title: "TijaraOS",
      summary:
        "An in-progress retail-operations platform connecting tenant-aware Django APIs with bilingual Next.js web workflows and a cashier-focused Expo client.",
      imageAlt: "Sanitized TijaraOS retail operations dashboard illustration",
      attribution: "Private product · Public read-only demo with fictional data",
    },
    facts: [
      ["Role", "Full-Stack Developer"],
      ["Scope", "Backend, web, and mobile"],
      ["Languages", "Arabic and English"],
      ["Status", "In progress · public read-only demo"],
    ],
    overview: {
      index: "01",
      label: "Overview",
      title: "Retail operations organized around one protected workspace boundary.",
      paragraphs: [
        "TijaraOS brings organizations, branches, products, inventory, customers, point-of-sale activity, and reporting into one retail-operations system.",
        "I worked across the relational domain, organization-scoped API access, transaction-sensitive inventory and sales services, protected web workflows, mobile API integration, and release verification.",
      ],
    },
    ownership: {
      index: "02",
      label: "My contribution",
      title: "Full-stack implementation across access, operations, interfaces, and delivery.",
      items: [
        {
          title: "Tenant-aware backend",
          description: "Implemented workspace membership, active-organization scope, permission overrides, and server-scoped Django REST Framework APIs.",
        },
        {
          title: "Inventory and sales consistency",
          description: "Built branch inventory, movements, stocktakes, POS sales, cancellations, receipts, customers, debts, and payment workflows.",
        },
        {
          title: "Web and mobile workflows",
          description: "Connected protected Next.js routes and a cashier-focused Expo client to shared authentication, permissions, validation, and business rules.",
        },
        {
          title: "Release verification",
          description: "Added Docker services, GitHub Actions, backend tests and checks, frontend linting, type checks, builds, and browser acceptance coverage.",
        },
      ],
    },
    architecture: {
      index: "03",
      label: "Architecture",
      title: "One server-side trust boundary for web and mobile operations.",
      description:
        "The API resolves organization and permission context before application services change PostgreSQL data. Redis supports cache and throttling concerns without becoming the system of record.",
      nodes: {
        web: { label: "Web application", value: "Next.js · TypeScript · same-origin gateway · HttpOnly session" },
        api: { label: "Application boundary", value: "Django 5.2 · DRF · tenant scope · permissions · services" },
        data: { label: "Operational data", value: "PostgreSQL · transactions · row locks · movement history" },
        mobile: { label: "Mobile application", value: "Expo · cashier workflows · authenticated API client" },
      },
    },
    model: {
      index: "04",
      label: "Domain model",
      title: "The data model keeps tenant, branch, stock, and sale relationships explicit.",
      description:
        "Organizations define the tenant boundary. Branch inventory records operational stock, inventory movements retain quantity history, and sales preserve their own line items.",
      relationships: [
        ["Organization", "Membership"],
        ["Branch", "Branch inventory"],
        ["Product", "Inventory movement"],
        ["Sale", "Sale item"],
      ],
    },
    flow: {
      index: "05",
      label: "Operational journey",
      title: "Configuration, stock, sale, and review share the same access rules.",
      steps: [
        ["Configure", "Create the workspace context, branches, team membership, and effective permissions."],
        ["Stock", "Manage products, branch quantities, movements, and stocktake workflows."],
        ["Sell", "Validate a POS sale, lock relevant stock, and commit sale items and movements together."],
        ["Review", "Inspect receipts, customers, sales history, low stock, and branch-aware summaries."],
      ],
    },
    decisions: {
      index: "06",
      label: "Engineering decisions",
      title: "Critical boundaries are enforced by the server and database.",
      items: [
        ["Server-side tenant isolation", "Business queries and mutations use the active organization context instead of trusting a client-supplied organization identifier."],
        ["Transactional stock changes", "Consistency-sensitive workflows use database transactions and row locking, with inventory movements recording quantity changes."],
        ["Browser token isolation", "The web gateway keeps JWT credentials in HttpOnly, SameSite cookies and validates origin and CSRF values for unsafe requests."],
        ["Release gates", "Checks cover backend configuration and tests, migration drift, dependency policy, frontend and mobile verification, and optional browser acceptance."],
      ],
    },
    outcome: {
      index: "07",
      label: "Verified outcome",
      title: "An implemented, pilot-oriented system with a public read-only demo.",
      description:
        "The public demo verifies the bilingual web experience, seeded fictional records, and Viewer-only access while the sanitized evidence documents the private backend, mobile, data, permission, transaction, and delivery boundaries. No customer count, transaction volume, revenue, uptime, or performance result is claimed.",
    },
    stack: {
      label: "Technology used",
      items: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Redis", "Next.js", "TypeScript", "Tailwind CSS", "Expo", "Docker", "GitHub Actions", "Playwright"],
    },
    contact: {
      label: "Need a multi-tenant business system with reliable operational workflows?",
      title: "Let's turn the domain rules into a product teams can verify.",
      email: "Discuss a project",
      portfolio: "View more work",
    },
  },
  ar: {
    metadata: {
      title: "دراسة حالة TijaraOS | أحمد السيد",
      description:
        "كيف بنى أحمد السيد منصة خاصة لعمليات التجزئة باستخدام Django وPostgreSQL وNext.js وExpo، مع عزل مساحات العمل واتساق المخزون وفحوصات الإصدار.",
    },
    navigation: {
      back: "العودة إلى معرض الأعمال",
      live: "فتح العرض التجريبي للقراءة فقط",
      switchLanguage: "View the case study in English",
      alternateLanguage: "EN",
    },
    hero: {
      eyebrow: "دراسة حالة · منصة SaaS لعمليات التجزئة",
      title: "TijaraOS",
      summary:
        "منصة قيد التطوير لعمليات التجزئة، تربط واجهات Django API المعزولة حسب مساحة العمل بتطبيق ويب ثنائي اللغة عبر Next.js وتطبيق Expo موجه لنقطة البيع.",
      imageAlt: "رسم توضيحي منقح للوحة عمليات التجزئة في TijaraOS",
      attribution: "منتج خاص · عرض تجريبي عام للقراءة فقط ببيانات غير حقيقية",
    },
    facts: [
      ["الدور", "مطور Full‑Stack"],
      ["النطاق", "النظام الخلفي والويب والهاتف"],
      ["اللغات", "العربية والإنجليزية"],
      ["الحالة", "قيد التطوير · عرض عام للقراءة فقط"],
    ],
    overview: {
      index: "01",
      label: "نظرة عامة",
      title: "عمليات التجزئة منظّمة حول حدود محمية لمساحة العمل.",
      paragraphs: [
        "يجمع TijaraOS المؤسسات والفروع والمنتجات والمخزون والعملاء وعمليات نقطة البيع والتقارير داخل نظام واحد لعمليات التجزئة.",
        "عملت عبر نموذج البيانات العلائقي، وتقييد الوصول حسب المؤسسة، وخدمات المخزون والمبيعات الحساسة للمعاملات، ومسارات الويب المحمية، وتكامل الهاتف، والتحقق من جاهزية الإصدار.",
      ],
    },
    ownership: {
      index: "02",
      label: "مساهمتي",
      title: "تنفيذ Full‑Stack يشمل الوصول والعمليات والواجهات والتسليم.",
      items: [
        {
          title: "نظام خلفي معزول حسب المؤسسة",
          description: "نفذت العضويات وتحديد المؤسسة النشطة وتخصيص الصلاحيات وواجهات Django REST Framework المقيدة على الخادم.",
        },
        {
          title: "اتساق المخزون والمبيعات",
          description: "بنيت مخزون الفروع والحركات والجرد ومبيعات نقطة البيع والإلغاء والإيصالات والعملاء والديون وعمليات الدفع.",
        },
        {
          title: "مسارات الويب والهاتف",
          description: "ربطت مسارات Next.js المحمية وتطبيق Expo الموجه للكاشير بالمصادقة والصلاحيات والتحقق وقواعد العمل المشتركة.",
        },
        {
          title: "التحقق من الإصدار",
          description: "أضفت خدمات Docker وGitHub Actions واختبارات وفحوصات النظام الخلفي وفحص الواجهة والأنواع والبناء واختبارات القبول في المتصفح.",
        },
      ],
    },
    architecture: {
      index: "03",
      label: "البنية التقنية",
      title: "حد ثقة واحد على الخادم لعمليات الويب والهاتف.",
      description:
        "تحدد واجهة API المؤسسة والصلاحيات قبل أن تغيّر خدمات التطبيق بيانات PostgreSQL. ويدعم Redis التخزين المؤقت وتقييد الطلبات دون أن يصبح مصدر البيانات الأساسي.",
      nodes: {
        web: { label: "تطبيق الويب", value: "Next.js · TypeScript · بوابة من النطاق نفسه · جلسة HttpOnly" },
        api: { label: "حدود التطبيق", value: "Django 5.2 · DRF · نطاق المؤسسة · الصلاحيات · الخدمات" },
        data: { label: "بيانات التشغيل", value: "PostgreSQL · معاملات · قفل الصفوف · سجل الحركات" },
        mobile: { label: "تطبيق الهاتف", value: "Expo · مسارات الكاشير · عميل API مصادق عليه" },
      },
    },
    model: {
      index: "04",
      label: "نموذج المجال",
      title: "نموذج بيانات صريح لعلاقات المؤسسة والفروع والمخزون والمبيعات.",
      description:
        "تحدد المؤسسة حدود العزل، ويسجل مخزون الفرع الكمية التشغيلية، وتحفظ حركات المخزون تاريخ تغير الكميات، بينما تحتفظ كل عملية بيع بعناصرها المستقلة.",
      relationships: [
        ["المؤسسة", "العضوية"],
        ["الفرع", "مخزون الفرع"],
        ["المنتج", "حركة المخزون"],
        ["عملية البيع", "عنصر البيع"],
      ],
    },
    flow: {
      index: "05",
      label: "رحلة التشغيل",
      title: "الإعداد والمخزون والبيع والمراجعة تخضع لقواعد الوصول نفسها.",
      steps: [
        ["الإعداد", "إنشاء سياق مساحة العمل والفروع وعضويات الفريق والصلاحيات الفعلية."],
        ["المخزون", "إدارة المنتجات وكميات الفروع والحركات ومسارات الجرد."],
        ["البيع", "التحقق من عملية نقطة البيع وقفل المخزون المطلوب وحفظ عناصر البيع والحركات معًا."],
        ["المراجعة", "مراجعة الإيصالات والعملاء وسجل المبيعات والمخزون المنخفض والملخصات المرتبطة بالفروع."],
      ],
    },
    decisions: {
      index: "06",
      label: "القرارات الهندسية",
      title: "يفرض الخادم وقاعدة البيانات الحدود الحساسة.",
      items: [
        ["عزل المؤسسات على الخادم", "تستخدم استعلامات الأعمال وتغييراتها سياق المؤسسة النشطة بدل الوثوق بمعرّف مؤسسة يرسله العميل."],
        ["تغييرات مخزون داخل معاملات", "تستخدم العمليات الحساسة للاتساق معاملات قاعدة البيانات وقفل الصفوف، مع تسجيل تغيرات الكمية في حركات المخزون."],
        ["عزل رموز جلسة المتصفح", "تحفظ بوابة الويب رموز JWT داخل ملفات ارتباط HttpOnly وSameSite وتتحقق من المصدر وCSRF في الطلبات غير الآمنة."],
        ["بوابات الإصدار", "تغطي الفحوصات إعداد النظام الخلفي واختباراته وانحراف الترحيلات وسياسة الاعتماديات والتحقق من الواجهة والهاتف واختبارات القبول الاختيارية."],
      ],
    },
    outcome: {
      index: "07",
      label: "النتيجة الموثقة",
      title: "نظام منفذ ومهيأ لمرحلة تجريبية مع عرض عام للقراءة فقط.",
      description:
        "يثبت العرض العام تجربة الويب ثنائية اللغة والبيانات التجريبية غير الحقيقية وصلاحية المشاهدة فقط، بينما يوثق الدليل المنقح حدود النظام الخلفي والهاتف والبيانات والصلاحيات والمعاملات والتسليم. لا أدعي أعداد عملاء أو حجم معاملات أو إيرادات أو نسبة تشغيل أو نتيجة أداء.",
    },
    stack: {
      label: "التقنيات المستخدمة",
      items: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Redis", "Next.js", "TypeScript", "Tailwind CSS", "Expo", "Docker", "GitHub Actions", "Playwright"],
    },
    contact: {
      label: "هل تحتاج إلى نظام أعمال متعدد المؤسسات ومسارات تشغيل موثوقة؟",
      title: "لنحوّل قواعد المجال إلى منتج يستطيع الفريق التحقق منه.",
      email: "ناقش مشروعك معي",
      portfolio: "عرض المزيد من الأعمال",
    },
  },
} as const satisfies Record<Locale, CaseStudyCopy>;

const caseStudies: Record<CaseStudySlug, Record<Locale, CaseStudyCopy>> = {
  "first-group": firstGroupCaseStudy,
  tijaraos: tijaraOsCaseStudy,
};

export function getCaseStudy(slug: CaseStudySlug, locale: Locale): CaseStudyCopy {
  return caseStudies[slug][locale];
}

export function isCaseStudySlug(value: string): value is CaseStudySlug {
  return caseStudySlugs.includes(value as CaseStudySlug);
}
