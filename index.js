
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ─── le sliderrr ────────
const slides   = document.querySelectorAll('.slide');
const dots     = document.querySelectorAll('.dot');
const prevBtn  = document.getElementById('prev');
const nextBtn  = document.getElementById('next');
let current    = 0;
let autoTimer;

function goTo(n) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (n + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');

  const content = slides[current].querySelector('.slide-content');
  content.style.animation = 'none';
  requestAnimationFrame(() => {
    content.style.animation = '';
  });
}

function startAuto() {
  clearInterval(autoTimer);
  autoTimer = setInterval(() => goTo(current + 1), 5000);
}

prevBtn.addEventListener('click', () => { goTo(current - 1); startAuto(); });
nextBtn.addEventListener('click', () => { goTo(current + 1); startAuto(); });
dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); startAuto(); }));
startAuto();


let touchStartX = 0;
const heroEl = document.querySelector('.hero');
heroEl.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
heroEl.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) { goTo(dx < 0 ? current + 1 : current - 1); startAuto(); }
});


const track     = document.getElementById('track');
const lpBtn     = document.getElementById('lp');
const lnBtn     = document.getElementById('ln');
const progress  = document.getElementById('progress');
let listIdx     = 0;
const CARD_W    = () => track.querySelector('.listing-card').offsetWidth + 24; // gap=1.5rem=24px
const MAX_IDX   = () => Math.max(0, track.children.length - visibleCards());

function visibleCards() {
  const wrap = document.querySelector('.listings-track-wrap');
  return Math.round(wrap.offsetWidth / CARD_W());
}

function updateTrack() {
  const max = MAX_IDX();
  listIdx = Math.min(listIdx, max);
  track.style.transform = `translateX(-${listIdx * CARD_W()}px)`;
  // progress
  const pct = max > 0 ? (listIdx / max) * 100 : 0;
  progress.style.width = `${pct}%`;
  lpBtn.style.opacity = listIdx === 0 ? '.35' : '1';
  lnBtn.style.opacity = listIdx >= max ? '.35' : '1';
}

lpBtn.addEventListener('click', () => { if (listIdx > 0) { listIdx--; updateTrack(); } });
lnBtn.addEventListener('click', () => { if (listIdx < MAX_IDX()) { listIdx++; updateTrack(); } });


let lTouchX = 0;
track.addEventListener('touchstart', e => { lTouchX = e.touches[0].clientX; }, { passive: true });
track.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - lTouchX;
  if (dx < -40 && listIdx < MAX_IDX()) { listIdx++; updateTrack(); }
  if (dx > 40  && listIdx > 0)         { listIdx--; updateTrack(); }
});

window.addEventListener('resize', updateTrack);
updateTrack();


document.querySelectorAll('.fav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    btn.textContent = btn.classList.contains('active') ? '♥' : '♡';
    btn.style.color = btn.classList.contains('active') ? '#e05' : '';
  });
});


const sections = document.querySelectorAll('section[id], div[id]');
const navLinks  = document.querySelectorAll('.nav-links a');
const observer  = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { threshold: .5 });
sections.forEach(s => observer.observe(s));


const burger = document.getElementById('burger');
burger.addEventListener('click', () => {
  const links = document.querySelector('.nav-links');
  const open  = links.style.display === 'flex';
  links.style.display = open ? '' : 'flex';
  links.style.flexDirection = 'column';
  links.style.position = 'absolute';
  links.style.top = '65px';
  links.style.left = '0';
  links.style.right = '0';
  links.style.background = '#f7f3ee';
  links.style.padding = '1rem 2rem 1.5rem';
  links.style.borderBottom = '1px solid #e0d8cf';
  links.style.boxShadow = '0 4px 16px rgba(0,0,0,.08)';
  if (open) {
    links.style.display = '';
    links.style.flexDirection = '';
    links.style.position = '';
  }
});

// ─── Newsletter submit ───────────────────
document.querySelector('.newsletter button').addEventListener('click', () => {
  const input = document.querySelector('.newsletter input');
  if (input.value && input.value.includes('@')) {
    input.value = '✓ Merci !';
    input.style.color = '#a0d4a0';
    setTimeout(() => { input.value = ''; input.style.color = ''; }, 2500);
  } else {
    input.placeholder = 'Email invalide…';
    input.style.borderColor = '#e05';
    setTimeout(() => {
      input.placeholder = 'Votre email';
      input.style.borderColor = '';
    }, 1800);
  }
});

// ─── session de l'uyilisateur───────────────────
const user = JSON.parse(localStorage.getItem('dzbnb_user') || 'null');
if (user) {
  const btn = document.querySelector('.btn-connexion');
  if (btn) {
    btn.innerHTML = '👤 ' + (user.nom || user.email);
    btn.onclick = () => {
      if (confirm('Voulez-vous vous déconnecter ?')) {
        localStorage.removeItem('dzbnb_user');
        location.reload();
      }
    };
  }
}