import { Button } from '@/components/ui/Button';
import { FaArrowRight, FaPenFancy, FaLaptopCode, FaCube } from 'react-icons/fa';
import styles from './Hero.module.css';

const floatingCards = [
  {
    icon: <FaPenFancy />,
    label: 'UI/UX Design',
    className: styles.fc1,
  },
  {
    icon: <FaLaptopCode />,
    label: 'Web Development',
    className: styles.fc2,
  },
  {
    icon: <FaCube />,
    label: 'Game Development',
    className: styles.fc3,
  },
];

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
            <div className={styles.floatingArea}>
              {floatingCards.map((card) => (
                <div key={card.label} className={`${styles.floatingCard} ${card.className}`}>
                  <span className={styles.floatingIcon}>{card.icon}</span>
                  <span className={styles.floatingLabel}>{card.label}</span>
                </div>
              ))}
              <div className={styles.orbitalGlow} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
