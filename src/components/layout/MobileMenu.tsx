'use client';

import { useEffect } from 'react';
import { NAV_LINKS } from '@/constants/navigation';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Button } from '@/components/ui/Button';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  active: string;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export function MobileMenu({ open, onClose, active, theme, onToggleTheme }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ''}`}
        onClick={onClose}
      />
      <div className={`${styles.menu} ${open ? styles.menuOpen : ''}`}>
        <div className={styles.header}>
          <img
            src="/assets/images/logo.png"
            alt="Rasastra"
            width={100}
            height={27}
            loading="lazy"
            className={styles.logo}
          />
          <div className={styles.headerActions}>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} variant="mobile" />
            <button className={styles.close} onClick={onClose} aria-label="Close menu">
              &times;
            </button>
          </div>
        </div>

        <div className={styles.links}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.link} ${active === link.href.replace('#', '') ? styles.linkActive : ''}`}
              onClick={onClose}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className={styles.footer}>
          <Button variant="primary" href="#contact" className={styles.cta} onClick={onClose}>
            Start a Project
          </Button>
        </div>
      </div>
    </>
  );
}
