import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_NUMBER } from '@/constants/services';
import styles from './FloatingWhatsApp.module.css';

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener"
      className={styles.float}
      aria-label="Chat via WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
