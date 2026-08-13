const menu = document.getElementById('menuBtn'),
      drawer = document.getElementById('drawer'),
      backdrop = document.getElementById('backdrop');

function toggle(open) {
  drawer.classList.toggle('open', open);
  backdrop.classList.toggle('show', open);
  menu.setAttribute('aria-expanded', open);
}

menu.addEventListener('click', () => toggle(!drawer.classList.contains('open')));

document.getElementById('closeBtn').onclick = () => toggle(false);

backdrop.onclick = () => toggle(false);

document.querySelectorAll('.drawer a').forEach(a => {
  a.onclick = () => toggle(false);
});


/* =========================
   TESTIMONIAL / COMMUNITY
   ========================= */

const titles = [
  'Outlook & Technical Context',
  'Global Market & Fundamental',
  'Geopolitics & Monetary Context',
  'DXY Structure & Gold Context',
  'Multi-Timeframe Analysis',
  'Fundamental Update',
  'Trade Execution',
  'Geopolitical Market Update'
];

const grid = document.getElementById('testimonialGrid');

grid.innerHTML = titles.map((t, i) => `
  <article class="testimonial-card reveal">

    <div class="watermark">
      <img src="logo.jpg" alt="Syntax Opinion">
    </div>

    <img
      class="proof-img"
      src="testimonial-${String(i + 1).padStart(2, '0')}.jpg"
      alt="Dokumentasi komunitas ${i + 1}"
      loading="lazy"
    >

    <div class="card-meta">
      <span>${String(i + 1).padStart(2, '0')}</span>
      <b>${t}</b>
    </div>

  </article>
`).join('');


/* =========================
   SCROLL REVEAL ANIMATION
   ========================= */

const io = new IntersectionObserver(
  es => es.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  }),
  {
    threshold: 0.12,
    rootMargin: '0px 0px -35px'
  }
);

document.querySelectorAll('.reveal').forEach(x => io.observe(x));


/* =========================
   LIGHTBOX
   ========================= */

const lb = document.getElementById('lightbox'),
      li = document.getElementById('lightboxImg');

document.addEventListener('click', e => {

  if (e.target.classList.contains('proof-img')) {

    li.src = e.target.src;

    lb.classList.add('open');
  }

});

document.getElementById('lightboxClose').onclick = () => {
  lb.classList.remove('open');
};

lb.onclick = e => {

  if (e.target === lb) {
    lb.classList.remove('open');
  }

};

document.addEventListener('keydown', e => {

  if (e.key === 'Escape') {

    lb.classList.remove('open');

    toggle(false);

  }

});
