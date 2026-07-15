// ============================================================
// ResipiLokal.com — SHARED SITE SCRIPT
// Injects the standard footer, keeps the navbar consistent,
// theme toggle, favorites, Netflix-style row arrows, newsletter
// and image fade-in on every page.
// Include AFTER the page content: <script src="site.js"></script>
// ============================================================

(function () {
  const YEAR = new Date().getFullYear();

  // ── Small inline SVG icons (professional look, no emoji) ────
  const SVG = {
    search: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>',
    sun: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5 5l1.6 1.6M17.4 17.4 19 19M19 5l-1.6 1.6M6.6 17.4 5 19"/></svg>',
    moon: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
    heart: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19.8 5.1a5 5 0 0 0-7.1 0L12 5.8l-.7-.7a5 5 0 1 0-7.1 7.1l.7.7L12 20l7.1-7.1.7-.7a5 5 0 0 0 0-7.1z"/></svg>',
    heartFill: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M19.8 5.1a5 5 0 0 0-7.1 0L12 5.8l-.7-.7a5 5 0 1 0-7.1 7.1l.7.7L12 20l7.1-7.1.7-.7a5 5 0 0 0 0-7.1z"/></svg>',
    chevL: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m14.5 5.5-6.5 6.5 6.5 6.5"/></svg>',
    chevR: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9.5 5.5 6.5 6.5-6.5 6.5"/></svg>',
  };

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

    // Replace the emoji magnifier in the static nav markup with a clean
    // SVG icon (always overwrite — idempotent by construction).
    document.querySelectorAll('.nav-search a.nav-search-btn[href="/search.html"]').forEach(a => {
      a.innerHTML = SVG.search;
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
      btn.innerHTML = document.documentElement.getAttribute('data-theme') === 'light' ? SVG.moon : SVG.sun;
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

  // ── Horizontal rows: Netflix-style arrows + wheel + drag ─────
  // .scroll-row only supports touch/trackpad swipe out of the box. This
  // adds hover chevron arrows (desktop), translates a vertical mouse
  // wheel into smooth horizontal scroll, and supports click-and-drag.
  // The wrapper/arrow MARKUP can already be baked into static HTML, but
  // (same lesson as the theme toggle) listeners never survive baking, so
  // creation is conditional while listener attachment is unconditional.
  function initScrollRows() {
    document.querySelectorAll('.scroll-row').forEach(row => {
      // Skip rows that are being used as wrapping grids (favorites page).
      const cs = getComputedStyle(row);
      if (cs.flexWrap === 'wrap') return;

      let wrap = row.parentElement;
      if (!wrap.classList.contains('row-wrap')) {
        wrap = document.createElement('div');
        wrap.className = 'row-wrap';
        row.parentNode.insertBefore(wrap, row);
        wrap.appendChild(row);
      }
      let prev = wrap.querySelector('.row-arrow.prev');
      let next = wrap.querySelector('.row-arrow.next');
      if (!prev) {
        prev = document.createElement('button');
        prev.type = 'button';
        prev.className = 'row-arrow prev';
        prev.setAttribute('aria-label', 'Skrol ke kiri');
        wrap.appendChild(prev);
      }
      if (!next) {
        next = document.createElement('button');
        next.type = 'button';
        next.className = 'row-arrow next';
        next.setAttribute('aria-label', 'Skrol ke kanan');
        wrap.appendChild(next);
      }
      prev.innerHTML = SVG.chevL;
      next.innerHTML = SVG.chevR;

      const page = () => Math.max(row.clientWidth * 0.85, 240);
      prev.addEventListener('click', () => row.scrollBy({ left: -page(), behavior: 'smooth' }));
      next.addEventListener('click', () => row.scrollBy({ left: page(), behavior: 'smooth' }));

      const update = () => {
        const overflow = row.scrollWidth > row.clientWidth + 10;
        prev.classList.toggle('hidden', !overflow || row.scrollLeft < 10);
        next.classList.toggle('hidden', !overflow || row.scrollLeft > row.scrollWidth - row.clientWidth - 10);
      };
      row.addEventListener('scroll', update, { passive: true });
      window.addEventListener('resize', update);
      update();
      // content (cards) is often injected after this runs — re-check
      setTimeout(update, 400);
      setTimeout(update, 1500);

      row.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
        if (row.scrollWidth <= row.clientWidth) return;
        e.preventDefault();
        row.scrollBy({ left: e.deltaY, behavior: 'smooth' });
      }, { passive: false });

      let isDown = false, startX = 0, startScroll = 0, moved = false;
      row.addEventListener('mousedown', (e) => {
        isDown = true; moved = false;
        startX = e.pageX;
        startScroll = row.scrollLeft;
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
        if (Math.abs(dx) > 5 && !moved) { moved = true; row.classList.add('dragging'); }
        if (moved) row.scrollLeft = startScroll - dx;
      });
      // Swallow the click that follows a drag so cards don't navigate
      // away when the user was just trying to scroll.
      row.addEventListener('click', (e) => {
        if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; }
      }, true);
    });
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
  // Exposed globally so pages (e.g. favorites.html) can reuse the exact
  // same storage logic instead of duplicating it.
  window.rlFavorites = { get: getFavorites, is: isFavorite, toggle: toggleFavorite };

  // Quick nav link to the favorites page, with a live count bubble.
  function initFavNavLink() {
    const nav = document.querySelector('.nav-search');
    if (!nav) return;
    let a = document.getElementById('favNavLink');
    if (!a) {
      a = document.createElement('a');
      a.id = 'favNavLink';
      a.href = '/favorites.html';
      a.className = 'nav-search-btn';
      a.setAttribute('aria-label', 'Kegemaran saya');
      nav.insertBefore(a, nav.firstChild);
    }
    updateFavNavCount();
  }
  function updateFavNavCount() {
    const a = document.getElementById('favNavLink');
    if (!a) return;
    const favs = getFavorites();
    const n = favs.recipes.length + favs.chefs.length;
    a.innerHTML = SVG.heart + (n ? `<span class="fav-count">${n > 99 ? '99+' : n}</span>` : '');
  }

  // Derive the favorite type/id for a badge from its owner card.
  function favInfoFor(el) {
    const owner = el.closest('[data-recipe-id], [data-chef-id]');
    if (!owner) return null;
    if (owner.dataset.recipeId) return { type: 'recipes', id: owner.dataset.recipeId };
    return { type: 'chefs', id: owner.dataset.chefId };
  }

  function syncBadge(btn) {
    const info = favInfoFor(btn);
    if (!info) return;
    const fav = isFavorite(info.type, info.id);
    btn.classList.toggle('active', fav);
    btn.innerHTML = fav ? SVG.heartFill : SVG.heart;
    btn.setAttribute('aria-label', fav ? 'Buang dari kegemaran' : 'Tambah ke kegemaran');
  }

  // Ensure every card with a data-recipe-id / data-chef-id marker carries
  // a heart badge, and that its shown state matches storage. Safe to call
  // any number of times (creation is conditional, state sync always runs).
  function ensureFavoriteBadges(root) {
    (root || document).querySelectorAll('[data-recipe-id], [data-chef-id]').forEach(card => {
      if (card.tagName === 'BUTTON') return; // page-level button handled separately
      let btn = card.querySelector(':scope > .fav-badge');
      if (!btn) {
        btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'fav-badge';
        card.appendChild(btn);
      }
      syncBadge(btn);
    });
  }

  // The page-level favorite button on recipe/chef detail pages. The page's
  // own inline script stamps data-recipe-id / data-chef-id on #pageFavBtn
  // before site.js runs.
  function syncPageFavButton() {
    const btn = document.getElementById('pageFavBtn');
    if (!btn) return;
    const type = btn.dataset.recipeId ? 'recipes' : (btn.dataset.chefId ? 'chefs' : null);
    const id = btn.dataset.recipeId || btn.dataset.chefId;
    if (!type || !id) return;
    const fav = isFavorite(type, id);
    btn.innerHTML = (fav ? SVG.heartFill : SVG.heart) + ' Kegemaran';
    btn.classList.toggle('active-fav', fav);
  }

  function initFavorites() {
    initFavNavLink();
    ensureFavoriteBadges();
    syncPageFavButton();

    // ONE delegated click handler at the document level. This works no
    // matter when a badge was added (baked into static HTML, rendered at
    // load, or re-rendered later by a page script like search filtering) —
    // per-badge listeners kept silently dying on re-rendered cards.
    document.addEventListener('click', (e) => {
      const badge = e.target.closest && e.target.closest('.fav-badge');
      if (badge) {
        e.preventDefault();
        e.stopPropagation();
        const info = favInfoFor(badge);
        if (!info) return;
        toggleFavorite(info.type, info.id);
        // keep every badge for this same item in sync (e.g. a recipe that
        // appears in two rows on the same page)
        document.querySelectorAll('.fav-badge').forEach(b => {
          const bi = favInfoFor(b);
          if (bi && bi.type === info.type && bi.id === info.id) syncBadge(b);
        });
        syncPageFavButton();
        updateFavNavCount();
        document.dispatchEvent(new CustomEvent('rl-favorites-changed'));
        return;
      }
      const pageBtn = e.target.closest && e.target.closest('#pageFavBtn');
      if (pageBtn) {
        const type = pageBtn.dataset.recipeId ? 'recipes' : (pageBtn.dataset.chefId ? 'chefs' : null);
        const id = pageBtn.dataset.recipeId || pageBtn.dataset.chefId;
        if (!type || !id) return;
        toggleFavorite(type, id);
        syncPageFavButton();
        ensureFavoriteBadges();
        updateFavNavCount();
        document.dispatchEvent(new CustomEvent('rl-favorites-changed'));
      }
    });

    // Badge any card that gets added to the DOM later (search results
    // re-render on every keystroke/filter; category filters re-render
    // grids; etc.). Without this, re-rendered cards had no heart at all.
    const mo = new MutationObserver((muts) => {
      let needsPass = false;
      for (const m of muts) {
        for (const n of m.addedNodes) {
          if (n.nodeType === 1 && (n.matches && (n.matches('[data-recipe-id], [data-chef-id]') || n.querySelector && n.querySelector('[data-recipe-id], [data-chef-id]')))) {
            needsPass = true;
            break;
          }
        }
        if (needsPass) break;
      }
      if (needsPass) ensureFavoriteBadges();
    });
    mo.observe(document.body, { childList: true, subtree: true });
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
    initScrollRows();
    initFavorites();
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
