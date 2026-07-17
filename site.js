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
          <div class="footer-col-title" style="margin-top:18px;"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-9 5.7a1.9 1.9 0 0 1-2 0L2 7"/></svg> Newsletter</div>
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
        <p>© ${YEAR} ResipiLokal.com — Dibuat dengan <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19.8 5.1a5 5 0 0 0-7.1 0L12 5.8l-.7-.7a5 5 0 1 0-7.1 7.1l.7.7L12 20l7.1-7.1.7-.7a5 5 0 0 0 0-7.1z"/></svg> untuk rakyat Malaysia</p>
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
        form.innerHTML = '<p style="color:var(--accent);font-size:0.85rem;margin:0;">Terima kasih! Anda telah dilanggan.</p>';
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

    // Brand mark (chef hat, same as favicon) before the wordmark.
    const logo = document.querySelector('.nav-logo');
    if (logo && !logo.querySelector('.nav-logo-mark')) {
      const mark = document.createElement('span');
      mark.className = 'nav-logo-mark';
      mark.innerHTML = '<svg viewBox="0 0 48 48" width="26" height="26" aria-hidden="true"><rect width="48" height="48" rx="11" fill="#f5a623"/><g transform="translate(7.2,6.4) scale(1.4)" fill="none" stroke="#141414" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21a1 1 0 0 0 1-1v-5.3c0-.5.3-.9.7-1.1a4 4 0 0 0-2.1-7.6 5 5 0 0 0-9.2 0 4 4 0 0 0-2.1 7.6c.4.2.7.6.7 1V20a1 1 0 0 0 1 1z"/><path d="M6 17h12"/></g></svg>';
      logo.insertBefore(mark, logo.firstChild);
    }
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

// ============================================================
// ResipiBot — pembantu resepi pintar (client-side, tiada kos API).
// Memahami bahan ("saya ada ayam dan santan"), kategori, masa
// ("bawah 30 minit"), chef, dan cadangan rawak — semua dijawab
// terus daripada data resepi tempatan.
// ============================================================
(function () {
  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  ready(function () {
    if (typeof RECIPES === 'undefined' || !Array.isArray(RECIPES) || !RECIPES.length) return;
    if (document.getElementById('rbFab')) return; // never duplicate on baked pages

    var hatSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21a1 1 0 0 0 1-1v-5.3c0-.5.3-.9.7-1.1a4 4 0 0 0-2.1-7.6 5 5 0 0 0-9.2 0 4 4 0 0 0-2.1 7.6c.4.2.7.6.7 1V20a1 1 0 0 0 1 1z"/><path d="M6 17h12"/></svg>';
    var sendSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></svg>';
    var closeSvg = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';
    var clockSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';

    // ── UI ──
    var fab = document.createElement('button');
    fab.id = 'rbFab';
    fab.className = 'rb-fab';
    fab.setAttribute('aria-label', 'Buka ResipiBot — pembantu resepi');
    fab.innerHTML = hatSvg;
    document.body.appendChild(fab);

    var panel = document.createElement('div');
    panel.className = 'rb-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'ResipiBot');
    panel.innerHTML =
      '<div class="rb-head">' +
        '<div class="rb-head-avatar">' + hatSvg + '</div>' +
        '<div><div class="rb-head-name">ResipiBot</div>' +
        '<div class="rb-head-sub">Pembantu resepi — jawab serta-merta</div></div>' +
        '<button class="rb-close" type="button" aria-label="Tutup">' + closeSvg + '</button>' +
      '</div>' +
      '<div class="rb-msgs" id="rbMsgs"></div>' +
      '<div class="rb-chips" id="rbChips"></div>' +
      '<form class="rb-inputrow" id="rbForm">' +
        '<input type="text" id="rbInput" placeholder="Cth: saya ada ayam &amp; santan" autocomplete="off" aria-label="Taip soalan anda"/>' +
        '<button type="submit" aria-label="Hantar">' + sendSvg + '</button>' +
      '</form>';
    document.body.appendChild(panel);

    var msgs = panel.querySelector('#rbMsgs');
    var input = panel.querySelector('#rbInput');
    var chipsRow = panel.querySelector('#rbChips');
    var greeted = false;

    function esc(s) {
      return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function addMsg(html, who) {
      var div = document.createElement('div');
      div.className = 'rb-msg ' + who;
      div.innerHTML = html;
      msgs.appendChild(div);
      msgs.scrollTop = msgs.scrollHeight;
    }

    function addCards(list) {
      var wrap = document.createElement('div');
      wrap.className = 'rb-cards';
      wrap.innerHTML = list.map(function (r) {
        return '<a class="rb-card" href="/resepi/' + r.id + '.html">' +
          '<img src="' + r.thumbnail + '" alt="" loading="lazy"/>' +
          '<div><div class="rb-card-title">' + esc(r.title) + '</div>' +
          '<div class="rb-card-meta">' + clockSvg + ' ' + esc(r.cook_time) + ' &middot; ' + esc(r.difficulty) + '</div></div></a>';
      }).join('');
      msgs.appendChild(wrap);
      msgs.scrollTop = msgs.scrollHeight;
    }

    var CHIPS = ['Apa nak masak hari ini?', 'Saya ada ayam & santan', 'Resepi bawah 30 minit', 'Cadangkan dessert'];
    chipsRow.innerHTML = CHIPS.map(function (c) {
      return '<button type="button" class="rb-chip">' + esc(c) + '</button>';
    }).join('');
    chipsRow.addEventListener('click', function (e) {
      var b = e.target.closest('.rb-chip');
      if (b) { input.value = b.textContent; panel.querySelector('#rbForm').dispatchEvent(new Event('submit', { cancelable: true })); }
    });

    // ── Brain ──
    var STOP = ['saya', 'ada', 'nak', 'hendak', 'mahu', 'masak', 'memasak', 'resepi', 'resipi', 'recipe',
      'apa', 'yang', 'dengan', 'dan', 'untuk', 'buat', 'boleh', 'tolong', 'cari', 'carikan', 'nakkan',
      'kan', 'lah', 'kat', 'dekat', 'dalam', 'guna', 'pakai', 'bahan', 'hari', 'ini', 'hari', 'sedap',
      'senaraikan', 'tunjuk', 'bagi', 'saja', 'sahaja', 'the', 'have', 'want', 'cook', 'with', 'and', 'for'];

    var CAT_SYN = [
      [/dessert|pencuci mulut|manisan/, 'Dessert'],
      [/kuih/, 'Kuih'],
      [/\bkek\b|cake|bakeri/, 'Kek'],
      [/minuman|jus\b|drink/, 'Minuman'],
      [/\bsup\b|bubur|soup/, 'Sup'],
      [/sambal/, 'Sambal'],
      [/seafood|makanan laut/, 'Seafood'],
      [/\bnasi\b/, 'Nasi'],
      [/\bmee\b|pasta|spaghetti|makaroni|maggi|bihun|kuey teow/, 'Mee & Pasta'],
      [/sarapan|breakfast/, 'Sarapan'],
      [/western|burger|chop/, 'Western'],
      [/\blauk\b/, 'Lauk'],
    ];

    function cookMinutes(r) {
      return (parseInt(r.prep_time, 10) || 0) + (parseInt(r.cook_time, 10) || 0);
    }

    function pickRandom(arr, n) {
      var copy = arr.slice();
      for (var i = copy.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = copy[i]; copy[i] = copy[j]; copy[j] = t;
      }
      return copy.slice(0, n);
    }

    function answer(q) {
      var raw = q.toLowerCase().trim();

      if (/^(hai|hi|hello|helo|salam|assalam|hey)\b/.test(raw)) {
        return { text: 'Hai! Saya ResipiBot. Beritahu saya bahan yang anda ada (cth: "saya ada ayam dan santan"), kategori ("nak dessert"), atau masa ("bawah 30 minit") — saya akan cadangkan resepi yang sesuai daripada ' + RECIPES.length + ' resepi chef Malaysia.' };
      }
      if (/terima kasih|thanks|tq\b|thank you/.test(raw)) {
        return { text: 'Sama-sama! Selamat memasak &#127858;' };
      }

      var pool = RECIPES.slice();
      var notes = [];

      // chef filter
      if (/khairul|aming/.test(raw)) { pool = pool.filter(function (r) { return r.chef_id === 'khairul-aming'; }); notes.push('resepi Khairul Aming'); }
      else if (/che ?sayang/.test(raw)) { pool = pool.filter(function (r) { return r.chef_id === 'che-sayang'; }); notes.push('resepi Che Sayang Kitchen'); }

      // category filter
      var cat = null, catRe = null;
      for (var c = 0; c < CAT_SYN.length; c++) {
        if (CAT_SYN[c][0].test(raw)) { cat = CAT_SYN[c][1]; catRe = CAT_SYN[c][0]; break; }
      }
      if (cat) { pool = pool.filter(function (r) { return r.category === cat; }); notes.push('kategori ' + cat); }

      // time filter
      var mTime = raw.match(/(?:bawah|kurang|under|dalam)\s*(\d+)\s*min/) || (/(cepat|pantas|quick|express|segera)/.test(raw) ? [null, '30'] : null);
      if (mTime) {
        var lim = parseInt(mTime[1], 10);
        pool = pool.filter(function (r) { return cookMinutes(r) > 0 && cookMinutes(r) <= lim; });
        notes.push('siap bawah ' + lim + ' minit');
      }

      // difficulty filter
      if (/senang|mudah|easy|simple|beginner/.test(raw)) {
        pool = pool.filter(function (r) { return r.difficulty === 'Mudah' || r.difficulty === 'Sederhana'; });
        notes.push('mudah dimasak');
      }

      // occasion tags
      if (/berbuka|iftar|ramadan|ramadhan/.test(raw)) { notes.push('sesuai untuk berbuka'); }
      if (/raya/.test(raw)) {
        pool = pool.filter(function (r) { return (r.tags || []).join(' ').toLowerCase().indexOf('raya') !== -1 || /rendang|lemang|lontong|kuah/.test(r.title.toLowerCase()); });
        notes.push('menu raya');
      }

      // ingredient / keyword scoring — consume intent words first so a
      // request like "cadangkan dessert" doesn't leak "dessert" into the
      // ingredient matching and shrink the results.
      var rest = raw
        .replace(/khairul|aming|che ?sayang/g, ' ')
        .replace(/(?:bawah|kurang|under|dalam)\s*\d+\s*min\w*/g, ' ')
        .replace(/cepat|pantas|quick|express|segera/g, ' ')
        .replace(/senang|mudah|easy|simple|beginner/g, ' ')
        .replace(/berbuka|iftar|ramadhan|ramadan|raya/g, ' ')
        .replace(/cadang\w*|suggest\w*|idea|random/g, ' ');
      if (catRe) rest = rest.replace(catRe, ' ');
      var tokens = rest.replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(function (t) {
        return t.length >= 3 && STOP.indexOf(t) === -1;
      });
      var scored = pool.map(function (r) {
        var title = (r.title + ' ' + (r.title_en || '')).toLowerCase();
        var ing = (r.ingredients || []).join(' ').toLowerCase();
        var s = 0;
        tokens.forEach(function (t) {
          if (title.indexOf(t) !== -1) s += 3;
          else if (ing.indexOf(t) !== -1) s += 2;
        });
        return { r: r, s: s };
      });

      var anyScore = scored.some(function (x) { return x.s > 0; });
      var results;
      var isRandomAsk = /cadang|suggest|idea|random|tak tahu|xtahu|x tahu|entah|apa nak masak|apa-apa/.test(raw);

      if (anyScore) {
        results = scored.filter(function (x) { return x.s > 0; })
          .sort(function (a, b) { return b.s - a.s; })
          .slice(0, 4).map(function (x) { return x.r; });
      } else if (notes.length || isRandomAsk) {
        results = pickRandom(pool, 4);
      } else {
        return { text: 'Maaf, saya tak pasti maksud anda. Cuba sebut bahan (cth: "ayam, kicap"), kategori ("dessert", "sup"), atau masa ("bawah 30 minit"). Atau <a href="/search.html" style="color:var(--accent);">guna carian penuh &rarr;</a>' };
      }

      if (!results.length) {
        return { text: 'Tiada resepi yang padan dengan ' + esc(notes.join(', ')) + ' buat masa ini. Cuba longgarkan sedikit — atau <a href="/search.html" style="color:var(--accent);">lihat semua resepi &rarr;</a>' };
      }

      var lead;
      if (anyScore) lead = 'Ini yang paling sesuai' + (notes.length ? ' (' + esc(notes.join(', ')) + ')' : '') + ':';
      else lead = 'Ini cadangan saya' + (notes.length ? ' — ' + esc(notes.join(', ')) : '') + ':';
      return { text: lead, cards: results };
    }

    // ── Events ──
    function open() {
      panel.classList.add('open');
      if (!greeted) {
        greeted = true;
        addMsg('Hai! Saya <strong>ResipiBot</strong>. Tanya saya apa-apa tentang ' + RECIPES.length + ' resepi di sini — bahan yang anda ada, kategori, atau masa memasak.', 'bot');
      }
      setTimeout(function () { input.focus(); }, 60);
    }
    function close() { panel.classList.remove('open'); }

    fab.addEventListener('click', function () {
      if (panel.classList.contains('open')) close(); else open();
    });
    panel.querySelector('.rb-close').addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });

    panel.querySelector('#rbForm').addEventListener('submit', function (e) {
      e.preventDefault();
      var q = input.value.trim();
      if (!q) return;
      addMsg(esc(q), 'user');
      input.value = '';
      setTimeout(function () {
        var a = answer(q);
        addMsg(a.text, 'bot');
        if (a.cards) addCards(a.cards);
      }, 250);
    });
  });
})();
