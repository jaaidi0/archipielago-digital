/* ================= DATOS (TRADUCCIONES) ================= */
const i18n = {
    es: {
        nav: { home: "Inicio", map: "Mapa", projects: "Proyectos", contact: "Contacto" },
        hero: { title: "Biólogo navegando hacia la Informática", desc: "Del microscopio al código. Especialista en Sistemas, Linux y Docker.", btn1: "Ver Proyectos", btn2: "Mapa" },
        map: { title: "Ruta Digital" },
        projects: { title: "Laboratorios", ai_desc: "Integración de Gemini en Zsh.", web_desc: "Web interactiva pura.", sys_desc: "Infraestructura virtualizada." },
        contact: { title: "Contacto" }
    },
    en: {
        nav: { home: "Home", map: "Map", projects: "Projects", contact: "Contact" },
        hero: { title: "Biologist Sailing into CS", desc: "From microscope to code. Systems, Linux & Docker Specialist.", btn1: "View Projects", btn2: "Map" },
        map: { title: "Digital Route" },
        projects: { title: "Labs", ai_desc: "Gemini integration in Zsh.", web_desc: "Pure interactive web.", sys_desc: "Virtualized infrastructure." },
        contact: { title: "Contact" }
    },
    fr: {
        nav: { home: "Accueil", map: "Carte", projects: "Projets", contact: "Contact" },
        hero: { title: "Biologiste vers l'Informatique", desc: "Du microscope au code. Spécialiste Systèmes.", btn1: "Projets", btn2: "Carte" },
        map: { title: "Route Numérique" },
        projects: { title: "Laboratoires", ai_desc: "Intégration Gemini Zsh.", web_desc: "Web interactif pur.", sys_desc: "Infrastructure virtuelle." },
        contact: { title: "Contact" }
    },
    ar: {
        nav: { home: "الرئيسية", map: "الخريطة", projects: "مشاريع", contact: "اتصال" },
        hero: { title: "عالم أحياء مبرمج", desc: "من المجهر إلى الكود. متخصص أنظمة.", btn1: "المشاريع", btn2: "الخريطة" },
        map: { title: "المسار الرقمي" },
        projects: { title: "مختبرات", ai_desc: "دمج الذكاء في Zsh", web_desc: "ويب تفاعلي", sys_desc: "بنية تحتية افتراضية" },
        contact: { title: "اتصال" }
    }
};

/* ================= LÓGICA DEL SISTEMA ================= */
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Quitar pantalla de carga
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => { loader.style.display = 'none'; }, 500);
    }, 800);

    // 2. Idioma Inicial
    const savedLang = localStorage.getItem('lang') || 'es';
    setLang(savedLang);

    // 3. Audio (Control robusto)
    let audio = null;
    let isMuted = false;
    try {
        audio = new Audio('voz/entrada.mp3');
        audio.volume = 0.4;
    } catch(e) { console.log('Audio no disponible'); }

    // Mute Button
    const muteBtn = document.getElementById('muteBtn');
    if (muteBtn && audio) {
        muteBtn.addEventListener('click', () => {
            isMuted = !isMuted;
            muteBtn.textContent = isMuted ? '🔇' : '🔊';
            if(isMuted) audio.pause();
        });
    }

    // Efecto de sonido al iniciar (user interaction required)
    document.body.addEventListener('click', () => {
        if(audio && !isMuted && audio.paused) audio.play().catch(()=>{});
    }, { once: true });

    // 4. Barco (Solo PC)
    const barco = document.getElementById('barco');
    const mapa = document.querySelector('.map-frame');
    
    if (window.innerWidth > 768 && barco && mapa) {
        document.querySelectorAll('.isla').forEach(isla => {
            isla.addEventListener('click', () => {
                const rMap = mapa.getBoundingClientRect();
                const rIsla = isla.getBoundingClientRect();
                // Calcular centro relativo
                const top = (rIsla.top - rMap.top) + (rIsla.height / 2) - 40;
                const left = (rIsla.left - rMap.left) + (rIsla.width / 2) - 30;
                
                barco.style.top = top + 'px';
                barco.style.left = left + 'px';
            });
        });
    }
});

// Función de Scroll
function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Función de Idioma
function setLang(lang) {
    localStorage.setItem('lang', lang);
    
    // RTL para árabe
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    // Botones
    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase() === lang) btn.classList.add('active');
    });

    // Textos
    if (i18n[lang]) {
        document.querySelectorAll('[data-t]').forEach(el => {
            const key = el.getAttribute('data-t');
            const keys = key.split('.');
            let text = i18n[lang];
            keys.forEach(k => { if(text) text = text[k]; });
            if (text) el.innerText = text;
        });
    }
}