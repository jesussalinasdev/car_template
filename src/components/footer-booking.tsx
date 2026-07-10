import React from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/components/i18n-provider';

export function BookingSection() {
  const { dict } = useI18n();
  return (
    <section className="py-32 relative bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="bg-neutral-900/50 backdrop-blur-md border border-neutral-800 p-6 md:p-16 clip-diagonal relative group">
          
          {/* Animated border line on hover */}
          <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary transition-all duration-700 ease-in-out group-hover:w-full" />
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-5xl md:text-7xl font-display uppercase text-white mb-4">{dict.booking.title}</h2>
            <p className="text-neutral-400 font-sans text-sm">
              {dict.booking.desc}
            </p>
          </div>

          <form className="space-y-6 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-primary font-mono text-xs uppercase tracking-widest">{dict.booking.fields.name}</label>
                <input 
                  type="text" 
                  className="w-full bg-black border border-neutral-800 focus:border-primary text-white p-4 font-sans outline-none transition-colors clip-diagonal-reverse"
                  placeholder={dict.booking.fields.namePlaceholder}
                />
              </div>
              <div className="space-y-2">
                <label className="text-primary font-mono text-xs uppercase tracking-widest">{dict.booking.fields.email}</label>
                <input 
                  type="email" 
                  className="w-full bg-black border border-neutral-800 focus:border-primary text-white p-4 font-sans outline-none transition-colors clip-diagonal-reverse"
                  placeholder={dict.booking.fields.emailPlaceholder}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-primary font-mono text-xs uppercase tracking-widest">{dict.booking.fields.chassis}</label>
                <input 
                  type="text" 
                  className="w-full bg-black border border-neutral-800 focus:border-primary text-white p-4 font-sans outline-none transition-colors clip-diagonal-reverse"
                  placeholder={dict.booking.fields.chassisPlaceholder}
                />
              </div>
              <div className="space-y-2">
                <label className="text-primary font-mono text-xs uppercase tracking-widest">{dict.booking.fields.power}</label>
                <input 
                  type="text" 
                  className="w-full bg-black border border-neutral-800 focus:border-primary text-white p-4 font-sans outline-none transition-colors clip-diagonal-reverse"
                  placeholder={dict.booking.fields.powerPlaceholder}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-primary font-mono text-xs uppercase tracking-widest">{dict.booking.fields.objective}</label>
              <textarea 
                className="w-full bg-black border border-neutral-800 focus:border-primary text-white p-4 font-sans outline-none transition-colors min-h-[120px] resize-none"
                placeholder={dict.booking.fields.objectivePlaceholder}
              ></textarea>
            </div>

            <button type="submit" className="w-full py-5 bg-primary text-black font-display text-2xl uppercase tracking-widest hover:bg-white hover:text-black transition-colors clip-diagonal mt-8 relative overflow-hidden group">
              <span className="relative z-10">{dict.booking.button}</span>
              <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { dict } = useI18n();
  return (
    <footer className="bg-black/50 border-t border-neutral-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-primary clip-diagonal flex items-center justify-center">
                <span className="font-display font-bold text-black">A</span>
              </div>
              <span className="font-display text-xl tracking-widest uppercase mt-1">Apex<span className="text-primary">Motors</span></span>
            </div>
            <p className="text-neutral-500 font-sans text-sm max-w-sm mb-6 leading-relaxed">
              {dict.footer.desc}
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholders */}
              {['IG', 'YT', 'X'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 border border-neutral-800 flex items-center justify-center text-neutral-400 font-mono text-xs hover:border-primary hover:text-primary transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-display text-xl uppercase mb-6">{dict.footer.location.title}</h4>
            <ul className="space-y-4 text-neutral-500 font-sans text-sm">
              <li>{dict.footer.location.line1}</li>
              <li>{dict.footer.location.line2}</li>
              <li className="text-primary pt-2 border-t border-neutral-800 inline-block">{dict.footer.location.line3}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-xl uppercase mb-6">{dict.footer.comms.title}</h4>
            <ul className="space-y-4 text-neutral-500 font-sans text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">1 (800) 555-APEX</li>
              <li className="hover:text-white transition-colors cursor-pointer">operations@apexmotors.inc</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-neutral-900 pt-8 text-neutral-600 font-mono text-xs uppercase tracking-widest gap-4 md:gap-0">
          <p>© {new Date().getFullYear()} {dict.footer.copyright}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">{dict.footer.links.privacy}</a>
            <a href="#" className="hover:text-primary transition-colors">{dict.footer.links.terms}</a>
          </div>
          <p className="text-neutral-500">
            Developed by <a href="https://jsalinas.dev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors border-b border-primary/30 pb-0.5">jsalinas.dev</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
