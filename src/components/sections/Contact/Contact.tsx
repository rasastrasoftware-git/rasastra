import { SectionHeader } from '@/components/ui/SectionHeader';
import { FaWhatsapp, FaInstagram, FaTiktok, FaChevronRight } from 'react-icons/fa';
import { FiMail, FiMapPin } from 'react-icons/fi';
import styles from './Contact.module.css';

const CONTACT_ROWS = [
  {
    href: 'https://wa.me/6281990453025',
    icon: <FaWhatsapp />,
    iconStyle: { background: 'rgba(37,211,102,0.08)', color: '#25D366' },
    label: 'WhatsApp',
    value: '+62 819 9045 3025',
    isLink: true as const,
  },
  {
    href: 'https://instagram.com/rasastra.id',
    icon: <FaInstagram />,
    iconStyle: { background: 'rgba(228,64,95,0.08)', color: '#E4405F' },
    label: 'Instagram',
    value: '@rasastra.id',
    isLink: true as const,
  },
  {
    href: 'https://www.tiktok.com/@rasastra.id_',
    icon: <FaTiktok />,
    iconStyle: { background: 'rgba(255,255,255,0.04)', color: 'var(--text-primary)' },
    label: 'TikTok',
    value: '@rasastra.id_',
    isLink: true as const,
  },
  {
    href: 'mailto:rasastrasoftware@gmail.com',
    icon: <FiMail />,
    iconStyle: { background: 'rgba(139,92,246,0.08)', color: 'var(--vp-soft)' },
    label: 'Email',
    value: 'rasastrasoftware@gmail.com',
    isLink: true as const,
  },
  {
    href: undefined,
    icon: <FiMapPin />,
    iconStyle: { background: 'rgba(109,40,217,0.08)', color: 'var(--vp-deep)' },
    label: 'Location',
    value: 'Malang, East Java, Indonesia',
    isLink: false as const,
  },
];

export function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <SectionHeader
          tag="Contact"
          title="Let's Build"
          gradientWord="Something Great"
          subtitle="Ready to start your project? Reach out and let's make it happen."
        />

        <div className={styles.content}>
          <div className={styles.card}>
            {CONTACT_ROWS.map((row) => {
              const content = (
                <>
                  <span className={styles.iconBox} style={row.iconStyle}>
                    {row.icon}
                  </span>
                  <span className={styles.label}>{row.label}</span>
                  <span className={styles.value}>{row.value}</span>
                  {row.isLink && (
                    <span className={styles.arrow}>
                      <FaChevronRight />
                    </span>
                  )}
                </>
              );

              if (row.isLink) {
                return (
                  <a
                    key={row.label}
                    href={row.href}
                    target="_blank"
                    rel="noopener"
                    className={styles.row}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div key={row.label} className={styles.row}>
                  {content}
                </div>
              );
            })}
          </div>
          <p className={styles.disclaimer}>
            For fastest response, reach us via WhatsApp or Instagram. Email is not monitored
            frequently.
          </p>
        </div>
      </div>
    </section>
  );
}
