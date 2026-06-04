export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  priceUnit?: string;
  whatsappMessage: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'design' | 'web' | 'game';
  description: string;
  detail: string;
  techs: string[];
  gradient: string;
  icon: string;
}

export interface TestimonialItem {
  text: string;
  author: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  photoWebp: string;
  avatarClass: string;
  imagePosition: string;
  imageScale: number;
  socials: { platform: string; url: string; icon: string }[];
}

export interface StatItem {
  target: number;
  suffix?: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ModalData {
  title: string;
  category: string;
  desc: string;
  techs: string[];
}
