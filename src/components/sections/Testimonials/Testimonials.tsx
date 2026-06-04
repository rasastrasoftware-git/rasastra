'use client';

import { useRef, useEffect } from 'react';
import { TESTIMONIALS } from '@/constants/testimonials';
import { SectionHeader } from '@/components/ui/SectionHeader';
import styles from './Testimonials.module.css';

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const grid = track.querySelector<HTMLDivElement>(`.${styles.grid}`);
    if (!grid) return;

    const clone = grid.cloneNode(true) as HTMLDivElement;
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  }, []);

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.blobs}>
        <span className={`${styles.blob} ${styles.b1}`} />
        <span className={`${styles.blob} ${styles.b2}`} />
        <span className={`${styles.blob} ${styles.b3}`} />
      </div>
      <div className={styles.container}>
        <SectionHeader
          tag="Testimonials"
          title="What Our"
          gradientWord="Clients Say"
          subtitle="Real feedback from clients we've had the pleasure to work with."
        />

        <div className={styles.track} ref={trackRef}>
          <div className={styles.grid}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.stars}>★★★★★</div>
                <p>{t.text}</p>
                <div className={styles.author}>{t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
