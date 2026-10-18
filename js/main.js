/* Set your enquiry method here. Without an endpoint or email the form shows a clear setup message. */
const CONFIG = { endpoint: '', /* e.g. https://formspree.io/f/xxxxxxx */ email: 'aaarpitha18@gmail.com' };

const $ = (s, c = document) => c.querySelector(s);
const root = document.documentElement;

/* Theme: saved choice > system preference; follows system until the visitor chooses. */
const themeBtn = $('#theme'), mq = matchMedia('(prefers-color-scheme: light)');
const saved = () => { try { return localStorage.getItem('theme'); } catch (e) { return null; } };
function setTheme(t) {
  root.dataset.theme = t;
  themeBtn.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}
setTheme(root.dataset.theme);
themeBtn.addEventListener('click', () => {
  const t = root.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(t); try { localStorage.setItem('theme', t); } catch (e) {}
});
mq.addEventListener('change', e => { if (!saved()) setTheme(e.matches ? 'light' : 'dark'); });

/* Mobile menu */
const menu = $('#menu'), nav = $('#nav');
function toggleMenu(open) {
  nav.classList.toggle('open', open); menu.setAttribute('aria-expanded', open);
  menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}
menu.addEventListener('click', () => toggleMenu(!nav.classList.contains('open')));
nav.addEventListener('click', e => { if (e.target.closest('a')) toggleMenu(false); });
addEventListener('keydown', e => { if (e.key === 'Escape') toggleMenu(false); });

/* Active section */
const links = [...nav.querySelectorAll('a')];
const io = new IntersectionObserver(es => es.forEach(en => {
  if (!en.isIntersecting) return;
  links.forEach(a => a.toggleAttribute('aria-current', a.hash === '#' + en.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(s => io.observe(s));

/* Images: loads data-src if the file exists, otherwise keeps the placeholder. */
const lb = $('#lb');
document.querySelectorAll('.ph[data-src]').forEach(ph => {
  const img = new Image();
  img.onload = () => {
    img.alt = ph.dataset.alt || ''; ph.replaceChildren(img); ph.classList.add('loaded');
    if (ph.closest('.gal')) ph.closest('figure').addEventListener('click', () => { $('img', lb).src = img.src; $('img', lb).alt = img.alt; lb.showModal(); });
  };
  img.src = ph.dataset.src;
});
$('#lb-x').addEventListener('click', () => lb.close());
lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });

/* Footer */
$('#year').textContent = new Date().getFullYear();
if (CONFIG.email) { const f = $('#ftr-contact'); const a = document.createElement('a'); a.href = 'mailto:' + CONFIG.email; a.textContent = CONFIG.email; f.append(a); }

/* Enquiry form */
const form = $('#form'), status = $('#status');
const rules = {
  name: v => v.trim() ? '' : 'Enter your name.',
  email: v => /^\S+@\S+\.\S+$/.test(v) ? '' : 'Enter a valid email address, like name@example.com.',
  topic: v => v ? '' : 'Choose a training topic.',
  message: v => v.trim().length >= 10 ? '' : 'Write at least 10 characters about your training need.'
};
function check() {
  let ok = true;
  for (const k in rules) {
    const el = form.elements[k], msg = rules[k](el.value);
    $('#e-' + (k === 'message' ? 'msg' : k)).textContent = msg;
    el.setAttribute('aria-invalid', !!msg); if (msg && ok) { el.focus(); } ok = ok && !msg;
  }
  return ok;
}
form.addEventListener('submit', async e => {
  e.preventDefault(); status.textContent = '';
  if (!check()) return;
  const data = Object.fromEntries(new FormData(form));
  if (CONFIG.endpoint) {
    status.textContent = 'Sending...';
    try {
      const r = await fetch(CONFIG.endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
      if (!r.ok) throw new Error();
      form.reset(); status.textContent = 'Enquiry sent. I will reply soon.';
    } catch (err) { status.textContent = 'Sending failed. Please try again' + (CONFIG.email ? ' or email ' + CONFIG.email + '.' : '.'); }
  } else if (CONFIG.email) {
    const body = `Name: ${data.name}\nEmail: ${data.email}\nOrganisation: ${data.organisation}\nTopic: ${data.topic}\n\n${data.message}`;
    location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent('Training enquiry: ' + data.topic)}&body=${encodeURIComponent(body)}`;
    status.textContent = 'Your email app should open with the enquiry ready to send.';
  } else {
    status.textContent = 'Form not connected yet. Add an endpoint or email in js/main.js.';
  }
});
