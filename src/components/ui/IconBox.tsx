import type { ReactNode } from 'react';
import styles from './IconBox.module.css';

type IconVariant = 'gradient' | 'glass';
type IconSize = 'sm' | 'md' | 'lg';

interface IconBoxProps {
  variant?: IconVariant;
  size?: IconSize;
  children: ReactNode;
}

export function IconBox({ variant = 'gradient', size = 'md', children }: IconBoxProps) {
  return <div className={`${styles.box} ${styles[variant]} ${styles[size]}`}>{children}</div>;
}
