import { useState } from 'react';
import { 
  SERVICES_DATA, 
  COMPANY_INFO 
} from '../data/servicesData';
import { 
  Search, 
  Landmark, 
  FileCheck2, 
  Award, 
  HeartHandshake, 
  Calculator, 
  Receipt, 
  Building2, 
  CreditCard, 
  ShieldCheck, 
  Languages, 
  FolderEdit,
  CheckCircle,
  MessageCircle
} from 'lucide-react';

export const ServicesSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Map icon strings to Lucide components
  const getIcon = (name: string) => {
    switch (name) {
      case 'Landmark': return <Landmark className="w-6 h-6" />;
      case 'FileCheck2': return <FileCheck2 className="w-6 h-6" />;
      case 'Award': return <Award className="w-6 h-6" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6" />;
      case 'Calculator': return <Calculator className="w-6 h-6" />;
      case 'Receipt': return <Receipt className="w-6 h-6" />;
      case 'Building2': return <Building2 className="w-6 h-6" />;
      case 'CreditCard': return <CreditCard className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Languages': return <Languages className="w-6 h-6" />;
      default: return <FolderEdit className="w-6 h-6" />;
    }
  };

  // Filter Categories & Items
  const filteredServices = SERVICES_DATA.filter((cat) => {
    const matchesCategory = activeCategory === 'all' || cat.id === activeCategory;
    
    if (!searchTerm.trim()) return matchesCategory;

    const query = searchTerm.toLowerCase();
    const matchesTitle = cat.title.toLowerCase().includes(query);
    const matchesSubtitle = cat.subtitle?.toLowerCase().includes(query);
    const matchesItems = cat.items.some(item => item.toLowerCase().includes(query));

    return matchesCategory && (matchesTitle || matchesSubtitle || matchesItems);
  });

  const handleWhatsappClick = (categoryTitle: string, item?: string) => {
    const text = item 
      ? `Hola R&R Integral Services, me interesa recibir información sobre: ${categoryTitle} - ${item}`
      : `Hola R&R Integral Services, me interesa consultar sobre el servicio de: ${categoryTitle}`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="servicios" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-serif-brand font-bold tracking-widest text-amber-400 uppercase">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Catálogo Completo de Trámites y Soluciones
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Ofrecemos asesoría y preparación profesional en 11 áreas clave. Utiliza el buscador o los filtros para encontrar tu trámite específico.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mt-6">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar trámite: Ej. Asilo, 1040, LLC, QuickBooks, Apostilla, Divorcio..."
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-slate-500 hover:text-slate-300"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-5xl mx-auto">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            Todos ({SERVICES_DATA.length})
          </button>
          {SERVICES_DATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 glass-card rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-base">No encontramos resultados para "{searchTerm}".</p>
            <button
              onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}
              className="mt-4 px-4 py-2 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold"
            >
              Ver todos los servicios
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((cat) => (
              <div
                key={cat.id}
                className={`glass-card p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${cat.colorTheme.border} relative overflow-hidden`}
              >
                {/* Subtle top color glow */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.colorTheme.bgGlow}`} />

                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl ${cat.colorTheme.iconBg} ${cat.colorTheme.iconText}`}>
                        {getIcon(cat.iconName)}
                      </div>
                      <div>
                        <h3 className="font-serif-brand text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                          {cat.title}
                        </h3>
                        {cat.subtitle && (
                          <span className="text-[11px] text-slate-400 block">
                            {cat.subtitle}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Special Badges (QuickBooks, IRS, RON, etc.) */}
                  {cat.badge && (
                    <div className="mb-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold border ${cat.colorTheme.badgeBg} ${cat.colorTheme.badgeText}`}>
                        {cat.badgeType === 'quickbooks' && <span className="text-emerald-400 font-extrabold">qb</span>}
                        {cat.badgeType === 'irs' && <span className="font-serif-brand">IRS</span>}
                        {cat.badge}
                      </span>
                    </div>
                  )}

                  {/* Service Items List */}
                  <ul className="space-y-2 mb-6">
                    {cat.items.map((item, idx) => {
                      const isHighlighted = searchTerm && item.toLowerCase().includes(searchTerm.toLowerCase());
                      return (
                        <li
                          key={idx}
                          onClick={() => handleWhatsappClick(cat.title, item)}
                          className={`flex items-start gap-2 text-xs transition-colors cursor-pointer group/item py-0.5 ${
                            isHighlighted ? 'text-amber-300 font-semibold bg-amber-500/10 px-2 rounded' : 'text-slate-300 hover:text-white'
                          }`}
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-amber-500/80 mt-0.5 shrink-0 group-hover/item:text-amber-400" />
                          <span className="group-hover/item:underline">{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Footer Action for Card */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => handleWhatsappClick(cat.title)}
                    className="flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Consultar Trámite</span>
                  </button>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                    {cat.items.length} Opciones
                  </span>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
