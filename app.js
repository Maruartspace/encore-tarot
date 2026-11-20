(() => {
"use strict";

/* ================= DATA ================= */
// img: file next to index.html. Cards without img are not generated yet:
// they show the back in the deck and are not dealt in readings.
const CARDS = [
 {n:"0",   img:"00-fool.webp",
  es:["El Loco","Salta del escenario sin red. Empieza algo nuevo: confía en el primer acorde."],
  en:["The Fool","Jump off the stage without a net. Something new begins: trust the first chord."],
  ca:["El Boig","Salta de l'escenari sense xarxa. Comença una cosa nova: confia en el primer acord."]},
 {n:"I",   img:"01-magician.webp",
  es:["El Mago","Tienes todo el equipo enchufado. Ahora toca hacer que suene."],
  en:["The Magician","All your gear is plugged in. Now make it sound."],
  ca:["El Mag","Tens tot l'equip endollat. Ara toca fer que soni."]},
 {n:"II",  img:"02-high-priestess.webp",
  es:["La Sacerdotisa","Baja el volumen y escucha. La respuesta ya suena por dentro."],
  en:["The High Priestess","Turn the volume down and listen. The answer is already playing inside."],
  ca:["La Papessa","Abaixa el volum i escolta. La resposta ja sona per dins."]},
 {n:"III", img:"03-empress.webp",
  es:["La Emperatriz","Abundancia en marcha. Lo que cuidas crece y llena la sala."],
  en:["The Empress","Abundance in motion. What you nurture grows and fills the room."],
  ca:["L'Emperadriu","Abundància en marxa. El que cuides creix i omple la sala."]},
 {n:"IV",  img:"04-emperor.webp",
  es:["El Emperador","Tú pones las reglas del show. Estructura, firmeza, mando."],
  en:["The Emperor","You set the rules of the show. Structure, firmness, command."],
  ca:["L'Emperador","Tu poses les regles del xou. Estructura, fermesa, comandament."]},
 {n:"V",   img:"05-hierophant.webp",
  es:["El Hierofante","Un maestro, una tradición, un oficio. Aprende de quien ya tocó en grandes estadios."],
  en:["The Hierophant","A mentor, a tradition, a craft. Learn from those who played the big arenas."],
  ca:["El Papa","Un mestre, una tradició, un ofici. Aprèn de qui ja va tocar als grans estadis."]},
 {n:"VI",  img:"06-lovers.webp",
  es:["Los Enamorados","Un dúo, una elección. Elige con el corazón y sostenlo."],
  en:["The Lovers","A duet, a choice. Choose with your heart and stand by it."],
  ca:["Els Enamorats","Un duet, una elecció. Tria amb el cor i mantén-la."]},
 {n:"VII", img:"07-chariot.webp",
  es:["El Carro","Gira a toda velocidad. Tu voluntad lleva el volante."],
  en:["The Chariot","Full-speed tour. Your will is at the wheel."],
  ca:["El Carro","Gira a tota velocitat. La teva voluntat porta el volant."]},
 {n:"VIII",img:"08-strength.webp",
  es:["La Fuerza","Calma frente al rugido. La fuerza real no necesita gritar."],
  en:["Strength","Calm before the roar. Real strength doesn't need to scream."],
  ca:["La Força","Calma davant el rugit. La força real no necessita cridar."]},
 {n:"IX",  img:"09-hermit.webp",
  es:["El Ermitaño","Después del show, silencio. Tu propia linterna basta."],
  en:["The Hermit","After the show, silence. Your own lantern is enough."],
  ca:["L'Ermità","Després del xou, silenci. La teva pròpia llanterna n'hi ha prou."]},
 {n:"X",   img:"10-wheel.webp",
  es:["La Rueda de la Fortuna","El disco gira. Lo que estaba abajo sube: atento al cambio."],
  en:["Wheel of Fortune","The record spins. What was down comes up: watch for the change."],
  ca:["La Roda de la Fortuna","El disc gira. El que era a baix puja: atent al canvi."]},
 {n:"XI",  img:"11-justice.webp",
  es:["La Justicia","Afinación perfecta. Cada acto tiene su eco."],
  en:["Justice","Perfectly in tune. Every act has its echo."],
  ca:["La Justícia","Afinació perfecta. Cada acte té el seu eco."]},
 {n:"XII", img:"12-hanged-man.webp",
  es:["El Colgado","Pausa entre canciones. Mira el mundo al revés y verás algo nuevo."],
  en:["The Hanged Man","A pause between songs. See the world upside down and find something new."],
  ca:["El Penjat","Pausa entre cançons. Mira el món del revés i hi veuràs una cosa nova."]},
 {n:"XIII",img:"13-death.webp",
  es:["La Muerte","Último bis. Una gira termina para que empiece otra."],
  en:["Death","The final encore. One tour ends so another can begin."],
  ca:["La Mort","L'últim bis. Una gira s'acaba perquè en comenci una altra."]},
 {n:"XIV", img:"14-temperance.webp",
  es:["La Templanza","Mezcla justa. Ni todo distorsión ni todo silencio."],
  en:["Temperance","The right mix. Not all distortion, not all silence."],
  ca:["La Temprança","La mescla justa. Ni tot distorsió ni tot silenci."]},
 {n:"XV",  img:"15-devil.webp",
  es:["El Diablo","El contrato dorado tienta. Las cadenas se quitan cuando quieras."],
  en:["The Devil","The golden contract tempts. The chains come off whenever you want."],
  ca:["El Diable","El contracte daurat tempta. Les cadenes es treuen quan vulguis."]},
 {n:"XVI", img:"16-tower.webp",
  es:["La Torre","El escenario se derrumba. Lo falso cae; lo tuyo queda."],
  en:["The Tower","The stage collapses. What's fake falls; what's yours remains."],
  ca:["La Torre","L'escenari s'esfondra. El que és fals cau; el que és teu queda."]},
 {n:"XVII",img:"17-star.webp",
  es:["La Estrella","Después de la tormenta, tu luz vuelve al escenario."],
  en:["The Star","After the storm, your light is back on stage."],
  ca:["L'Estel","Després de la tempesta, la teva llum torna a l'escenari."]},
 {n:"XVIII",img:"18-moon.webp",
  es:["La Luna","Niebla de humo y luces confusas. No todo es lo que parece."],
  en:["The Moon","Smoke and blurred lights. Not everything is what it seems."],
  ca:["La Lluna","Boira de fum i llums confuses. No tot és el que sembla."]},
 {n:"XIX", img:"19-sun.webp",
  es:["El Sol","Concierto al aire libre a pleno sol. Alegría sin filtro."],
  en:["The Sun","Open-air show in full sun. Unfiltered joy."],
  ca:["El Sol","Concert a l'aire lliure en ple sol. Alegria sense filtre."]},
 {n:"XX",  img:"20-judgement.webp",
  es:["El Juicio","Suena la llamada. Es hora de volver a subir."],
  en:["Judgement","The call sounds. Time to step back on stage."],
  ca:["El Judici","Sona la crida. És hora de tornar a pujar."]},
 {n:"XXI", img:"21-world.webp",
  es:["El Mundo","Gira mundial completada. Un ciclo cerrado, celébralo."],
  en:["The World","World tour complete. A cycle closed: celebrate it."],
  ca:["El Món","Gira mundial completada. Un cicle tancat: celebra-ho."]}
];

const UI = {
 es:{hold:"Mantén pulsado para encender",holdAria:"Encender el mechero",title:"Tres cartas. Un escenario.",pick:"Toca una carta para sacarla",
     pick2:"Saca la segunda",pick3:"Y la tercera",done:"Tu lectura está servida",
     past:"Pasado",present:"Presente",future:"Futuro",again:"↺ Nueva tirada",swipe:"Desliza el dedo por el abanico y suelta en tu carta",draw:"Sacar",todayKicker:"Carta del día",
     todayNote:"La misma para todos hoy. Mañana sale otra.",deckKicker:"La baraja · 22 arcanos",soon:"Próximamente",
     disclaimer:"Lecturas para entretenimiento y reflexión. No predicen el futuro ni sustituyen el consejo de ningún profesional.",
     legal:"Aviso legal y privacidad",close:"Cerrar",
     legalHtml:`<h3>Aviso legal</h3><p>Titular: [NOMBRE] · NIF: [NIF] · [DIRECCIÓN] · [EMAIL]</p><p>Proyecto artístico de demostración. No se venden productos ni servicios.</p><h3>Privacidad</h3><p>Este sitio no recoge datos personales, no usa formularios, no instala cookies ni guarda nada en tu navegador. No hay analítica ni servicios de terceros.</p><p>Las ilustraciones son originales del proyecto. Las lecturas son para entretenimiento y reflexión.</p>`},
 en:{hold:"Press and hold to light",holdAria:"Strike the lighter",title:"Three cards. One stage.",pick:"Tap a card to draw it",
     pick2:"Draw the second",pick3:"And the third",done:"Your reading is served",
     past:"Past",present:"Present",future:"Future",again:"↺ New reading",swipe:"Slide your finger across the fan and release on your card",draw:"Draw",todayKicker:"Card of the day",
     todayNote:"The same for everyone today. Tomorrow brings another.",deckKicker:"The deck · 22 arcana",soon:"Coming soon",
     disclaimer:"Readings for entertainment and reflection. They don't predict the future or replace advice from any professional.",
     legal:"Legal notice & privacy",close:"Close",
     legalHtml:`<h3>Legal notice</h3><p>Owner: [NAME] · Tax ID: [NIF] · [ADDRESS] · [EMAIL]</p><p>Artistic demo project. No products or services are sold.</p><h3>Privacy</h3><p>This site collects no personal data, has no forms, sets no cookies and stores nothing in your browser. No analytics, no third-party services.</p><p>Illustrations are original to the project. Readings are for entertainment and reflection.</p>`},
 ca:{hold:"Mantén premut per encendre",holdAria:"Encendre l'encenedor",title:"Tres cartes. Un escenari.",pick:"Toca una carta per treure-la",
     pick2:"Treu la segona",pick3:"I la tercera",done:"La teva lectura està servida",
     past:"Passat",present:"Present",future:"Futur",again:"↺ Nova tirada",swipe:"Llisca el dit pel ventall i deixa anar a la teva carta",draw:"Treure",todayKicker:"Carta del dia",
     todayNote:"La mateixa per a tothom avui. Demà en surt una altra.",deckKicker:"La baralla · 22 arcans",soon:"Properament",
     disclaimer:"Lectures per a entreteniment i reflexió. No prediuen el futur ni substitueixen el consell de cap professional.",
     legal:"Avís legal i privacitat",close:"Tancar",
     legalHtml:`<h3>Avís legal</h3><p>Titular: [NOM] · NIF: [NIF] · [ADREÇA] · [CORREU]</p><p>Projecte artístic de demostració. No es venen productes ni serveis.</p><h3>Privacitat</h3><p>Aquest lloc no recull dades personals, no fa servir formularis, no instal·la galetes ni desa res al teu navegador. Sense analítica ni serveis de tercers.</p><p>Les il·lustracions són originals del projecte. Les lectures són per a entreteniment i reflexió.</p>`}
};

/* ================= LANGUAGE ================= */
// language follows the browser: Catalan -> CA, English -> EN, everything else -> ES (main)
const nav = (navigator.language || "es").toLowerCase();
let lang = nav.startsWith("ca") ? "ca" : nav.startsWith("en") ? "en" : "es";
const t = k => UI[lang][k];

function applyLang(){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = t(el.dataset.i18n));
  // title: each sentence on its own line ("Tres cartas." / "Un escenario.")
  const ttl = document.querySelector(".title");
  ttl.innerHTML = t("title").split(/(?<=\.)\s+/).map(x => `<span>${x}</span>`).join("");
  document.querySelectorAll("[data-i18n-aria]").forEach(el => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
  document.querySelectorAll(".langs button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  document.getElementById("legalBody").innerHTML = t("legalHtml");
  updatePrompt(); renderSlotTexts(); renderVerdict(); renderToday(); renderGrid();
}
document.querySelectorAll(".langs button").forEach(b => b.addEventListener("click", () => { lang = b.dataset.lang; applyLang(); }));

/* ================= CARD BACK ================= */
const backEl = () => { const d = document.createElement("div"); d.className = "back";  return d; };


/* ================= FAN + READING =================
   22 card backs open into a fan. Desktop: the card under the cursor rises, click = draw.
   Phone: slide a finger across the fan, the card under it rises; lift the finger = draw it (a tap works too). */
const fan = document.getElementById("fan");
const counter = document.getElementById("count");
const slots = [...document.querySelectorAll(".slot")];
const again = document.getElementById("again");
const readingSec = document.getElementById("reading");
let reading = [], pool = [], busy = false, hot = null;

function shuffle(a){ for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]];} return a; }

function layoutFan(spread){
  const cards = [...fan.children], n = cards.length;
  const span = Math.min(118, 70 + innerWidth / 20);           // degrees
  cards.forEach((c, i) => {
    const k = n > 1 ? i / (n - 1) - .5 : 0;
    c.style.setProperty("--r", (spread ? k * span : (Math.random()-.5)*4) + "deg");
  });
}

function buildFan(){
  fan.innerHTML = "";
  for (let i = 0; i < 22; i++){
    const b = document.createElement("button");
    b.className = "fcard"; b.style.zIndex = i; b.setAttribute("aria-label", t("draw") + " " + (i+1));
    b.appendChild(backEl());
    const tag = document.createElement("span"); tag.className = "fcard__tag"; tag.textContent = t("draw"); b.querySelector(".back").appendChild(tag);
    b.addEventListener("click", () => pick(b));
    b.addEventListener("pointerenter", e => { if (e.pointerType !== "touch") setHot(b); });
    b.addEventListener("pointerleave", e => { if (e.pointerType !== "touch" && hot === b) setHot(null); });
    fan.appendChild(b);
  }
  layoutFan(false);
  requestAnimationFrame(() => setTimeout(() => layoutFan(true), 60));
}
addEventListener("resize", () => layoutFan(true));

function setHot(b){
  if (hot === b) return;
  hot && hot.classList.remove("hot");
  hot = b && !b.classList.contains("taken") ? b : null;
  hot && hot.classList.add("hot");
}
// phone: finger slides across the fan, the card under it lights up; release = draw
const cardAt = (x, y) => { const el = document.elementFromPoint(x, y); return el && el.closest ? el.closest(".fcard:not(.taken)") : null; };
fan.addEventListener("touchstart", e => { const p = e.touches[0]; setHot(cardAt(p.clientX, p.clientY)); }, {passive:true});
fan.addEventListener("touchmove", e => {
  const p = e.touches[0]; e.preventDefault();
  const c = cardAt(p.clientX, p.clientY); if (c !== hot){ setHot(c); if (c && navigator.vibrate) navigator.vibrate(4); }
}, {passive:false});
fan.addEventListener("touchend", e => { if (hot){ e.preventDefault(); const c = hot; setHot(null); pick(c); } }, {passive:false});

function updatePrompt(){
  document.getElementById("prompt").textContent =
    reading.length === 0 ? t("pick") : reading.length === 1 ? t("pick2") : reading.length === 2 ? t("pick3") : t("done");
  counter.textContent = reading.length < 3 ? `${reading.length} / 3` : "";
  document.getElementById("swipe").textContent = t("swipe");
  fan.querySelectorAll(".fcard__tag").forEach(el => el.textContent = t("draw"));
}

function pick(btn){
  if (busy || reading.length >= 3 || btn.classList.contains("taken")) return;
  const idx = pool.shift(); if (idx === undefined) return;
  busy = true;
  const pos = reading.length; reading.push(idx);
  const frame = slots[pos].querySelector(".slot__frame");
  const from = btn.querySelector(".back").getBoundingClientRect();
  btn.classList.remove("hot");
  const to = frame.getBoundingClientRect();
  const fly = document.createElement("div");
  fly.className = "flyer"; fly.appendChild(backEl());
  Object.assign(fly.style, {left: from.left+"px", top: from.top+"px", width: from.width+"px", height: from.height+"px"});
  document.body.appendChild(fly);
  btn.classList.add("taken");
  if (navigator.vibrate) navigator.vibrate(12);
  requestAnimationFrame(() => {
    fly.style.transform = `translate(${to.left-from.left}px,${to.top-from.top}px) scale(${to.width/from.width})`;
  });
  setTimeout(() => {
    fly.remove();
    const c = CARDS[idx];
    const flip = document.createElement("button"); flip.className = "flip";
    flip.innerHTML = `<div class="flip__in"></div>`;
    const inner = flip.firstChild; inner.appendChild(backEl());
    const face = document.createElement("div"); face.className = "face";
    face.innerHTML = `<img src="${c.img}" alt="">`; inner.appendChild(face);
    flip.addEventListener("click", () => openZoom(c));
    frame.appendChild(flip);
    glareEls.push(face);
    requestAnimationFrame(() => setTimeout(() => flip.classList.add("open"), 30));
    slots[pos].classList.add("done");
    renderSlotTexts(); updatePrompt();
    busy = false;
    if (reading.length === 3){
      readingSec.classList.add("complete"); again.hidden = false;
      try { history.pushState({encore:"done"}, ""); } catch (_) {}   // phone "back" returns to the fan
      renderVerdict(); setTimeout(() => verdict.classList.add("show"), 1100);
      setTimeout(() => document.getElementById("slots").scrollIntoView({behavior:"smooth", block:"start"}), 900);
    }
  }, 700);
}

function renderSlotTexts(){
  slots.forEach((s, i) => {
    const el = s.querySelector(".slot__text"), idx = reading[i];
    if (idx === undefined){ el.innerHTML = ""; return; }
    const [name, txt] = CARDS[idx][lang];
    el.innerHTML = `<strong>${CARDS[idx].n} · ${name}</strong>${txt}`;
    const img = s.querySelector(".face img"); if (img) img.alt = name;
  });
}

const verdict = document.getElementById("verdict");
function renderVerdict(){
  if (reading.length < 3 || !window.ENCORE_READ){ verdict.innerHTML = ""; verdict.classList.remove("show"); return; }
  const nums = reading.map(i => CARDS.indexOf(CARDS[i]));
  verdict.innerHTML = ENCORE_READ.compose(nums, lang, reading.map(i => CARDS[i][lang][0]));
}

function resetReading(){
  reading = []; busy = false; again.hidden = true; readingSec.classList.remove("complete");
  glareEls = glareEls.filter(e => !e.closest(".slot"));
  slots.forEach(s => { s.classList.remove("done"); s.querySelector(".slot__frame").innerHTML = ""; });
  renderVerdict();
  pool = shuffle(CARDS.map((c,i)=>c.img ? i : -1).filter(i=>i>=0));
  buildFan(); renderSlotTexts(); updatePrompt();
}
function backToFan(){ resetReading(); readingSec.scrollIntoView({behavior:"smooth"}); }
again.addEventListener("click", () => { if (history.state && history.state.encore === "done") history.back(); else backToFan(); });
addEventListener("popstate", () => { if (readingSec.classList.contains("complete")) backToFan(); });

/* ================= CARD OF THE DAY ================= */
function todayIdx(){
  const avail = CARDS.map((c,i)=>c.img ? i : -1).filter(i=>i>=0);
  const d = new Date(), key = d.getFullYear()*372 + d.getMonth()*31 + d.getDate();
  let h = key; h = Math.imul(h ^ (h >>> 16), 2246822507); h ^= h >>> 13; h = Math.imul(h, 3266489909); h ^= h >>> 16;
  return avail[(h >>> 0) % avail.length];
}
function renderToday(){
  const i = todayIdx(), c = CARDS[i], box = document.getElementById("todayCard");
  box.innerHTML = `<img src="${c.img}" alt="${c[lang][0]}">`; box.onclick = () => openZoom(c);
  document.getElementById("todayName").textContent = `${c.n} · ${c[lang][0]}`;
  document.getElementById("todayMeaning").textContent = c[lang][1];
}

/* ================= DECK GRID ================= */
function renderGrid(){
  const g = document.getElementById("grid"); g.innerHTML = "";
  CARDS.forEach(c => {
    const f = document.createElement("figure"); f.className = "gcard" + (c.img ? "" : " soon");
    if (c.img){ f.innerHTML = `<img src="${c.img}" alt="${c[lang][0]}" loading="lazy">`; f.tabIndex = 0; f.onclick = () => openZoom(c); }
    else f.appendChild(backEl());
    const cap = document.createElement("figcaption");
    cap.innerHTML = `<b>${c.n}</b>${c.img ? c[lang][0] : t("soon")}`;
    f.appendChild(cap); g.appendChild(f);
  });
}

/* ================= ZOOM / LEGAL ================= */
const zoom = document.getElementById("zoom");
function openZoom(c){
  const im = document.getElementById("zoomImg"); im.src = c.img; im.alt = c[lang][0];
  document.getElementById("zoomCap").innerHTML = `<strong>${c.n} · ${c[lang][0]}</strong>${c[lang][1]}`;
  zoom.hidden = false;
}
zoom.addEventListener("click", () => zoom.hidden = true);
document.addEventListener("keydown", e => { if (e.key === "Escape") zoom.hidden = true; });
document.getElementById("legalBtn").addEventListener("click", () => document.getElementById("legal").showModal());

/* ================= FLAME + LIGHT (lightweight) =================
   Darkness = one big gradient layer moved with transform (no repaint).
   Flame = a small canvas that travels with the finger/cursor. */
const body = document.body;
const glow = document.getElementById("glow");
const cvs = document.getElementById("flame"), ctx = cvs.getContext("2d");
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const FW = 140, FH = 200, OX = 70, OY = 168;         // flame canvas size + where the wick is
const dpr = Math.min(1.5, window.devicePixelRatio || 1);
cvs.width = FW*dpr; cvs.height = FH*dpr; ctx.scale(dpr, dpr);
let glareEls = [];
let W = innerWidth, H = innerHeight;
let tx = W/2, ty = H*.62, fx = tx, fy = ty;
let lit = false, parts = [];

// one pre-rendered soft dot, reused for every particle
const sprite = document.createElement("canvas"); sprite.width = sprite.height = 64;
{ const g = sprite.getContext("2d"), r = g.createRadialGradient(32,32,0,32,32,32);
  r.addColorStop(0,"rgba(255,235,180,1)"); r.addColorStop(.35,"rgba(255,150,40,.55)"); r.addColorStop(1,"rgba(255,80,0,0)");
  g.fillStyle = r; g.fillRect(0,0,64,64); }

function sizeGlow(){
  W = innerWidth; H = innerHeight;
  const R = Math.max(220, Math.min(W, H) * (W < 700 ? .55 : .42));
  glow.style.background = `radial-gradient(circle at 50% 50%, rgba(5,4,3,0) 0, rgba(5,4,3,.12) ${R*.35}px, rgba(5,4,3,.74) ${R*.85}px, rgba(5,4,3,.88) ${R*1.25}px)`;
}
sizeGlow(); addEventListener("resize", sizeGlow);

addEventListener("pointermove", e => { if (e.pointerType !== "touch"){ tx = e.clientX; ty = e.clientY; if (lit) body.classList.add("flamecursor"); } }, {passive:true});
const onTouch = e => { const p = e.touches[0]; if (p){ tx = p.clientX; ty = p.clientY - 70; } };
addEventListener("touchstart", onTouch, {passive:true});
addEventListener("touchmove", onTouch, {passive:true});

function frame(time){
  fx += (tx - fx) * .25; fy += (ty - fy) * .25;
  const flick = reduce ? 1 : 1 + Math.sin(time/90)*.025 + Math.sin(time/37)*.02 + (Math.random()-.5)*.02;
  glow.style.transform = `translate3d(${fx}px,${fy - 20}px,0) scale(${flick})`;
  cvs.style.transform = `translate3d(${fx - OX}px,${fy - OY}px,0)`;

  ctx.clearRect(0,0,FW,FH);
  ctx.globalCompositeOperation = "lighter";
  if (!lit){
    ctx.globalAlpha = .9; ctx.drawImage(sprite, OX-12, OY-12, 24, 24);       // ember before lighting
  } else {
    if (!reduce || parts.length < 6) for (let k = 0; k < 2; k++)
      parts.push({x:OX+(Math.random()-.5)*5, y:OY, vx:(Math.random()-.5)*.35, vy:-(1+Math.random()*1.3), life:1, r:16+Math.random()*12});
    for (let i = parts.length-1; i >= 0; i--){
      const p = parts[i]; p.x += p.vx + (OX - p.x)*.04; p.y += p.vy; p.life -= .04; p.r *= .965;
      if (p.life <= 0 || p.y < 0){ parts.splice(i,1); continue; }
      ctx.globalAlpha = p.life * .8; ctx.drawImage(sprite, p.x - p.r/2, p.y - p.r/2, p.r, p.r);
    }
    ctx.globalAlpha = .55 * flick; ctx.drawImage(sprite, OX-40, OY-52, 80, 80);   // halo
  }
  ctx.globalAlpha = 1; ctx.globalCompositeOperation = "source-over";

  // the flame's glare moves across the cards that are face up
  for (const el of glareEls){
    const r = el.getBoundingClientRect();
    if (r.bottom < 0 || r.top > H || !r.width) continue;
    el.style.setProperty("--gx", ((fx - r.left) / r.width * 100).toFixed(1) + "%");
    el.style.setProperty("--gy", ((fy - r.top) / r.height * 100).toFixed(1) + "%");
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

/* ================= INTRO: press and hold to strike ================= */
const intro = document.getElementById("intro"), strike = document.getElementById("strike");
let holdStart = 0, holdRaf = 0;
function holdTick(){
  const p = Math.min(1, (performance.now() - holdStart) / 750);
  strike.style.setProperty("--p", p);
  if (p >= 1){ light(); return; }
  holdRaf = requestAnimationFrame(holdTick);
}
function light(){
  if (lit) return;
  lit = true; if (navigator.vibrate) navigator.vibrate(20);
  body.classList.remove("unlit"); body.classList.add("lit");
  intro.classList.add("gone");
  setTimeout(() => intro.remove(), 1200);
  resetReading();
}
intro.addEventListener("pointerdown", e => { e.preventDefault(); tx = e.clientX; ty = e.clientY - (e.pointerType === "touch" ? 70 : 0); holdStart = performance.now(); strike.classList.add("holding"); holdTick(); });
["pointerup","pointercancel","pointerleave"].forEach(ev => intro.addEventListener(ev, () => {
  if (!lit){ cancelAnimationFrame(holdRaf); strike.style.setProperty("--p", 0); strike.classList.remove("holding"); }
}));
strike.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " "){ e.preventDefault(); light(); } });

body.classList.add("unlit");
applyLang();
glareEls.push(document.getElementById("todayCard"));

// no context menu / selection popup on long press
["strike","fan"].forEach(id => document.getElementById(id).addEventListener("contextmenu", e => e.preventDefault()));
})();
