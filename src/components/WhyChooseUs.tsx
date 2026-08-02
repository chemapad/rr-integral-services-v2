import { ShieldCheck, Award, Sparkles } from 'lucide-react';
import { useLanguageTheme } from '../context/LanguageThemeContext';

export const WhyChooseUs = () => {
  const { t } = useLanguageTheme();

  return (
    <section id="nosotros" className="py-20 bg-slate-950 relative overflow-hidden border-t border-b border-slate-800/80">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main High-Impact Banner */}
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-amber-500/30 text-center relative overflow-hidden mb-16 shadow-2xl">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.whyUs.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-snug">
            {t.whyUs.title}
          </h2>
          
          <p className="text-amber-400 font-serif-brand font-bold text-lg sm:text-2xl mt-2 tracking-wide uppercase">
            {t.whyUs.subtitle}
          </p>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            {t.whyUs.description}
          </p>
        </div>

        {/* Credentials & Key Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-lg">
              QB
            </div>
            <h3 className="font-serif-brand text-lg font-bold text-white">
              {t.whyUs.cards[0].title}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.whyUs.cards[0].desc}
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-500/30 text-blue-400 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif-brand text-lg font-bold text-white">
              {t.whyUs.cards[1].title}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.whyUs.cards[1].desc}
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-500/30 text-amber-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif-brand text-lg font-bold text-white">
              {t.whyUs.cards[2].title}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.whyUs.cards[2].desc}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
