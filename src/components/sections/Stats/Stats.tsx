'use client';

import { STATS } from '@/constants/stats';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import styles from './Stats.module.css';

function StatItemComponent({ target, suffix, label }: { target: number; suffix?: string; label: string }) {
  const { count, ref } = useAnimatedCounter(target);

  return (
    <div className={styles.item} ref={ref}>
      <span className={styles.number}>{count}</span>
      {suffix && <span className={styles.suffix}>{suffix}</span>}
      <div className={styles.label}>{label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section className={styles.section} id="stats">
      <div className={styles.container}>
        <div className={styles.grid}>
          {STATS.map((stat, i) => (
            <div key={stat.label} className={styles.reveal} style={{ transitionDelay: `${i * 0.06}s` }}>
              <StatItemComponent target={stat.target} suffix={stat.suffix} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
