'use client';

import { useTheme } from '@/hooks/useTheme';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { Hero } from '@/components/sections/Hero/Hero';
import { Services } from '@/components/sections/Services/Services';
import { Portfolio } from '@/components/sections/Portfolio/Portfolio';
import { Process } from '@/components/sections/Process/Process';
import { Testimonials } from '@/components/sections/Testimonials/Testimonials';
import { Team } from '@/components/sections/Team/Team';
import { Contact } from '@/components/sections/Contact/Contact';

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="aurora-bg">
        <span className="aurora-blob a1" />
        <span className="aurora-blob a2" />
        <span className="aurora-blob a3" />
      </div>

      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
