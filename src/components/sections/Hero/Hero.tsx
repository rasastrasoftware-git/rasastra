import { Button } from '@/components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <span className={styles.badge}>
              <span className={styles.dot} />
              Software House — Malang, Indonesia
            </span>

            <h1 className={styles.title}>
              We Design & Build<br />
              <span className={styles.gradient}>Digital Products</span>
              <span className={styles.titleEnd}>That Matter</span>
            </h1>

            <p className={styles.subtitle}>
              From UI/UX design to custom web development and immersive games — we transform
              your ideas into polished, market-ready solutions that drive real results.
            </p>

            <div className={styles.actions}>
              <Button variant="primary" size="lg" href="#contact">
                Start Your Project <FaArrowRight />
              </Button>
              <Button variant="outline" size="lg" href="#portfolio">
                View Our Work
              </Button>
            </div>

            <div className={styles.trust}>
              <div className={styles.trustItem}>
                <span className={styles.trustNumber}>15+</span>
                <span className={styles.trustLabel}>Projects Delivered</span>
              </div>
              <div className={styles.trustDivider} />
              <div className={styles.trustItem}>
                <span className={styles.trustNumber}>100%</span>
                <span className={styles.trustLabel}>Client Satisfaction</span>
              </div>
              <div className={styles.trustDivider} />
              <div className={styles.trustItem}>
                <span className={styles.trustNumber}>2</span>
                <span className={styles.trustLabel}>Expert Team</span>
              </div>
            </div>
          </div>

          <div className={styles.visual}>
            <svg viewBox="0 0 440 420" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="heroGlow2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#D946EF" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#D946EF" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="220" cy="210" r="170" fill="url(#heroGlow)" />
              <circle cx="220" cy="210" r="130" fill="url(#heroGlow2)" opacity="0.4" />
              <circle cx="220" cy="210" r="110" fill="none" stroke="rgba(139,92,246,0.06)" strokeWidth="1" />
              <circle cx="220" cy="210" r="80" fill="none" stroke="rgba(217,70,239,0.04)" strokeWidth="0.5" strokeDasharray="4 8" />
              <g className={styles.float1}>
                <rect x="165" y="155" width="110" height="110" rx="28" fill="rgba(139,92,246,0.04)" stroke="rgba(139,92,246,0.12)" strokeWidth="1" />
                <rect x="178" y="168" width="84" height="84" rx="20" fill="rgba(139,92,246,0.03)" />
                <circle cx="220" cy="210" r="4" fill="rgba(255,107,174,0.5)" />
              </g>
              <g className={styles.float2}>
                <rect x="105" y="105" width="32" height="32" rx="10" fill="rgba(139,92,246,0.04)" stroke="rgba(139,92,246,0.1)" strokeWidth="1" transform="rotate(15 121 121)" />
                <circle cx="121" cy="121" r="8" fill="rgba(139,92,246,0.03)" />
              </g>
              <g className={styles.float3}>
                <circle cx="325" cy="130" r="22" fill="rgba(217,70,239,0.04)" stroke="rgba(217,70,239,0.1)" strokeWidth="1" />
                <circle cx="325" cy="130" r="8" fill="rgba(217,70,239,0.08)" />
              </g>
              <g className={styles.float4}>
                <rect x="155" y="280" width="28" height="28" rx="8" fill="rgba(255,107,174,0.04)" stroke="rgba(255,107,174,0.08)" strokeWidth="1" transform="rotate(45 169 294)" />
                <rect x="161" y="286" width="16" height="16" rx="4" fill="rgba(255,107,174,0.03)" />
              </g>
              <g className={styles.float2}>
                <circle cx="340" cy="310" r="14" fill="none" stroke="rgba(139,92,246,0.08)" strokeWidth="1" />
                <circle cx="340" cy="310" r="5" fill="rgba(139,92,246,0.1)" />
              </g>
              <g className={styles.float4}>
                <rect x="85" y="260" width="20" height="20" rx="6" fill="rgba(217,70,239,0.03)" stroke="rgba(217,70,239,0.07)" strokeWidth="1" />
              </g>
              <circle cx="95" cy="340" r="2.5" fill="rgba(139,92,246,0.15)" className={styles.float3} />
              <circle cx="360" cy="80" r="2" fill="rgba(255,107,174,0.15)" className={styles.float1} />
              <circle cx="380" cy="210" r="2.5" fill="rgba(217,70,239,0.12)" className={styles.float2} />
              <circle cx="70" cy="180" r="2" fill="rgba(139,92,246,0.1)" className={styles.float4} />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
