
const PHOTO="assets/portrait.webp",CONTACT={wa:"916363958020",email:"aaarpitha18@gmail.com",li:"https://www.linkedin.com/in/arpitha-m-professional"};
const D=[["Digital Marketing","Practical digital marketing training focused on real-world applications.",["SEO and SEM","Social media marketing","Content strategy","Campaign analytics"]],
["Finance","Financial fundamentals and accounting principles taught through worked examples.",["Financial fundamentals","Accounting principles","Excel-based financial reporting"]],
["Human Resources","HR training for job-oriented learners and working professionals.",["HR fundamentals","Workplace processes","Recruitment concepts","Employee lifecycle","HR compliance basics"]],
["Soft Skills","Communication and workplace skills built through live practice.",["Communication","Workplace etiquette","Presentation skills","Employability readiness"]],
["Tally","Accounting practice on Tally ERP 9, step by step.",["Tally ERP 9","Accounting software practice"]],
["Advanced Excel","Spreadsheet and reporting skills for daily work.",["VLOOKUP","Pivot Tables","Dashboards"]],
["Microsoft Office","Word, Excel and PowerPoint for professional use.",["MS Office Suite","Workplace documents"]],
["Basic Computer","Core computer applications for first-time and early users.",["Core computer applications","Workplace digital skills"]]];
const G=["M20 140L70 90l40 30 70-80M150 40h30v30","M40 150V90h30v60M90 150V60h30v90M140 150V30h30v120","M60 70a22 22 0 1 0 .1 0M140 70a22 22 0 1 0 .1 0M30 150q30-50 60 0M110 150q30-50 60 0","M30 40h120v70H80l-30 30v-30H30z","M40 40h120v110H40zM40 80h120M40 115h120M90 40v110","M30 40h140v110H30zM30 75h140M30 110h140M70 40v110M110 40v110M150 40v110","M50 30h80l30 30v90H50zM130 30v30h30M70 80h70M70 105h70M70 130h50","M30 40h140v90H30zM80 150h40M100 130v20"];
const $=s=>document.querySelector(s),vt=$("#vt"),stk=$("#stk");
G.forEach(p=>vt.insertAdjacentHTML("beforeend",`<svg viewBox="0 0 200 180" preserveAspectRatio="xMidYMid meet"><path d="${p}" fill="none" stroke="#e3a82b" stroke-width="3" stroke-linejoin="round" transform="translate(0,0)"/><path d="${p}" fill="none" stroke="#e3a82b55" stroke-width="3" transform="translate(7,7)"/></svg>`));
D.forEach((d,i)=>stk.insertAdjacentHTML("beforeend",`<article class="card"><div class="n">0${i+1}</div><h3>${d[0].toUpperCase()}</h3><p>${d[1]}</p>${d[2].length?"<ul>"+d[2].map(t=>`<li>${t}</li>`).join("")+"</ul>":""}</article>`));
const cards=[...stk.children];
const M=[["Understand","Learner goals and current level come first."],["Explain","Concepts in plain language."],["Demonstrate","Live walk-through on the actual tool."],["Practice","Hands-on tasks during the session."],["Apply","Real work scenarios and mini projects."],["Assess","Check what was learned and close the gaps."]];
const ms=$("#met .stage");M.forEach((m,i)=>ms.insertAdjacentHTML("beforeend",`<div class="st"><div class="big">0${i+1}</div><h3>${m[0]}</h3><p>${m[1]}</p></div>`));
const st=[...ms.querySelectorAll(".st")];
if(PHOTO)$("#photo").innerHTML=`<img src="${PHOTO}" alt="Arpitha M., Corporate Trainer" loading="eager">`;
$("#wa").href=CONTACT.wa?"https://wa.me/"+CONTACT.wa:"#contact";$("#li").href=CONTACT.li;$("#em").href=CONTACT.email?"mailto:"+CONTACT.email:"#contact";
if(CONTACT.wa)$("#wa").innerHTML="<small>WhatsApp</small><br>"+CONTACT.wa;if(CONTACT.email)$("#em").innerHTML="<small>Email</small><br>"+CONTACT.email;
const pr=el=>{const r=el.getBoundingClientRect(),h=el.offsetHeight-innerHeight;return Math.min(1,Math.max(0,-r.top/h))};
const cl=(x,a,b)=>Math.min(1,Math.max(0,(x-a)/(b-a)));
const top=$("#top"),dom=$("#dom"),met=$("#met");
function tick(){
 let p=pr(top);
 $("#L1").style.transform=`translateZ(${-cl(p,.3,.65)*900}px) scale(${1+cl(p,0,.3)*.04})`;$("#L1").style.opacity=1-cl(p,.4,.65);
 $("#T1").style.opacity=cl(p,.08,.18)*(1-cl(p,.45,.6));$("#T1").style.transform=`translateX(${(1-cl(p,.08,.2))*-120}px) translateZ(${-cl(p,.3,.6)*500}px)`;
 $("#T2").style.opacity=cl(p,.18,.28)*(1-cl(p,.45,.6));$("#T2").style.transform=`translateX(${(1-cl(p,.18,.3))*120}px) translateZ(${-cl(p,.3,.6)*500}px)`;
 const ph=$("#photo");ph.style.opacity=cl(p,.4,.6);ph.style.transform=`translateZ(${(1-cl(p,.4,.75))*-500}px) scale(${.8+cl(p,.4,.75)*.2})`;
 const h=$("#hero");h.style.opacity=cl(p,.72,.9);h.style.transform=`translateY(${(1-cl(p,.72,.9))*50}px)`;h.style.pointerEvents=p>.8?"auto":"none";
 const k=innerWidth<800?.45:1;let q=pr(dom)*(D.length-1),a=Math.round(q);
 vt.style.transform=`translateX(${-q*100/D.length*1}%)`;vt.style.width=D.length*100+"%";[...vt.children].forEach(s=>s.style.flex=`0 0 ${100/D.length}%`);
 $("#dc").textContent=`0${a+1} / 08`;
 cards.forEach((c,i)=>{const d=i-q;
  if(d<0){const t=Math.min(1,-d);c.style.transform=`translate3d(0,${t*40}%,${-t*500*k}px) rotateX(${t*25*k}deg)`;c.style.opacity=1-t;}
  else{const t=Math.min(d,3);c.style.transform=`translate3d(${t*18*k}px,${-t*14}px,${-t*120*k}px) rotateY(${-3*t*k}deg) scale(${1-t*.03})`;c.style.opacity=d>3?0:1-t*.22;c.style.filter=`brightness(${1-t*.18})`;}
  c.style.zIndex=100-i;});
 let m=pr(met)*(M.length-.0001);
 st.forEach((s,i)=>{const d=m-i;let z=d<0?-d*-1200:-d*0,o;
  if(d<0){z=d*1200;o=1+d*1.6}else{z=d*600;o=1-d*1.5}
  s.style.opacity=Math.max(0,Math.min(1,o));s.style.transform=`perspective(900px) translateZ(${z}px) translateY(${d<0?-d*20:d*-10}vh)`;});
}
let busy=0;addEventListener("scroll",()=>{if(!busy){busy=1;requestAnimationFrame(()=>{tick();busy=0})}},{passive:true});addEventListener("resize",tick);tick();
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add("on");io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
const mb=$("#mb"),nv=$("#nv");function tg(o){nv.classList.toggle("o",o);mb.textContent=o?"CLOSE":"MENU";mb.setAttribute("aria-expanded",o);mb.setAttribute("aria-label",o?"Close menu":"Open menu")}
mb.onclick=()=>tg(!nv.classList.contains("o"));nv.onclick=()=>tg(false);addEventListener("keydown",e=>{if(e.key==="Escape")tg(false)});
function route(){const h=location.hash.slice(1),l=document.getElementById(h);document.querySelectorAll(".leg").forEach(x=>x.classList.remove("act"));
 if(l&&l.classList.contains("leg")){document.body.classList.add("lp");l.classList.add("act");scrollTo(0,0)}else document.body.classList.remove("lp")}
addEventListener("hashchange",route);route();
