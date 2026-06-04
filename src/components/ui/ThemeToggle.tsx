'use client';

import { FaMoon, FaSun } from 'react-icons/fa';
import styles from './ThemeToggle.module.css';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
  variant?: 'desktop' | 'mobile';
}

export function ThemeToggle({ theme, onToggle, variant = 'desktop' }: ThemeToggleProps) {
  const cls = variant === 'mobile' ? styles.mobile : styles.desktop;

  return (
    <button
      className={cls}
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <FaMoon className={theme === 'dark' ? styles.visible : styles.hidden} />
      <FaSun className={theme === 'light' ? styles.visible : styles.hidden} />
    </button>
  );
}
