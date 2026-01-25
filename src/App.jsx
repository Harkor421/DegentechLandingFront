import { useScrollReveal } from './hooks/useScrollReveal';
import { useLenis } from './hooks/useLenis';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import UptimeStrip from './components/UptimeStrip';
import Capabilities from './components/Capabilities';
import Projects from './components/Projects';
import Process from './components/Process';
import Difference from './components/Difference';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import NoiseOverlay from './components/NoiseOverlay';

export default function App() {
  useLenis();
  const visible = useScrollReveal();

  return (
    <div className="min-h-screen bg-primary relative dot-grid">
      <CustomCursor />
      <NoiseOverlay />
      <Navbar />
      <Hero />
      <LogoMarquee />
      <UptimeStrip />
      <Capabilities visible={visible.capabilities} />
      <Projects visible={visible.work} />
      <Process visible={visible.process} />
      <Difference visible={visible.difference} />
      <Testimonials visible={visible.testimonials} />
      <Team visible={visible.team} />
      <ContactCTA visible={visible.contact} />
      <Footer />
    </div>
  );
}
