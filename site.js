// ============================================================
// ResipiLokal.com — SHARED SITE SCRIPT
// Injects the standard footer, keeps the navbar consistent,
// handles the newsletter form and image fade-in on every page.
// Include AFTER the page content: <script src="site.js"></script>
// ============================================================

(function () {
  const YEAR = new Date().getFullYear();

  // ── Standard footer (same on every page) ────────────────────
  function renderFooter() {
    const f = document.querySelector('footer.footer');
    if (!f) return;
    f.innerHTML = `
      <div class="footer-top">
        <div>
          <div class="footer-brand-name">Resepi<span>Lokal</span></div>
          <p class="footer-desc">Platform resepi chef & influencer masakan Malaysia. Tonton video asal, baca resepi dwibahasa, dan masak dengan mudah. Kredit penuh kepada semua pencipta asal.</p>
          <div class="footer-col-title" style="margin-top:18px;">📬 Newsletter</div>
          <p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0;">Resepi baharu terus ke emel anda.</p>
          <form class="newsletter-form" id="newsletterForm" aria-label="Langgan newsletter">
            <input type="email" id="newsletterEmail" placeholder="Emel anda" required aria-label="Alamat emel"/>
            <button type="submit">Langgan</button>
          </form>
        </div>
        <div>
          <div class="footer-col-title">Navigasi</div>
          <ul class="footer-links-list">
            <li><a href="/">Home</a></li>
            <li><a href="/chefs.html">Semua Chef</a></li>
            <li><a href="/search.html">Cari Resepi</a></li>
            <li><a href="/categories.html">Kategori</a></li>
            <li><a href="/favorites.html">Kegemaran Saya</a></li>
            <li><a href="/faq.html">Soalan Lazim</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title">Maklumat</div>
          <ul class="footer-links-list">
            <li><a href="/about.html">Tentang Kami</a></li>
            <li><a href="/contact.html">Hubungi Kami</a></li>
            <li><a href="/privacy.html">Dasar Privasi</a></li>
            <li><a href="/terms.html">Terma Penggunaan</a></li>
            <li><a href="/affiliate-disclosure.html">Penafian Affiliate</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${YEAR} ResipiLokal.com — Dibuat dengan ❤️ untuk rakyat Malaysia</p>
        <p style="font-size:0.78rem;color:var(--text-muted);">ResipiLokal bukan milik mana-mana chef. Semua resepi & video adalah hak cipta pencipta asal masing-masing. Butang beli mengandungi link affiliate — lihat <a href="/affiliate-disclosure.html" style="color:var(--text-muted);text-decoration:underline;">penafian affiliate</a>.</p>
      </div>`;

    const form = document.getElementById('newsletterForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        // ✅ Sambungkan ke servis emel anda (Mailchimp/Brevo/Beehiiv) di sini.
        // Kod di bawah hanya simpan secara lokal + papar mesej terima kasih.
        try {
          const list = JSON.parse(localStorage.getItem('rl_newsletter') || '[]');
          list.push({ email: document.getElementById('newsletterEmail').value, at: Date.now() });
          localStorage.setItem('rl_newsletter', JSON.stringify(list));
        } catch (err) { /* storage unavailable — ignore */ }
        form.innerHTML = '<p style="color:var(--accent);font-size:0.85rem;margin:0;">✅ Terima kasih! Anda telah dilanggan.</p>';
      });
    }
  }

  // ── Navbar: ensure standard links on every page ─────────────
  // Runs against already-baked (prerendered) markup too, so it must be
  // self-correcting: canonicalize legacy hrefs and drop duplicates rather
  // than only appending, otherwise stale entries survive every re-bake.
  function normalizeNav() {
    const ul = document.getElementById('navLinks');
    if (!ul) return;
    const want = [
      ['/', 'Home'],
      ['/chefs.html', 'Chef'],
      ['/search.html', 'Semua Resepi'],
      ['/categories.html', 'Kategori'],
    ];
    ul.querySelectorAll('a[href="/index.html"]').forEach(a => a.setAttribute('href', '/'));
    const seen = new Set();
    ul.querySelectorAll('li').forEach(li => {
      const a = li.querySelector('a');
      const href = a && a.getAttribute('href');
      if (!href) return;
      if (seen.has(href)) { li.remove(); } else { seen.add(href); }
    });
    const have = {};
    ul.querySelectorAll('a').forEach(a => { have[a.getAttribute('href')] = a; });
    want.forEach(([href, label]) => {
      if (!have[href]) {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${href}">${label}</a>`;
        ul.appendChild(li);
      }
    });
    // active state (reset each run so re-baking never leaves a stale highlight)
    const here = location.pathname === '/index.html' ? '/' : location.pathname;
    ul.querySelectorAll('a').forEach(a => {
      a.style.color = (a.getAttribute('href') === here) ? 'var(--accent)' : '';
    });
  }

  // ── Theme toggle (dark/light) ────────────────────────────────
  // The button's markup gets baked into every prerendered page, but a
  // baked <button> has no JS listener attached — event listeners live in
  // the script, not the DOM snapshot. So only the CREATION is conditional
  // (avoids a duplicate button); the listener must be (re-)attached every
  // real page load regardless of whether the button already existed.
  function initTheme() {
    const nav = document.querySelector('.nav-search');
    if (!nav) return;
    let btn = document.getElementById('themeToggle');
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'themeToggle';
      btn.className = 'nav-search-btn';
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Tukar tema terang/gelap');
      nav.insertBefore(btn, nav.firstChild);
    }
    const setIcon = () => {
      btn.textContent = document.documentElement.getAttribute('data-theme') === 'light' ? '🌙' : '☀️';
    };
    setIcon();
    btn.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      if (isLight) {
        document.documentElement.removeAttribute('data-theme');
        try { localStorage.setItem('rl_theme', 'dark'); } catch (err) { /* storage unavailable */ }
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        try { localStorage.setItem('rl_theme', 'light'); } catch (err) { /* storage unavailable */ }
      }
      setIcon();
    });
  }

  // ── Horizontal scroll rows: mouse wheel + drag support ───────
  // .scroll-row only supports touch/trackpad swipe out of the box — a
  // plain desktop mouse has no way to scroll it. This translates a normal
  // vertical wheel into horizontal scroll while hovering, and adds
  // click-and-drag scrolling. Runs once per real page load (init() only
  // runs once), so no duplicate-attachment risk — no idempotency guard
  // needed here (unlike DOM content, listeners never get baked into HTML).
  function initScrollRows() {
    document.querySelectorAll('.scroll-row').forEach(row => {
      row.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
        if (row.scrollWidth <= row.clientWidth) return;
        e.preventDefault();
        row.scrollLeft += e.deltaY;
      }, { passive: false });

      let isDown = false, startX = 0, startScroll = 0, moved = false;
      row.addEventListener('mousedown', (e) => {
        isDown = true; moved = false;
        startX = e.pageX;
        startScroll = row.scrollLeft;
        row.classList.add('dragging');
      });
      window.addEventListener('mouseup', () => {
        if (!isDown) return;
        isDown = false;
        row.classList.remove('dragging');
      });
      row.addEventListener('mouseleave', () => {
        isDown = false;
        row.classList.remove('dragging');
      });
      row.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        const dx = e.pageX - startX;
        if (Math.abs(dx) > 4) moved = true;
        row.scrollLeft = startScroll - dx;
      });
      // Swallow the click that follows a drag so cards don't navigate
      // away when the user was just trying to scroll.
      row.addEventListener('click', (e) => {
        if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; }
      }, true);
    });
  }

  // ── Quick nav link to the favorites page ─────────────────────
  function initFavNavLink() {
    const nav = document.querySelector('.nav-search');
    if (!nav || document.getElementById('favNavLink')) return;
    const a = document.createElement('a');
    a.id = 'favNavLink';
    a.href = '/favorites.html';
    a.className = 'nav-search-btn';
    a.setAttribute('aria-label', 'Kegemaran saya');
    a.textContent = '♥';
    nav.insertBefore(a, nav.firstChild);
  }

  // ── Favorites (localStorage, client-side only) ───────────────
  const FAV_KEY = 'rl_favorites';
  function getFavorites() {
    try {
      const raw = localStorage.getItem(FAV_KEY);
      const parsed = raw ? JSON.parse(raw) : null;
      return { recipes: (parsed && parsed.recipes) || [], chefs: (parsed && parsed.chefs) || [] };
    } catch (e) { return { recipes: [], chefs: [] }; }
  }
  function isFavorite(type, id) {
    const favs = getFavorites();
    return favs[type].indexOf(id) !== -1;
  }
  function toggleFavorite(type, id) {
    const favs = getFavorites();
    const idx = favs[type].indexOf(id);
    if (idx === -1) favs[type].push(id); else favs[type].splice(idx, 1);
    try { localStorage.setItem(FAV_KEY, JSON.stringify(favs)); } catch (e) { /* storage unavailable */ }
    return idx === -1;
  }
  // Exposed globally so recipe-detail.html / chef-detail.html can drive a
  // larger, page-level favorite button (not just the small card badge).
  window.rlFavorites = { get: getFavorites, is: isFavorite, toggle: toggleFavorite };

  // Adds a heart-toggle badge to every card that carries a
  // data-recipe-id / data-chef-id marker. This runs once per real page
  // load and reads current DOM state each time, so it naturally covers
  // cards added later by page-specific scripts as long as those scripts
  // run before this (they do — site.js loads last) or initFavoriteBadges
  // is called again after new cards are injected (see recipe-detail.html's
  // renderIngredients-style re-render pattern; card grids here are only
  // built once per page load, so a single pass is sufficient).
  function initFavoriteBadges() {
    // As with the theme toggle: the badge's markup can already be baked
    // into static HTML, but a baked element has no listener attached — so
    // only the element's CREATION is conditional; the listener must always
    // be (re-)attached on every real page load.
    function addBadge(card, type, id) {
      if (!id) return;
      let btn = card.querySelector(':scope > .fav-badge');
      if (!btn) {
        btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'fav-badge';
        btn.setAttribute('aria-label', 'Tambah ke kegemaran');
        card.appendChild(btn);
      }
      const setState = () => {
        const fav = isFavorite(type, id);
        btn.classList.toggle('active', fav);
        btn.textContent = fav ? '♥' : '♡';
      };
      setState();
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(type, id);
        setState();
      });
    }
    document.querySelectorAll('[data-recipe-id]').forEach(card => addBadge(card, 'recipes', card.dataset.recipeId));
    document.querySelectorAll('[data-chef-id]').forEach(card => addBadge(card, 'chefs', card.dataset.chefId));
  }

  // A bigger, page-level favorite button (recipe-detail.html / chef-detail.html
  // set data-recipe-id / data-chef-id on #pageFavBtn once they know which
  // recipe/chef is being viewed — this runs after that, per the script-order
  // note above).
  function initPageFavButton() {
    const btn = document.getElementById('pageFavBtn');
    if (!btn) return;
    const type = btn.dataset.recipeId ? 'recipes' : (btn.dataset.chefId ? 'chefs' : null);
    const id = btn.dataset.recipeId || btn.dataset.chefId;
    if (!type || !id) return;
    const setState = () => {
      const fav = isFavorite(type, id);
      btn.textContent = (fav ? '♥' : '♡') + ' Kegemaran';
      btn.classList.toggle('active-fav', fav);
    };
    setState();
    btn.addEventListener('click', () => {
      toggleFavorite(type, id);
      setState();
    });
  }

  // ── Images: fade in when loaded (pairs with skeleton CSS) ───
  function watchImages() {
    document.querySelectorAll('img').forEach(img => {
      if (img.complete) { img.classList.add('img-loaded'); return; }
      img.addEventListener('load', () => img.classList.add('img-loaded'));
      img.addEventListener('error', () => img.classList.add('img-loaded'));
    });
  }

  function init() {
    renderFooter();
    normalizeNav();
    initTheme();
    initFavNavLink();
    initScrollRows();
    initFavoriteBadges();
    initPageFavButton();
    watchImages();
    // re-watch images added later by page scripts
    setTimeout(watchImages, 600);
    setTimeout(watchImages, 2000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
