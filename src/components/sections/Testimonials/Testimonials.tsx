'use client';

import { TESTIMONIALS } from '@/constants/testimonials';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Testimonials.module.css';

export function Testimonials() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className={`${styles.section} reveal`} id="testimonials" ref={ref}>
      <div className={styles.container}>
        <SectionHeader
          tag="Testimonials"
          title="What Our"
          gradientWord="Clients Say"
          subtitle="Real feedback from clients we've had the pleasure to work with."
        />

        <div className={styles.track}>
          <div className={styles.marquee}>
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
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
