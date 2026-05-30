// ---------- NAVBAR ----------
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
let lastScroll = 0;

function toggleMobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('open');
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
  });
});

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ---------- SCROLL HANDLER ----------
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 40);

  // Active nav link
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(s => {
    if (y + 120 >= s.offsetTop) current = s.id;
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.textContent.toLowerCase().trim() === current);
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

function openModal(data) {
  mTitle.textContent = data.title;
  mCat.textContent = data.category;
  mDesc.textContent = data.desc;
  mTechs.innerHTML = data.techs.map(t => `<span>${t}</span>`).join('');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  const iframe = document.querySelector('.video-wrapper iframe');
  if (iframe && iframe.dataset.src && !iframe.src) {
    iframe.src = iframe.dataset.src;
  }
}

function closeModal(e) {
  if (e && e.target !== overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
