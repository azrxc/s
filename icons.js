// ============================================================
// ResipiLokal.com — INLINE ICON LIBRARY
// Self-contained SVG marks (no external icon CDN / no broken
// image-hotlink risk). Used for social, share and buy buttons
// so people recognize the platform at a glance instead of text.
// ============================================================

const ICONS = {
  tiktok: '<svg viewBox="0 0 48 48" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M33.5 6h-6.8v27.2c0 3.4-2.7 6.1-6.1 6.1s-6.1-2.7-6.1-6.1 2.7-6.1 6.1-6.1c.6 0 1.2.1 1.8.3v-7c-.6-.1-1.2-.1-1.8-.1-7.2 0-13 5.8-13 13s5.8 13 13 13 13-5.8 13-13V18.9c2.6 1.9 5.8 3 9.2 3v-6.9c-5.1-.2-9.3-4.4-9.3-9.5V6z"/></svg>',
  youtube: '<svg viewBox="0 0 48 48" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M43.5 14.5c-.5-2-2.1-3.5-4.1-4C35.9 9.5 24 9.5 24 9.5s-11.9 0-15.4 1c-2 .5-3.6 2.1-4.1 4C3.5 18 3.5 24 3.5 24s0 6 1 9.5c.5 2 2.1 3.5 4.1 4 3.5 1 15.4 1 15.4 1s11.9 0 15.4-1c2-.5 3.6-2.1 4.1-4 1-3.5 1-9.5 1-9.5s0-6-1-9.5zM19.5 30V18l10.5 6-10.5 6z"/></svg>',
  instagram: '<svg viewBox="0 0 48 48" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M24 6c-4.9 0-5.5 0-7.4.1-1.9.1-3.2.4-4.4.9-1.2.5-2.2 1.1-3.2 2.1s-1.6 2-2.1 3.2c-.5 1.2-.8 2.5-.9 4.4C6 18.5 6 19.1 6 24s0 5.5.1 7.4c.1 1.9.4 3.2.9 4.4.5 1.2 1.1 2.2 2.1 3.2s2 1.6 3.2 2.1c1.2.5 2.5.8 4.4.9 1.9.1 2.5.1 7.4.1s5.5 0 7.4-.1c1.9-.1 3.2-.4 4.4-.9 1.2-.5 2.2-1.1 3.2-2.1s1.6-2 2.1-3.2c.5-1.2.8-2.5.9-4.4.1-1.9.1-2.5.1-7.4s0-5.5-.1-7.4c-.1-1.9-.4-3.2-.9-4.4-.5-1.2-1.1-2.2-2.1-3.2s-2-1.6-3.2-2.1c-1.2-.5-2.5-.8-4.4-.9C29.5 6 28.9 6 24 6zm0 3.6c4.8 0 5.4 0 7.3.1 1.8.1 2.7.4 3.4.6.8.3 1.4.7 2 1.3.6.6 1 1.2 1.3 2 .3.7.5 1.6.6 3.4.1 1.9.1 2.5.1 7.3s0 5.4-.1 7.3c-.1 1.8-.4 2.7-.6 3.4-.3.8-.7 1.4-1.3 2-.6.6-1.2 1-2 1.3-.7.3-1.6.5-3.4.6-1.9.1-2.5.1-7.3.1s-5.4 0-7.3-.1c-1.8-.1-2.7-.4-3.4-.6-.8-.3-1.4-.7-2-1.3-.6-.6-1-1.2-1.3-2-.3-.7-.5-1.6-.6-3.4-.1-1.9-.1-2.5-.1-7.3s0-5.4.1-7.3c.1-1.8.4-2.7.6-3.4.3-.8.7-1.4 1.3-2 .6-.6 1.2-1 2-1.3.7-.2 1.6-.5 3.4-.6 1.9-.1 2.5-.1 7.3-.1zM24 15a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 14.8a5.8 5.8 0 1 1 0-11.6 5.8 5.8 0 0 1 0 11.6zm9.4-15.2a2.1 2.1 0 1 1-4.2 0 2.1 2.1 0 0 1 4.2 0z"/></svg>',
  facebook: '<svg viewBox="0 0 48 48" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M42 24c0-9.9-8.1-18-18-18S6 14.1 6 24c0 8.9 6.5 16.3 15 17.7V29.2h-4.5V24H21v-4c0-4.4 2.6-6.9 6.7-6.9 1.9 0 4 .3 4 .3v4.4h-2.2c-2.2 0-2.9 1.4-2.9 2.8V24h4.9l-.8 5.2H27v12.5C35.5 40.3 42 32.9 42 24z"/></svg>',
  whatsapp: '<svg viewBox="0 0 48 48" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M24 4C13 4 4 13 4 24c0 3.7 1 7.2 2.8 10.2L4 44l10-2.7c2.9 1.6 6.2 2.5 9.7 2.5h.3c11 0 20-9 20-20S35 4 24 4zm11.7 28.4c-.5 1.4-2.7 2.6-3.7 2.7-1 .1-2.1.5-6.9-1.5-5.9-2.4-9.6-8.4-9.9-8.8-.3-.4-2.4-3.2-2.4-6s1.5-4.3 2-4.9c.5-.6 1.1-.7 1.5-.7h1.1c.4 0 .9 0 1.3 1 .5 1.2 1.7 4 1.8 4.3.1.3.2.7 0 1.1-.2.4-.3.6-.6 1s-.6.9-.9 1.2c-.3.3-.6.7-.3 1.3.3.6 1.5 2.5 3.2 4 2.2 2 4 2.6 4.6 2.9.6.3 1 .2 1.3-.1.4-.4 1.6-1.9 2-2.6.4-.6.9-.5 1.5-.3.6.2 3.9 1.8 4.5 2.2.6.3 1.1.5 1.2.7.2.4.2 1.3-.3 2.7z"/></svg>',
  telegram: '<svg viewBox="0 0 48 48" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4zm9.7 13.7-3.3 15.6c-.2 1.1-.9 1.4-1.9.9l-5.2-3.8-2.5 2.4c-.3.3-.5.5-1 .5l.4-5.3 9.6-8.7c.4-.4-.1-.6-.6-.2L17 26l-5.2-1.6c-1.1-.3-1.1-1.1.2-1.7l20.4-7.9c.9-.4 1.8.2 1.3 2z"/></svg>',
  link: '<svg viewBox="0 0 48 48" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M20 28a8 8 0 0 0 11.3 0l5-5a8 8 0 0 0-11.3-11.3l-2.8 2.7"/><path d="M28 20a8 8 0 0 0-11.3 0l-5 5a8 8 0 0 0 11.3 11.3l2.7-2.7"/></svg>',
  shopee: '<svg viewBox="0 0 48 48" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M14 16V13a10 10 0 0 1 20 0v3h5l2 26H7l2-26h5zm4 0h12v-3a6 6 0 0 0-12 0v3zm-2 6a6 6 0 0 0 12 0h-3a3 3 0 0 1-6 0h-3z"/></svg>',
  bag: '<svg viewBox="0 0 48 48" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M14 16V13a10 10 0 0 1 20 0v3h5l2 26H7l2-26h5zm4 0h12v-3a6 6 0 0 0-12 0v3z"/></svg>',
  web: '<svg viewBox="0 0 48 48" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><circle cx="24" cy="24" r="18"/><path d="M6 24h36M24 6c4.5 5 7 11.3 7 18s-2.5 13-7 18c-4.5-5-7-11.3-7-18s2.5-13 7-18z"/></svg>',
  play: '<svg viewBox="0 0 48 48" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M14 8l26 16-26 16z"/></svg>',
};

function icon(name, extraStyle) {
  const svg = ICONS[name] || '';
  return extraStyle ? svg.replace('<svg ', '<svg style="' + extraStyle + '" ') : svg;
}
