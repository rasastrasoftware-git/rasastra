'use client';

import { useState, useCallback } from 'react';
import { PORTFOLIO_ITEMS } from '@/constants/portfolio';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import type { ModalData } from '@/types';
import {
  FaPenFancy,
  FaChartBar,
  FaPalette,
  FaGlobe,
  FaTasks,
  FaGamepad,
  FaRocket,
  FaDragon,
} from 'react-icons/fa';
import styles from './Portfolio.module.css';

const ICON_MAP: Record<string, React.ReactNode> = {
  FaPenFancy: <FaPenFancy />,
  FaChartBar: <FaChartBar />,
  FaPalette: <FaPalette />,
  FaGlobe: <FaGlobe />,
  FaTasks: <FaTasks />,
  FaGamepad: <FaGamepad />,
  FaRocket: <FaRocket />,
  FaDragon: <FaDragon />,
};

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'design', label: 'Design' },
  { key: 'web', label: 'Web' },
  { key: 'game', label: 'Game' },
];

export function Portfolio() {
  const ref = useScrollReveal<HTMLElement>();
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalData, setModalData] = useState<ModalData | null>(null);

  const filtered =
    activeFilter === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  const openModal = useCallback((data: ModalData) => setModalData(data), []);
  const closeModal = useCallback(() => setModalData(null), []);

  return (
    <section className={`${styles.section} reveal`} id="portfolio" ref={ref}>
      <div className={styles.container}>
        <SectionHeader
          tag="Portfolio"
          title="Selected"
          gradientWord="Work"
          subtitle="Each project reflects our commitment to quality, detail, and client satisfaction."
        />

        <div className={styles.filters}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              className={`${styles.filterBtn} ${activeFilter === cat.key ? styles.filterActive : ''}`}
              onClick={() => setActiveFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((item, i) => (
            <div key={item.id} className={styles.card} style={{ transitionDelay: `${(i % 3) * 0.1}s` }}>
              <div className={styles.thumb} style={{ background: item.gradient }}>
                <div className={styles.thumbIcon}>{ICON_MAP[item.icon]}</div>
                <span className={styles.catBadge}>{item.category === 'design' ? 'Design' : item.category === 'web' ? 'Web' : 'Game'}</span>
              </div>

              <div className={styles.body}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className={styles.techs}>
                  {item.techs.slice(0, 3).map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>

              <div className={styles.foot}>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    openModal({
                      title: item.title,
                      category: item.category,
                      desc: item.detail,
                      techs: item.techs,
                    })
                  }
                >
                  Details
                </Button>
                <Button variant="primary" size="sm" href="https://lynk.id/rasastra" target="_blank">
                  Purchase
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal data={modalData} onClose={closeModal} />
    </section>
  );
}
