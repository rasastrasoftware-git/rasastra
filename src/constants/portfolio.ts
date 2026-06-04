import type { PortfolioItem } from '@/types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'ecomart',
    title: 'EcoMart UI Kit',
    category: 'design',
    description: 'Complete e-commerce mobile app design with product listing, cart, checkout, and onboarding flows.',
    detail:
      'A complete e-commerce mobile app UI kit designed in Figma. Includes product listing, cart, checkout, profile, and onboarding screens with a modern green-themed aesthetic.',
    techs: ['Figma', 'Auto Layout', 'Components', 'Prototype'],
    gradient: 'radial-gradient(circle at 30% 40%, rgba(139,92,246,0.12), transparent 70%)',
    icon: 'FaPenFancy',
  },
  {
    id: 'dashboard',
    title: 'Dashboard Analytics',
    category: 'design',
    description: 'Modern admin dashboard with data visualization, charts, tables, and dark mode support.',
    detail:
      'A modern admin dashboard design with charts, tables, and analytics widgets. Features both light and dark mode variants with a clean data visualization approach.',
    techs: ['Figma', 'Data Viz', 'Grid System', 'Components'],
    gradient: 'radial-gradient(circle at 60% 50%, rgba(139,92,246,0.12), transparent 70%)',
    icon: 'FaChartBar',
  },
  {
    id: 'portfolio-studio',
    title: 'Portfolio Studio',
    category: 'design',
    description: 'Creative agency web design with bold typography, smooth scroll, and dark/light contrast.',
    detail:
      'A creative agency portfolio website design with bold typography, full-width sections, smooth scroll animations, and a striking dark/light visual contrast.',
    techs: ['Figma', 'Typography', 'Animations', 'Responsive'],
    gradient: 'radial-gradient(circle at 40% 60%, rgba(139,92,246,0.12), transparent 70%)',
    icon: 'FaPalette',
  },
  {
    id: 'cafe',
    title: 'Modern Cafe Website',
    category: 'web',
    description: 'Responsive restaurant website with interactive menu, online ordering, and reservation system.',
    detail:
      'A fully responsive restaurant website with an interactive menu system, online ordering functionality, location map, and reservation form.',
    techs: ['HTML/CSS', 'JavaScript', 'Responsive'],
    gradient: 'radial-gradient(circle at 30% 40%, rgba(217,70,239,0.12), transparent 70%)',
    icon: 'FaGlobe',
  },
  {
    id: 'taskflow',
    title: 'TaskFlow App',
    category: 'web',
    description: 'Productivity web app with drag-and-drop boards, task management, and team collaboration.',
    detail:
      'A productivity web app for managing tasks, tracking progress, and collaborating with team members. Features drag-and-drop boards and real-time updates.',
    techs: ['Vue.js', 'Firebase', 'Drag & Drop'],
    gradient: 'radial-gradient(circle at 60% 50%, rgba(217,70,239,0.12), transparent 70%)',
    icon: 'FaTasks',
  },
  {
    id: 'lost-forest',
    title: 'Lost Forest',
    category: 'game',
    description: '2D adventure puzzle platformer with hand-drawn environments set in a mystical forest.',
    detail:
      'A 2D adventure puzzle platformer set in a mystical forest. Players explore hand-drawn environments, solve puzzles, and uncover hidden secrets.',
    techs: ['Unity', 'C#', '2D Animation', 'Pixel Art'],
    gradient: 'radial-gradient(circle at 40% 60%, rgba(255,107,174,0.12), transparent 70%)',
    icon: 'FaGamepad',
  },
  {
    id: 'space-defender',
    title: 'Space Defender',
    category: 'game',
    description: 'Fast-paced 2D arcade shooter with progressive difficulty, power-ups, and wave-based combat.',
    detail:
      'A fast-paced 2D arcade shooter set in space. Defeat incoming waves of enemies, collect power-ups, and survive as long as possible.',
    techs: ['Unity', 'C#', '2D Physics', 'Particle System'],
    gradient: 'radial-gradient(circle at 30% 40%, rgba(255,107,174,0.12), transparent 70%)',
    icon: 'FaRocket',
  },
  {
    id: 'dragons-tale',
    title: "Dragon's Tale",
    category: 'game',
    description: '3D RPG action-adventure with open-world exploration, real-time combat, and a rich narrative.',
    detail:
      'An immersive 3D RPG action-adventure game with open-world exploration, real-time combat, quest system, and a rich fantasy world.',
    techs: ['Unity', 'C#', '3D Modeling', 'Animation', 'AI'],
    gradient: 'radial-gradient(circle at 60% 50%, rgba(255,107,174,0.12), transparent 70%)',
    icon: 'FaDragon',
  },
];
