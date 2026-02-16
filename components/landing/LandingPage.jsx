'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLenis } from '@/hooks/useLenis';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';

import Capabilities from '@/components/sections/Capabilities';
import Projects from '@/components/sections/Projects';
import Process from '@/components/sections/Process';
import Difference from '@/components/sections/Difference';
import Testimonials from '@/components/sections/Testimonials';
import Team from '@/components/sections/Team';
import ContactCTA from '@/components/sections/ContactCTA';
import TechStackOrbit from '@/components/sections/TechStackOrbit';
import LiveTerminal from '@/components/sections/LiveTerminal';
import APIContact from '@/components/sections/APIContact';
import NoiseOverlay from '@/components/ui/NoiseOverlay';
import ScrollProgressBar from '@/components/ui/ScrollProgressBar';
import CommandPalette from '@/components/ui/CommandPalette';
import EasterEggs from '@/components/ui/EasterEggs';

export default function LandingPage() {
  useLenis();
  const visible = useScrollReveal();

  return (
    <div className="min-h-screen bg-primary relative dot-grid">
      <ScrollProgressBar />
      <NoiseOverlay />
      <CommandPalette />
      <EasterEggs />

      <Navbar />
      <main>
        <Hero />
        <Capabilities visible={visible.capabilities} />
        <Projects visible={visible.work} />
        <TechStackOrbit visible={visible.techstack} />
        <Process visible={visible.process} />
        <Difference visible={visible.difference} />
        <Testimonials visible={visible.testimonials} />
        <Team visible={visible.team} />
        <LiveTerminal visible={visible.terminal} />
        <APIContact visible={visible.apicontact} />
        <ContactCTA visible={visible.contact} />
      </main>
      <Footer />
    </div>
  );
}
