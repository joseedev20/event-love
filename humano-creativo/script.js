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
@media(max-width:640px){.plans-modal{padding:10px;align-items:end}.plans-modal-panel{max-height:90vh;border-radius:28px}.plans-close{top:12px;left:calc(100% - 58px);width:42px;height:42px}.plans-modal-panel #planes{padding:18px 14px 28px!important}.plans-modal-panel .plans-header{margin-top:-18px}}
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
