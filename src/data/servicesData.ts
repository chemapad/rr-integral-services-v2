export interface ServiceCategory {
  id: string;
  title: string;
  subtitle?: string;
  iconName: string;
  badge?: string;
  badgeType?: 'quickbooks' | 'irs' | 'certified' | 'ron';
  colorTheme: {
    border: string;
    bgGlow: string;
    badgeBg: string;
    badgeText: string;
    iconBg: string;
    iconText: string;
  };
  items: string[];
}

export const COMPANY_INFO = {
  name: "R & R INTEGRAL SERVICES LLC",
  slogan: "Soluciones integrales para ti, tu familia y tu negocio.",
  secondarySlogan: "Confianza, experiencia y servicio que marcan la diferencia.",
  heroHeadline: "Trámites Legales, Fiscales y Contables en Manos de Profesionales",
  heroSubheadline: "Todo en un solo lugar. Ahorra tiempo, evita estrés y simplifica tu vida personal y empresarial en Estados Unidos.",
  address: "421 W Venice St, Kissimmee, Florida 34741",
  addressShort: "Kissimmee, FL 34741",
  email: "rrintegralservicesllc@gmail.com",
  phones: [
    { display: "(352) 936-9133", raw: "3529369133" },
    { display: "(305) 922-8242", raw: "3059228242" }
  ],
  whatsapp: "13529369133",
  instagram: "@RYRTAXESERVICES",
  instagramUrl: "https://instagram.com/RYRTAXESERVICES",
  facebookUrl: "https://facebook.com",
  pillars: [
    { title: "Profesionalismo", desc: "Atención especializada con los más altos estándares normativos." },
    { title: "Confidencialidad", desc: "Protección absoluta de tu información personal y fiscal." },
    { title: "Responsabilidad", desc: "Compromiso puntual con la gestión de cada uno de tus trámites." },
    { title: "Compromiso", desc: "Acompañamiento continuo de principio a fin." }
  ]
};

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "inmigracion",
    title: "Inmigración",
    subtitle: "(Preparación de Formularios)",
    iconName: "Landmark",
    colorTheme: {
      border: "hover:border-blue-500/50",
      bgGlow: "from-blue-600/10 to-transparent",
      badgeBg: "bg-blue-950/80 border-blue-500/30",
      badgeText: "text-blue-300",
      iconBg: "bg-blue-600/20",
      iconText: "text-blue-400"
    },
    items: [
      "Asilo Político (I-589)",
      "Peticiones familiares",
      "Ajuste de estatus",
      "Renovación de residencia",
      "Permisos de trabajo (EAD)",
      "Ciudadanía (N-400)",
      "Reemplazo de Green Card",
      "TPS",
      "Parole",
      "DACA",
      "Cambio de dirección (USCIS y EOIR)",
      "Solicitudes para Corte de Inmigración",
      "Traducciones certificadas"
    ]
  },
  {
    id: "notary",
    title: "Notary Public",
    subtitle: "(Servicios Notariales Certificados)",
    iconName: "FileCheck2",
    badge: "Remote Online Notary (RON)",
    badgeType: "ron",
    colorTheme: {
      border: "hover:border-amber-500/50",
      bgGlow: "from-amber-600/10 to-transparent",
      badgeBg: "bg-amber-950/80 border-amber-500/30",
      badgeText: "text-amber-300",
      iconBg: "bg-amber-600/20",
      iconText: "text-amber-400"
    },
    items: [
      "Acknowledgments",
      "Jurats",
      "Oaths & Affirmations",
      "Affidavits",
      "Power of Attorney",
      "Travel Consent for Minors",
      "Remote Online Notary (RON)",
      "Certificación de copias (cuando aplique)"
    ]
  },
  {
    id: "apostillas",
    title: "Apostillas",
    subtitle: "(Documentación Internacional)",
    iconName: "Award",
    colorTheme: {
      border: "hover:border-indigo-500/50",
      bgGlow: "from-indigo-600/10 to-transparent",
      badgeBg: "bg-indigo-950/80 border-indigo-500/30",
      badgeText: "text-indigo-300",
      iconBg: "bg-indigo-600/20",
      iconText: "text-indigo-400"
    },
    items: [
      "Apostilla de documentos personales",
      "Apostilla de documentos corporativos",
      "Legalizaciones",
      "Envío y seguimiento de documentos"
    ]
  },
  {
    id: "divorcios",
    title: "Divorcios y Familia",
    subtitle: "(Documentos Familiares)",
    iconName: "HeartHandshake",
    colorTheme: {
      border: "hover:border-rose-500/50",
      bgGlow: "from-rose-600/10 to-transparent",
      badgeBg: "bg-rose-950/80 border-rose-500/30",
      badgeText: "text-rose-300",
      iconBg: "bg-rose-600/20",
      iconText: "text-rose-400"
    },
    items: [
      "Divorcio por mutuo acuerdo",
      "Acuerdos matrimoniales",
      "Custodia",
      "Manutención",
      "Paternidad",
      "Cambio de nombre"
    ]
  },
  {
    id: "contabilidad",
    title: "Contabilidad",
    subtitle: "(Gestión Financiera de Negocios)",
    iconName: "Calculator",
    badge: "Intuit QuickBooks Certified ProAdvisor",
    badgeType: "quickbooks",
    colorTheme: {
      border: "hover:border-emerald-500/50",
      bgGlow: "from-emerald-600/10 to-transparent",
      badgeBg: "bg-emerald-950/80 border-emerald-500/30",
      badgeText: "text-emerald-300",
      iconBg: "bg-emerald-600/20",
      iconText: "text-emerald-400"
    },
    items: [
      "Bookkeeping",
      "QuickBooks Setup & Cleanup",
      "Catch-up Bookkeeping",
      "Profit & Loss (P&L)",
      "Balance Sheet",
      "Cash Flow Statements",
      "Reconciliaciones bancarias"
    ]
  },
  {
    id: "impuestos",
    title: "Impuestos",
    subtitle: "(Tax Preparation Personal y Empresarial)",
    iconName: "Receipt",
    badge: "Cumplimiento IRS Garantizado",
    badgeType: "irs",
    colorTheme: {
      border: "hover:border-sky-500/50",
      bgGlow: "from-sky-600/10 to-transparent",
      badgeBg: "bg-sky-950/80 border-sky-500/30",
      badgeText: "text-sky-300",
      iconBg: "bg-sky-600/20",
      iconText: "text-sky-400"
    },
    items: [
      "Declaraciones personales (1040)",
      "LLC (Schedule C)",
      "Partnerships (1065)",
      "S Corporations (1120-S)",
      "Corporations (1120)",
      "Enmiendas (1040-X)",
      "ITIN Number",
      "Sales Tax",
      "IRS Payment Plans",
      "Penalty Abatement"
    ]
  },
  {
    id: "empresas",
    title: "Empresas",
    subtitle: "(Registro y Estructuración Corporativa)",
    iconName: "Building2",
    colorTheme: {
      border: "hover:border-green-500/50",
      bgGlow: "from-green-600/10 to-transparent",
      badgeBg: "bg-green-950/80 border-green-500/30",
      badgeText: "text-green-300",
      iconBg: "bg-green-600/20",
      iconText: "text-green-400"
    },
    items: [
      "Creación de LLC",
      "Corporaciones",
      "EIN (Tax ID)",
      "DBA (Doing Business As)",
      "Annual Report",
      "Registered Agent",
      "Operating Agreement",
      "Disolución de empresas",
      "Restablecimiento corporativo",
      "BOI Report (si aplica)"
    ]
  },
  {
    id: "payroll",
    title: "Payroll",
    subtitle: "(Nómina y Reportes Laborales)",
    iconName: "CreditCard",
    colorTheme: {
      border: "hover:border-purple-500/50",
      bgGlow: "from-purple-600/10 to-transparent",
      badgeBg: "bg-purple-950/80 border-purple-500/30",
      badgeText: "text-purple-300",
      iconBg: "bg-purple-600/20",
      iconText: "text-purple-400"
    },
    items: [
      "Payroll de empleados",
      "W-2 y W-3",
      "1099-NEC",
      "1099-MISC",
      "1099-K",
      "Payroll Reports periódicos"
    ]
  },
  {
    id: "seguros",
    title: "Seguros",
    subtitle: "(Protección Personal y Familiar)",
    iconName: "ShieldCheck",
    colorTheme: {
      border: "hover:border-cyan-500/50",
      bgGlow: "from-cyan-600/10 to-transparent",
      badgeBg: "bg-cyan-950/80 border-cyan-500/30",
      badgeText: "text-cyan-300",
      iconBg: "bg-cyan-600/20",
      iconText: "text-cyan-400"
    },
    items: [
      "Seguro de Vida",
      "Seguro de Salud",
      "Medicare",
      "Marketplace (ACA / Obamacare)",
      "Seguro Dental",
      "Seguro de Visión"
    ]
  },
  {
    id: "traducciones",
    title: "Traducciones",
    subtitle: "(Documentación Oficial)",
    iconName: "Languages",
    badge: "Certificación Oficial",
    badgeType: "certified",
    colorTheme: {
      border: "hover:border-orange-500/50",
      bgGlow: "from-orange-600/10 to-transparent",
      badgeBg: "bg-orange-950/80 border-orange-500/30",
      badgeText: "text-orange-300",
      iconBg: "bg-orange-600/20",
      iconText: "text-orange-400"
    },
    items: [
      "Traducciones certificadas",
      "Inglés ↔️ Español",
      "Traducción de actas de nacimiento y matrimonio",
      "Traducción de títulos y récords académicos"
    ]
  },
  {
    id: "otros",
    title: "Otros Servicios",
    subtitle: "(Trámites Administrativos)",
    iconName: "FolderEdit",
    colorTheme: {
      border: "hover:border-teal-500/50",
      bgGlow: "from-teal-600/10 to-transparent",
      badgeBg: "bg-teal-950/80 border-teal-500/30",
      badgeText: "text-teal-300",
      iconBg: "bg-teal-600/20",
      iconText: "text-teal-400"
    },
    items: [
      "Cartas notarizadas",
      "Poderes especiales y generales",
      "Declaraciones juradas",
      "Cartas de invitación",
      "Escaneo e impresión de alta calidad",
      "Envío seguro de documentos",
      "Asistencia administrativa personalizada"
    ]
  }
];
