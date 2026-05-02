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