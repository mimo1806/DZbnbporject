

const PER_PAGE = 9;
let allData = [];
let filtered = [];
let currentPage = 1;
let activePriceBtn = null;

// ──  se deconnecter ─────────────────
document.addEventListener('DOMContentLoaded', () => {
  const u = JSON.parse(localStorage.getItem('dzbnb_user') || 'null');
  if (u) {
    const btn = document.querySelector('.btn-connexion');
    if (btn) {
      btn.innerHTML = '👤 ' + (u.nom || u.email);
      btn.onclick = () => {
        if (confirm('Voulez-vous vous déconnecter ?')) {
          localStorage.removeItem('dzbnb_user');
          location.reload();
        }
      };
    }
  }
});


// ── Load JSON : relier avdec le fichier json  ─────────────────────
async function loadData() {
  const res = await fetch('../data/logements.json');
  const json = await res.json();
  allData = json.logements;
  applyFilters();
}

// ── la barre de filtrage ───────────────────────────
function applyFilters() {
  const search  = document.getElementById('searchInput').value.trim().toLowerCase();
  const wilaya  = document.getElementById('filterWilaya').value;
  const type    = document.getElementById('filterType').value;
  const sort    = document.getElementById('sortSelect').value;

  let priceMin = null, priceMax = null;
  if (activePriceBtn) {
    priceMin = parseFloat(activePriceBtn.dataset.min) || null;
    priceMax = parseFloat(activePriceBtn.dataset.max) || null;
  }

  filtered = allData.filter(l => {
    if (search && !l.nom.toLowerCase().includes(search) && !l.wilaya.toLowerCase().includes(search)) return false;
    if (wilaya && l.wilaya !== wilaya) return false;
    if (type   && l.type  !== type)   return false;
    if (priceMin !== null && l.prix < priceMin) return false;
    if (priceMax !== null && l.prix > priceMax) return false;
    return true;
  });

  // Sort
  if (sort === 'prix-asc')            filtered.sort((a,b) => a.prix - b.prix);
  else if (sort === 'prix-desc')      filtered.sort((a,b) => b.prix - a.prix);
  else if (sort === 'note-desc')      filtered.sort((a,b) => b.note - a.note);
  else if (sort === 'commentaires-desc') filtered.sort((a,b) => b.commentaires - a.commentaires);

  currentPage = 1;
  render();
}

// ── render grid ─────────
function render() {
  const grid = document.getElementById('grid');
  const countEl = document.getElementById('countText');

  countEl.textContent = `${filtered.length} logement${filtered.length !== 1 ? 's' : ''} trouvé${filtered.length !== 1 ? 's' : ''}`;

  const start = (currentPage - 1) * PER_PAGE;
  const page  = filtered.slice(start, start + PER_PAGE);

  if (page.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="emoji">🏖️</div>
        <h3>Aucun logement trouvé</h3>
        <p>Essayez de modifier vos filtres ou votre recherche.</p>
      </div>`;
    renderPagination(0);
    return;
  }

  grid.innerHTML = page.map((l, i) => cardHTML(l, i)).join('');

  // favoris 
  grid.querySelectorAll('.card-fav').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      btn.classList.toggle('active');
      btn.textContent = btn.classList.contains('active') ? '♥' : '♡';
    });
  });

  grid.querySelectorAll('.listing-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      window.location.href = `../html/details.html?id=${id}`;
    });
  });

  renderPagination(filtered.length);
}

function cardHTML(l, idx) {
  const amenities = [
    l.wifi    ? '📶 WiFi'          : null,
    l.piscine ? '🏊 Piscine'       : null,
    l.parking ? '🅿️ Parking'       : null,
    l.plage && l.plage !== 'N/A' ? `🏖️ Plage ${l.plage}` : null,
  ].filter(Boolean).slice(0, 3);

  return `
    <div class="listing-card" data-id="${l.id}" style="animation-delay:${idx * 0.05}s">
      <div class="card-img-wrap">
        ${l.populaire ? `<span class="card-badge">Populaire</span>` : ''}
        <button class="card-fav">♡</button>
        <img src="${l.image}" alt="${l.nom}" loading="lazy">
      </div>
      <div class="card-body">
        <div class="card-top">
          <span class="card-name">${l.nom}</span>
          <span class="card-rating">⭐ ${l.note} <span style="color:#aaa;font-weight:400">(${l.commentaires})</span></span>
        </div>
        <p class="card-meta">📍 ${l.wilaya} · ${l.type}</p>
        <div class="card-icons">
          <span class="card-icon">🛏️ ${l.chambres} ch.</span>
          ${amenities.map(a => `<span class="card-icon">${a}</span>`).join('')}
        </div>
        <div class="card-price">
          <span>À partir de </span>
          <strong>${l.prix.toLocaleString('fr-DZ')} DZD</strong>
          <span> /nuit</span>
        </div>
      </div>
    </div>`;
}


function renderPagination(total) {
  const pages = Math.ceil(total / PER_PAGE);
  const el = document.getElementById('pagination');

  if (pages <= 1) { el.innerHTML = ''; return; }

  let html = `<button class="page-btn" id="pp" ${currentPage === 1 ? 'disabled' : ''}>‹</button>`;

  const range = paginationRange(currentPage, pages);
  range.forEach(p => {
    if (p === '…') {
      html += `<span class="page-btn ellipsis">…</span>`;
    } else {
      html += `<button class="page-btn ${p === currentPage ? 'active' : ''}" data-page="${p}">${p}</button>`;
    }
  });

  html += `<button class="page-btn" id="pn" ${currentPage === pages ? 'disabled' : ''}>›</button>`;
  el.innerHTML = html;

  el.querySelector('#pp').addEventListener('click', () => { currentPage--; render(); window.scrollTo({top:0,behavior:'smooth'}); });
  el.querySelector('#pn').addEventListener('click', () => { currentPage++; render(); window.scrollTo({top:0,behavior:'smooth'}); });
  el.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click', () => { currentPage = parseInt(btn.dataset.page); render(); window.scrollTo({top:0,behavior:'smooth'}); });
  });
}

function paginationRange(cur, total) {
  if (total <= 7) return Array.from({length: total}, (_,i) => i+1);
  if (cur <= 3) return [1,2,3,'…',total-1,total];
  if (cur >= total-2) return [1,2,'…',total-2,total-1,total];
  return [1,'…',cur-1,cur,cur+1,'…',total];
}

// ── prix pill toggle 
window.togglePrice = function(btn) {
  if (activePriceBtn === btn) {
    btn.classList.remove('active');
    activePriceBtn = null;
  } else {
    if (activePriceBtn) activePriceBtn.classList.remove('active');
    btn.classList.add('active');
    activePriceBtn = btn;
  }
  applyFilters();
};


document.getElementById('searchInput').addEventListener('input', applyFilters);
document.getElementById('filterWilaya').addEventListener('change', applyFilters);
document.getElementById('filterType').addEventListener('change', applyFilters);
document.getElementById('sortSelect').addEventListener('change', applyFilters);

// boot
loadData();