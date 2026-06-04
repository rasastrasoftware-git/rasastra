import type { ServiceItem } from '@/types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'design',
    icon: 'FaPenFancy',
    title: 'UI/UX Design',
    description:
      'Pixel-perfect interfaces designed for clarity, usability, and conversion. From mobile apps to complex dashboards.',
    features: [
      'Mobile & Web App Design',
      'Design Systems & Prototypes',
      'User Research & Testing',
      'Figma — Industry Standard',
    ],
    price: '15K IDR',
    priceUnit: '/page',
    whatsappMessage: 'Hi Rasastra, I want to discuss a UI/UX design project.',
  },
  {
    id: 'web',
    icon: 'FaLaptopCode',
    title: 'Web Development',
    description:
      'Custom websites and web applications built with modern technologies. Responsive, fast, and built to scale.',
    features: [
      'Company & Portfolio Sites',
      'E-Commerce & Web Apps',
      'Responsive & SEO Optimized',
      'Clean, Maintainable Code',
    ],
    price: '300K IDR',
    whatsappMessage: 'Hi Rasastra, I want to discuss a web development project.',
  },
  {
    id: 'game',
    icon: 'FaCube',
    title: 'Game Development',
    description:
      '2D and 3D games built with Unity. From casual mobile games to immersive desktop experiences.',
    features: [
      '2D Platformers, Puzzles & Casual',
      '3D RPG, Action & Simulation',
      'Game Design & Mechanics',
      'Unity — C# Development',
    ],
    price: '300K IDR',
    whatsappMessage: 'Hi Rasastra, I want to discuss a game development project.',
  },
];

export const WHATSAPP_NUMBER = '6281990453025';
