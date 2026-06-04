'use client';

import { SERVICES, WHATSAPP_NUMBER } from '@/constants/services';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { IconBox } from '@/components/ui/IconBox';
import { Button } from '@/components/ui/Button';
import { FaPenFancy, FaLaptopCode, FaCube, FaCheckCircle } from 'react-icons/fa';
import styles from './Services.module.css';

const ICON_MAP: Record<string, React.ReactNode> = {
  FaPenFancy: <FaPenFancy />,
  FaLaptopCode: <FaLaptopCode />,
  FaCube: <FaCube />,
};

export function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <SectionHeader
          tag="Services"
          title="End-to-End"
          gradientWord="Digital Solutions"
          subtitle="From concept to launch — we deliver polished digital products tailored to your business needs."
        />

        <div className={styles.grid}>
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              className={styles.card}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className={styles.glow} />
              <div className={styles.icon}>
                <IconBox variant="gradient" size="md">
                  {ICON_MAP[service.icon]}
                </IconBox>
              </div>
              <div className={styles.category}>Service 0{i + 1}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.desc}>{service.description}</p>

              <ul className={styles.features}>
                {service.features.map((f) => (
                  <li key={f}>
                    <FaCheckCircle className={styles.checkIcon} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className={styles.footer}>
                <span className={styles.price}>
                  Starting at <strong>{service.price}</strong>
                  {service.priceUnit && <span className={styles.priceUnit}>{service.priceUnit}</span>}
                </span>
                <Button
                  variant="primary"
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                >
                  Get a Quote
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
