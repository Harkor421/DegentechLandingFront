'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLenis } from '@/hooks/useLenis';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';

import Capabilities from '@/components/sections/Capabilities';
import Projects from '@/components/sections/Projects';
import Difference from '@/components/sections/Difference';
import Team from '@/components/sections/Team';
import LiveTerminal from '@/components/sections/LiveTerminal';
import APIContact from '@/components/sections/APIContact';
import NoiseOverlay from '@/components/ui/NoiseOverlay';
import SmokeLoader from '@/components/ui/SmokeLoader';
import ScrollProgressBar from '@/components/ui/ScrollProgressBar';
import CommandPalette from '@/components/ui/CommandPalette';
import EasterEggs from '@/components/ui/EasterEggs';

export default function LandingPage() {
  useLenis();
  const visible = useScrollReveal();

  return (
    <div className="min-h-screen bg-primary relative dot-grid">
      <SmokeLoader />
      <ScrollProgressBar />
      <NoiseOverlay />
      <CommandPalette />
      <EasterEggs />

      <Navbar />
      <main>
        <Hero />
        <Capabilities visible={visible.capabilities} />
        <Projects visible={visible.work} />
        <Difference visible={visible.difference} />
        <Team visible={visible.team} />
        <LiveTerminal visible={visible.terminal} />
        <APIContact visible={visible.apicontact} />
      </main>
      <Footer />
    </div>
  );
}
