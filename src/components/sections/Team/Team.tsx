import { TEAM_MEMBERS } from '@/constants/team';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import styles from './Team.module.css';

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  FaInstagram: <FaInstagram />,
  FaGithub: <FaGithub />,
  FaLinkedinIn: <FaLinkedinIn />,
};

export function Team() {
  return (
    <section className={styles.section} id="team">
      <div className={styles.blobs}>
        <span className={`${styles.blob} ${styles.b1}`} />
        <span className={`${styles.blob} ${styles.b2}`} />
        <span className={`${styles.blob} ${styles.b3}`} />
      </div>
      <div className={styles.container}>
        <SectionHeader
          tag="Team"
          title="Meet the"
          gradientWord="Creators"
          subtitle="Two passionate individuals behind every Rasastra project."
        />

        <div className={styles.grid}>
          {TEAM_MEMBERS.map((member, i) => (
            <div key={member.name} className={styles.card} style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className={`${styles.avatar} ${styles[member.avatarClass]}`}>
                <picture>
                  <source srcSet={member.photoWebp} type="image/webp" />
                  <img
                    src={member.photo}
                    alt={member.name}
                    className={styles.photo}
                    loading="lazy"
                    width={120}
                    height={120}
                  />
                </picture>
              </div>
              <h3>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.bio}>{member.bio}</p>
              <div className={styles.socials}>
                {member.socials.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener"
                    title={s.platform}
                    aria-label={s.platform}
                  >
                    {SOCIAL_ICONS[s.icon]}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
