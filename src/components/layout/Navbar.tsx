'use client';

import { useState } from 'react';
import { NAV_LINKS } from '@/constants/navigation';
import { useActiveSection } from '@/hooks/useActiveSection';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { MobileMenu } from './MobileMenu';
import styles from './Navbar.module.css';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''));
  const active = useActiveSection(sectionIds);

  const handleToggleMobile = () => setMobileOpen((prev) => !prev);
  const handleCloseMobile = () => setMobileOpen(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <a href="#home" className={styles.logo}>
            <img
              src="/assets/images/logo.png"
              alt="Rasastra"
              className={styles.logoImg}
              width={132}
              height={36}
              fetchPriority="high"
            />
          </a>

          <div className={styles.desktopMenu}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.link} ${active === link.href.replace('#', '') ? styles.active : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className={styles.actions}>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerActive : ''}`}
              onClick={handleToggleMobile}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        open={mobileOpen}
        onClose={handleCloseMobile}
        active={active}
        theme={theme}
        onToggleTheme={onToggleTheme}
      />
    </>
  );
}
