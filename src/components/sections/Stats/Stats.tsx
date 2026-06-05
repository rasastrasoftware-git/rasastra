'use client';

import { STATS } from '@/constants/stats';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import { FaRocket, FaUsers, FaCube, FaStar } from 'react-icons/fa';
import styles from './Stats.module.css';

const ICON_MAP: Record<string, React.ReactNode> = {
  FaRocket: <FaRocket />,
  FaUsers: <FaUsers />,
  FaCube: <FaCube />,
  FaStar: <FaStar />,
};

function StatItemComponent({ target, suffix, label, icon }: { target: number; suffix?: string; label: string; icon: string }) {
  const { count, ref } = useAnimatedCounter(target);

  return (
    <div className={styles.item} ref={ref}>
      <span className={styles.iconBox}>{ICON_MAP[icon]}</span>
      <div className={styles.numberWrap}>
        <span className={styles.number}>{count}</span>
        {suffix && <span className={styles.suffix}>{suffix}</span>}
      </div>
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
              <StatItemComponent target={stat.target} suffix={stat.suffix} label={stat.label} icon={stat.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
