import React from 'react';
import { motion } from 'framer-motion';


const legends = [
  {
    name: 'Viktor "The Surgeon" Volkov',
    role: 'Lead Engine Calibrator',
    specialty: 'Twin-Turbo V10s, Custom ECU Mapping',
    image: '/assets/marcus-vance_2.jpg' 
  },
  {
    name: 'Marcus Vance',
    role: 'Aerodynamics & Chassis',
    specialty: 'Carbon Fabrication, Suspension Geometry',
    image: '/assets/marcus-vance.jpg' 
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4"
          >
            The Architects of Speed
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display uppercase text-white"
          >
            Master Mechanics
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          {legends.map((legend, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group cursor-none"
            >
              {/* Image Container with Clip Path */}
              <div className="relative aspect-[3/4] overflow-hidden clip-diagonal grayscale group-hover:grayscale-0 transition-all duration-700">
                <img 
                  src={legend.image} 
                  alt={legend.name}
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                {/* Tech overlay */}
                <div className="absolute inset-0 border-[0.5px] border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
                  <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-primary" />
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-primary" />
                </div>
              </div>

              {/* Info Box - Overlapping on Desktop, Stacking on Mobile */}
              <div className="relative mt-4 md:absolute md:-bottom-8 md:bottom-12 md:-right-8 bg-neutral-900 border border-neutral-800 p-6 md:w-80 shadow-2xl z-20 group-hover:border-primary/50 transition-colors duration-500 clip-diagonal mx-4 md:mx-0">
                <div className="font-mono text-xs text-primary mb-2">ID: 00{i+1} // ACTIVE</div>
                <h4 className="font-display text-3xl uppercase text-white mb-1">{legend.name}</h4>
                <p className="font-sans font-bold text-sm text-neutral-300 uppercase mb-4 tracking-wider">{legend.role}</p>
                
                <div className="pt-4 border-t border-neutral-800">
                  <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-1">Specialty</p>
                  <p className="font-sans text-sm text-neutral-400">{legend.specialty}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { text: "They found 120hp that the factory software left on the table. It doesn't drive like the same car. It's violent, in the best way possible.", author: "James T.", car: "Porsche 911 Turbo S" },
  { text: "Apex isn't a mechanic shop. It's an engineering firm for people who hate losing. My lap times dropped by 2.4 seconds after they dialed in the aero.", author: "Sarah H.", car: "McLaren 720S" },
  { text: "Other shops said it couldn't be done. Apex built it, mapped it, and warrantied it. Uncompromising pursuit of perfection.", author: "David C.", car: "Audi R8 Twin Turbo" }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 bg-neutral-950 relative border-t border-neutral-900 overflow-hidden">
      {/* Giant subtle text background */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap text-[15rem] md:text-[20rem] font-display font-bold text-neutral-900/40 pointer-events-none select-none z-0 tracking-tighter">
        NO COMPROMISE
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="md:w-1/3">
            <h2 className="text-5xl font-display uppercase text-white mb-6">Built For The Elite</h2>
            <p className="text-neutral-400 font-sans text-sm mb-8">
              We don't do marketing. Our results speak on the asphalt. Read what the owners of the world's most capable machines have to say.
            </p>
            <div className="flex gap-4">
              <button className="w-12 h-12 flex items-center justify-center border border-neutral-700 hover:border-primary hover:text-primary text-white transition-colors group">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <button className="w-12 h-12 flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-black transition-colors group">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>

          <div className="md:w-2/3 grid gap-6">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-neutral-900 border-l-[3px] border-l-primary border-y border-y-neutral-800 border-r border-r-neutral-800 p-8 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-primary mb-4 text-xl">"</div>
                <p className="text-neutral-300 font-sans text-lg italic mb-6 leading-relaxed">
                  {t.text}
                </p>
                <div className="flex justify-between items-end border-t border-neutral-800 pt-4">
                  <span className="font-display text-xl text-white uppercase">{t.author}</span>
                  <span className="font-mono text-xs text-primary uppercase tracking-widest bg-primary/10 px-2 py-1">{t.car}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
