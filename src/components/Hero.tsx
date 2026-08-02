import { ShieldCheck, Lock, Award, HeartHandshake, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';
import { useLanguageTheme } from '../context/LanguageThemeContext';

export const Hero = () => {
  const { lang, t } = useLanguageTheme();

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
    lang === 'es'
      ? 'Hola R&R Integral Services, deseo consultar por un trámite.'
      : 'Hello R&R Integral Services, I would like to inquire about a procedure.'
  )}`;

  return (
    <section id="inicio" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-slate-950">
      {/* Subtle Background Radial Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>{t.hero.topBadge}</span>
          </div>
        </div>

        {/* Hero Title & Subheadline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {t.hero.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            {t.hero.description}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#servicios"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gold-gradient hover:opacity-95 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/20 flex items-center justify-center gap-3 transition-all hover:scale-[1.02]"
            >
              <span>{t.hero.ctaExplore}</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card hover:bg-slate-800 text-white font-semibold text-base border border-slate-700 flex items-center justify-center gap-3 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
              <span>{t.hero.ctaWhatsapp}</span>
            </a>
          </div>
        </div>

        {/* 4 Pillars Badge Banner */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="text-center mb-8">
            <span className="text-xs font-serif-brand font-bold tracking-widest text-amber-400 uppercase">
              {t.hero.pillarsTitle}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            
            <div className="glass-card p-5 rounded-2xl border border-slate-800 flex flex-col items-center text-center space-y-2 group hover:border-amber-500/40 transition-all">
              <div className="p-3 rounded-xl bg-blue-950/60 text-blue-400 border border-blue-800/40 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif-brand font-bold text-slate-100 text-sm tracking-wide uppercase">{t.hero.pillars[0].title}</h3>
              <p className="text-xs text-slate-400">{t.hero.pillars[0].desc}</p>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-slate-800 flex flex-col items-center text-center space-y-2 group hover:border-amber-500/40 transition-all">
              <div className="p-3 rounded-xl bg-amber-950/60 text-amber-400 border border-amber-800/40 group-hover:scale-110 transition-transform">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-serif-brand font-bold text-slate-100 text-sm tracking-wide uppercase">{t.hero.pillars[1].title}</h3>
              <p className="text-xs text-slate-400">{t.hero.pillars[1].desc}</p>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-slate-800 flex flex-col items-center text-center space-y-2 group hover:border-amber-500/40 transition-all">
              <div className="p-3 rounded-xl bg-indigo-950/60 text-indigo-400 border border-indigo-800/40 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif-brand font-bold text-slate-100 text-sm tracking-wide uppercase">{t.hero.pillars[2].title}</h3>
              <p className="text-xs text-slate-400">{t.hero.pillars[2].desc}</p>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-slate-800 flex flex-col items-center text-center space-y-2 group hover:border-amber-500/40 transition-all">
              <div className="p-3 rounded-xl bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif-brand font-bold text-slate-100 text-sm tracking-wide uppercase">{t.hero.pillars[3].title}</h3>
              <p className="text-xs text-slate-400">{t.hero.pillars[3].desc}</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
