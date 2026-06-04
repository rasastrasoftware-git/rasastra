import { SectionHeader } from '@/components/ui/SectionHeader';
import styles from './Process.module.css';

const STEPS = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'We listen to your needs, define project scope, and create a clear roadmap tailored to your goals.',
  },
  {
    number: '02',
    title: 'Design',
    desc: 'Crafting pixel-perfect UI/UX designs and interactive prototypes that align with your vision.',
  },
  {
    number: '03',
    title: 'Develop',
    desc: 'Building with clean code and modern technology, with regular updates and transparent progress.',
  },
  {
    number: '04',
    title: 'Deliver',
    desc: 'Launch, review, and ongoing support to ensure your project succeeds long-term.',
  },
];

export function Process() {
  return (
    <section className={styles.section} id="process">
      <div className={styles.blobs}>
        <span className={`${styles.blob} ${styles.b1}`} />
        <span className={`${styles.blob} ${styles.b2}`} />
        <span className={`${styles.blob} ${styles.b3}`} />
      </div>
      <div className={styles.container}>
        <SectionHeader
          tag="Process"
          title="How We"
          gradientWord="Work"
          subtitle="A transparent, structured approach from discovery to delivery."
        />

        <div className={styles.grid}>
          {STEPS.map((step, i) => (
            <div key={step.number} className={styles.card} style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className={styles.number}>{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
