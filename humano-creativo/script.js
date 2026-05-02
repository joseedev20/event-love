const manifestoFix=document.createElement('style');manifestoFix.textContent=`
.manifesto-card{
  background:linear-gradient(rgba(31,35,39,.88),rgba(31,35,39,.82)),radial-gradient(circle at 25% 20%,rgba(215,192,160,.18),transparent 24rem),#1f2327!important;
  color:#f8f4ee!important;
}
.manifesto-card p{
  color:#f8f4ee!important;
  text-shadow:0 2px 10px rgba(0,0,0,.18);
  line-height:.95!important;
}
`;document.head.appendChild(manifestoFix);

const brandValuesStyles=document.createElement('style');brandValuesStyles.textContent=`
.hero .tags.brand-values{width:min(860px,100%);margin-top:32px;display:block!important;}
.brand-values-label{display:flex;align-items:center;gap:12px;margin-bottom:14px;color:#a98a67;font-size:12px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;}
.brand-values-label::after{content:'';height:1px;flex:1;background:linear-gradient(90deg,rgba(169,138,103,.36),transparent);}
.brand-values-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;}
.brand-value-card{position:relative;overflow:hidden;border-radius:24px;padding:20px 18px 18px;border:1px solid rgba(169,138,103,.2);background:linear-gradient(145deg,rgba(255,255,255,.64),rgba(245,239,230,.7));box-shadow:0 18px 52px rgba(62,45,27,.08);display:grid;grid-template-columns:auto 1fr;gap:14px;align-items:start;backdrop-filter:blur(12px);}
.brand-value-card::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 20% 15%,rgba(255,255,255,.52),transparent 32%),linear-gradient(180deg,rgba(255,255,255,.08),transparent);pointer-events:none;}
.brand-value-icon{position:relative;z-index:1;width:42px;height:42px;border-radius:15px;display:grid;place-items:center;background:#1f2327;color:#f8f4ee;box-shadow:0 12px 28px rgba(31,35,39,.14);}
.brand-value-icon svg{width:21px;height:21px;stroke:currentColor;fill:none;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round;}
.brand-value-content{position:relative;z-index:1;}
.brand-value-content h3{margin:0 0 6px;color:#1f2327;font-size:1rem;line-height:1.1;font-weight:900;letter-spacing:.02em;}
.brand-value-content p{margin:0;color:rgba(31,35,39,.66);font-size:.92rem;line-height:1.45;}
@media(max-width:860px){.brand-values-grid{grid-template-columns:1fr}.brand-value-card{border-radius:22px}.hero .tags.brand-values{margin-top:26px}}
`;document.head.appendChild(brandValuesStyles);

const heroTags=document.querySelector('.hero .tags');
if(heroTags){
  heroTags.classList.add('brand-values');
  heroTags.innerHTML=`
    <div class="brand-values-label">Atributos de marca</div>
    <div class="brand-values-grid">
      <article class="brand-value-card">
        <span class="brand-value-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7.5 12.5 5.8 11a3.1 3.1 0 0 1 4.4-4.4l.8.8.8-.8a3.1 3.1 0 0 1 4.4 4.4l-1.7 1.5"></path><path d="M3.5 14.5 8 19l3-3 3 3 6.5-6.5"></path><path d="M15.5 13.5h5"></path></svg></span>
        <div class="brand-value-content"><h3>Sensibilidad</h3><p>Conexión emocional auténtica.</p></div>
      </article>
      <article class="brand-value-card">
        <span class="brand-value-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 18V6"></path><path d="M4 18h16"></path><path d="m7 15 3.5-4 3 2.7L19 7"></path><path d="M16.5 7H19v2.5"></path></svg></span>
        <div class="brand-value-content"><h3>Estrategia</h3><p>Resultados medibles y sostenibles.</p></div>
      </article>
      <article class="brand-value-card">
        <span class="brand-value-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"></circle><path d="M12 7v10"></path><path d="M7 12h10"></path><path d="M9 9.5c1.8 1.1 4.2 1.1 6 0"></path><path d="M9 14.5c1.8-1.1 4.2-1.1 6 0"></path></svg></span>
        <div class="brand-value-content"><h3>Autenticidad</h3><p>Marcas con propósito real.</p></div>
      </article>
    </div>`;
}

const header=document.getElementById('header');window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>20),{passive:true});

const reveals=document.querySelectorAll('.reveal');
const io=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('show');io.unobserve(entry.target);}})},{threshold:.14});
reveals.forEach((el,i)=>{el.style.transitionDelay=`${Math.min(i%4,3)*80}ms`;io.observe(el);});

document.querySelectorAll('.card').forEach(card=>{card.addEventListener('pointermove',event=>{const rect=card.getBoundingClientRect();const x=event.clientX-rect.left;const y=event.clientY-rect.top;const rotateY=((x/rect.width)-.5)*7;const rotateX=((y/rect.height)-.5)*-7;card.style.transform=`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;});card.addEventListener('pointerleave',()=>card.style.transform='');});

const canvas=document.getElementById('cascade');const ctx=canvas.getContext('2d');const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;const particles=[];const symbols=['·','—','◦','✦'];let w=0,h=0,dpr=1;
function resize(){dpr=Math.min(window.devicePixelRatio||1,2);w=window.innerWidth;h=window.innerHeight;canvas.width=w*dpr;canvas.height=h*dpr;canvas.style.width=w+'px';canvas.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0);} 
function make(){return{x:Math.random()*w,y:Math.random()*h,s:.25+Math.random()*.85,d:-.25+Math.random()*.5,z:8+Math.random()*18,a:.12+Math.random()*.2,t:symbols[Math.floor(Math.random()*symbols.length)],r:Math.random()*Math.PI,rs:-.004+Math.random()*.008};}
function init(){particles.length=0;for(let i=0;i<Math.min(95,Math.max(38,Math.floor(w/15)));i++)particles.push(make());}
function draw(){if(reduce)return;ctx.clearRect(0,0,w,h);particles.forEach(p=>{p.y+=p.s;p.x+=p.d;p.r+=p.rs;if(p.y>h+30||p.x<-30||p.x>w+30)Object.assign(p,make(),{y:-20});ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);ctx.globalAlpha=p.a;ctx.fillStyle='#a98a67';ctx.font=p.z+'px Georgia,serif';ctx.fillText(p.t,0,0);ctx.restore();});requestAnimationFrame(draw);} 
window.addEventListener('resize',()=>{resize();init();});resize();init();draw();

const plansModalStyles=document.createElement('style');plansModalStyles.textContent=`
body.plans-modal-open{overflow:hidden;}
.plans-modal{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;padding:18px;opacity:0;pointer-events:none;transition:opacity .28s ease;}
.plans-modal.open{opacity:1;pointer-events:auto;}
.plans-modal-backdrop{position:absolute;inset:0;background:rgba(16,18,20,.62);backdrop-filter:blur(14px);}
.plans-modal-panel{position:relative;width:min(1120px,100%);max-height:min(88vh,920px);overflow:auto;border-radius:34px;background:linear-gradient(145deg,rgba(248,244,238,.98),rgba(237,226,212,.96));box-shadow:0 34px 120px rgba(31,35,39,.36);border:1px solid rgba(255,255,255,.5);transform:translateY(18px) scale(.98);transition:transform .28s ease;}
.plans-modal.open .plans-modal-panel{transform:translateY(0) scale(1);}
.plans-close{position:sticky;top:16px;left:calc(100% - 66px);z-index:5;width:46px;height:46px;border:0;border-radius:999px;background:#1f2327;color:#fff;font-size:28px;line-height:1;display:grid;place-items:center;cursor:pointer;box-shadow:0 12px 32px rgba(31,35,39,.22);}
.plans-modal-panel #planes{display:block!important;padding:26px clamp(18px,4vw,42px) 42px!important;}
.plans-modal-panel .plans-header{margin-top:-22px;}
.plans-modal-panel .plans-grid{align-items:stretch;}
.plans-modal-panel .plan-card{box-shadow:0 18px 52px rgba(62,45,27,.12);}
.plan-icons{display:flex!important;gap:10px!important;flex-wrap:wrap!important;align-items:center!important;}
.plan-icons .plan-icon{width:44px!important;height:44px!important;border-radius:14px!important;display:grid!important;place-items:center!important;border:1px solid rgba(169,138,103,.22)!important;background:rgba(255,255,255,.62)!important;color:#1f2327!important;box-shadow:0 8px 22px rgba(62,45,27,.06)!important;transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease!important;font-size:0!important;line-height:1!important;padding:0!important;}
.plan-icons .plan-icon:hover{transform:translateY(-2px);box-shadow:0 12px 26px rgba(62,45,27,.1)!important;border-color:rgba(169,138,103,.36)!important;}
.plan-icons .plan-icon svg{width:20px!important;height:20px!important;stroke:currentColor!important;fill:none!important;stroke-width:1.9!important;stroke-linecap:round!important;stroke-linejoin:round!important;display:block!important;}
.plan-card.featured .plan-icons .plan-icon{background:rgba(255,255,255,.08)!important;border-color:rgba(255,255,255,.18)!important;color:#f8f4ee!important;box-shadow:none!important;}
.plan-card.featured .plan-icons .plan-icon:hover{border-color:rgba(229,201,165,.34)!important;transform:translateY(-2px);}
@media(max-width:640px){.plans-modal{padding:10px;align-items:end}.plans-modal-panel{max-height:90vh;border-radius:28px}.plans-close{top:12px;left:calc(100% - 58px);width:42px;height:42px}.plans-modal-panel #planes{padding:18px 14px 28px!important}.plans-modal-panel .plans-header{margin-top:-18px}.plan-icons{gap:8px!important}.plan-icons .plan-icon{width:40px!important;height:40px!important;border-radius:12px!important}.plan-icons .plan-icon svg{width:18px!important;height:18px!important}}
`;
document.head.appendChild(plansModalStyles);

const plansSection=document.getElementById('planes');
const plansTrigger=document.querySelector('a[href="#planes"]');
if(plansSection&&plansTrigger){
  const modal=document.createElement('div');
  modal.className='plans-modal';
  modal.id='planesModal';
  modal.setAttribute('aria-hidden','true');
  modal.innerHTML=`<div class="plans-modal-backdrop" data-plans-close></div><div class="plans-modal-panel" role="dialog" aria-modal="true" aria-label="Nuestros planes"><button class="plans-close" type="button" aria-label="Cerrar planes" data-plans-close>×</button></div>`;
  document.body.appendChild(modal);
  modal.querySelector('.plans-modal-panel').appendChild(plansSection);
  plansSection.querySelectorAll('.reveal').forEach(el=>{el.classList.add('show');el.style.transitionDelay='0ms';});

  const iconSvg={
    instagram:'<svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="5"></rect><circle cx="12" cy="12" r="3.8"></circle><circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none"></circle></svg>',
    whatsapp:'<svg viewBox="0 0 24 24"><path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.5-4A8 8 0 1 1 20 11.5Z"></path><path d="M9.4 9.2c.2-.4.5-.4.8-.4h.5c.2 0 .4 0 .5.4l.5 1.4c.1.2.1.4 0 .6l-.4.6c.6 1.1 1.4 1.9 2.5 2.5l.6-.4c.2-.1.4-.1.6 0l1.4.5c.3.1.4.3.4.5v.5c0 .3 0 .6-.4.8-.5.2-1 .3-1.5.2-2.8-.5-5.1-2.8-5.6-5.6-.1-.5 0-1 .2-1.4Z"></path></svg>',
    content:'<svg viewBox="0 0 24 24"><path d="M4 20h16"></path><path d="M7 16l8.5-8.5 2 2L9 18H7v-2Z"></path></svg>',
    megaphone:'<svg viewBox="0 0 24 24"><path d="M4 13V8.5a1 1 0 0 1 1-1H9l6-2v13l-6-2H5a1 1 0 0 1-1-1V13Z"></path><path d="M18 9.5a4 4 0 0 1 0 5"></path><path d="M19.8 7.5a7 7 0 0 1 0 9"></path></svg>',
    experience:'<svg viewBox="0 0 24 24"><path d="M12 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"></path><path d="M4.5 19a7.5 7.5 0 0 1 15 0"></path><path d="M19 7l1.5 1.5L22 7"></path></svg>'
  };
  const iconSets=[['instagram','whatsapp','content','megaphone'],['instagram','whatsapp','content','megaphone','experience']];
  plansSection.querySelectorAll('.plan-icons').forEach((group,index)=>{
    group.setAttribute('aria-hidden','true');
    group.innerHTML=(iconSets[index]||iconSets[0]).map(name=>`<span class="plan-icon" title="${name}">${iconSvg[name]}</span>`).join('');
  });

  function openPlans(){
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.classList.add('plans-modal-open');
    setTimeout(()=>modal.querySelector('.plans-close').focus(),80);
  }

  function closePlans(){
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    document.body.classList.remove('plans-modal-open');
    plansTrigger.focus();
  }

  plansTrigger.addEventListener('click',event=>{event.preventDefault();openPlans();});
  modal.querySelectorAll('[data-plans-close]').forEach(el=>el.addEventListener('click',closePlans));
  window.addEventListener('keydown',event=>{if(event.key==='Escape'&&modal.classList.contains('open'))closePlans();});
  if(window.location.hash==='#planes')setTimeout(openPlans,350);
}
