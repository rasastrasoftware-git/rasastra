import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  tag: string;
  title: string;
  gradientWord: string;
  subtitle: string;
}

export function SectionHeader({ tag, title, gradientWord, subtitle }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <span className={styles.tag}>{tag}</span>
      <h2 className={styles.title}>
        {title}{' '}
        <span className={styles.gradient}>{gradientWord}</span>
      </h2>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}
