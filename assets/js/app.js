/* ========================================================================
   معهد ريادة الغد — Documentation Website
   Shared JavaScript (app.js)
   ======================================================================== */

(function () {
  'use strict';

  /* ---------- 1. DOM READY HELPER ---------- */
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  /* ---------- 2. SCROLL PROGRESS BAR ---------- */
  function initScrollProgress() {
    const bar = document.querySelector('.scroll-progress-bar');
    if (!bar) return;
    window.addEventListener('scroll', function () {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      bar.style.width = Math.min(100, scrolled * 100) + '%';
    }, { passive: true });
  }

  /* ---------- 3. ACTIVE NAV ON SCROLL ---------- */
  function initActiveNav() {
    const sections = document.querySelectorAll('section[id], [data-section-id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"], .toc a[href^="#"]');
    if (!sections.length || !navLinks.length) return;

    function updateActive() {
      const fromTop = window.scrollY + 140;
      let current = '';
      sections.forEach(function (s) {
        if (s.offsetTop <= fromTop) {
          current = s.id || s.getAttribute('data-section-id');
        }
      });
      navLinks.forEach(function (link) {
        const href = link.getAttribute('href') || '';
        link.classList.toggle('active', href === '#' + current);
      });
    }
    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();
  }

  /* ---------- 4. SMOOTH SCROLL WITH OFFSET ---------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        const href = a.getAttribute('href');
        if (href === '#' || href.length < 2) return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 130;
        window.scrollTo({ top: top, behavior: 'smooth' });
        history.replaceState(null, '', href);
      });
    });
  }

  /* ---------- 5. MOBILE NAV TOGGLE ---------- */
  function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    if (!toggle || !links) return;
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    // close on link click (mobile)
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  /* ---------- 6. BACK TO TOP BUTTON ---------- */
  function initBackTop() {
    const btn = document.querySelector('.back-top');
    if (!btn) return;
    function toggle() {
      btn.classList.toggle('visible', window.scrollY > 400);
    }
    window.addEventListener('scroll', toggle, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    toggle();
  }

  /* ---------- 7. COPY LINK TO SECTION ---------- */
  function initCopyLink() {
    document.querySelectorAll('h2[id], h3[id]').forEach(function (h) {
      const id = h.id;
      if (!id) return;
      const btn = document.createElement('button');
      btn.className = 'anchor-link';
      btn.setAttribute('aria-label', 'نسخ الرابط');
      btn.innerHTML = '🔗';
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const url = window.location.origin + window.location.pathname + '#' + id;
        if (navigator.clipboard) {
          navigator.clipboard.writeText(url).then(showToast);
        } else {
          showToast();
        }
      });
      h.appendChild(btn);
    });
  }

  let toastTimer = null;
  function showToast(message) {
    let el = document.querySelector('.toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'toast';
      document.body.appendChild(el);
    }
    el.textContent = message || 'تم نسخ الرابط ✓';
    el.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('show'); }, 2000);
  }

  /* ---------- 8. HIGHLIGHT CURRENT PAGE IN NAVIGATION ---------- */
  function initCurrentPageHighlight() {
    const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    document.querySelectorAll('.nav-links a, .phase-nav-inner a, .toc a').forEach(function (a) {
      const href = (a.getAttribute('href') || '').toLowerCase();
      if (href === current) a.classList.add('active');
    });
  }

  /* ---------- 9. COLLAPSIBLE SECTIONS ---------- */
  function initCollapsible() {
    document.querySelectorAll('[data-collapsible]').forEach(function (el) {
      const trigger = el.querySelector('[data-collapse-trigger]');
      const content = el.querySelector('[data-collapse-content]');
      if (!trigger || !content) return;
      const isOpen = el.getAttribute('data-collapsible') === 'open';
      content.style.overflow = 'hidden';
      content.style.transition = 'max-height .35s ease';
      content.style.maxHeight = isOpen ? content.scrollHeight + 'px' : '0';
      trigger.style.cursor = 'pointer';
      trigger.addEventListener('click', function () {
        const opened = content.style.maxHeight !== '0px';
        content.style.maxHeight = opened ? '0' : content.scrollHeight + 'px';
        el.classList.toggle('collapsed', opened);
      });
    });
  }

  /* ---------- 10. TOC AUTO-GENERATE (if data-autotoc) ---------- */
  function initAutoTOC() {
    const toc = document.querySelector('.toc[data-autotoc]');
    if (!toc) return;
    const headings = document.querySelectorAll('.content h2[id], .content h3[id]');
    if (!headings.length) return;
    const ul = document.createElement('ul');
    headings.forEach(function (h) {
      const li = document.createElement('li');
      if (h.tagName === 'H3') li.className = 'toc-sub';
      const a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent.replace('🔗', '').trim();
      li.appendChild(a);
      ul.appendChild(li);
    });
    const existing = toc.querySelector('ul');
    if (existing) existing.replaceWith(ul);
    else toc.appendChild(ul);
  }

  /* ---------- 11. PHASE KEYBOARD NAVIGATION (← →) ---------- */
  function initKeyboardNav() {
    document.addEventListener('keydown', function (e) {
      if (e.target.matches('input, textarea, select')) return;
      const prev = document.querySelector('.pfn-link.prev:not(.disabled)');
      const next = document.querySelector('.pfn-link.next:not(.disabled)');
      if (e.key === 'ArrowRight' && prev) window.location.href = prev.href;  // RTL: right = previous
      if (e.key === 'ArrowLeft' && next) window.location.href = next.href;   // RTL: left = next
    });
  }

  /* ---------- 12. LAZY IMAGES (native-fallback) ---------- */
  function initLazyImages() {
    document.querySelectorAll('img:not([loading])').forEach(function (img) {
      img.setAttribute('loading', 'lazy');
      img.setAttribute('decoding', 'async');
    });
  }

  /* ---------- BOOT ---------- */
  ready(function () {
    initScrollProgress();
    initActiveNav();
    initSmoothScroll();
    initMobileNav();
    initBackTop();
    initCopyLink();
    initCurrentPageHighlight();
    initCollapsible();
    initAutoTOC();
    initKeyboardNav();
    initLazyImages();
  });

})();
