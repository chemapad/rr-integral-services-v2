import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/servicesData';
import { useLanguageTheme } from '../context/LanguageThemeContext';

export const ContactSection = () => {
  const { lang, t } = useLanguageTheme();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: SERVICES_DATA[0].title[lang],
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp redirect
    const whatsappText = lang === 'es'
      ? `Hola R&R Integral Services, mi nombre es ${formData.name}. 
📱 Teléfono: ${formData.phone}
✉️ Email: ${formData.email || 'N/A'}
📋 Servicio de Interés: ${formData.service}
💬 Mensaje: ${formData.message}`
      : `Hello R&R Integral Services, my name is ${formData.name}.
📱 Phone: ${formData.phone}
✉️ Email: ${formData.email || 'N/A'}
📋 Service of Interest: ${formData.service}
💬 Message: ${formData.message}`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(whatsappText)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-serif-brand font-bold tracking-widest text-amber-400 uppercase">
            {t.contact.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t.contact.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Office Address Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 text-amber-400">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-serif-brand font-bold text-white text-base">{t.contact.officeTitle}</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed pl-1">
                {COMPANY_INFO.address}
              </p>
              <div className="pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300"
                >
                  <span>{t.contact.openMaps}</span>
                  <Send className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Direct Phone Numbers Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 text-amber-400">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="font-serif-brand font-bold text-white text-base">{t.contact.phonesTitle}</h3>
              </div>
              <div className="space-y-3 pt-1">
                {COMPANY_INFO.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.raw}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-amber-500/40 text-slate-200 hover:text-white transition-all group"
                  >
                    <span className="font-semibold text-sm">{phone.display}</span>
                    <span className="text-xs text-amber-400 group-hover:translate-x-1 transition-transform">{t.contact.callDirect}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Email & Social Links Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 text-amber-400">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="font-serif-brand font-bold text-white text-base">{t.contact.emailSocialTitle}</h3>
              </div>
              <div className="space-y-2 text-sm text-slate-300">
                <a href={`mailto:${COMPANY_INFO.email}`} className="block hover:text-amber-400 transition-colors">
                  ✉️ {COMPANY_INFO.email}
                </a>
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href={COMPANY_INFO.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-pink-950/60 border border-pink-500/30 text-pink-300 text-xs font-semibold hover:border-pink-400"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>{COMPANY_INFO.instagram}</span>
                  </a>
                  <a
                    href={COMPANY_INFO.facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-semibold hover:border-blue-400"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                    </svg>
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl border border-slate-800 relative">
              
              <h3 className="font-serif-brand text-2xl font-bold text-white mb-2">
                {t.contact.formTitle}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                {t.contact.formSub}
              </p>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="font-serif-brand text-xl font-bold text-white">{t.contact.successTitle}</h4>
                  <p className="text-slate-300 text-sm">{t.contact.successSub}</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs font-semibold"
                  >
                    {t.contact.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">{t.contact.fullName}</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Maria Rodriguez"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">{t.contact.phone}</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Ej. (352) 123-4567"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">{t.contact.email}</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="correo@ejemplo.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">{t.contact.serviceRequired}</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-500"
                      >
                        {SERVICES_DATA.map((cat) => (
                          <option key={cat.id} value={cat.title[lang]}>
                            {cat.title[lang]} {cat.subtitle?.[lang]}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">{t.contact.details}</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.detailsPlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gold-gradient hover:opacity-95 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                  >
                    <MessageCircle className="w-5 h-5 fill-slate-950" />
                    <span>{t.contact.submitBtn}</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
