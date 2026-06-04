import type { TeamMember } from '@/types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Anzami',
    role: 'UI/UX Designer & Web Developer',
    bio: 'Specializes in crafting clean, user-friendly interfaces and responsive websites. Focuses on design systems and modern web standards.',
    photo: '/assets/images/anzami.jpeg',
    photoWebp: '/assets/images/anzami.webp',
    avatarClass: 'a1',
    imagePosition: 'center 20%',
    imageScale: 1,
    socials: [
      { platform: 'Instagram', url: 'https://www.instagram.com/anzamicreative/', icon: 'FaInstagram' },
      { platform: 'GitHub', url: 'https://github.com/AnzamiCreative', icon: 'FaGithub' },
      {
        platform: 'LinkedIn',
        url: 'https://id.linkedin.com/in/anggun-zahrani-mutiara-08a75638b',
        icon: 'FaLinkedinIn',
      },
    ],
  },
  {
    name: 'Christie',
    role: 'Game Designer & Unity Developer',
    bio: 'Passionate about creating immersive 2D and 3D gaming experiences. Skilled in game mechanics, Unity development, and interactive design.',
    photo: '/assets/images/Christie.jpeg',
    photoWebp: '/assets/images/Christie.webp',
    avatarClass: 'a2',
    imagePosition: 'center 25%',
    imageScale: 1.25,
    socials: [
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/christlenn_?igsh=bGVxbWdpMTV0N2wz',
        icon: 'FaInstagram',
      },
      { platform: 'GitHub', url: 'https://github.com/Merrychristie', icon: 'FaGithub' },
      {
        platform: 'LinkedIn',
        url: 'https://id.linkedin.com/in/merry-christie-magdalena-9229aa3a2',
        icon: 'FaLinkedinIn',
      },
    ],
  },
];
