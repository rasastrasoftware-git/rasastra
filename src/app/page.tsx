'use client';

import { useTheme } from '@/hooks/useTheme';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { Hero } from '@/components/sections/Hero/Hero';
import { Stats } from '@/components/sections/Stats/Stats';
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
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Stats />
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
