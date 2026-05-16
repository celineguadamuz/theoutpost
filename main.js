/* ─────────────────────────────────────────────────────────
   Out Loud — main.js
   ───────────────────────────────────────────────────────── */

/* ── Data ───────────────────────────────────────────────── */

const CAROUSEL_H        = 300;
const EVENTS_CAROUSEL_H = 180;

// Photos for the main carousel. Place all images in the img/ folder.
const PHOTOS = [
  'img/puta.jpg',
  'img/kiss.jpg',
  'img/adam.jpg',
  'img/lick.jpg',
  'img/collage.jpg',
  'img/dancing.jpg',
  'img/flash.jpg',
];

// Photos for the events page carousel.
const EVENTS_PHOTOS = [
  'img/kareoke.jpg',
  'img/poetry.jpg',
  'img/disco.jpg',
  'img/paint.jpg',
  'img/sip.jpg',
  'img/band.jpg',
  'img/gallery.jpg',
  'img/gallery2.jpg',
];

const EXHIBITIONS = [
  {
    id: 1,
    theme: 'Gender Expression',
    title: 'Bodies in Motion',
    date: 'Jan 2025',
    year: 2025,
    summary: 'An exploration of trans and non-binary embodiment through portraiture and movement studies — tracing the body not as a fixed destination but as ongoing becoming, refusing the grammar of before and after.',
  },
  {
    id: 2,
    theme: 'Political Repression',
    title: 'The Bars They Closed',
    date: 'Feb 2025',
    year: 2025,
    summary: 'A documentation of the vanishing landscape of lesbian bar culture through archival ephemera — matchbooks, photographs, and hand-lettered flyers from spaces that were raided, redeveloped, and deliberately erased.',
  },
  {
    id: 3,
    theme: 'Chosen Family',
    title: 'We Made a Table',
    date: 'Mar 2025',
    year: 2025,
    summary: 'A celebration of chosen family through vibrant abstraction and portraiture — the kitchens, living rooms, and doorsteps where queer community is built in the absence of the families we were born into.',
  },
  {
    id: 4,
    theme: 'Desire & Intimacy',
    title: 'Tender Frequencies',
    date: 'Apr 2025',
    year: 2025,
    summary: 'An immersive installation exploring queer desire and intimacy across distance — the phone calls, letters, and silences that carry longing when touch is not possible or permitted.',
  },
  {
    id: 5,
    theme: 'Cultural Memory',
    title: 'Sequins & Survival',
    date: 'May 2025',
    year: 2025,
    summary: 'Forty years of local drag documented as living cultural preservation — foam, sequins, and wigs as objects of memory, resistance, and joy that outlast the bodies that wore them.',
  },
  {
    id: 6,
    theme: 'Legacy & Time',
    title: 'What We Pass Down',
    date: 'Jun 2025',
    year: 2025,
    summary: 'An intergenerational collaboration spanning six decades of queer life — artists aged 19 to 82 weaving together memory, loss, and inheritance through collage, textile, and oral history.',
  },
];

const THEME_ORDER = [
  'Gender Expression',
  'Political Repression',
  'Chosen Family',
  'Desire & Intimacy',
  'Cultural Memory',
  'Legacy & Time',
];

const EVENTS = [
  // June 2025
  {
    month: 'June 2025',
    type: 'Opening Reception',
    title: 'Opening Night — Pride Month',
    date: 'Jun 1',
    time: '6–9 pm',
    desc: 'Join us for the official opening of our Pride Month programming. Meet the artists, explore the exhibitions, and celebrate with the community. Wine and light refreshments provided.',
    donation: true,
  },
  {
    month: 'June 2025',
    type: 'Wine & Paint',
    title: 'Wine & Paint: Queer Still Life',
    date: 'Jun 7',
    time: '6–9 pm',
    desc: 'A guided painting session responding to works in our current exhibitions. All materials and wine included. No experience necessary — come exactly as you are.',
    donation: true,
  },
  {
    month: 'June 2025',
    type: 'Poetry Night',
    title: 'Open Mic Poetry Night',
    date: 'Jun 14',
    time: '7–10 pm',
    desc: 'An open mic for queer voices — poetry, spoken word, and prose. Sign up at the door to perform, or come to listen. All are welcome on and off the stage.',
    donation: true,
  },
  {
    month: 'June 2025',
    type: 'Silent Disco',
    title: 'Silent Disco Night',
    date: 'Jun 21',
    time: '8 pm–midnight',
    desc: 'Three DJs, three channels, one room. Headphones provided at the door. Dance through the galleries after hours in the silence only you can hear.',
    donation: true,
  },
  {
    month: 'June 2025',
    type: 'Karaoke Night',
    title: 'Queer Karaoke Night',
    date: 'Jun 28',
    time: '7–11 pm',
    desc: 'Karaoke in the gallery space, hosted by local drag performers. Sing your heart out surrounded by queer art. All genres, all skill levels, all welcome.',
    donation: true,
  },
  // July 2025
  {
    month: 'July 2025',
    type: 'Artist Talk',
    title: 'On Material Memory',
    date: 'Jul 12',
    time: '4 pm',
    desc: 'A conversation on textile as archive and the question of what lasts — with artists from the What We Pass Down exhibition.',
    donation: true,
  },
  {
    month: 'July 2025',
    type: 'Workshop',
    title: 'Community Photography Lab',
    date: 'Jul 19',
    time: '1–4 pm',
    desc: 'Open darkroom session and documentary photography workshop for LGBTQ+ community members. All skill levels welcome.',
    donation: true,
  },
  {
    month: 'July 2025',
    type: 'Wine & Paint',
    title: 'Wine & Paint: Self-Portrait',
    date: 'Jul 26',
    time: '6–9 pm',
    desc: 'A guided self-portrait session exploring identity and presentation. All materials and wine included. No experience necessary.',
    donation: true,
  },
];

const POSITIONS = [
  {
    id: 1,
    title: 'Archive & Collections Intern',
    dept: 'Museum Studies / Art History',
    type: 'Hybrid',
    hrs: '10 hrs/wk',
    desc: 'Support digitization and cataloging of our growing collection. Document incoming works, update the digital archive, and assist in condition reporting.',
    skills: ['Art History background', 'Attention to detail', 'Basic photography', 'Spreadsheet literacy'],
  },
  {
    id: 2,
    title: 'LGBTQ+ Programming Intern',
    dept: 'LGBTQ Studies / Cultural Studies',
    type: 'Hybrid',
    hrs: '12 hrs/wk',
    desc: 'Research and develop public programming. Write interpretive wall text and help design community events.',
    skills: ['Strong writing', 'Research skills', 'Community organising interest', 'LGBTQ+ Studies background'],
  },
  {
    id: 3,
    title: 'Graphic Design Intern',
    dept: 'Graphic Design / Visual Communications',
    type: 'Remote',
    hrs: '8 hrs/wk',
    desc: 'Create exhibition graphics, social media content, print materials, and digital assets. Translate each month\'s theme into a cohesive visual identity.',
    skills: ['Adobe Creative Suite', 'Typography skills', 'Portfolio required', 'Brand consistency experience'],
  },
  {
    id: 4,
    title: 'Marketing & Social Media Intern',
    dept: 'Marketing / Communications',
    type: 'Remote',
    hrs: '10 hrs/wk',
    desc: 'Manage our social media presence, write press releases, coordinate newsletters, and develop marketing strategies to grow our audience.',
    skills: ['Social media fluency', 'Writing & editing', 'Analytics interest', 'Photography a plus'],
  },
  {
    id: 5,
    title: 'Web & Digital Archive Intern',
    dept: 'Computer Science / Digital Humanities',
    type: 'Remote',
    hrs: '12 hrs/wk',
    desc: 'Help build and maintain our digital infrastructure and contribute to long-term digital preservation strategy.',
    skills: ['Web development basics', 'Database interest', 'UX/UI curiosity', 'Digital preservation awareness'],
  },
];

/* ── Carousel (home) ────────────────────────────────────── */

function buildCarousel() {
  const strip = document.getElementById('strip');
  if (!strip) return;

  // Duplicate photos for seamless loop via CSS translateX(-50%)
  [...PHOTOS, ...PHOTOS].forEach(src => {
    const img            = document.createElement('img');
    img.src              = src;
    img.style.height     = CAROUSEL_H + 'px';
    img.style.width      = 'auto';
    img.style.objectFit  = 'cover';
    img.style.flexShrink = '0';
    img.style.display    = 'block';
    strip.appendChild(img);
  });
}

/* ── Carousel (events page — smaller) ──────────────────── */

function buildEventsCarousel() {
  const strip = document.getElementById('events-strip');
  if (!strip) return;

  [...EVENTS_PHOTOS, ...EVENTS_PHOTOS].forEach(src => {
    const img            = document.createElement('img');
    img.src              = src;
    img.style.height     = EVENTS_CAROUSEL_H + 'px';
    img.style.width      = 'auto';
    img.style.objectFit  = 'cover';
    img.style.flexShrink = '0';
    img.style.display    = 'block';
    strip.appendChild(img);
  });
}

/* ── Home: this month's events ──────────────────────────── */

function buildMonthEvents() {
  const el = document.getElementById('month-events');
  if (!el) return;
  const june = EVENTS.filter(e => e.month === 'June 2025');

  june.forEach((ev, i) => {
    const row         = document.createElement('div');
    row.className     = 'event-row';
    if (i === june.length - 1) row.style.borderBottom = 'none';
    row.innerHTML     = `
      <div class="event-date">${ev.date.toUpperCase()}</div>
      <div class="event-title">${ev.title}</div>
      <div class="event-time">${ev.time}</div>
    `;
    el.appendChild(row);
  });

  const btn           = document.createElement('button');
  btn.textContent     = 'View all events →';
  btn.className       = 'link-pink';
  btn.style.marginTop = '1.4rem';
  btn.onclick         = () => go('events');
  el.appendChild(btn);
}

/* ── Archive ────────────────────────────────────────────── */

function buildArchive() {
  const el = document.getElementById('arch-content');
  if (!el) return;

  THEME_ORDER.forEach(theme => {
    const exhbs = EXHIBITIONS.filter(e => e.theme === theme);
    if (!exhbs.length) return;

    const years = [...new Set(exhbs.map(e => e.year))].sort((a, b) => b - a);
    const sec   = document.createElement('div');
    sec.className = 'arch-section';

    let html = `
      <div class="arch-theme-header">
        <div class="arch-theme-name">${theme}</div>
        <div class="arch-theme-count">${exhbs.length} exhibition${exhbs.length > 1 ? 's' : ''}</div>
      </div>
    `;

    years.forEach(yr => {
      html += `<div class="arch-year">${yr}</div>`;
      exhbs.filter(e => e.year === yr).forEach(ex => {
        html += `
          <div class="arch-row">
            <button class="arch-row-btn" onclick="toggleEx('ex${ex.id}')">
              <div class="arch-row-date">${ex.date.toUpperCase()}</div>
              <div class="arch-row-exh-title">${ex.title}</div>
              <div class="arch-row-toggle" id="arr-ex${ex.id}">+</div>
            </button>
            <div class="arch-detail" id="det-ex${ex.id}">
              <p>${ex.summary}</p>
            </div>
          </div>
        `;
      });
    });

    sec.innerHTML = html;
    el.appendChild(sec);
  });
}

function toggleEx(id) {
  const det = document.getElementById('det-' + id);
  const arr = document.getElementById('arr-' + id);
  if (!det) return;
  const open        = det.style.display === 'block';
  det.style.display = open ? 'none' : 'block';
  arr.textContent   = open ? '+' : '−';
}

/* ── Events page ────────────────────────────────────────── */

function buildEvents() {
  const el = document.getElementById('events-content');
  if (!el) return;
  const months = [...new Set(EVENTS.map(e => e.month))];

  months.forEach(month => {
    const evs = EVENTS.filter(e => e.month === month);
    const sec = document.createElement('div');
    sec.className = 'events-month';

    let html = `<div class="events-month-header">${month}</div>`;

    evs.forEach((ev, i, arr) => {
      const [mon, day] = ev.date.split(' ');
      html += `
        <div class="event-card${i === arr.length - 1 ? ' event-card--last' : ''}">
          <div class="event-card-date">
            <div class="event-day-num">${day}</div>
            <div class="event-day-mon">${mon.toUpperCase()}</div>
          </div>
          <div class="event-card-body">
            <div class="event-type">${ev.type.toUpperCase()}</div>
            <div class="event-name">${ev.title}</div>
            <div class="event-time-small">${ev.time}</div>
            <p class="event-desc">${ev.desc}</p>
            <div class="event-rsvp-info">RSVP by donation &nbsp;·&nbsp; $5 minimum &nbsp;·&nbsp; Limited capacity</div>
            <button class="rsvp-btn">RSVP →</button>
          </div>
        </div>
      `;
    });

    sec.innerHTML = html;
    el.appendChild(sec);
  });
}

/* ── Internships ────────────────────────────────────────── */

function buildInternships() {
  const el = document.getElementById('intern-content');
  if (!el) return;
  const list    = document.createElement('div');
  list.className = 'positions-list';

  POSITIONS.forEach(p => {
    const item     = document.createElement('div');
    item.className = 'position-item';
    item.innerHTML = `
      <button class="position-toggle" onclick="togglePos(${p.id})">
        <div>
          <div class="position-title">${p.title}</div>
          <div class="position-meta">${p.dept} · ${p.type} · ${p.hrs}</div>
        </div>
        <div class="position-arrow" id="pa-${p.id}">+</div>
      </button>
      <div class="position-detail" id="pd-${p.id}">
        <p class="position-desc">${p.desc}</p>
        <div class="skills-label">WE'RE LOOKING FOR</div>
        <ul class="skills-list">
          ${p.skills.map(s => `<li>${s}</li>`).join('')}
        </ul>
        <div id="pf-${p.id}">
          <div class="apply-label">APPLY</div>
          ${[
            ['fn',  'Full name',              'text'],
            ['em',  'Email',                  'email'],
            ['uni', 'University / college',   'text'],
            ['maj', 'Major / field of study', 'text'],
          ].map(([k, label, type]) => `
            <div class="form-group">
              <label class="form-label">${label.toUpperCase()}</label>
              <input type="${type}" id="if-${p.id}-${k}" />
            </div>
          `).join('')}
          <div class="form-group">
            <label class="form-label">WHY ARE YOU INTERESTED?</label>
            <textarea rows="3" id="if-${p.id}-stmt"></textarea>
          </div>
          <button class="submit-btn" onclick="submitPos(${p.id})">SUBMIT →</button>
        </div>
      </div>
    `;
    list.appendChild(item);
  });

  el.appendChild(list);
}

function togglePos(id) {
  const d    = document.getElementById('pd-' + id);
  const a    = document.getElementById('pa-' + id);
  const open = d.style.display === 'block';
  d.style.display = open ? 'none' : 'block';
  a.textContent   = open ? '+' : '−';
}

function submitPos(id) {
  const name  = document.getElementById('if-' + id + '-fn')?.value?.trim();
  const email = document.getElementById('if-' + id + '-em')?.value?.trim();
  if (!name || !email) return;
  document.getElementById('pf-' + id).innerHTML = `
    <div class="confirm-msg">
      Application received. We'll be in touch at
      <span class="confirm-email">${email}</span> within 2–3 weeks.
    </div>
  `;
}

/* ── Navigation ─────────────────────────────────────────── */

function go(id) {
  document.querySelectorAll('.page').forEach(pg => pg.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');

  document.querySelectorAll('.nav-link').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById('n-' + id);
  if (activeBtn) activeBtn.classList.add('active');

  window.scrollTo(0, 0);
}

/* ── Init ───────────────────────────────────────────────── */

buildCarousel();
buildEventsCarousel();
buildMonthEvents();
buildArchive();
buildEvents();
buildInternships();
