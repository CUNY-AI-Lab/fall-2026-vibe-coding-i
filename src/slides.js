'use strict';

let idx = 0;
const slides = Array.from(document.querySelectorAll('section.slide'));
const counter = document.getElementById('counter');
const scrubber = document.getElementById('slide-scrubber');
const sliderCounter = document.getElementById('slider-counter');
const sliderProgress = document.querySelector('.slider-progress');
const sliderThumb = document.querySelector('.slider-thumb');
const announcer = document.getElementById('slide-announce');

function clamp(n, lo, hi) {
  return Math.max(lo, Math.min(hi, n));
}

function fragsOf(slide) {
  return Array.from(slide.querySelectorAll('.frag'));
}

/* Sync aria-hidden on fragment elements */
function syncFragAria(slide, revealAll) {
  fragsOf(slide).forEach(f => {
    const visible = revealAll || f.classList.contains('visible');
    f.setAttribute('aria-hidden', visible ? 'false' : 'true');
  });
}

/* Announce slide change to screen readers */
function announce(text) {
  if (!announcer) return;
  announcer.textContent = '';
  requestAnimationFrame(() => { announcer.textContent = text; });
}

function show(i, revealAll) {
  const next = clamp(i, 0, slides.length - 1);
  slides[idx].classList.remove('active');
  idx = next;
  slides[idx].classList.add('active');
  fragsOf(slides[idx]).forEach(f => f.classList.toggle('visible', !!revealAll));
  syncFragAria(slides[idx], !!revealAll);

  if (counter) counter.textContent = `${idx + 1} / ${slides.length}`;
  if (sliderCounter) sliderCounter.textContent = `${idx + 1} / ${slides.length}`;

  // Update slider position
  if (scrubber) {
    scrubber.value = String(idx + 1);
  }

  // Update progress bar and thumb position
  const progress = ((idx + 1) / slides.length) * 100;
  if (sliderProgress) sliderProgress.style.width = `${progress}%`;
  if (sliderThumb) sliderThumb.style.left = `calc(${progress}% - 10px)`;

  history.replaceState(null, '', `#${idx + 1}`);
  const f = slides[idx].querySelector('.content');
  if (f && document.activeElement !== scrubber) {
    f.setAttribute('tabindex', '-1');
    f.focus({ preventScroll: true });
  }

  // Announce to screen readers
  const label = slides[idx].getAttribute('aria-label') || '';
  announce(`Slide ${idx + 1} of ${slides.length}: ${label}`);
}

function advance() {
  const frags = fragsOf(slides[idx]);
  const hidden = frags.filter(f => !f.classList.contains('visible'));
  if (hidden.length) {
    hidden[0].classList.add('visible');
    hidden[0].setAttribute('aria-hidden', 'false');
  } else if (idx < slides.length - 1) {
    show(idx + 1);
  }
}

function retreat() {
  const frags = fragsOf(slides[idx]);
  const shown = frags.filter(f => f.classList.contains('visible'));
  if (shown.length) {
    shown[shown.length - 1].classList.remove('visible');
    shown[shown.length - 1].setAttribute('aria-hidden', 'true');
  } else if (idx > 0) {
    show(idx - 1, true);
  }
}

/* ── Overview mode ── */
function toggleOverview() {
  const on = document.body.classList.toggle('overview');
  if (on) {
    slides[idx].scrollIntoView({ block: 'center', behavior: 'instant' });
  }
}

// Initialize slides
slides.forEach((s, i) => {
  s.setAttribute('data-slide-num', i + 1);
  s.addEventListener('click', () => {
    if (!document.body.classList.contains('overview')) return;
    document.body.classList.remove('overview');
    show(i, true);
  });
});

// Keyboard navigation
document.addEventListener('keydown', e => {
  const tag = document.activeElement.tagName;
  if (['INPUT','TEXTAREA','SELECT'].includes(tag)) return;
  // Don't intercept Space on interactive elements (buttons, links)
  if (e.key === ' ' && ['A','BUTTON'].includes(tag)) return;
  if (e.key === 'Escape') {
    e.preventDefault();
    toggleOverview();
    return;
  }
  if (e.key === 'f' || e.key === 'F') {
    e.preventDefault();
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen().catch(() => {});
    }
    return;
  }
  if (document.body.classList.contains('overview')) return;
  if (['ArrowRight','PageDown',' '].includes(e.key)) {
    e.preventDefault();
    advance();
  }
  if (['ArrowLeft','PageUp'].includes(e.key)) {
    e.preventDefault();
    retreat();
  }
  if (e.key === 'Home') {
    e.preventDefault();
    show(0);
  }
  if (e.key === 'End') {
    e.preventDefault();
    show(slides.length - 1, true);
  }
});

// Arrow buttons
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
if (btnPrev) btnPrev.addEventListener('click', retreat);
if (btnNext) btnNext.addEventListener('click', advance);

// Slider navigation
if (scrubber) {
  scrubber.min = 1;
  scrubber.max = slides.length;
  scrubber.step = 1;

  // Real-time feedback AND slide change during drag
  scrubber.addEventListener('input', (e) => {
    const targetSlide = parseInt(e.target.value) - 1;
    // Actually change the slide immediately during drag
    show(targetSlide, true);
  });
}

// Touch swipe navigation
let tx = 0, ty = 0, swipeOk = false;

document.addEventListener('touchstart', e => {
  if (e.touches.length !== 1) {
    swipeOk = false;
    return;
  }
  if (e.target.closest('.stage')) {
    swipeOk = false;
    return;
  }
  // Don't interfere with slider touch
  if (e.target === scrubber || e.target.closest('.sticky-footer')) {
    swipeOk = false;
    return;
  }
  tx = e.touches[0].clientX;
  ty = e.touches[0].clientY;
  swipeOk = true;
}, { passive: true });

document.addEventListener('touchmove', e => {
  if (!swipeOk || e.touches.length !== 1) return;
  if (Math.abs(e.touches[0].clientY - ty) > Math.abs(e.touches[0].clientX - tx) * 1.5) {
    swipeOk = false;
  }
}, { passive: true });

document.addEventListener('touchend', e => {
  if (!swipeOk) return;
  const dx = e.changedTouches[0].clientX - tx;
  const dy = e.changedTouches[0].clientY - ty;
  if (Math.abs(dx) >= 48 && Math.abs(dx) >= Math.abs(dy) * 1.2) {
    dx < 0 ? advance() : retreat();
  }
  swipeOk = false;
}, { passive: true });

// Hash navigation
window.addEventListener('hashchange', () => {
  const m = location.hash.match(/^#(\d+)$/);
  if (m) show(parseInt(m[1], 10) - 1, true);
});

// Initialize — set aria-hidden on all non-active slide fragments
slides.forEach((s, i) => {
  if (i !== 0) {
    fragsOf(s).forEach(f => f.setAttribute('aria-hidden', 'true'));
  }
});

// Copy buttons: one per line of every code block. Trailing "# comment"
// labels (e.g. "# macOS") stay visible but are left out of the copy,
// since zsh doesn't treat # as a comment when pasted interactively.
const COPY_ICON = '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><rect x="5.5" y="5.5" width="8" height="8" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M10.5 3.5v-.5A1.5 1.5 0 0 0 9 1.5H4A1.5 1.5 0 0 0 2.5 3v5A1.5 1.5 0 0 0 4 9.5h.5" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>';
const CHECK_ICON = '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.setAttribute('readonly', '');
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  const ok = document.execCommand('copy');
  ta.remove();
  return ok ? Promise.resolve() : Promise.reject(new Error('copy failed'));
}

document.querySelectorAll('.code-block').forEach(block => {
  const lines = block.textContent.split('\n').filter(line => line.trim() !== '');
  block.textContent = '';
  lines.forEach(line => {
    const m = line.match(/^(.*?\S)(\s+#\s.*)$/);
    const command = m ? m[1] : line;
    const row = document.createElement('span');
    row.className = 'code-line';
    const text = document.createElement('span');
    text.className = 'code-text';
    text.textContent = command;
    if (m) {
      const note = document.createElement('span');
      note.className = 'code-note';
      note.textContent = m[2];
      text.appendChild(note);
    }
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'copy-btn';
    btn.setAttribute('aria-label', `Copy: ${command}`);
    btn.title = 'Copy';
    btn.innerHTML = COPY_ICON;
    btn.addEventListener('click', e => {
      e.stopPropagation();
      // Mouse clicks shouldn't leave focus here, or Space stops advancing slides
      if (e.detail > 0) btn.blur();
      copyText(command).then(() => {
        btn.classList.add('copied');
        btn.innerHTML = CHECK_ICON;
        btn.setAttribute('aria-label', 'Copied');
        clearTimeout(btn._reset);
        btn._reset = setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = COPY_ICON;
          btn.setAttribute('aria-label', `Copy: ${command}`);
        }, 1500);
      }).catch(() => {});
    });
    row.append(text, btn);
    block.appendChild(row);
  });
});

const m = location.hash.match(/^#(\d+)$/);
show(m ? clamp(parseInt(m[1], 10) - 1, 0, slides.length - 1) : 0, true);
