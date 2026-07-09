"use client";
import React, { useState } from 'react';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { WorkshopSection } from '@/components/workshop-section';
import { GallerySection } from '@/components/gallery-section';
import { StatsSection } from '@/components/stats-section';
import { TeamSection, TestimonialsSection } from '@/components/team-section';
import { BookingSection, Footer } from '@/components/footer-booking';
import { Navbar, CustomCursor } from '@/components/layout-elements';
import { IntroAnimation } from '@/components/intro-animation';
import { AnimatedBackground } from '@/components/animated-background';

export default function Home() {
  const [, setIntroComplete] = useState(false);

  return (
    <div className="min-h-screen bg-black text-foreground font-sans relative">
      <IntroAnimation onComplete={() => setIntroComplete(true)} />
      <AnimatedBackground />
      <CustomCursor />
      <Navbar />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <WorkshopSection />
        <GallerySection />
        <StatsSection />
        <TeamSection />
        <TestimonialsSection />
        <BookingSection />
      </main>
      
      <Footer />
    </div>
  );
}
