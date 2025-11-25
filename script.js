// ===== Trailer: partículas/focos ligeros en canvas
(function(){
  const c = document.getElementById('introParticles');
  if (!c) return;
  
  const ctx = c.getContext('2d');
  const DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  
  function resize(){
    c.width = Math.floor(window.innerWidth * DPR);
    c.height = Math.floor(window.innerHeight * DPR);
  }
  resize(); 
  window.addEventListener('resize', resize);

  const dots = Array.from({length: 120}, ()=>({
    x: Math.random()*c.width,
    y: Math.random()*c.height,
    r: (Math.random()*1.8+0.6) * DPR,
    dx: (Math.random()-.5)*0.6*DPR,
    dy: (Math.random()-.5)*0.6*DPR
  }));

  function tick(){
    ctx.clearRect(0,0,c.width,c.height);

    // Focos diagonales
    const grd=ctx.createLinearGradient(0,0,c.width,c.height);
    grd.addColorStop(0,'rgba(0,245,255,0.06)');
    grd.addColorStop(1,'rgba(45,241,162,0.06)');
    ctx.fillStyle=grd;
    ctx.fillRect(0,0,c.width,c.height);

    // Puntos brillantes
    dots.forEach(d=>{
      d.x+=d.dx; d.y+=d.dy;
      if(d.x<0||d.x>c.width) d.dx*=-1;
      if(d.y<0||d.y>c.height) d.dy*=-1;

      ctx.beginPath();
      ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
      ctx.fillStyle='rgba(255,255,255,0.7)';
      ctx.fill();

      // halo
      const g=ctx.createRadialGradient(d.x,d.y,0,d.x,d.y,d.r*4);
      g.addColorStop(0,'rgba(0,245,255,0.18)');
      g.addColorStop(1,'rgba(0,245,255,0)');
      ctx.fillStyle=g; 
      ctx.beginPath();
      ctx.arc(d.x,d.y,d.r*4,0,Math.PI*2);
      ctx.fill();
    });

    requestAnimationFrame(tick);
  }
  tick();
})();

// ===== Botón empezar: ocultar trailer, mostrar contenido
const startButton = document.getElementById('startButton');
const introScreen = document.getElementById('introScreen');
if (startButton && introScreen) {
  startButton.addEventListener('click', ()=>{
    introScreen.style.display='none';
    document.body.style.overflow = 'auto';
    document.querySelector('.nav-btn')?.focus();
  });
}

// ===== CONTROLADOR DE EFECTOS ESPECTACULARES =====
document.addEventListener('DOMContentLoaded', function() {
  const heroContainer = document.querySelector('.hero-img-container');
  
  if (heroContainer) {
    // Efecto de interacción con el mouse/touch
    heroContainer.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      // Intensificar efectos al hover
      const particles = this.querySelectorAll('.particle');
      particles.forEach(particle => {
        particle.style.animationDuration = '2s';
      });
    });
    
    heroContainer.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      // Volver a velocidad normal
      const particles = this.querySelectorAll('.particle');
      particles.forEach(particle => {
        particle.style.animationDuration = '4s';
      });
    });
    
    // Efecto de click/touch
    heroContainer.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
      
      // Crear efecto de explosión de partículas
      createParticleExplosion(this);
    });
    
    // Efecto de seguimiento para móvil
    let touchTimeout;
    heroContainer.addEventListener('touchmove', function(e) {
      clearTimeout(touchTimeout);
      const touch = e.touches[0];
      const rect = this.getBoundingClientRect();
      const x = ((touch.clientX - rect.left) / rect.width) * 100;
      const y = ((touch.clientY - rect.top) / rect.height) * 100;
      
      this.style.transform = `scale(1.02) rotateX(${5 - y/10}deg) rotateY(${x/10 - 5}deg)`;
      
      touchTimeout = setTimeout(() => {
        this.style.transform = 'scale(1) rotateX(0) rotateY(0)';
      }, 100);
    });
  }
});

// Función para explosión de partículas al click
function createParticleExplosion(container) {
  for (let i = 0; i < 8; i++) {
    const particle = document.createElement('div');
    particle.className = 'energy-dot';
    particle.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      width: 6px;
      height: 6px;
      background: var(--neon${(i % 4) + 1});
      border-radius: 50%;
      animation: explodeParticle 1s ease-out forwards;
      pointer-events: none;
      z-index: 10;
    `;
    
    const angle = (i / 8) * Math.PI * 2;
    const distance = 100;
    
    // Añadir keyframes dinámicamente
    if (!document.querySelector('#explodeAnimation')) {
      const style = document.createElement('style');
      style.id = 'explodeAnimation';
      style.textContent = `
        @keyframes explodeParticle {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(
              ${Math.cos(angle) * distance - 50}%, 
              ${Math.sin(angle) * distance - 50}%
            ) scale(0);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    container.appendChild(particle);
    
    // Remover después de la animación
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 1000);
  }
}

// ===== Navegación con scroll suave MEJORADA =====
function smoothScrollTo(target) {
  const element = document.querySelector(target);
  if (element) {
    const offset = 80; // Compensar header fijo
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

document.querySelectorAll('.nav-btn, a[href^="#"]').forEach(el=>{
  el.addEventListener('click', (e)=>{
    const target = el.dataset.target || el.getAttribute('href');
    if(target && target.startsWith('#')){
      e.preventDefault();
      smoothScrollTo(target);
    }
  });
});

// ===== Mapa: mover barco a la isla y luego hacer scroll =====
(function(){
  const barco = document.getElementById('barco');
  const map = document.getElementById('mapScreen');
  const islas = document.querySelectorAll('.isla');

  if (!barco || !map) return;

  function moveBoatTo(el){
    const rect = map.getBoundingClientRect();
    const ir = el.getBoundingClientRect();
    const top = (ir.top - rect.top) + ir.height/2 - 20;
    const left = (ir.left - rect.left) + ir.width/2 - 20;
    barco.style.top = `${top}px`;
    barco.style.left = `${left}px`;
  }

  islas.forEach(isla=>{
    isla.addEventListener('click', ()=>{
      moveBoatTo(isla);
      const target = isla.dataset.target;
      setTimeout(()=>{
        if(target) smoothScrollTo(target);
      }, 600);
      isla.classList.add('isla-glow');
      setTimeout(()=>isla.classList.remove('isla-glow'), 1000);
    });
  });
})();

// ===== Formulario de contacto básico =====
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simular envío (aquí integrarías con un servicio real)
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        alert('¡Mensaje enviado! Te responderé pronto. (Funcionalidad de email lista para integrar)');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }
});

// ===== MEJORAS ESPECÍFICAS PARA MÓVIL =====

// Detectar si es móvil
function isMobile() {
  return window.innerWidth <= 768;
}

// Optimizar experiencia táctil
document.addEventListener('DOMContentLoaded', function() {
  // Mejorar botones para touch
  const buttons = document.querySelectorAll('button, .btn-ghost, .treasure-link, .isla');
  buttons.forEach(btn => {
    btn.style.webkitTapHighlightColor = 'transparent';
    btn.style.touchAction = 'manipulation';
  });
  
  // Optimizar mapa para touch
  if (isMobile()) {
    const islas = document.querySelectorAll('.isla');
    islas.forEach(isla => {
      // Agregar más área de touch
      isla.style.padding = '20px';
      isla.style.margin = '-20px';
    });
    
    // Mejorar navegación táctil
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
      btn.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.95)';
      });
      
      btn.addEventListener('touchend', function() {
        this.style.transform = 'scale(1)';
      });
    });
  }
  
  // Prevenir zoom en inputs en iOS
  const inputs = document.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.addEventListener('touchstart', function(e) {
      this.style.fontSize = '16px';
    });
  });
});

// Redimensionar canvas en móvil para mejor rendimiento
window.addEventListener('resize', function() {
  const canvas = document.getElementById('introParticles');
  if (canvas && isMobile()) {
    canvas.style.display = 'none';
  }
});

// Efecto de parallax en scroll
window.addEventListener('scroll', function() {
  const heroSection = document.getElementById('heroSection');
  const scrolled = window.pageYOffset;
  const rate = scrolled * -0.5;
  
  if (heroSection) {
    heroSection.style.transform = `translateY(${rate}px)`;
  }
});

// Inicializar efectos cuando la página carga
window.addEventListener('load', function() {
  // Añadir clase de carga completada
  document.body.classList.add('loaded');
  
  // Efecto de entrada escalonada para elementos
  const animatedElements = document.querySelectorAll('.hero-img-container, .hero-copy');
  animatedElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.3}s`;
  });
});

// ===== Mejorar accesibilidad - focus para navegación por teclado =====
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    // Volver al inicio con Escape
    smoothScrollTo('#heroSection');
  }
});

// ===== Sistema de traducciones (backup) =====
// Este código funciona junto con translations.js
// Para asegurar que el cambio de idioma funcione incluso si translations.js falla
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar botones de idioma
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      console.log('Cambiando idioma a:', lang);
      
      // Actualizar botones activos
      langButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Cambiar dirección del texto para árabe
      if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
      } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = lang;
      }
    });
  });
});