/* ── DATA ─────────────────────────────────────────────── */
const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

const STOPS = [
  { city: "Würzburg",              country: "Germany",        stn: "00", ll: [49.795,  9.929],   zoom: 13, dur: "Departure",   photo: null, text: "On April 23rd, I left my hometown, Würzburg, and jumped on a train heading straight to Paris." },
  { city: "Paris",                  country: "France",         stn: "01", ll: [48.8566, 2.3522],  zoom: 13, dur: "Three nights", photo: null, text: "Arriving in Paris at night was an amazing choice. The street lights and the restaurants full of people created a lovely atmosphere.\n\nIn Paris, I was able to see famous sights such as the Basilique du Sacré-Cœur de Montmartre, Notre-Dame de Paris, Tour Eiffel, and the Louvre. But what fascinated me the most was the ambience of the city itself. Don't get me wrong, but simply sitting in a café in Paris already made me feel like a Frenchman. The soft sound of an accordion, the beautiful language, and the smell of delicious baked goods created a unique atmosphere. The only thing that stressed me a little was the hurried pace of the people and the large number of tourists.\n\nThat changed when I met some locals — a group of three friends who invited me to spend the evening with them in their friend's garden, eating pizza and philosophising about the meaning of life. Later on, I met the landlord and landlady, an elderly couple who had lived in Germany during their childhood, where they also got to know each other, before later moving back to France. It was lovely to hear my French neighbours speak so warmly about the time they had spent in my home country." },
  { city: "Caen",                   country: "France",         stn: "02", ll: [49.1829,-0.3707],  zoom: 13, dur: "Two nights",  photo: null, text: "My new friends from Paris asked me, \"Why are you travelling to Caen? There's absolutely nothing there.\"\n\nWell, I gladly disagree with that. Yes, Caen is a small and quiet city, but I think that's exactly why I enjoyed my stay there so much. After spending three nights in the overstimulating metropolis of Paris, it felt like a retreat to experience the calmness of Caen. The marvellous old town, with the Château de Caen and the Église Saint-Pierre, made me not regret my trip to Caen at all." },
  { city: "Le Mont-Saint-Michel",   country: "France",         stn: "03", ll: [48.6361,-1.5115],  zoom: 14, dur: "Day trip",    photo: null, text: "From Caen I took the bus to finally get to see one of my long-awaited destinations: Le Mont-Saint-Michel. After walking a bunch of kilometers along the coast I slowly saw the castle building up at the horizon. Reaching the island, I first took some photos and then entered the small town. Walking through this delicate town staying on a 92 meter tall rocky island was just indescribable. Feeling the tiny breeze of the ocean's wind blowing into my face mixed with the first rays of the summer sun made me feel just in peace." },
  { city: "Rennes",                 country: "France",         stn: "04", ll: [48.1173,-1.6778],  zoom: 13, dur: null, photo: null, text: LOREM },
  { city: "Nantes",                 country: "France",         stn: "05", ll: [47.2184,-1.5536],  zoom: 13, dur: null, photo: null, text: LOREM },
  { city: "Bordeaux",               country: "France",         stn: "06", ll: [44.8378,-0.5792],  zoom: 13, dur: null, photo: null, text: LOREM },
  { city: "Biarritz",               country: "France",         stn: "07", ll: [43.4832,-1.5586],  zoom: 13, dur: null, photo: null, text: LOREM },
  { city: "Donostia-San Sebastián", country: "Spain",          stn: "08", ll: [43.3183,-1.9812],  zoom: 13, dur: null, photo: null, text: LOREM },
  { city: "Bilbao",                 country: "Spain",          stn: "09", ll: [43.263, -2.935],   zoom: 13, dur: null, photo: null, text: LOREM },
  { city: "Santander",              country: "Spain",          stn: "10", ll: [43.4623,-3.8099],  zoom: 13, dur: null, photo: null, text: LOREM },
  { city: "Oviedo",                 country: "Spain",          stn: "11", ll: [43.3614,-5.8593],  zoom: 13, dur: null, photo: null, text: LOREM },
  { city: "Gijón",                  country: "Spain",          stn: "12", ll: [43.5453,-5.6615],  zoom: 13, dur: null, photo: null, text: LOREM },
  { city: "A Coruña",               country: "Spain",          stn: "13", ll: [43.3623,-8.4115],  zoom: 13, dur: null, photo: null, text: LOREM },
  { city: "Santiago de Compostela", country: "Spain",          stn: "14", ll: [42.8782,-8.5448],  zoom: 13, dur: null, photo: null, text: LOREM },
  { city: "Ourense",                country: "Spain",          stn: "15", ll: [42.3364,-7.8641],  zoom: 13, dur: null, photo: null, text: LOREM },
  { city: "Vigo",                   country: "Spain",          stn: "16", ll: [42.2406,-8.7207],  zoom: 13, dur: null, photo: null, text: LOREM },
  { city: "Tui",                    country: "Spain",          stn: "17", ll: [42.0457,-8.6446],  zoom: 14, dur: null, photo: null, text: LOREM },
  { city: "Valença",                country: "Portugal",       stn: "18", ll: [42.0284,-8.6327],  zoom: 14, dur: null, photo: null, text: LOREM },
  { city: "Braga",                  country: "Portugal",       stn: "19", ll: [41.5454,-8.4265],  zoom: 13, dur: null, photo: null, text: LOREM },
  { city: "Porto",                  country: "Portugal",       stn: "20", ll: [41.1579,-8.6291],  zoom: 13, dur: null, photo: null, text: LOREM },
  { city: "Salamanca",              country: "Spain",          stn: "21", ll: [40.9701,-5.6635],  zoom: 13, dur: null, photo: null, text: LOREM },
  { city: "Madrid",                 country: "Spain",          stn: "22", ll: [40.4168,-3.7038],  zoom: 12, dur: null, photo: null, text: LOREM },
  { city: "Barcelona",              country: "Spain",          stn: "23", ll: [41.3851, 2.1734],  zoom: 13, dur: null, photo: null, text: LOREM },
  { city: "The Wildfire",           country: "Spain / France", stn: "24", ll: [43.3,    3.0],     zoom: 10, dur: "Day trip",    photo: null, text: "After crossing the border into France, we were supposed to take the highway from Perpignan to Montpellier. Upon arriving there, we were told that the highway was closed due to a wildfire. Therefore, we had to take an alternative route, which turned out to be a 12-hour detour through the middle of nowhere." },
  { city: "Lyon",                   country: "France",         stn: "25", ll: [45.748,  4.847],   zoom: 13, dur: "Day trip",    photo: null, text: "After 24 hours on the FlixBus, we finally reached Lyon. The drivers told us that the bus had to stop there and that we should go to the service centre to get another ticket for the ride to our final destination. As a result, I received another bus transfer from Lyon to Würzburg, for which I had to wait another six hours in Lyon. To make the best of the situation, I took a walk around the city and drank a fresh lemonade in a café." },
  { city: "Würzburg",               country: "Germany",        stn: "26", ll: [49.795,  9.929],   zoom: 13, dur: "Return",      photo: null, text: "The journey ends where it began. Back in Würzburg after 75 nights on the road — with a new language, new perspectives, and a map full of memories across 23 cities and over 6,000 kilometers of public transport." },
];

/* ── STATE ────────────────────────────────────────────── */
let active   = 0;
let map      = null;
let markers  = [];
let cardTabs = {};
let isProgrammaticScroll = false;
let activeMarkerEl = null; // reference to the pulsing DOM element

/* ── SCREENS ──────────────────────────────────────────── */
function startJourney() {
  document.getElementById('landing').classList.remove('active');
  document.getElementById('storymap').classList.add('active');
  if (!map) initMap();
  renderDots();
  renderCards();
  goTo(0, false);
}

function goHome() {
  document.getElementById('storymap').classList.remove('active');
  document.getElementById('landing').classList.add('active');
}

/* ── MAP INIT ─────────────────────────────────────────── */
function initMap() {
  map = L.map('map', {
    center: [46, 2], zoom: 5,
    zoomControl: false,
    scrollWheelZoom: true,
  });

  // CARTO Dark tiles – no API key needed
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  L.control.zoom({ position: 'bottomright' }).addTo(map);

  // Full route – faint dashed line shown from the start
  L.polyline(STOPS.map(s => s.ll), {
    color: '#007878', weight: 1.5, opacity: 0.2, dashArray: '4,6',
  }).addTo(map);

  // All markers visible from the start and clickable
  STOPS.forEach((stop, i) => {
    const m = L.marker(stop.ll, { icon: makeIcon('idle') })
      .addTo(map)
      .bindPopup(makePopupHTML(stop), { maxWidth: 220 });

    m.on('click', () => goTo(i, true));
    markers.push(m);
  });
}

/* ── ICON FACTORY ─────────────────────────────────────── */
// state: 'active' | 'visited' | 'idle'
function makeIcon(state) {
  const cfg = {
    active:  { size: 16, color: '#00a0a0', border: '2.5px solid #0d0d0d', shadow: '0 0 0 3px rgba(0,120,120,.2)' },
    visited: { size: 9,  color: '#007878', border: '1.5px solid #005555', shadow: 'none' },
    idle:    { size: 7,  color: '#2a2a2a', border: '1px solid #444',       shadow: 'none' },
  }[state];

  const pulse = state === 'active' ? ' marker-active-pulse' : '';

  return L.divIcon({
    className: '',
    html: `<div class="marker-dot${pulse}" style="
      width:${cfg.size}px; height:${cfg.size}px;
      border-radius:50%;
      background:${cfg.color};
      border:${cfg.border};
      box-shadow:${cfg.shadow};
      transition: all .4s;
    "></div>`,
    iconSize:   [cfg.size, cfg.size],
    iconAnchor: [cfg.size / 2, cfg.size / 2],
  });
}

/* ── POPUP HTML ───────────────────────────────────────── */
function makePopupHTML(stop) {
  return `<strong>${stop.city}</strong>
<span class="pop-sub">${stop.country}${stop.dur ? ' · ' + stop.dur : ''}</span>`;
}

/* ── MAP UPDATE ───────────────────────────────────────── */
function updateMap(idx, animate) {
  const stop = STOPS[idx];

  if (animate) {
    map.flyTo(stop.ll, stop.zoom, { duration: 1.2, easeLinearity: 0.3 });
  } else {
    map.setView(stop.ll, stop.zoom);
  }

  // Update all marker icons
  markers.forEach((m, i) => {
    const state = i === idx ? 'active' : i < idx ? 'visited' : 'idle';
    m.setIcon(makeIcon(state));
  });

  // Open popup after flight
  setTimeout(() => markers[idx] && markers[idx].openPopup(), animate ? 1100 : 100);

  // Visited route overlay (solid teal segment)
  if (map._visitedRoute) map.removeLayer(map._visitedRoute);
  if (idx > 0) {
    map._visitedRoute = L.polyline(STOPS.slice(0, idx + 1).map(s => s.ll), {
      color: '#00a0a0', weight: 2.5, opacity: 0.7, dashArray: '5,4',
    }).addTo(map);
  }
}

/* ── DOTS ─────────────────────────────────────────────── */
function renderDots() {
  const el = document.getElementById('dots');
  el.innerHTML = '';
  STOPS.forEach((_, i) => {
    const b = document.createElement('button');
    b.className = 'dot';
    b.style.cssText = [
      `width:${i === active ? '14px' : '5px'}`,
      `background:${i === active ? '#00a0a0' : i < active ? 'rgba(0,120,120,.5)' : '#2a2a2a'}`,
      `box-shadow:${i === active ? '0 0 6px #007878' : 'none'}`,
    ].join(';');
    b.onclick = () => goTo(i, true);
    el.appendChild(b);
  });
}

/* ── CARDS ────────────────────────────────────────────── */
const CAMERA_SVG = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00a0a0"
  stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" style="opacity:.3">
  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
  <circle cx="12" cy="13" r="4"/>
</svg>`;

function photoHTML(stop) {
  return stop.photo
    ? `<img src="${stop.photo}" alt="${stop.city}"/>`
    : `${CAMERA_SVG}<span class="photo-label">PHOTO · ${stop.city.toUpperCase()}</span>`;
}

function renderCards() {
  const scroll = document.getElementById('cardsScroll');
  scroll.innerHTML = '';
  STOPS.forEach((stop, i) => {
    const tab  = cardTabs[stop.stn] || 'text';
    const card = document.createElement('div');
    card.className = 'card' + (i === active ? ' active' : '');
    card.id = `card-${i}`;
    card.innerHTML = `
      <div class="card-header">
        <span class="card-stn">${stop.stn}</span>
        <span class="card-city">${stop.city}</span>
        ${stop.dur ? `<span class="card-dur">${stop.dur}</span>` : ''}
        <span class="card-country">${stop.country}</span>
      </div>
      <div class="card-divider"></div>
      <div class="tab-bar">
        <button class="tab-btn ${tab === 'text'  ? 'on' : ''}" onclick="selectAndTab(${i},'text')">✦ Story</button>
        <button class="tab-btn ${tab === 'photo' ? 'on' : ''}" onclick="selectAndTab(${i},'photo')">◎ Photo</button>
      </div>
      <div class="card-body" id="card-body-${i}">
        ${tab === 'text'
          ? `<p class="card-text">${stop.text}</p>`
          : `<div class="card-photo">${photoHTML(stop)}</div>`}
      </div>
      <div class="card-footer">
        <span>BACKPACKING_EU_2025</span>
        <span class="card-footer-right">${stop.stn} / 26</span>
      </div>`;
    // Clicking anywhere on the card selects it
    card.addEventListener('click', (e) => {
      // Don't double-fire if a tab button was clicked (selectAndTab handles it)
      if (e.target.closest('.tab-btn')) return;
      if (i !== active) goTo(i, true);
    });
    scroll.appendChild(card);
  });
}

function switchTab(i, tab) {
  cardTabs[STOPS[i].stn] = tab;
  document.getElementById(`card-body-${i}`).innerHTML =
    tab === 'text'
      ? `<p class="card-text">${STOPS[i].text}</p>`
      : `<div class="card-photo">${photoHTML(STOPS[i])}</div>`;
  document.querySelectorAll(`#card-${i} .tab-btn`).forEach((b, j) =>
    b.classList.toggle('on', j === (tab === 'text' ? 0 : 1)));
}

// Select station first (if not already active), then switch tab
function selectAndTab(i, tab) {
  if (i !== active) {
    goTo(i, true);
    // Small delay so goTo finishes rendering before tab switch
    setTimeout(() => switchTab(i, tab), 50);
  } else {
    switchTab(i, tab);
  }
}

/* ── NAVIGATION ───────────────────────────────────────── */
function goTo(idx, animate = true) {
  active = Math.max(0, Math.min(STOPS.length - 1, idx));
  const stop = STOPS[active];

  updateMap(active, animate);

  // Badge
  document.getElementById('mapBadge').innerHTML =
    `<span class="stn">${stop.stn}</span> · <strong>${stop.city}</strong> · <span style="opacity:.5;font-size:.58rem">${stop.country}</span>`;

  // Progress bar
  document.getElementById('progressBar').style.width =
    `${(active / (STOPS.length - 1)) * 100}%`;

  // Panel header
  document.getElementById('panelStation').textContent = `STATION ${stop.stn}`;
  document.getElementById('panelCount').textContent   = `${stop.stn} / 26`;

  // Nav buttons
  document.getElementById('btnPrev').disabled  = active === 0;
  document.getElementById('btnNext').disabled  = active === STOPS.length - 1;
  document.getElementById('btnStart').disabled = active === 0;
  document.getElementById('btnEnd').disabled   = active === STOPS.length - 1;

  // Dots
  renderDots();

  // Card highlight + programmatic scroll
  document.querySelectorAll('.card').forEach((c, i) =>
    c.classList.toggle('active', i === active));
  const activeCard = document.getElementById(`card-${active}`);
  if (activeCard) {
    isProgrammaticScroll = true;
    activeCard.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    // Keep flag set longer than flyTo duration (1200ms) + scroll settle time
    setTimeout(() => { isProgrammaticScroll = false; }, 1600);
  }
}

function navigate(dir) { goTo(active + dir, true); }
function goEnd()        { goTo(STOPS.length - 1, true); }

/* ── SCROLL SYNC ──────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const scroll = document.getElementById('cardsScroll');
  let t;
  scroll.addEventListener('scroll', () => {
    if (isProgrammaticScroll) return;
    clearTimeout(t);
    t = setTimeout(() => {
      // Only fire if user has actually stopped scrolling
      let closest = 0, closestDist = Infinity;
      const cRect  = scroll.getBoundingClientRect();
      const center = cRect.width / 2;
      document.querySelectorAll('.card').forEach((card, i) => {
        const r    = card.getBoundingClientRect();
        const dist = Math.abs((r.left - cRect.left + r.width / 2) - center);
        if (dist < closestDist) { closestDist = dist; closest = i; }
      });
      // Only navigate if meaningfully different and not already correct
      if (closest !== active) {
        isProgrammaticScroll = true;
        goTo(closest, true);
        setTimeout(() => { isProgrammaticScroll = false; }, 1600);
      }
    }, 200);
  });
});
