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
            <li><a href="index.html">Home</a></li>
            <li><a href="chefs.html">Semua Chef</a></li>
            <li><a href="search.html">Cari Resepi</a></li>
            <li><a href="categories.html">Kategori</a></li>
            <li><a href="faq.html">Soalan Lazim</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title">Maklumat</div>
          <ul class="footer-links-list">
            <li><a href="about.html">Tentang Kami</a></li>
            <li><a href="contact.html">Hubungi Kami</a></li>
            <li><a href="privacy.html">Dasar Privasi</a></li>
            <li><a href="terms.html">Terma Penggunaan</a></li>
            <li><a href="affiliate-disclosure.html">Penafian Affiliate</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${YEAR} ResipiLokal.com — Dibuat dengan ❤️ untuk rakyat Malaysia</p>
        <p style="font-size:0.78rem;color:var(--text-muted);">ResipiLokal bukan milik mana-mana chef. Semua resepi & video adalah hak cipta pencipta asal masing-masing. Butang beli mengandungi link affiliate — lihat <a href="affiliate-disclosure.html" style="color:var(--text-muted);text-decoration:underline;">penafian affiliate</a>.</p>
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
  function normalizeNav() {
    const ul = document.getElementById('navLinks');
    if (!ul) return;
    const want = [
      ['index.html', 'Home'],
      ['chefs.html', 'Chef'],
      ['search.html', 'Semua Resepi'],
      ['categories.html', 'Kategori'],
    ];
    const have = {};
    ul.querySelectorAll('a').forEach(a => { have[a.getAttribute('href')] = a; });
    want.forEach(([href, label]) => {
      if (!have[href]) {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${href}">${label}</a>`;
        ul.appendChild(li);
      }
    });
    // active state
    const here = (location.pathname.split('/').pop() || 'index.html');
    ul.querySelectorAll('a').forEach(a => {
      if (a.getAttribute('href') === here) a.style.color = 'var(--accent)';
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
