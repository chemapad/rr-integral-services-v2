import { MessageCircle, Phone, MapPin, Mail, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/servicesData';
import { useLanguageTheme } from '../context/LanguageThemeContext';

export const Footer = () => {
  const { lang, t } = useLanguageTheme();

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
    lang === 'es'
      ? 'Hola R&R Integral Services, deseo información sobre sus servicios.'
      : 'Hello R&R Integral Services, I would like information about your services.'
  )}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border border-amber-500/40 flex items-center justify-center">
                <span className="font-serif-brand font-bold text-xl gold-gradient-text">R&R</span>
              </div>
              <span className="font-serif-brand font-bold text-lg text-white">
                R & R <span className="gold-gradient-text">INTEGRAL SERVICES</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              {COMPANY_INFO.slogan[lang]}
            </p>
            <p className="text-amber-400 font-serif-brand font-semibold text-xs tracking-wide">
              "{COMPANY_INFO.secondarySlogan[lang]}"
            </p>
          </div>

          {/* Col 2: Services Highlights */}
          <div className="space-y-3">
            <h4 className="font-serif-brand font-bold text-slate-200 text-sm tracking-wide uppercase">
              {t.footer.servicesCol}
            </h4>
            <ul className="space-y-2">
              {SERVICES_DATA.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <a href="#servicios" className="hover:text-amber-400 transition-colors">
                    {cat.title[lang]} {cat.subtitle?.[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: More Services */}
          <div className="space-y-3">
            <h4 className="font-serif-brand font-bold text-slate-200 text-sm tracking-wide uppercase">
              {t.footer.otherCol}
            </h4>
            <ul className="space-y-2">
              {SERVICES_DATA.slice(6).map((cat) => (
                <li key={cat.id}>
                  <a href="#servicios" className="hover:text-amber-400 transition-colors">
                    {cat.title[lang]} {cat.subtitle?.[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="font-serif-brand font-bold text-slate-200 text-sm tracking-wide uppercase">
              {t.footer.contactCol}
            </h4>
            <div className="space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-amber-400">{COMPANY_INFO.email}</a>
              </p>
              <div className="pt-1 space-y-1">
                {COMPANY_INFO.phones.map((p, idx) => (
                  <p key={idx} className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                    <a href={`tel:${p.raw}`} className="hover:text-amber-400 font-semibold">{p.display}</a>
                  </p>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} R & R INTEGRAL SERVICES LLC. {t.footer.rights}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1"
            >
              <span>{t.footer.scrollTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Floating Sticky WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-2xl shadow-emerald-500/40 border-2 border-emerald-300 transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-slate-950" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs pl-0 group-hover:pl-2">
          {t.footer.floatingWa}
        </span>
      </a>
    </footer>
  );
};
