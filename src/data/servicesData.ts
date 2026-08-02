import type { Language } from './translations';

export interface ServiceCategory {
  id: string;
  title: Record<Language, string>;
  subtitle?: Record<Language, string>;
  iconName: string;
  badge?: Record<Language, string>;
  badgeType?: 'quickbooks' | 'irs' | 'certified' | 'ron';
  colorTheme: {
    border: string;
    bgGlow: string;
    badgeBg: string;
    badgeText: string;
    iconBg: string;
    iconText: string;
  };
  items: Record<Language, string[]>;
}

export const COMPANY_INFO = {
  name: "R & R INTEGRAL SERVICES LLC",
  slogan: {
    es: "Soluciones integrales para ti, tu familia y tu negocio.",
    en: "Comprehensive solutions for you, your family, and your business."
  },
  secondarySlogan: {
    es: "Confianza, experiencia y servicio que marcan la diferencia.",
    en: "Trust, experience, and service that make the difference."
  },
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
  facebookUrl: "https://facebook.com"
};

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "inmigracion",
    title: { es: "Inmigración", en: "Immigration" },
    subtitle: { es: "(Preparación de Formularios)", en: "(Form Preparation Services)" },
    iconName: "Landmark",
    colorTheme: {
      border: "hover:border-blue-500/50",
      bgGlow: "from-blue-600/10 to-transparent",
      badgeBg: "bg-blue-950/80 dark:bg-blue-950/80 border-blue-500/30",
      badgeText: "text-blue-300",
      iconBg: "bg-blue-600/20",
      iconText: "text-blue-400 font-bold"
    },
    items: {
      es: [
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
      ],
      en: [
        "Political Asylum (I-589)",
        "Family Petitions",
        "Adjustment of Status",
        "Green Card Renewal",
        "Work Permits (EAD)",
        "Citizenship (N-400)",
        "Green Card Replacement",
        "TPS (Temporary Protected Status)",
        "Humanitarian Parole",
        "DACA",
        "Change of Address (USCIS & EOIR)",
        "Immigration Court Filings",
        "Certified Translations"
      ]
    }
  },
  {
    id: "notary",
    title: { es: "Notary Public", en: "Notary Public" },
    subtitle: { es: "(Servicios Notariales Certificados)", en: "(Certified Notary Services)" },
    iconName: "FileCheck2",
    badge: { es: "Remote Online Notary (RON)", en: "Remote Online Notary (RON)" },
    badgeType: "ron",
    colorTheme: {
      border: "hover:border-amber-500/50",
      bgGlow: "from-amber-600/10 to-transparent",
      badgeBg: "bg-amber-950/80 border-amber-500/30",
      badgeText: "text-amber-300",
      iconBg: "bg-amber-600/20",
      iconText: "text-amber-400 font-bold"
    },
    items: {
      es: [
        "Acknowledgments",
        "Jurats",
        "Oaths & Affirmations",
        "Affidavits",
        "Power of Attorney",
        "Travel Consent for Minors",
        "Remote Online Notary (RON)",
        "Certificación de copias (cuando aplique)"
      ],
      en: [
        "Acknowledgments",
        "Jurats",
        "Oaths & Affirmations",
        "Affidavits",
        "Power of Attorney",
        "Travel Consent for Minors",
        "Remote Online Notary (RON)",
        "Certified Copy Verification (when applicable)"
      ]
    }
  },
  {
    id: "apostillas",
    title: { es: "Apostillas", en: "Apostilles" },
    subtitle: { es: "(Documentación Internacional)", en: "(International Document Legalization)" },
    iconName: "Award",
    colorTheme: {
      border: "hover:border-indigo-500/50",
      bgGlow: "from-indigo-600/10 to-transparent",
      badgeBg: "bg-indigo-950/80 border-indigo-500/30",
      badgeText: "text-indigo-300",
      iconBg: "bg-indigo-600/20",
      iconText: "text-indigo-400 font-bold"
    },
    items: {
      es: [
        "Apostilla de documentos personales",
        "Apostilla de documentos corporativos",
        "Legalizaciones",
        "Envío y seguimiento de documentos"
      ],
      en: [
        "Personal Document Apostilles",
        "Corporate & Business Document Apostilles",
        "Legalizations",
        "Document Shipping & Tracking"
      ]
    }
  },
  {
    id: "divorcios",
    title: { es: "Divorcios y Familia", en: "Divorce & Family" },
    subtitle: { es: "(Documentos Familiares)", en: "(Family & Marital Documents)" },
    iconName: "HeartHandshake",
    colorTheme: {
      border: "hover:border-rose-500/50",
      bgGlow: "from-rose-600/10 to-transparent",
      badgeBg: "bg-rose-950/80 border-rose-500/30",
      badgeText: "text-rose-300",
      iconBg: "bg-rose-600/20",
      iconText: "text-rose-400 font-bold"
    },
    items: {
      es: [
        "Divorcio por mutuo acuerdo",
        "Acuerdos matrimoniales",
        "Custodia",
        "Manutención",
        "Paternidad",
        "Cambio de nombre"
      ],
      en: [
        "Uncontested Mutual Divorce",
        "Marital Agreements",
        "Child Custody Documents",
        "Child Support Agreements",
        "Paternity Filings",
        "Legal Name Change"
      ]
    }
  },
  {
    id: "contabilidad",
    title: { es: "Contabilidad", en: "Accounting" },
    subtitle: { es: "(Gestión Financiera de Negocios)", en: "(Business Financial Management)" },
    iconName: "Calculator",
    badge: { es: "Intuit QuickBooks Certified ProAdvisor", en: "Intuit QuickBooks Certified ProAdvisor" },
    badgeType: "quickbooks",
    colorTheme: {
      border: "hover:border-emerald-500/50",
      bgGlow: "from-emerald-600/10 to-transparent",
      badgeBg: "bg-emerald-950/80 border-emerald-500/30",
      badgeText: "text-emerald-300",
      iconBg: "bg-emerald-600/20",
      iconText: "text-emerald-400 font-bold"
    },
    items: {
      es: [
        "Bookkeeping",
        "QuickBooks Setup & Cleanup",
        "Catch-up Bookkeeping",
        "Profit & Loss (P&L)",
        "Balance Sheet",
        "Cash Flow Statements",
        "Reconciliaciones bancarias"
      ],
      en: [
        "Bookkeeping",
        "QuickBooks Setup & Cleanup",
        "Catch-up Bookkeeping",
        "Profit & Loss (P&L)",
        "Balance Sheet",
        "Cash Flow Statements",
        "Bank Reconciliations"
      ]
    }
  },
  {
    id: "impuestos",
    title: { es: "Impuestos", en: "Taxes" },
    subtitle: { es: "(Tax Preparation Personal y Empresarial)", en: "(Personal & Business Tax Preparation)" },
    iconName: "Receipt",
    badge: { es: "Cumplimiento IRS Garantizado", en: "IRS Compliance Guaranteed" },
    badgeType: "irs",
    colorTheme: {
      border: "hover:border-sky-500/50",
      bgGlow: "from-sky-600/10 to-transparent",
      badgeBg: "bg-sky-950/80 border-sky-500/30",
      badgeText: "text-sky-300",
      iconBg: "bg-sky-600/20",
      iconText: "text-sky-400 font-bold"
    },
    items: {
      es: [
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
      ],
      en: [
        "Personal Tax Returns (Form 1040)",
        "LLC (Schedule C)",
        "Partnerships (Form 1065)",
        "S Corporations (Form 1120-S)",
        "Corporations (Form 1120)",
        "Tax Amendments (Form 1040-X)",
        "ITIN Application & Renewal",
        "State Sales Tax",
        "IRS Payment Installment Plans",
        "IRS Penalty Abatement"
      ]
    }
  },
  {
    id: "empresas",
    title: { es: "Empresas", en: "Business Services" },
    subtitle: { es: "(Registro y Estructuración Corporativa)", en: "(Corporate Formation & Setup)" },
    iconName: "Building2",
    colorTheme: {
      border: "hover:border-green-500/50",
      bgGlow: "from-green-600/10 to-transparent",
      badgeBg: "bg-green-950/80 border-green-500/30",
      badgeText: "text-green-300",
      iconBg: "bg-green-600/20",
      iconText: "text-green-400 font-bold"
    },
    items: {
      es: [
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
      ],
      en: [
        "LLC Formation",
        "Corporations Incorporation",
        "EIN (Employer Tax ID)",
        "DBA Fictitious Name Registration",
        "Annual Report Filings",
        "Registered Agent Services",
        "Operating Agreements",
        "Company Dissolution",
        "Corporate Reinstatement",
        "FinCEN BOI Reporting"
      ]
    }
  },
  {
    id: "payroll",
    title: { es: "Payroll", en: "Payroll" },
    subtitle: { es: "(Nómina y Reportes Laborales)", en: "(Employee Payroll & Wage Filing)" },
    iconName: "CreditCard",
    colorTheme: {
      border: "hover:border-purple-500/50",
      bgGlow: "from-purple-600/10 to-transparent",
      badgeBg: "bg-purple-950/80 border-purple-500/30",
      badgeText: "text-purple-300",
      iconBg: "bg-purple-600/20",
      iconText: "text-purple-400 font-bold"
    },
    items: {
      es: [
        "Payroll de empleados",
        "W-2 y W-3",
        "1099-NEC",
        "1099-MISC",
        "1099-K",
        "Payroll Reports periódicos"
      ],
      en: [
        "Employee Payroll Processing",
        "Forms W-2 & W-3 Filing",
        "Form 1099-NEC Independent Contractor",
        "Form 1099-MISC",
        "Form 1099-K",
        "Periodic Payroll Reports"
      ]
    }
  },
  {
    id: "seguros",
    title: { es: "Seguros", en: "Insurance" },
    subtitle: { es: "(Protección Personal y Familiar)", en: "(Personal & Family Coverage)" },
    iconName: "ShieldCheck",
    colorTheme: {
      border: "hover:border-cyan-500/50",
      bgGlow: "from-cyan-600/10 to-transparent",
      badgeBg: "bg-cyan-950/80 border-cyan-500/30",
      badgeText: "text-cyan-300",
      iconBg: "bg-cyan-600/20",
      iconText: "text-cyan-400 font-bold"
    },
    items: {
      es: [
        "Seguro de Vida",
        "Seguro de Salud",
        "Medicare",
        "Marketplace (ACA / Obamacare)",
        "Seguro Dental",
        "Seguro de Visión"
      ],
      en: [
        "Life Insurance",
        "Health Insurance",
        "Medicare Plans",
        "Marketplace (Obamacare / ACA)",
        "Dental Insurance",
        "Vision Coverage"
      ]
    }
  },
  {
    id: "traducciones",
    title: { es: "Traducciones", en: "Translations" },
    subtitle: { es: "(Documentación Oficial)", en: "(Official Certified Documents)" },
    iconName: "Languages",
    badge: { es: "Certificación Oficial", en: "Official Certification" },
    badgeType: "certified",
    colorTheme: {
      border: "hover:border-orange-500/50",
      bgGlow: "from-orange-600/10 to-transparent",
      badgeBg: "bg-orange-950/80 border-orange-500/30",
      badgeText: "text-orange-300",
      iconBg: "bg-orange-600/20",
      iconText: "text-orange-400 font-bold"
    },
    items: {
      es: [
        "Traducciones certificadas",
        "Inglés ↔️ Español",
        "Traducción de actas de nacimiento y matrimonio",
        "Traducción de títulos y récords académicos"
      ],
      en: [
        "Certified Legal Translations",
        "English ↔️ Spanish",
        "Birth & Marriage Certificate Translations",
        "Diplomas & Academic Transcript Translations"
      ]
    }
  },
  {
    id: "otros",
    title: { es: "Otros Servicios", en: "Other Services" },
    subtitle: { es: "(Trámites Administrativos)", en: "(Administrative Services)" },
    iconName: "FolderEdit",
    colorTheme: {
      border: "hover:border-teal-500/50",
      bgGlow: "from-teal-600/10 to-transparent",
      badgeBg: "bg-teal-950/80 border-teal-500/30",
      badgeText: "text-teal-300",
      iconBg: "bg-teal-600/20",
      iconText: "text-teal-400 font-bold"
    },
    items: {
      es: [
        "Cartas notarizadas",
        "Poderes especiales y generales",
        "Declaraciones juradas",
        "Cartas de invitación",
        "Escaneo e impresión de alta calidad",
        "Envío seguro de documentos",
        "Asistencia administrativa personalizada"
      ],
      en: [
        "Notarized Letters",
        "General & Special Power of Attorney",
        "Sworn Affidavits",
        "Invitation Letters",
        "High-Quality Scanning & Printing",
        "Secure Document Shipping",
        "Personalized Administrative Assistance"
      ]
    }
  }
];
