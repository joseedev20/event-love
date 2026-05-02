const manifestoFix=document.createElement('style');manifestoFix.textContent=`
.hero .tags{display:none!important;}
.manifesto-card{background:linear-gradient(rgba(31,35,39,.88),rgba(31,35,39,.82)),radial-gradient(circle at 25% 20%,rgba(215,192,160,.18),transparent 24rem),#1f2327!important;color:#f8f4ee!important;}
.manifesto-card p{color:#f8f4ee!important;text-shadow:0 2px 10px rgba(0,0,0,.18);line-height:.95!important;}
`;
document.head.appendChild(manifestoFix);

const essenceStyles=document.createElement('style');
essenceStyles.textContent=`
.essence-section{padding-top:28px;}
.essence-card{position:relative;overflow:hidden;border-radius:42px;border:1px solid rgba(169,138,103,.18);background:linear-gradient(145deg,rgba(255,255,255,.72),rgba(245,239,230,.84));box-shadow:0 30px 90px rgba(62,45,27,.12);display:grid;grid-template-columns:minmax(0,.92fr) minmax(310px,.88fr);gap:34px;align-items:stretch;min-height:620px;padding:clamp(26px,4.8vw,54px);isolation:isolate;}
.essence-card::before{content:'';position:absolute;inset:auto -18% -26% 42%;height:58%;border-radius:50%;background:radial-gradient(circle,rgba(215,192,160,.28),transparent 68%);pointer-events:none;z-index:-1;}
.essence-copy{position:relative;z-index:2;display:flex;flex-direction:column;justify-content:center;}
.essence-copy .kicker{color:#a98a67;margin-bottom:20px;}
.essence-copy h2{margin:0;color:#1f2327;font-family:var(--serif);font-size:clamp(3rem,6.6vw,6.2rem);line-height:.88;letter-spacing:-.065em;max-width:620px;}
.essence-copy h2 span{color:#a98a67;}
.essence-intro{margin:22px 0 28px;max-width:520px;color:rgba(31,35,39,.66);font-size:1rem;line-height:1.75;}
.essence-values{display:grid;border-top:1px solid rgba(169,138,103,.18);max-width:560px;}
.essence-value{display:grid;grid-template-columns:58px 1fr;gap:16px;align-items:center;padding:18px 0;border-bottom:1px solid rgba(169,138,103,.15);}
.essence-value:last-child{border-bottom:0;}
.essence-icon{width:50px;height:50px;border-radius:50%;display:grid;place-items:center;background:rgba(215,192,160,.55);color:#1f2327;box-shadow:0 12px 28px rgba(62,45,27,.08);}
.essence-icon svg{width:24px;height:24px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}
.essence-value h3{margin:0 0 4px;color:#1f2327;font-family:var(--serif);font-size:clamp(1.55rem,2.8vw,2.2rem);line-height:1;letter-spacing:-.035em;}
.essence-value p{margin:0;color:rgba(31,35,39,.62);font-size:.96rem;line-height:1.45;}
.essence-visual{position:relative;min-height:520px;border-radius:34px;overflow:hidden;background:#efe3d4;align-self:stretch;box-shadow:inset 0 0 0 1px rgba(255,255,255,.28),0 24px 64px rgba(62,45,27,.12);}
.essence-photo{position:absolute;inset:0;background:linear-gradient(90deg,rgba(245,239,230,.88),rgba(245,239,230,.2) 42%,rgba(31,35,39,.06)),url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1100&q=82');background-size:cover;background-position:center;filter:saturate(.82) contrast(1.02) sepia(.1);transform:scale(1.015);}
.essence-visual::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,.06),rgba(31,35,39,.08)),radial-gradient(circle at 22% 18%,rgba(255,255,255,.5),transparent 30%);pointer-events:none;}
.essence-badge{position:absolute;left:22px;right:22px;bottom:22px;z-index:2;display:flex;align-items:center;gap:16px;padding:16px;border-radius:26px;background:rgba(255,255,255,.78);border:1px solid rgba(169,138,103,.2);backdrop-filter:blur(14px);box-shadow:0 18px 42px rgba(62,45,27,.12);}
.essence-badge img{width:54px;height:54px;border-radius:50%;object-fit:contain;filter:drop-shadow(0 10px 20px rgba(62,45,27,.12));}
.essence-badge span{font-family:var(--serif);font-size:clamp(1.45rem,3.2vw,2.45rem);line-height:.95;letter-spacing:-.05em;color:#1f2327;}
.essence-badge strong{color:#a98a67;font-weight:700;}
@media(max-width:980px){.essence-card{grid-template-columns:1fr;min-height:auto}.essence-visual{min-height:520px;order:-1}.essence-copy h2{font-size:clamp(2.7rem,10vw,5.2rem)}}
@media(max-width:640px){.essence-section{padding-top:18px}.essence-card{border-radius:30px;padding:24px 18px;gap:22px}.essence-visual{min-height:380px;border-radius:26px}.essence-photo{background-position:center}.essence-intro{margin:18px 0 18px}.essence-value{grid-template-columns:48px 1fr;gap:13px;padding:15px 0}.essence-icon{width:42px;height:42px}.essence-icon svg{width:20px;height:20px}.essence-badge{left:14px;right:14px;bottom:14px;border-radius:22px;padding:13px}.essence-badge img{width:46px;height:46px}.essence-badge span{font-size:1.45rem}}
`;
document.head.appendChild(essenceStyles);

const oldHeroTags=document.querySelector('.hero .tags');
if(oldHeroTags) oldHeroTags.remove();

const aboutSection=document.querySelector('.about-creative');
if(aboutSection&&!document.getElementById('esencia')){
  const essence=document.createElement('section');
  essence.className='section essence-section';
  essence.id='esencia';
  essence.innerHTML=`
    <div class="essence-card reveal">
      <div class="essence-copy">
        <p class="kicker">Nuestra esencia</p>
        <h2>Tres principios que <span>nos definen.</span></h2>
        <p class="essence-intro">Tres principios que guían la forma en que diseñamos, comunicamos y construimos relaciones de marca.</p>
        <div class="essence-values">
          <article class="essence-value">
            <span class="essence-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20.5 11.5c0 5-8.5 9-8.5 9s-8.5-4-8.5-9a5 5 0 0 1 8.5-3.6 5 5 0 0 1 8.5 3.6Z"></path><path d="M7 13.2c1.8 1.2 4 1.2 6.5 0"></path></svg></span>
            <div><h3>Sensibilidad</h3><p>Conexión emocional auténtica.</p></div>
          </article>
          <article class="essence-value">
            <span class="essence-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 18V6"></path><path d="M4 18h16"></path><path d="m7 15 3.5-4 3 2.7L19 7"></path><path d="M16.5 7H19v2.5"></path></svg></span>
            <div><h3>Estrategia</h3><p>Resultados medibles y sostenibles.</p></div>
          </article>
          <article class="essence-value">
            <span class="essence-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 1 9 9"></path><path d="M12 3a9 9 0 0 0-9 9"></path><path d="M6.5 17.5c1.6-3.2 3.4-5.2 5.5-5.2s3.9 2 5.5 5.2"></path><path d="M8.3 20c.9-2.2 2.1-3.5 3.7-3.5s2.8 1.3 3.7 3.5"></path><path d="M8 8.6c2.2-1.7 5.8-1.7 8 0"></path></svg></span>
            <div><h3>Autenticidad</h3><p>Marcas con propósito real.</p></div>
          </article>
        </div>
      </div>
      <div class="essence-visual" aria-hidden="true">
        <div class="essence-photo"></div>
        <div class="essence-badge"><img src="logo.svg" alt=""><span>Diseño centrado<br>en lo <strong>humano.</strong></span></div>
      </div>
    </div>`;
  aboutSection.insertAdjacentElement('afterend',essence);
}

const header=document.getElementById('header');
if(header){window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>20),{passive:true});}

const reveals=document.querySelectorAll('.reveal');
const io=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('show');io.unobserve(entry.target);}})},{threshold:.14});
reveals.forEach((el,i)=>{el.style.transitionDelay=`${Math.min(i%4,3)*80}ms`;io.observe(el);});

document.querySelectorAll('.card').forEach(card=>{card.addEventListener('pointermove',event=>{const rect=card.getBoundingClientRect();const x=event.clientX-rect.left;const y=event.clientY-rect.top;const rotateY=((x/rect.width)-.5)*7;const rotateX=((y/rect.height)-.5)*-7;card.style.transform=`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;});card.addEventListener('pointerleave',()=>card.style.transform='');});

const canvas=document.getElementById('cascade');
if(canvas){
  const ctx=canvas.getContext('2d');const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;const particles=[];const symbols=['·','—','◦','✦'];let w=0,h=0,dpr=1;
  function resize(){dpr=Math.min(window.devicePixelRatio||1,2);w=window.innerWidth;h=window.innerHeight;canvas.width=w*dpr;canvas.height=h*dpr;canvas.style.width=w+'px';canvas.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0);} 
  function make(){return{x:Math.random()*w,y:Math.random()*h,s:.25+Math.random()*.85,d:-.25+Math.random()*.5,z:8+Math.random()*18,a:.12+Math.random()*.2,t:symbols[Math.floor(Math.random()*symbols.length)],r:Math.random()*Math.PI,rs:-.004+Math.random()*.008};}
  function init(){particles.length=0;for(let i=0;i<Math.min(95,Math.max(38,Math.floor(w/15)));i++)particles.push(make());}
  function draw(){if(reduce)return;ctx.clearRect(0,0,w,h);particles.forEach(p=>{p.y+=p.s;p.x+=p.d;p.r+=p.rs;if(p.y>h+30||p.x<-30||p.x>w+30)Object.assign(p,make(),{y:-20});ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);ctx.globalAlpha=p.a;ctx.fillStyle='#a98a67';ctx.font=p.z+'px Georgia,serif';ctx.fillText(p.t,0,0);ctx.restore();});requestAnimationFrame(draw);} 
  window.addEventListener('resize',()=>{resize();init();});resize();init();draw();
}

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
  const modal=document.createElement('div');modal.className='plans-modal';modal.id='planesModal';modal.setAttribute('aria-hidden','true');modal.innerHTML=`<div class="plans-modal-backdrop" data-plans-close></div><div class="plans-modal-panel" role="dialog" aria-modal="true" aria-label="Nuestros planes"><button class="plans-close" type="button" aria-label="Cerrar planes" data-plans-close>×</button></div>`;document.body.appendChild(modal);modal.querySelector('.plans-modal-panel').appendChild(plansSection);plansSection.querySelectorAll('.reveal').forEach(el=>{el.classList.add('show');el.style.transitionDelay='0ms';});
  const iconSvg={instagram:'<svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="5"></rect><circle cx="12" cy="12" r="3.8"></circle><circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none"></circle></svg>',whatsapp:'<svg viewBox="0 0 24 24"><path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.5-4A8 8 0 1 1 20 11.5Z"></path><path d="M9.4 9.2c.2-.4.5-.4.8-.4h.5c.2 0 .4 0 .5.4l.5 1.4c.1.2.1.4 0 .6l-.4.6c.6 1.1 1.4 1.9 2.5 2.5l.6-.4c.2-.1.4-.1.6 0l1.4.5c.3.1.4.3.4.5v.5c0 .3 0 .6-.4.8-.5.2-1 .3-1.5.2-2.8-.5-5.1-2.8-5.6-5.6-.1-.5 0-1 .2-1.4Z"></path></svg>',content:'<svg viewBox="0 0 24 24"><path d="M4 20h16"></path><path d="M7 16l8.5-8.5 2 2L9 18H7v-2Z"></path></svg>',megaphone:'<svg viewBox="0 0 24 24"><path d="M4 13V8.5a1 1 0 0 1 1-1H9l6-2v13l-6-2H5a1 1 0 0 1-1-1V13Z"></path><path d="M18 9.5a4 4 0 0 1 0 5"></path><path d="M19.8 7.5a7 7 0 0 1 0 9"></path></svg>',experience:'<svg viewBox="0 0 24 24"><path d="M12 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"></path><path d="M4.5 19a7.5 7.5 0 0 1 15 0"></path><path d="M19 7l1.5 1.5L22 7"></path></svg>'};
  const iconSets=[['instagram','whatsapp','content','megaphone'],['instagram','whatsapp','content','megaphone','experience']];plansSection.querySelectorAll('.plan-icons').forEach((group,index)=>{group.setAttribute('aria-hidden','true');group.innerHTML=(iconSets[index]||iconSets[0]).map(name=>`<span class="plan-icon" title="${name}">${iconSvg[name]}</span>`).join('');});
  function openPlans(){modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('plans-modal-open');setTimeout(()=>modal.querySelector('.plans-close').focus(),80);}function closePlans(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('plans-modal-open');plansTrigger.focus();}
  plansTrigger.addEventListener('click',event=>{event.preventDefault();openPlans();});modal.querySelectorAll('[data-plans-close]').forEach(el=>el.addEventListener('click',closePlans));window.addEventListener('keydown',event=>{if(event.key==='Escape'&&modal.classList.contains('open'))closePlans();});if(window.location.hash==='#planes')setTimeout(openPlans,350);
}
