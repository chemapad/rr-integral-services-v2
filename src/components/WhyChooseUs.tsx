import { ShieldCheck, Award, Sparkles } from 'lucide-react';

export const WhyChooseUs = () => {
  return (
    <section id="nosotros" className="py-20 bg-slate-950 relative overflow-hidden border-t border-b border-slate-800/80">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main High-Impact Banner matching Flyer */}
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-amber-500/30 text-center relative overflow-hidden mb-16 shadow-2xl">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ventaja R & R Integral Services</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-snug">
            Todo en un solo lugar
          </h2>
          
          <p className="text-amber-400 font-serif-brand font-bold text-lg sm:text-2xl mt-2 tracking-wide uppercase">
            Ahorra tiempo, evita estrés y deja tus trámites en manos de profesionales.
          </p>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            Ya sea que necesites resolver tu estatus migratorio, preparar tus impuestos anuales, gestionar la contabilidad de tu empresa o notarizar un poder urgente, te brindamos asesoría seria, rápida y confiable.
          </p>
        </div>

        {/* Credentials & Key Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-lg">
              QB
            </div>
            <h3 className="font-serif-brand text-lg font-bold text-white">
              QuickBooks ProAdvisor
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Certificados en configuración, limpieza de libros (Cleanup) y conciliaciones bancarias para que tu negocio mantenga finanzas claras y en regla.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-500/30 text-blue-400 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif-brand text-lg font-bold text-white">
              Preparación de Impuestos & IRS
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Especialistas en declaraciones personales (1040), LLC, Corporaciones, aplicación e ITIN number y planes de pago directos con el IRS.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-500/30 text-amber-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif-brand text-lg font-bold text-white">
              Notary & Remote Online (RON)
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Servicios notariales presenciales y vía remota en línea (RON) para firmas electrónicas válidas de poderes, convenios familiares y documentos legales.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
