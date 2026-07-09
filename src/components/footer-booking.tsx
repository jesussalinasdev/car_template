import React from 'react';
import { motion } from 'framer-motion';

export function BookingSection() {
  return (
    <section className="py-32 relative bg-black overflow-hidden">
      {/* Arc weld / spark particle effects layer in background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent shadow-[0_0_20px_rgba(255,69,0,1)]" />
        <div className="absolute top-1/4 right-[25%] w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,1),_0_0_40px_rgba(255,69,0,1)] animate-pulse" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="bg-neutral-900/50 backdrop-blur-md border border-neutral-800 p-6 md:p-16 clip-diagonal relative group">
          
          {/* Animated border line on hover */}
          <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary transition-all duration-700 ease-in-out group-hover:w-full" />
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-5xl md:text-7xl font-display uppercase text-white mb-4">Request An Assessment</h2>
            <p className="text-neutral-400 font-sans text-sm">
              We do not accept every vehicle. Submit your details below, and our engineers will evaluate if your machine aligns with our capabilities.
            </p>
          </div>

          <form className="space-y-6 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-primary font-mono text-xs uppercase tracking-widest">Pilot Name</label>
                <input 
                  type="text" 
                  className="w-full bg-black border border-neutral-800 focus:border-primary text-white p-4 font-sans outline-none transition-colors clip-diagonal-reverse"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-primary font-mono text-xs uppercase tracking-widest">Contact Signal</label>
                <input 
                  type="email" 
                  className="w-full bg-black border border-neutral-800 focus:border-primary text-white p-4 font-sans outline-none transition-colors clip-diagonal-reverse"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-primary font-mono text-xs uppercase tracking-widest">Machine Chassis</label>
                <input 
                  type="text" 
                  className="w-full bg-black border border-neutral-800 focus:border-primary text-white p-4 font-sans outline-none transition-colors clip-diagonal-reverse"
                  placeholder="Make & Model"
                />
              </div>
              <div className="space-y-2">
                <label className="text-primary font-mono text-xs uppercase tracking-widest">Current Power</label>
                <input 
                  type="text" 
                  className="w-full bg-black border border-neutral-800 focus:border-primary text-white p-4 font-sans outline-none transition-colors clip-diagonal-reverse"
                  placeholder="Est. HP"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-primary font-mono text-xs uppercase tracking-widest">Objective</label>
              <textarea 
                className="w-full bg-black border border-neutral-800 focus:border-primary text-white p-4 font-sans outline-none transition-colors min-h-[120px] resize-none"
                placeholder="What are we building?"
              ></textarea>
            </div>

            <button type="submit" className="w-full py-5 bg-primary text-black font-display text-2xl uppercase tracking-widest hover:bg-white hover:text-black transition-colors clip-diagonal mt-8 relative overflow-hidden group">
              <span className="relative z-10">Initiate Protocol</span>
              <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-900 pt-20 pb-10">
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
              Where raw physics meets surgical precision. We build machines that redefine limits.
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
            <h4 className="text-white font-display text-xl uppercase mb-6">Location</h4>
            <ul className="space-y-4 text-neutral-500 font-sans text-sm">
              <li>Sector 7, Industrial Zone</li>
              <li>Los Angeles, CA 90021</li>
              <li className="text-primary pt-2 border-t border-neutral-800 inline-block">/// STRICTLY BY APPOINTMENT</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-xl uppercase mb-6">Comms</h4>
            <ul className="space-y-4 text-neutral-500 font-sans text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">1 (800) 555-APEX</li>
              <li className="hover:text-white transition-colors cursor-pointer">operations@apexmotors.inc</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-neutral-900 pt-8 text-neutral-600 font-mono text-xs uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Apex Motors. All Systems Nominal.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
