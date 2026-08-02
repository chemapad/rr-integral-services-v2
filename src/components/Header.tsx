import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin, Mail, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

interface HeaderProps {
  onSelectService?: (serviceName: string) => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hola R&R Integral Services, me gustaría solicitar información sobre sus servicios.')}`;

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-800/80">
      {/* Top Bar for contact info */}
      <div className="hidden lg:block bg-slate-950/80 border-b border-slate-800/50 py-1.5 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              {COMPANY_INFO.addressShort}
            </span>
            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              {COMPANY_INFO.email}
            </a>
          </div>
          <div className="flex items-center gap-4 font-medium text-slate-300">
            <span className="text-amber-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Atendemos en toda Florida
            </span>
            <span>|</span>
            <a href={COMPANY_INFO.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">
              Instagram: {COMPANY_INFO.instagram}
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border border-amber-500/40 flex items-center justify-center shadow-lg group-hover:border-amber-400 transition-all">
              <span className="font-serif-brand font-bold text-2xl gold-gradient-text tracking-tighter">R&R</span>
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-amber-500 rounded-full border-2 border-slate-900"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-brand text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                R & R <span className="gold-gradient-text">INTEGRAL SERVICES</span>
              </span>
              <span className="text-[10px] tracking-wider text-slate-400 font-medium uppercase">
                Soluciones Legales, Fiscales & Notariales
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#inicio" className="hover:text-amber-400 transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-amber-400 transition-colors">Servicios</a>
            <a href="#nosotros" className="hover:text-amber-400 transition-colors">Por qué elegirnos</a>
            <a href="#contacto" className="hover:text-amber-400 transition-colors">Contacto</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phones[0].raw}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold transition-all hover:scale-[1.02]"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.phones[0].display}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gold-gradient hover:opacity-95 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>WhatsApp Directo</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3 font-medium text-slate-300">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-amber-400"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-amber-400"
            >
              Todos los Servicios (11 Categorías)
            </a>
            <a
              href="#nosotros"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-amber-400"
            >
              Por Qué Elegirnos
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-amber-400"
            >
              Ubicación y Contacto
            </a>
          </nav>
          
          <div className="pt-2 border-t border-slate-800 flex flex-col space-y-2">
            <a
              href={`tel:${COMPANY_INFO.phones[0].raw}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-800 text-slate-200 text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Llamar: {COMPANY_INFO.phones[0].display}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gold-gradient text-slate-950 text-sm font-bold shadow-lg shadow-amber-500/20"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              Enviar Mensaje por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
