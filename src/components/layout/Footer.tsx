import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <img
              src="/assets/images/logo.png"
              alt="Rasastra"
              className={styles.logo}
              width={140}
              height={38}
              loading="lazy"
            />
            <p>
              Premium software house based in Malang, Indonesia. We design and build digital
              products that drive results.
            </p>
          </div>

          <div className={styles.col}>
            <h4>Navigation</h4>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>

          <div className={styles.col}>
            <h4>Services</h4>
            <a href="#services">UI/UX Design</a>
            <a href="#services">Web Development</a>
            <a href="#services">Game Development</a>
          </div>

          <div className={styles.col}>
            <h4>Connect</h4>
            <a href="https://instagram.com/rasastra.id" target="_blank" rel="noopener">
              Instagram
            </a>
            <a href="https://www.tiktok.com/@rasastra.id_" target="_blank" rel="noopener">
              TikTok
            </a>
            <a href="https://wa.me/6281990453025" target="_blank" rel="noopener">
              WhatsApp
            </a>
            <a href="https://github.com/rasastra" target="_blank" rel="noopener">
              GitHub
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; 2026 Rasastra — Software House. Crafted with care in Malang, Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}
