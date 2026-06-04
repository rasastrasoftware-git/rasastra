(function() {
'use strict';

const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const menuOverlay = document.getElementById('menuOverlay');
const themeToggle = document.getElementById('themeToggle');
const themeToggleMobile = document.getElementById('themeToggleMobile');
const html = document.documentElement;

// ============ THEME TOGGLE ============
function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('rasastra-theme', theme);
}

function toggleTheme() {
  const current = html.getAttribute('data-theme');
  setTheme(current === 'light' ? 'dark' : 'light');
}

if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);

const savedTheme = localStorage.getItem('rasastra-theme');
if (savedTheme) {
  html.setAttribute('data-theme', savedTheme);
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  html.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
}

// ============ MOBILE MENU ============
window.toggleMobileMenu = function() {
  if (!navMenu || !menuOverlay) return;
  hamburger.classList.toggle('active');
  const isOpen = navMenu.classList.toggle('open');
  navMenu.style.display = isOpen ? 'flex' : 'none';
  menuOverlay.classList.toggle('menu-open');
  document.body.style.overflow = isOpen ? 'hidden' : '';
};

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
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

// ============ SCROLL BEHAVIOR ============
let ticking = false;
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const y = window.scrollY;

    if (navMenu.classList.contains('open') && y > 80) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
      navMenu.style.display = '';
      menuOverlay.classList.remove('menu-open');
      document.body.style.overflow = '';
    }

    let current = '';
    sections.forEach(s => {
      if (y + 160 >= s.offsetTop) current = s.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.textContent.toLowerCase().trim() === current);
    });

    ticking = false;
  });
});

// ============ SCROLL REVEAL ============
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
);

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => revealObserver.observe(el));

// ============ ANIMATED COUNTERS ============
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        if (isNaN(target)) return;

        let current = 0;
        const duration = 1500;
        const startTime = performance.now();

        function updateCounter(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          current = Math.floor(eased * target);
          el.textContent = current;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = target;
          }
        }

        requestAnimationFrame(updateCounter);
        counterObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('.stat-number[data-target]').forEach(el => counterObserver.observe(el));

// ============ PORTFOLIO FILTER ============
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

// ============ MODAL ============
const overlay = document.getElementById('modalOverlay');
const mTitle = document.getElementById('modalTitle');
const mCat = document.getElementById('modalCat');
const mDesc = document.getElementById('modalDesc');
const mTechs = document.getElementById('modalTechs');

window.openModal = function(data) {
  if (!data) return;
  mTitle.textContent = data.title || '';
  mCat.textContent = data.category || '';
  mDesc.textContent = data.desc || '';
  mTechs.innerHTML = (data.techs || []).map(t => `<span>${t}</span>`).join('');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeModal = function(e) {
  if (e && e.target !== overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ============ TESTIMONIAL CAROUSEL ============
const testiTrack = document.querySelector('.testi-track');
const testiGrid = document.querySelector('.testi-grid');

if (testiTrack && testiGrid) {
  const cards = testiGrid.querySelectorAll('.testi-card');
  if (cards.length > 0) {
    const clone = testiGrid.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    testiTrack.appendChild(clone);
  }
}

})();
