(function(){
  const ESSENCE_IMG='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=82';
  const CONTACT_EMAIL='humanocreativo79@gmail.com';
  const WHATSAPP_URL='https://wa.me/573123788524?text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20Humano%20Creativo';
  const INSTAGRAM_URL='https://www.instagram.com/human_ocreativo/';

  const styles=document.createElement('style');
  styles.textContent=`
.hero .tags{display:none!important;}
.manifesto-card{background:linear-gradient(rgba(31,35,39,.88),rgba(31,35,39,.82)),radial-gradient(circle at 25% 20%,rgba(215,192,160,.18),transparent 24rem),#1f2327!important;color:#f8f4ee!important;}
.manifesto-card p{color:#f8f4ee!important;text-shadow:0 2px 10px rgba(0,0,0,.18);line-height:.95!important;}

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
.essence-photo{position:absolute;inset:0;background:linear-gradient(90deg,rgba(245,239,230,.82),rgba(245,239,230,.12) 45%,rgba(31,35,39,.06)),url('${ESSENCE_IMG}');background-size:cover;background-position:center;filter:saturate(.92) contrast(1.02) sepia(.06);transform:scale(1.015);}
.essence-visual::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,.05),rgba(31,35,39,.08)),radial-gradient(circle at 22% 18%,rgba(255,255,255,.45),transparent 30%);pointer-events:none;}
.essence-badge{position:absolute;left:22px;right:22px;bottom:22px;z-index:2;display:flex;align-items:center;gap:16px;padding:16px;border-radius:26px;background:rgba(255,255,255,.78);border:1px solid rgba(169,138,103,.2);backdrop-filter:blur(14px);box-shadow:0 18px 42px rgba(62,45,27,.12);}
.essence-badge img{width:54px;height:54px;border-radius:50%;object-fit:contain;filter:drop-shadow(0 10px 20px rgba(62,45,27,.12));}
.essence-badge span{font-family:var(--serif);font-size:clamp(1.45rem,3.2vw,2.45rem);line-height:.95;letter-spacing:-.05em;color:#1f2327;}
.essence-badge strong{color:#a98a67;font-weight:700;}

.impact-section{padding-top:40px;}
.impact-card{position:relative;overflow:hidden;border-radius:42px;background:linear-gradient(145deg,#1f2327,#121417);color:#f8f4ee;padding:clamp(32px,6vw,72px);box-shadow:0 34px 100px rgba(31,35,39,.22);isolation:isolate;}
.impact-card::before{content:'';position:absolute;inset:auto -20% -40% 45%;height:80%;border-radius:50%;background:radial-gradient(circle,rgba(215,192,160,.24),transparent 68%);z-index:-1;}
.impact-head{max-width:760px;margin-bottom:42px;position:relative;z-index:1;}
.impact-head .kicker{color:#d7c0a0;}
.impact-head h2{margin:0;color:#fff;font-family:var(--serif);font-size:clamp(3rem,7vw,6.2rem);line-height:.88;letter-spacing:-.065em;}
.impact-head p{max-width:620px;color:rgba(248,244,238,.72);line-height:1.8;}
.impact-grid{position:relative;z-index:1;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;}
.impact-stat{min-height:230px;border:1px solid rgba(215,192,160,.22);border-radius:30px;padding:28px;background:rgba(255,255,255,.045);}
.impact-number{display:block;color:#fff;font-size:clamp(4.8rem,13vw,9rem);line-height:.8;font-weight:900;letter-spacing:-.08em;}
.impact-label{display:block;margin-top:18px;color:#d7c0a0;font-weight:900;letter-spacing:.18em;text-transform:uppercase;}
.impact-stat p{margin:18px 0 0;color:rgba(248,244,238,.7);line-height:1.65;}

.testimonials-section{padding-top:40px;}
.testimonials-head{max-width:780px;margin-bottom:34px;}
.testimonials-head h2{margin:0;color:#1f2327;font-family:var(--serif);font-size:clamp(2.8rem,6vw,5.4rem);line-height:.9;letter-spacing:-.055em;}
.testimonials-head p{color:rgba(31,35,39,.64);line-height:1.8;}
.testimonials-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;}
.testimonial-card{position:relative;overflow:hidden;border-radius:34px;padding:clamp(28px,4vw,42px);border:1px solid rgba(169,138,103,.2);background:linear-gradient(145deg,rgba(255,255,255,.68),rgba(245,239,230,.86));box-shadow:0 24px 76px rgba(62,45,27,.1);}
.testimonial-card::before{content:'“';position:absolute;top:-28px;right:26px;font-family:var(--serif);font-size:11rem;line-height:1;color:rgba(169,138,103,.16);}
.testimonial-card p{position:relative;margin:0;color:rgba(31,35,39,.75);font-size:1.08rem;line-height:1.75;}
.testimonial-author{display:block;margin-top:26px;color:#1f2327;font-weight:900;}
.testimonial-brand{display:block;margin-top:4px;color:#a98a67;font-size:.9rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;}

.contact.contact-form-card{max-width:1120px!important;text-align:left!important;padding:clamp(28px,5vw,58px)!important;border-radius:42px!important;background:linear-gradient(145deg,rgba(255,255,255,.78),rgba(245,239,230,.9))!important;border:1px solid rgba(169,138,103,.2)!important;box-shadow:0 30px 90px rgba(62,45,27,.12)!important;}
.contact-layout{display:grid;grid-template-columns:minmax(0,.85fr) minmax(320px,1fr);gap:36px;align-items:start;}
.contact-copy h2{margin:0;color:#1f2327;font-family:var(--serif);font-size:clamp(2.8rem,6vw,5.4rem);line-height:.9;letter-spacing:-.055em;}
.contact-copy p{max-width:500px;color:rgba(31,35,39,.66);line-height:1.8;}
.contact-preferred{margin:24px 0 10px;color:#a98a67;font-size:11px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;}
.contact-actions{display:flex;flex-wrap:wrap;gap:10px;margin:0 0 24px;}
.contact-mini-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:40px;padding:10px 16px;border-radius:999px;border:1px solid rgba(169,138,103,.24);background:rgba(255,255,255,.72);color:#1f2327;font-size:12px;font-weight:900;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;box-shadow:0 12px 28px rgba(62,45,27,.08);transition:transform .2s ease,background .2s ease,border-color .2s ease;}
.contact-mini-btn:hover{transform:translateY(-2px);border-color:rgba(169,138,103,.42);background:#fff;}
.contact-mini-btn.primary-contact{background:#1f2327;color:#fff;border-color:#1f2327;}
.contact-mini-btn svg{width:15px;height:15px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}
.contact-details{display:grid;gap:10px;margin-top:18px;color:rgba(31,35,39,.66);font-size:.95rem;}
.contact-details strong{color:#1f2327;}
.hc-contact-form{display:grid;gap:14px;padding:18px;border-radius:30px;background:rgba(255,255,255,.62);border:1px solid rgba(169,138,103,.18);box-shadow:0 22px 60px rgba(62,45,27,.08);}
.form-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;}
.form-field{display:grid;gap:7px;}
.form-field.full{grid-column:1/-1;}
.form-field label{color:#a98a67;font-size:11px;font-weight:900;letter-spacing:.15em;text-transform:uppercase;}
.form-field input,.form-field select,.form-field textarea{width:100%;border:1px solid rgba(169,138,103,.22);border-radius:18px;background:rgba(248,244,238,.85);color:#1f2327;font:inherit;padding:14px 15px;outline:none;transition:border-color .2s ease,box-shadow .2s ease,background .2s ease;}
.form-field textarea{min-height:140px;resize:vertical;}
.form-field input:focus,.form-field select:focus,.form-field textarea:focus{border-color:rgba(169,138,103,.58);box-shadow:0 0 0 4px rgba(215,192,160,.18);background:#fff;}
.form-note{margin:0;color:rgba(31,35,39,.52);font-size:.82rem;line-height:1.5;}
.hc-contact-form .btn{width:100%;border:0;cursor:pointer;}

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
.plan-icons .plan-icon{width:44px!important;height:44px!important;border-radius:14px!important;display:grid!important;place-items:center!important;border:1px solid rgba(169,138,103,.22)!important;background:rgba(255,255,255,.62)!important;color:#1f2327!important;box-shadow:0 8px 22px rgba(62,45,27,.06)!important;font-size:0!important;line-height:1!important;padding:0!important;}
.plan-icons .plan-icon svg{width:20px!important;height:20px!important;stroke:currentColor!important;fill:none!important;stroke-width:1.9!important;stroke-linecap:round!important;stroke-linejoin:round!important;display:block!important;}
.plan-card.featured .plan-icons .plan-icon{background:rgba(255,255,255,.08)!important;border-color:rgba(255,255,255,.18)!important;color:#f8f4ee!important;box-shadow:none!important;}
@media(max-width:980px){.essence-card,.contact-layout{grid-template-columns:1fr;min-height:auto}.essence-visual{min-height:520px;order:-1}.essence-copy h2{font-size:clamp(2.7rem,10vw,5.2rem)}}
@media(max-width:760px){.impact-grid,.testimonials-grid,.form-grid{grid-template-columns:1fr}.impact-stat{min-height:190px}.contact.contact-form-card{border-radius:30px!important}}
@media(max-width:640px){.essence-section{padding-top:18px}.essence-card{border-radius:30px;padding:24px 18px;gap:22px}.essence-visual{min-height:380px;border-radius:26px}.essence-intro{margin:18px 0}.essence-value{grid-template-columns:48px 1fr;gap:13px;padding:15px 0}.essence-icon{width:42px;height:42px}.essence-icon svg{width:20px;height:20px}.essence-badge{left:14px;right:14px;bottom:14px;border-radius:22px;padding:13px}.essence-badge img{width:46px;height:46px}.essence-badge span{font-size:1.45rem}.contact-actions{margin-bottom:18px}.contact-mini-btn{width:100%;min-height:42px}.hc-contact-form{padding:14px;border-radius:24px}.plans-modal{padding:10px;align-items:end}.plans-modal-panel{max-height:90vh;border-radius:28px}.plans-close{top:12px;left:calc(100% - 58px);width:42px;height:42px}.plans-modal-panel #planes{padding:18px 14px 28px!important}.plans-modal-panel .plans-header{margin-top:-18px}.plan-icons{gap:8px!important}.plan-icons .plan-icon{width:40px!important;height:40px!important;border-radius:12px!important}.plan-icons .plan-icon svg{width:18px!important;height:18px!important}}
`;
  document.head.appendChild(styles);

  function insertEssence(){
    const oldHeroTags=document.querySelector('.hero .tags');
    if(oldHeroTags) oldHeroTags.remove();
    const aboutSection=document.querySelector('.about-creative');
    if(!aboutSection || document.getElementById('esencia')) return;
    const essence=document.createElement('section');
    essence.className='section essence-section';
    essence.id='esencia';
    essence.innerHTML=`<div class="essence-card reveal"><div class="essence-copy"><p class="kicker">Nuestra esencia</p><h2>Tres principios que <span>nos definen.</span></h2><p class="essence-intro">Tres principios que guían la forma en que diseñamos, comunicamos y construimos relaciones de marca.</p><div class="essence-values"><article class="essence-value"><span class="essence-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20.5 11.5c0 5-8.5 9-8.5 9s-8.5-4-8.5-9a5 5 0 0 1 8.5-3.6 5 5 0 0 1 8.5 3.6Z"></path><path d="M7 13.2c1.8 1.2 4 1.2 6.5 0"></path></svg></span><div><h3>Sensibilidad</h3><p>Conexión emocional auténtica.</p></div></article><article class="essence-value"><span class="essence-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 18V6"></path><path d="M4 18h16"></path><path d="m7 15 3.5-4 3 2.7L19 7"></path><path d="M16.5 7H19v2.5"></path></svg></span><div><h3>Estrategia</h3><p>Resultados medibles y sostenibles.</p></div></article><article class="essence-value"><span class="essence-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 1 9 9"></path><path d="M12 3a9 9 0 0 0-9 9"></path><path d="M6.5 17.5c1.6-3.2 3.4-5.2 5.5-5.2s3.9 2 5.5 5.2"></path><path d="M8.3 20c.9-2.2 2.1-3.5 3.7-3.5s2.8 1.3 3.7 3.5"></path><path d="M8 8.6c2.2-1.7 5.8-1.7 8 0"></path></svg></span><div><h3>Autenticidad</h3><p>Marcas con propósito real.</p></div></article></div></div><div class="essence-visual" aria-hidden="true"><div class="essence-photo"></div><div class="essence-badge"><img src="logo.svg" alt=""><span>Diseño centrado<br>en lo <strong>humano.</strong></span></div></div></div>`;
    aboutSection.insertAdjacentElement('afterend',essence);
  }

  function insertImpactAndTestimonials(){
    const serviciosSection=document.getElementById('servicios');
    if(!serviciosSection || document.getElementById('impacto')) return;
    const wrapper=document.createElement('div');
    wrapper.innerHTML=`<section class="section impact-section" id="impacto"><div class="impact-card reveal"><div class="impact-head"><p class="kicker">Marcas que ya conectaron</p><h2>Una historia que empieza a dejar huella.</h2><p>Cifras que reflejan el alcance de Humano Creativo y la confianza de las marcas que han construido con nosotros.</p></div><div class="impact-grid"><article class="impact-stat"><span class="impact-number">20+</span><span class="impact-label">Marcas</span><p>Hemos acompañado marcas de distintas industrias a comunicar con más intención.</p></article><article class="impact-stat"><span class="impact-number">01</span><span class="impact-label">Año</span><p>Un año diseñando, transformando y construyendo marcas con propósito.</p></article></div></div></section><section class="section testimonials-section" id="testimonios"><div class="testimonials-head reveal"><p class="kicker">Testimonios</p><h2>Voces que respaldan nuestro trabajo</h2><p>Cada marca que acompaña Humano Creativo tiene una historia, una transformación y una voz que respalda el proceso.</p></div><div class="testimonials-grid"><article class="testimonial-card reveal"><p>Nunca antes había trabajado con una agencia que se involucrara tanto con la esencia de mi marca y el resultado fue increíble.</p><span class="testimonial-author">Carolina Gallego</span><span class="testimonial-brand">Fundadora de Maat</span></article><article class="testimonial-card reveal"><p>Como marca de ropa logré no solo comunicar el alma de Alanlac Collection y conectar con mi audiencia, sino también crear una comunidad, aumentar mis ventas y llevar mi marca a otro nivel gracias a Humano Creativo.</p><span class="testimonial-author">Alan</span><span class="testimonial-brand">Fundador de Alanlac Collection</span></article></div></section>`;
    serviciosSection.insertAdjacentElement('beforebegin',wrapper);
  }

  function setupContactForm(){
    const contactBox=document.querySelector('#contacto .contact');
    if(!contactBox || contactBox.dataset.formReady==='true') return;
    contactBox.dataset.formReady='true';
    contactBox.classList.add('contact-form-card');
    contactBox.innerHTML=`<div class="contact-layout"><div class="contact-copy"><p class="kicker">Contacto</p><h2>Cuéntanos qué quieres construir.</h2><p>La primera opción es conversar directamente con nosotros. También puedes dejarnos tus datos en el formulario y te responderemos para construir una propuesta con sentido, estrategia y conexión humana.</p><div class="contact-preferred">Primera opción</div><div class="contact-actions"><a class="contact-mini-btn primary-contact" href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24"><path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.5-4A8 8 0 1 1 20 11.5Z"></path><path d="M9.4 9.2c.2-.4.5-.4.8-.4h.5c.2 0 .4 0 .5.4l.5 1.4c.1.2.1.4 0 .6l-.4.6c.6 1.1 1.4 1.9 2.5 2.5l.6-.4c.2-.1.4-.1.6 0l1.4.5"></path></svg>WhatsApp</a><a class="contact-mini-btn" href="${INSTAGRAM_URL}" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="5"></rect><circle cx="12" cy="12" r="3.8"></circle><circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none"></circle></svg>Instagram</a></div><div class="contact-details"><span><strong>Correo:</strong> ${CONTACT_EMAIL}</span><span><strong>WhatsApp:</strong> +57 312 3788524</span></div></div><form class="hc-contact-form" action="https://formsubmit.co/${CONTACT_EMAIL}" method="POST"><input type="hidden" name="_subject" value="Nueva solicitud desde la web de Humano Creativo"><input type="hidden" name="_template" value="table"><input type="hidden" name="_captcha" value="false"><input type="hidden" name="_next" value="https://joseedev20.github.io/event-love/humano-creativo/#contacto"><div class="form-grid"><div class="form-field"><label for="nombre">Nombre</label><input id="nombre" name="Nombre" type="text" placeholder="Tu nombre" required></div><div class="form-field"><label for="email">Correo</label><input id="email" name="Correo" type="email" placeholder="tu@email.com" required></div><div class="form-field"><label for="whatsapp">WhatsApp</label><input id="whatsapp" name="WhatsApp" type="tel" placeholder="+57 ..."></div><div class="form-field"><label for="marca">Marca / empresa</label><input id="marca" name="Marca o empresa" type="text" placeholder="Nombre de tu marca"></div><div class="form-field full"><label for="servicio">Servicio de interés</label><select id="servicio" name="Servicio de interés"><option value="No definido">Selecciona una opción</option><option>Identidad de marca</option><option>Estrategia de marca</option><option>Experiencias</option><option>Comunidades</option><option>Planes humanos</option><option>Otro</option></select></div><div class="form-field full"><label for="mensaje">Solicitud</label><textarea id="mensaje" name="Solicitud" placeholder="Cuéntanos qué necesitas, qué estás construyendo o cómo podemos ayudarte." required></textarea></div></div><p class="form-note">Al enviar, tu solicitud llegará al correo de Humano Creativo.</p><button class="btn primary" type="submit">Enviar solicitud</button></form></div>`;
  }

  function setupPlansModal(){
    const plansSection=document.getElementById('planes');
    const plansTrigger=document.querySelector('a[href="#planes"]');
    if(!plansSection || !plansTrigger || document.getElementById('planesModal')) return;
    const modal=document.createElement('div');
    modal.className='plans-modal';
    modal.id='planesModal';
    modal.setAttribute('aria-hidden','true');
    modal.innerHTML='<div class="plans-modal-backdrop" data-plans-close></div><div class="plans-modal-panel" role="dialog" aria-modal="true" aria-label="Nuestros planes"><button class="plans-close" type="button" aria-label="Cerrar planes" data-plans-close>×</button></div>';
    document.body.appendChild(modal);
    modal.querySelector('.plans-modal-panel').appendChild(plansSection);
    plansSection.querySelectorAll('.reveal').forEach(el=>{el.classList.add('show');el.style.transitionDelay='0ms';});
    const iconSvg={instagram:'<svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="5"></rect><circle cx="12" cy="12" r="3.8"></circle><circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none"></circle></svg>',whatsapp:'<svg viewBox="0 0 24 24"><path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.5-4A8 8 0 1 1 20 11.5Z"></path><path d="M9.4 9.2c.2-.4.5-.4.8-.4h.5c.2 0 .4 0 .5.4l.5 1.4c.1.2.1.4 0 .6l-.4.6c.6 1.1 1.4 1.9 2.5 2.5l.6-.4c.2-.1.4-.1.6 0l1.4.5c.3.1.4.3.4.5v.5c0 .3 0 .6-.4.8-.5.2-1 .3-1.5.2-2.8-.5-5.1-2.8-5.6-5.6-.1-.5 0-1 .2-1.4Z"></path></svg>',content:'<svg viewBox="0 0 24 24"><path d="M4 20h16"></path><path d="M7 16l8.5-8.5 2 2L9 18H7v-2Z"></path></svg>',megaphone:'<svg viewBox="0 0 24 24"><path d="M4 13V8.5a1 1 0 0 1 1-1H9l6-2v13l-6-2H5a1 1 0 0 1-1-1V13Z"></path><path d="M18 9.5a4 4 0 0 1 0 5"></path><path d="M19.8 7.5a7 7 0 0 1 0 9"></path></svg>',experience:'<svg viewBox="0 0 24 24"><path d="M12 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"></path><path d="M4.5 19a7.5 7.5 0 0 1 15 0"></path><path d="M19 7l1.5 1.5L22 7"></path></svg>'};
    [['instagram','whatsapp','content','megaphone'],['instagram','whatsapp','content','megaphone','experience']].forEach((set,index)=>{const group=plansSection.querySelectorAll('.plan-icons')[index];if(group){group.setAttribute('aria-hidden','true');group.innerHTML=set.map(name=>`<span class="plan-icon">${iconSvg[name]}</span>`).join('');}});
    function openPlans(){modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('plans-modal-open');setTimeout(()=>modal.querySelector('.plans-close').focus(),80);}
    function closePlans(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('plans-modal-open');plansTrigger.focus();}
    plansTrigger.addEventListener('click',event=>{event.preventDefault();openPlans();});
    modal.querySelectorAll('[data-plans-close]').forEach(el=>el.addEventListener('click',closePlans));
    window.addEventListener('keydown',event=>{if(event.key==='Escape'&&modal.classList.contains('open'))closePlans();});
    if(window.location.hash==='#planes') setTimeout(openPlans,350);
  }

  function setupInteractions(){
    const header=document.getElementById('header');
    if(header) window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>20),{passive:true});
    const io=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('show');io.unobserve(entry.target);}})},{threshold:.14});
    document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=`${Math.min(i%4,3)*80}ms`;io.observe(el);});
    document.querySelectorAll('.card').forEach(card=>{card.addEventListener('pointermove',event=>{const rect=card.getBoundingClientRect();const x=event.clientX-rect.left;const y=event.clientY-rect.top;const rotateY=((x/rect.width)-.5)*7;const rotateX=((y/rect.height)-.5)*-7;card.style.transform=`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;});card.addEventListener('pointerleave',()=>card.style.transform='');});
  }

  function setupCascade(){
    const canvas=document.getElementById('cascade');
    if(!canvas) return;
    const ctx=canvas.getContext('2d');
    const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const particles=[];
    const symbols=['·','—','◦','✦'];
    let w=0,h=0,dpr=1;
    function resize(){dpr=Math.min(window.devicePixelRatio||1,2);w=window.innerWidth;h=window.innerHeight;canvas.width=w*dpr;canvas.height=h*dpr;canvas.style.width=w+'px';canvas.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0);}
    function make(){return{x:Math.random()*w,y:Math.random()*h,s:.25+Math.random()*.85,d:-.25+Math.random()*.5,z:8+Math.random()*18,a:.12+Math.random()*.2,t:symbols[Math.floor(Math.random()*symbols.length)],r:Math.random()*Math.PI,rs:-.004+Math.random()*.008};}
    function init(){particles.length=0;for(let i=0;i<Math.min(95,Math.max(38,Math.floor(w/15)));i++)particles.push(make());}
    function draw(){if(reduce)return;ctx.clearRect(0,0,w,h);particles.forEach(p=>{p.y+=p.s;p.x+=p.d;p.r+=p.rs;if(p.y>h+30||p.x<-30||p.x>w+30)Object.assign(p,make(),{y:-20});ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);ctx.globalAlpha=p.a;ctx.fillStyle='#a98a67';ctx.font=p.z+'px Georgia,serif';ctx.fillText(p.t,0,0);ctx.restore();});requestAnimationFrame(draw);}
    window.addEventListener('resize',()=>{resize();init();});
    resize();init();draw();
  }

  insertEssence();
  insertImpactAndTestimonials();
  setupContactForm();
  setupPlansModal();
  setupInteractions();
  setupCascade();
})();
