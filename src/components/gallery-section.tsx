import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useI18n } from '@/components/i18n-provider';

const photos = [
  '/assets/workshop_gallery_1_1783555510099.png',
  '/assets/workshop_gallery_2_1783555518566.png',
  '/assets/workshop_gallery_3_1783555525920.png',
  '/assets/workshop_gallery_4_1783555532540.png'
];

export function GallerySection() {
  const { dict } = useI18n();

  return (
    <section id="gallery" className="py-32 bg-black relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4"
          >
            {dict.gallery.tagline}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display uppercase text-white"
          >
            {dict.gallery.title}
          </motion.h3>
        </div>

        {/* Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {photos.map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="group relative aspect-[4/3] overflow-hidden bg-neutral-950 border border-neutral-800 cursor-none"
            >
              <img 
                src={src} 
                alt={`Workshop view ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Box Shadow Glow (Super Hover) */}
              <div className="absolute inset-0 ring-2 ring-primary opacity-0 group-hover:opacity-100 transition-all duration-500 box-shadow-glow" />

              {/* Crosshairs & Borders */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/20 group-hover:border-primary transition-colors duration-500 z-10 m-4" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20 group-hover:border-primary transition-colors duration-500 z-10 m-4" />

              {/* Info Reveal */}
              <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-mono text-xs text-primary tracking-widest uppercase mb-1">
                  FILE_{1048 + i}.RAW
                </p>
                <p className="font-display text-3xl text-white uppercase tracking-wider">
                  {dict.gallery.items[i]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
