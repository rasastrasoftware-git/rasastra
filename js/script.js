(function() {
'use strict';

// ---------- NAVBAR ----------
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const menuOverlay = document.getElementById('menuOverlay');

window.toggleMobileMenu = function() {
  if (!navMenu || !menuOverlay) return;
  hamburger.classList.toggle('active');
  const isOpen = navMenu.classList.toggle('open');
  navMenu.style.display = isOpen ? 'flex' : 'none';
  menuOverlay.classList.toggle('menu-open');
  document.body.style.overflow = isOpen ? 'hidden' : '';
};

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
    navMenu.style.display = '';
    menuOverlay.classList.remove('menu-open');
    document.body.style.overflow = '';
  });
});

window.closeMobileMenu = function(e) {
  if (e.target.tagName === 'A') return;
  hamburger.classList.remove('active');
  navMenu.classList.remove('open');
  navMenu.style.display = '';
  menuOverlay.classList.remove('menu-open');
  document.body.style.overflow = '';
};

// ---------- SCROLL HANDLER ----------
let ticking = false;
window.addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 40);
    if (navMenu.classList.contains('open') && y > 80) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
      navMenu.style.display = '';
      menuOverlay.classList.remove('menu-open');
      document.body.style.overflow = '';
    }

    // Active nav link
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(s => {
      if (y + 120 >= s.offsetTop) current = s.id;
    });
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href && href.replace('#','') === current);
    });

    ticking = false;
  });
});

// ---------- SCROLL REVEAL ----------
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
);

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));

// ---------- PORTFOLIO FILTER ----------
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

function getActiveFilter() {
  return document.querySelector('.filter-btn.active').dataset.filter;
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilter();
  });
});

function applyFilter() {
  const active = getActiveFilter();
  portfolioItems.forEach(item => {
    if (!item.classList.contains('hide')) {
      item.style.transitionDelay = '0s';
      item.classList.add('out');
    }
  });
  setTimeout(() => {
    portfolioItems.forEach((item, i) => {
      const match = active === 'all' || item.dataset.category === active;
      if (match) {
        item.style.transitionDelay = '0s';
        item.classList.add('out');
        item.classList.remove('hide');
        void item.offsetHeight;
        const idx = i % 3;
        item.style.transitionDelay = (idx * 0.06) + 's';
        item.classList.remove('out');
      } else {
        item.classList.add('hide');
        item.classList.remove('out');
      }
    });
  }, 270);
}

// ---------- MODAL ----------
const overlay = document.getElementById('modalOverlay');
const mTitle = document.getElementById('modalTitle');
const mCat = document.getElementById('modalCat');
const mDesc = document.getElementById('modalDesc');
const mTechs = document.getElementById('modalTechs');
const mIframe = document.querySelector('.video-wrapper iframe');

window.openModal = function(data) {
  if (!data) return;
  mTitle.textContent = data.title || '';
  mCat.textContent = data.category || '';
  mDesc.textContent = data.desc || '';
  mTechs.innerHTML = (data.techs || []).map(t => `<span>${t}</span>`).join('');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (mIframe && mIframe.dataset.src && !mIframe.src) {
    mIframe.src = mIframe.dataset.src;
  }
};

window.closeModal = function(e) {
  if (e && e.target !== overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ---------- TRANSLATIONS ----------
const translations = {
  // Navbar
  'nav-home': { id: 'Home', en: 'Home' },
  'nav-about': { id: 'Tentang', en: 'About' },
  'nav-services': { id: 'Layanan', en: 'Services' },
  'nav-portfolio': { id: 'Portofolio', en: 'Portfolio' },
  'nav-terms': { id: 'Syarat', en: 'Terms' },
  'nav-contact-btn': { id: 'Hubungi Kami', en: 'Contact Us' },
  // Hero
  'hero-badge': { id: 'Rasastra — Solusi Software', en: 'Rasastra — Software Solutions' },
  'hero-title-1': { id: 'Dari Ide ke', en: 'From Idea to' },
  'hero-title-2': { id: 'Realitas Digital', en: 'Digital Reality' },
  'hero-subtitle': { id: 'Desain Figma, website custom, dan game imersif — dibuat dengan hati untuk pemula dan bisnis.', en: 'Figma design, custom websites, and immersive games — built with care for beginners and businesses.' },
  'hero-tag-design': { id: 'Desain', en: 'Design' },
  'hero-tag-web': { id: 'Web', en: 'Web' },
  'hero-tag-game': { id: 'Game', en: 'Game' },
  'hero-btn-services': { id: 'Jelajahi Layanan', en: 'Explore Services' },
  // About
  'about-tag': { id: 'Tentang', en: 'About' },
  'about-title': { id: 'Tentang ', en: 'About ' },
  'about-subtitle': { id: 'Software house kecil dari Malang, Indonesia', en: 'A small software house from Malang, Indonesia' },
  'about-text': { id: 'Rasastra adalah software house kreatif yang berbasis di Malang, Indonesia. Kami membantu mewujudkan ide melalui desain Figma modern, website fungsional, dan game 2D/3D yang menarik. Kami fokus pada kualitas, kejujuran, dan kepuasan klien.', en: 'Rasastra is a creative software house based in Malang, Indonesia. We help bring ideas to life through modern Figma design, functional websites, and engaging 2D/3D games. We focus on quality, honesty, and client satisfaction.' },
  // Advantages
  'adv-honest-title': { id: 'Jujur & Transparan', en: 'Honest & Transparent' },
  'adv-honest-desc': { id: 'Tanpa biaya tersembunyi', en: 'No hidden fees' },
  'adv-fast-title': { id: 'Respon Cepat', en: 'Fast Response' },
  'adv-fast-desc': { id: 'Prioritas WA & IG', en: 'WA & IG priority' },
  'adv-revisi-title': { id: 'Revisi Sampai Puas', en: 'Revisi Until Satisfied' },
  'adv-revisi-desc': { id: 'Kami buat hingga benar', en: 'We make it right' },
  'adv-affordable-title': { id: 'Mulai Terjangkau', en: 'Affordable Start' },
  'adv-affordable-desc': { id: '15k/halaman atau 300k/proyek', en: '15k/page or 300k/project' },
  'adv-beginner-title': { id: 'Ramah Pemula', en: 'Beginner Friendly' },
  'adv-beginner-desc': { id: 'Kami pandu langkah demi langkah', en: 'We guide you step by step' },
  'adv-malang-title': { id: 'Dari Malang', en: 'From Malang' },
  'adv-malang-desc': { id: 'Jawa Timur, Indonesia', en: 'East Java, Indonesia' },
  // Services
  'services-tag': { id: 'Layanan Kami', en: 'What We Do' },
  'services-title': { id: 'Tiga Layanan, ', en: 'Three Services, ' },
  'services-title-2': { id: 'Satu Tujuan', en: 'One Goal' },
  'services-subtitle': { id: 'Wujudkan ide Anda menjadi kenyataan', en: 'Bring your ideas to life' },
  // Service: Design Figma
  'service-design-title': { id: 'Desain Figma', en: 'Design Figma' },
  'service-design-desc': { id: 'UI/UX modern, user-friendly, pixel-perfect siap dikembangkan.', en: 'Modern, user-friendly, pixel-perfect UI/UX design ready for development.' },
  'service-design-price': { id: '15k IDR', en: '15k IDR' },
  'service-design-price-unit': { id: 'per halaman', en: 'per page' },
  'service-design-price-note': { id: '*per halaman — konsultasi gratis untuk banyak halaman', en: '*per page — free consultation for multiple pages' },
  'service-design-f1': { id: 'Desain UI/UX', en: 'UI/UX Design' },
  'service-design-f2': { id: 'Desain Aplikasi Mobile', en: 'Mobile App Design' },
  'service-design-f3': { id: 'Desain Web', en: 'Web Design' },
  'service-design-f4': { id: 'Sistem Desain', en: 'Design System' },
  'service-design-btn': { id: 'Pesan Desain', en: 'Order Design' },
  // Service: Web Development
  'service-web-title': { id: 'Pengembangan Web', en: 'Web Development' },
  'service-web-desc': { id: 'Website custom dan web app sederhana — responsif, cepat, dan bersih.', en: 'Custom websites and simple web apps — responsive, fast, and clean.' },
  'service-web-price': { id: 'Mulai dari 300k IDR', en: 'Start from 300k IDR' },
  'service-web-price-note': { id: '*harga bervariasi — transparan, tanpa biaya tersembunyi', en: '*price varies by complexity — transparent, no hidden fees' },
  'service-web-f1': { id: 'Website Custom', en: 'Custom Websites' },
  'service-web-f2': { id: 'Desain Web Responsif', en: 'Responsive Web Design' },
  'service-web-f3': { id: 'Implementasi UI/UX', en: 'UI/UX Implementation' },
  'service-web-btn': { id: 'Pesan Website', en: 'Order Website' },
  // Service: Game Development
  'service-game-title': { id: 'Pengembangan Game', en: 'Game Development' },
  'service-game-desc': { id: 'Game 2D & 3D dengan Unity — dari konsep hingga build siap main.', en: '2D & 3D games built with Unity — from concept to playable build.' },
  'service-game-price': { id: 'Mulai dari 300k IDR', en: 'Start from 300k IDR' },
  'service-game-price-note': { id: '*harga bervariasi — chat kami untuk penawaran pasti', en: '*price varies — chat us for exact quote' },
  'service-game-f1': { id: 'Game 2D (Platformer, Puzzle, Kasual)', en: '2D Games (Platformer, Puzzle, Casual)' },
  'service-game-f2': { id: 'Game 3D (RPG, Aksi, Simulasi)', en: '3D Games (RPG, Action, Simulation)' },
  'service-game-f3': { id: 'Desain Game + Pengembangan Unity', en: 'Game Design + Unity Development' },
  'service-game-btn': { id: 'Pesan Game', en: 'Order Game' },
  // Team
  'team-tag': { id: 'Tim', en: 'Team' },
  'team-title': { id: 'Di Balik ', en: 'Behind ' },
  'team-subtitle': { id: 'Dua kreator, satu visi', en: 'Two creators, one vision' },
  // Portfolio
  'portfolio-tag': { id: 'Portofolio', en: 'Portfolio' },
  'portfolio-title': { id: 'Karya ', en: 'Our ' },
  'portfolio-title-2': { id: 'Kami', en: 'Works' },
  'portfolio-subtitle': { id: 'Setiap proyek juga tersedia untuk dibeli', en: 'Each project is also available for purchase' },
  'filter-all': { id: 'Semua', en: 'All' },
  'filter-design': { id: 'Desain Figma', en: 'Design Figma' },
  'filter-web': { id: 'Pengembangan Web', en: 'Web Development' },
  'filter-game': { id: 'Game', en: 'Game' },
  'portfolio-btn-details': { id: 'Detail', en: 'Details' },
  'portfolio-btn-buy': { id: 'Beli via Lynk.id', en: 'Buy via Lynk.id' },
  // Terms
  'terms-tag': { id: 'Syarat', en: 'Terms' },
  'terms-title': { id: 'Syarat & ', en: 'Terms & ' },
  'terms-subtitle': { id: 'Sederhana, transparan, dan adil', en: 'Simple, transparent, and fair' },
  'term-01-title': { id: 'Pembayaran', en: 'Payment' },
  'term-01-desc': { id: 'DP 20% di awal, sisanya setelah proyek selesai.', en: '20% DP upfront, remaining after project completion.' },
  'term-02-title': { id: 'Proses', en: 'Process' },
  'term-02-desc': { id: 'Pengerjaan dimulai setelah DP diterima. Durasi tergantung kompleksitas.', en: 'Work starts after DP received. Timeline depends on complexity.' },
  'term-03-title': { id: 'Revisi', en: 'Revisions' },
  'term-03-desc': { id: 'Termasuk 2-3x revisi. Revisi tambahan dikenakan biaya.', en: 'Includes 2-3x revisions. Extra revisions charged.' },
  'term-04-title': { id: 'Pembatalan', en: 'Cancellation' },
  'term-04-desc': { id: 'DP tidak dapat dikembalikan. Pembayaran disesuaikan dengan progres.', en: 'DP non-refundable. Payment adjusted to progress.' },
  'term-05-title': { id: 'File & Pengiriman', en: 'Files & Delivery' },
  'term-05-desc': { id: 'File final setelah pelunasan. Format: Figma/PNG/JPG.', en: 'Final files after full payment. Format: Figma/PNG/JPG.' },
  'term-06-title': { id: 'Komunikasi', en: 'Communication' },
  'term-06-desc': { id: 'Klien memberikan brief yang jelas. Respon terlambat memengaruhi durasi.', en: 'Client provides clear brief. Delayed responses affect timeline.' },
  'terms-closing': { id: 'Kami berkomitmen memberikan hasil terbaik. Kolaborasi • Komitmen • Kualitas', en: 'We are committed to giving you the best results. Collaboration • Commitment • Quality' },
  // Testimonials
  'testi-tag': { id: 'Testimoni', en: 'Testimonials' },
  'testi-title': { id: 'Kata ', en: 'What Our ' },
  'testi-title-2': { id: 'Klien Kami', en: 'Clients Say' },
  'testi-subtitle': { id: 'Kami baru memulai, tapi ini yang orang katakan', en: 'We\'re just getting started, but here\'s what people think' },
  'testi-note': { id: '*Beberapa testimoni dari proyek uji coba awal', en: '*Some testimonials are from early trial projects' },
  // Contact
  'contact-tag': { id: 'Kontak', en: 'Contact' },
  'contact-title': { id: 'Mari Bangun ', en: "Let's Build " },
  'contact-title-2': { id: 'Sesuatu', en: 'Something' },
  'contact-subtitle': { id: 'Siap wujudkan ide Anda? Kami hanya satu pesan saja.', en: 'Ready to turn your idea into reality? We\'re just a message away.' },
  'contact-label-wa': { id: 'WhatsApp', en: 'WhatsApp' },
  'contact-label-ig': { id: 'Instagram', en: 'Instagram' },
  'contact-label-tt': { id: 'TikTok', en: 'TikTok' },
  'contact-label-email': { id: 'Email', en: 'Email' },
  'contact-label-loc': { id: 'Lokasi', en: 'Location' },
  'contact-value-loc': { id: 'Malang, Jawa Timur, Indonesia', en: 'Malang, East Java, Indonesia' },
  'contact-disclaimer': { id: 'Email tidak dipantau secara rutin — gunakan WhatsApp atau Instagram untuk respon tercepat.', en: 'Email is not monitored frequently — please use WhatsApp or Instagram for fastest response.' },
  // Footer
  'footer-brand-desc': { id: 'Dari Malang, Indonesia. Kami membantu mewujudkan ide melalui desain, website, dan game.', en: 'From Malang, Indonesia. We help bring ideas to life through design, websites, and games.' },
  'footer-col-links': { id: 'Tautan Cepat', en: 'Quick Links' },
  'footer-col-social': { id: 'Media Sosial', en: 'Social Media' },
  'footer-col-services': { id: 'Layanan', en: 'Services' },
  'footer-bottom': { id: '© 2026 Rasastra — Solusi Software. Dibuat dengan 💜 dari Malang, Indonesia.', en: '© 2026 Rasastra — Software Solutions. Made with 💜 from Malang, Indonesia.' },
  // Modal
  'modal-close': { id: 'Tutup', en: 'Close' },
  'modal-buy': { id: 'Beli via Lynk.id', en: 'Buy via Lynk.id' },
};

let currentLang = localStorage.getItem('rasastra-lang') || 'id';
const langToggle = document.getElementById('langToggle');

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('rasastra-lang', lang);
  document.documentElement.lang = lang === 'id' ? 'id' : 'en';

  document.querySelectorAll('.lang-toggle span').forEach(el => el.classList.remove('active'));
  const activeSpan = lang === 'id' ? document.querySelector('.lang-id') : document.querySelector('.lang-en');
  if (activeSpan) activeSpan.classList.add('active');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[key] && translations[key][lang]) {
      el.textContent = translations[key][lang];
    }
  });
}

if (langToggle) {
  langToggle.addEventListener('click', () => {
    applyLang(currentLang === 'id' ? 'en' : 'id');
  });
}
applyLang(currentLang);

})();
