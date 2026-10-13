/* ARPITHA EDUCATOR — script.js. No dependencies. Edit CONFIG only. */
const CONFIG = {
  // Hero statistics (edit values/labels here)
  stats: [
    { value: "500+", label: "Learners Trained" },
    { value: "4+",   label: "Years of Experience" },
    { value: "5+",   label: "Internship Programs" },
    { value: "8",    label: "Professional Skill Areas" }
  ],
  // Contact details. Leave a field "" to hide it.
  contact: { email: "aaarpitha18@gmail.com", phone: "6363958020", whatsapp: "916363958020", linkedin: "" /* PASTE LINKEDIN URL */ },
  // Service images: drop files at these paths
  services: [
    ["DIGITAL MARKETING","Learn digital marketing fundamentals, online branding, campaign planning, and practical marketing tools.","assets/services/digital-marketing.jpg"],
    ["FINANCE","Understand financial concepts, business finance fundamentals, calculations, and practical applications.","assets/services/finance.jpg"],
    ["HUMAN RESOURCE","Learn recruitment, HR processes, employee management, and essential human resource practices.","assets/services/human-resource.jpg"],
    ["SOFT SKILLS","Build communication, presentation, interpersonal, and workplace-readiness skills.","assets/services/soft-skills.jpg"],
    ["TALLY ERP 9","Develop practical accounting skills through ledgers, vouchers, accounting entries, and business transactions.","assets/services/tally.jpg"],
    ["MICROSOFT OFFICE","Improve office productivity using Microsoft Word, Excel, PowerPoint, and essential office tools.","assets/services/ms-office.jpg"],
    ["ADVANCED EXCEL","Learn formulas, lookup functions, data analysis, pivot tables, charts, and reporting techniques.","assets/services/advanced-excel.jpg"]
  ],
  audience: [
    ["Students & Fresh Graduates","Build job-ready software, communication and interview skills before the first role.","assets/audience/students.jpg"],
    ["Working Professionals","Upskill in Excel, finance, HR and soft skills that apply to daily work.","assets/audience/professionals.jpg"],
    ["Colleges, Institutes & Corporate Teams","Structured programs tailored to batch goals, schedules and skill gaps.","assets/audience/teams.jpg"]
  ],
  why: [
    ["Practical learning","Application-focused sessions, not theory alone."],
    ["Industry-relevant examples","Cases and tasks drawn from real workplaces."],
    ["Interactive teaching","Discussion, demos and hands-on exercises."],
    ["Tailored training","Content shaped around learner needs."],
    ["Workplace readiness","Software skills plus professional confidence."],
    ["Guided practice","Clear explanations with support while learners practise."]
  ],
  // Dates/subjects from your resume. Replace placeholders in [brackets].
  experience: [
    ["GenLearnY","Human Resource & Finance Trainer","Jun 2026 – Present","Human Resource, Finance","[Add main responsibilities]"],
    ["Aarav Institute for Management Services","Digital & AI-Integrated Career Guidance Trainer","Aug 2026 – Sep 2026","Digital skills, AI-integrated career guidance","[Add main responsibilities]"],
    ["TechnoTut Solutions LLP","Digital Marketing, Finance & Soft Skills Trainer","Nov 2022 – Jan 2026","Digital Marketing, Finance, Soft Skills","[Add main responsibilities]"],
    ["KTM Institute of Technology and Multimedia","Software & Computer Skills Trainer","Apr 2022 – Dec 2024","MS Office, Advanced Excel, Tally ERP 9","Trained 250+ students in software and computer skills"]
  ],
  journey: [
    ["2021 – 2024","B.Com"],["Apr 2022","Began training career at KTM Institute"],["Nov 2022","Joined TechnoTut Solutions LLP"],["2025 – 2026","MBA"],["2026","HR, finance and career guidance training"]
  ],
  method: [
    ["UNDERSTAND","Identify learning goals and learner needs."],["EXPLAIN","Introduce concepts in clear, simple language."],
    ["DEMONSTRATE","Show tools, processes, and examples."],["PRACTICE","Let learners perform guided exercises."],
    ["APPLY","Connect skills to realistic tasks and workplace situations."],["ASSESS","Review understanding and identify areas for improvement."]
  ],
  // Gallery: replace files at these paths with your real photos
  gallery: ["assets/gallery/class-1.jpg","assets/gallery/class-2.jpg","assets/gallery/class-3.jpg","assets/gallery/class-4.jpg","assets/gallery/class-5.jpg"]
};

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
if (RM) document.documentElement.classList.add("rm");
const C = CONFIG.contact, mail = s => `mailto:${C.email}?subject=${encodeURIComponent(s)}`;
const img = (src, alt = "") => `<img src="${src}" alt="${alt}" loading="lazy">`;
// any failed image marks its frame as a labelled placeholder
document.addEventListener("error", e => { if (e.target.tagName === "IMG") e.target.parentElement.classList.add("ph"); }, true);

/* ---------- render content ---------- */
$("#stats").innerHTML = CONFIG.stats.map(s => `<div class="stat"><b>${s.value}</b><span>${s.label}</span></div>`).join("");
$("#aboutTl").innerHTML = CONFIG.journey.map(j => `<div class="step"><small>${j[0]}</small><h3>${j[1]}</h3></div>`).join("");
$("#deck").innerHTML = CONFIG.services.map((s, i) => `<article class="card" style="z-index:${i + 1}"><div><span class="no">0${i + 1}</span><h3>${s[0]}</h3><p>${s[1]}</p></div>
  <div class="pic" data-label="PLACEHOLDER: ${s[2]}">${img(s[2])}</div>
  <a class="arrow" href="${mail("Training enquiry: " + s[0])}" aria-label="Enquire about ${s[0]} training">↗</a></article>`).join("");
$("#train .aud, #aud").innerHTML = CONFIG.audience.map((a, i) => `<article style="--i:${i}"><div class="pic" data-label="PLACEHOLDER: ${a[2]}">${img(a[2])}</div><div class="b"><h3>${a[0]}</h3><p>${a[1]}</p></div></article>`).join("");
$("#why-list").innerHTML = CONFIG.why.map((w, i) => `<article style="--i:${i}"><b>0${i + 1}</b><h3>${w[0]}</h3><p>${w[1]}</p></article>`).join("");
$("#expTl").innerHTML = CONFIG.experience.map(x => `<div class="step"><small>${x[2]}</small><h3>${x[0]}</h3><strong>${x[1]}</strong><ul><li>${x[4]}</li><li>Subjects: ${x[3]}</li></ul></div>`).join("");
$("#methTl").innerHTML = CONFIG.method.map((m, i) => `<div class="step"><small>0${i + 1}</small><h3>${m[0]}</h3><p>${m[1]}</p></div>`).join("");
$("#gal").innerHTML = CONFIG.gallery.map((g, i) => `<button class="g${i}" style="--i:${i}" aria-label="Open classroom photo ${i + 1}"><div class="pic" data-label="PLACEHOLDER ${i + 1}: add ${g}">${img(g, "Arpitha teaching, photo " + (i + 1))}</div></button>`).join("");
$("#links").innerHTML = [
  C.email && `<li><a href="mailto:${C.email}">${C.email}</a></li>`,
  C.phone && `<li><a href="tel:+91${C.phone}">${C.phone}</a></li>`,
  C.whatsapp && `<li><a href="https://wa.me/${C.whatsapp}" target="_blank" rel="noopener">WhatsApp</a></li>`,
  C.linkedin && `<li><a href="${C.linkedin}" target="_blank" rel="noopener">LinkedIn</a></li>`
].filter(Boolean).join("");
["invite1", "invite2"].forEach(id => $("#" + id).href = id === "invite1" ? "#contact" : mail("Invitation for training"));
$("#touch").href = mail("Getting in touch");
$("#yr").textContent = new Date().getFullYear();
$("#deck").parentElement.parentElement.style.setProperty("--n", CONFIG.services.length);

/* ---------- nav ---------- */
const burger = $(".burger"), menu = $("#menu");
burger.onclick = () => burger.setAttribute("aria-expanded", menu.classList.toggle("open"));
menu.onclick = e => { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } };
const links = $$("#menu a");
const secIO = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const id = e.target.id === "train" || e.target.id === "why" ? "about" : e.target.id;
  links.forEach(a => a.toggleAttribute("aria-current", a.hash === "#" + id)); links.forEach(a => a.getAttribute("aria-current") === "" && a.setAttribute("aria-current", "true"));
}), { rootMargin: "-45% 0px -50% 0px" });
$$("main > section").forEach(s => secIO.observe(s));

/* ---------- reveals ---------- */
const rvIO = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); rvIO.unobserve(e.target); } }), { threshold: .15 });
$$(".mask,.rv,.aud article,.why article,.gal button,.cta,.pic-wrap").forEach(el => rvIO.observe(el));

/* ---------- scroll-driven 3D (one rAF loop, transforms + CSS vars only) ---------- */
const home = $("#home"), svc = $("#services"), cards = $$(".card"), tls = $$(".tl");
function progress(el) { const r = el.getBoundingClientRect(); return clamp(-r.top / (r.height - innerHeight)); }
function update() {
  const vh = innerHeight, mob = innerWidth < 700, k = mob ? .5 : 1;
  // Cover opens 0 -> .6 of home track; hero settles after
  home.style.setProperty("--p", clamp(progress(home) / .6).toFixed(4));
  // Services: card i active when t ~ i
  const t = progress(svc) * (cards.length - 1);
  cards.forEach((c, i) => {
    const d = i - t, dir = i % 2 ? 1 : -1;
    let y, rot, sc = 1, op = 1;
    if (d > 0) { const u = clamp(d); y = u * 110 + "vh"; rot = dir * (4 + u * 10) * k; }          // incoming from below
    else { y = d * (mob ? 14 : 26) + "px"; rot = dir * (3 + Math.min(-d, 3)) * k * (1 + d * .15); sc = 1 + d * .05; op = clamp(1 + d * .3); } // stacked behind
    if (d > 0) rot = dir * (d > 1 ? 14 : 2 + d * 8) * k; 
    c.style.transform = `translate3d(0,${y},${d < 0 ? d * 40 : 0}px) rotateZ(${rot}deg) rotateX(${d > 0 ? clamp(d) * 12 : 0}deg) scale(${sc})`;
    c.style.opacity = op;
  });
  // Timelines: draw line, activate nodes, emphasise nearest entry
  tls.forEach(tl => {
    const r = tl.getBoundingClientRect(), line = vh * .62;
    tl.style.setProperty("--f", clamp((line - r.top) / r.height).toFixed(3));
    let best = null, bd = 1e9;
    $$(".step", tl).forEach(s => {
      const sr = s.getBoundingClientRect();
      s.classList.toggle("on", sr.top < line);
      const d = Math.abs(sr.top + sr.height / 2 - vh / 2); if (sr.top < line && d < bd) { bd = d; best = s; }
      s.classList.remove("cur");
    });
    if (best && tl.classList.contains("x")) best.classList.add("cur");
  });
}
if (!RM) {
  let tick = false;
  const req = () => { if (!tick) { tick = true; requestAnimationFrame(() => { update(); tick = false; }); } };
  addEventListener("scroll", req, { passive: true }); addEventListener("resize", req); update();
} else { $$(".step").forEach(s => s.classList.add("on")); }

/* ---------- gallery lightbox ---------- */
const lb = $("#lb"), body = $("#lbBody"), items = $$("#gal button"); let cur = 0;
function show(i) { cur = (i + items.length) % items.length; const p = $(".pic", items[cur]).cloneNode(true); body.replaceChildren(p); }
items.forEach((b, i) => b.onclick = () => { show(i); lb.showModal(); });
$(".x", lb).onclick = () => lb.close(); $(".pv", lb).onclick = () => show(cur - 1); $(".nx", lb).onclick = () => show(cur + 1);
lb.addEventListener("keydown", e => { if (e.key === "ArrowLeft") show(cur - 1); if (e.key === "ArrowRight") show(cur + 1); });
lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
