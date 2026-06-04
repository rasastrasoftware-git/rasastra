'use client';

import { useEffect } from 'react';
import type { ModalData } from '@/types';
import { Button } from './Button';
import styles from './Modal.module.css';

interface ModalProps {
  data: ModalData | null;
  onClose: () => void;
}

export function Modal({ data, onClose }: ModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (data) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [data, onClose]);

  if (!data) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick} role="dialog" aria-modal="true">
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose} aria-label="Close">
          &times;
        </button>
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.category}>{data.category}</p>
        <p className={styles.desc}>{data.desc}</p>
        <div className={styles.techs}>
          {data.techs.map((t) => (
            <span key={t} className={styles.tech}>
              {t}
            </span>
          ))}
        </div>
        <div className={styles.actions}>
          <Button variant="primary" href="https://lynk.id/rasastra" target="_blank">
            Purchase Project
          </Button>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
