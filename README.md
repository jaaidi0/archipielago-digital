# 🌱 Mostapha El Jaidi - Agro-Tech Developer Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> **Portfolio personal con diseño futurista** | Red neuronal animada, sistema multilingüe y proyecto destacado con métricas de rendimiento.

## 🚀 [Ver Portfolio en Vivo](https://jaaidi0.github.io/archipielago-digital/)

![Portfolio Preview](https://via.placeholder.com/1200x600/020305/00f5ff?text=Portfolio+Preview)

---

## ✨ Características Principales

### 🎨 Diseño Visual
- **Red neuronal animada** con Canvas API (80 partículas interconectadas)
- **Efectos holográficos** en imagen de perfil con anillos rotatorios
- **Animaciones CSS3** suaves y optimizadas para 60fps
- **Glassmorphism** y efectos de blur backdrop modernos

### 🌍 Internacionalización
- ✅ **4 idiomas completos**: Español, English, Français, العربية
- ✅ **Soporte RTL** completo para árabe
- ✅ **Persistencia** de idioma seleccionado con LocalStorage
- ✅ **Traducción dinámica** sin recarga de página

### 📱 Responsive Design
- **Menú hamburguesa** animado para móvil
- **Grid adaptativo** que se ajusta a cualquier pantalla
- **Optimización de partículas** (40 en móvil, 80 en desktop)
- **Tipografía escalable** para legibilidad óptima

### ⚡ Performance
- **Loader optimizado**: < 500ms
- **Lazy loading** de imágenes
- **CSS puro** sin frameworks pesados
- **JavaScript Vanilla** sin dependencias

### ♿ Accesibilidad (A11Y)
- **Skip navigation** para lectores de pantalla
- **Contraste WCAG AA** mejorado
- **ARIA labels** en botones interactivos
- **Navegación por teclado** completa

---

## 🎯 Proyecto Destacado: AEMET Dashboard Pro

Sistema profesional de inteligencia climática que procesa datos de la API de AEMET.

### Métricas de Rendimiento
| Métrica | Valor | Mejora |
|---------|-------|--------|
| **Tiempo de carga** | 1.14s | 99.1% más rápido |
| **Tasa de éxito** | 100% | Sin errores |
| **Throughput** | 36+ registros/seg | Paralelización efectiva |
| **Errores timeout** | 0 | Rate limiting inteligente |

### Stack Técnico
```
Python + Streamlit + Pandas + Plotly + Threading
ThreadPoolExecutor | Token Bucket | Multi-level Cache | Exponential Backoff
```

---

## 🛠️ Stack Técnico del Portfolio

### Frontend
```html
HTML5           → Estructura semántica
CSS3            → Grid, Flexbox, Animations, Backdrop-filter
JavaScript ES6+ → Canvas API, LocalStorage, Smooth Scroll
```

### Fuentes
```css
Poppins     → UI principal (300, 500, 700)
Orbitron    → Títulos tech (700)
JetBrains Mono → Código (400)
```

### Diseño
- **Metodología**: Mobile-first
- **Colores**: Neon cyan (#00f5ff) + Dark background (#020305)
- **Animaciones**: Cubic-bezier timing functions
- **Iconos**: Emojis nativos (sin librerías)

---

## 📦 Instalación Local

### Opción 1: Clonar repositorio
```bash
git clone https://github.com/jaaidi0/archipielago-digital.git
cd archipielago-digital
```

### Opción 2: Servidor local con Python
```bash
python -m http.server 8000
# Abrir http://localhost:8000
```

### Opción 3: Servidor con Node.js
```bash
npx http-server -p 8000
```

---

## 📁 Estructura del Proyecto

```
archipielago-digital/
│
├── index.html          # Estructura principal (UTF-8)
├── style.css           # Estilos + Responsive + RTL
├── script.js           # Lógica + i18n + Canvas
│
├── img/
│   ├── barco.svg       # Favicon
│   ├── foto.png        # Profile picture
│   └── pergamino_fondo.png
│
├── voz/
│   ├── entrada.mp3     # Audio ambiente (opcional)
│   └── botunes.mp3     # Efectos sonido (opcional)
│
└── README.md           # Este archivo
```

---

## 🎨 Paleta de Colores

```css
/* Variables CSS */
--bg:        #020305  /* Fondo oscuro */
--neon:      #00f5ff  /* Cyan principal */
--neon-dark: #008f96  /* Cyan oscuro */
--gold:      #ffbd00  /* Dorado acentos */
--success:   #00ff9f  /* Verde métricas */
--text:      #e0e0e0  /* Texto claro */
```

---

## 🔧 Personalización

### Cambiar colores
Edita las variables en `style.css`:
```css
:root {
    --neon: #ff00ff;  /* Cambiar a magenta */
    --gold: #00ffff;  /* Cambiar a cyan */
}
```

### Añadir nuevo idioma
Edita `i18n` en `script.js`:
```javascript
const i18n = {
    // ... idiomas existentes
    de: {
        nav: { home: "STARTSEITE", ... },
        // ... resto de traducciones
    }
};
```

### Modificar partículas
En `script.js`:
```javascript
const count = window.innerWidth < 768 ? 50 : 100; // Más partículas
```

---

## 🚀 Deployment

### GitHub Pages
1. **Push** al repositorio
2. **Settings** → Pages → Deploy from `main` branch
3. **URL**: `https://jaaidi0.github.io/archipielago-digital/`

### Netlify (alternativa)
```bash
# Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=.
```

### Vercel (alternativa)
```bash
# Vercel CLI
npm install -g vercel
vercel --prod
```

---

## 📊 Lighthouse Score

| Categoría | Score |
|-----------|-------|
| Performance | 95+ ⚡ |
| Accessibility | 95+ ♿ |
| Best Practices | 100 ✅ |
| SEO | 100 🔍 |

**Ejecutar audit:**
```bash
npx lighthouse https://jaaidi0.github.io/archipielago-digital/ --view
```

---

## 🐛 Issues Conocidos

- [x] ~~Encoding UTF-8 en emojis~~ → **Resuelto**
- [x] ~~Pantalla negra en menú móvil RTL~~ → **Resuelto**
- [ ] Añadir tests automáticos
- [ ] Implementar Dark/Light mode toggle
- [ ] Integrar Google Analytics

---

## 📝 Changelog

### v2.0.0 (2025-01-XX)
- ✅ Encoding UTF-8 completo
- ✅ SEO meta tags (OG + Twitter)
- ✅ Skip navigation A11Y
- ✅ Contraste mejorado WCAG AA
- ✅ Loader optimizado (500ms)
- ✅ Lazy loading imágenes

### v1.0.0 (2025-01-01)
- 🎉 Lanzamiento inicial
- ✨ Sistema multilingüe 4 idiomas
- 🎨 Red neuronal Canvas
- 📱 Diseño responsive completo

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras algún bug o tienes sugerencias:

1. **Fork** el proyecto
2. Crea tu **feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la branch (`git push origin feature/AmazingFeature`)
5. Abre un **Pull Request**

---

## 📧 Contacto

**Mostapha El Jaidi** - Agro-Tech Developer

- 📧 Email: [eljaa@alum.us.es](mailto:eljaa@alum.us.es)
- 💼 LinkedIn: [linkedin.com/in/el-jaidi](https://linkedin.com/in/el-jaidi)
- 💻 GitHub: [@jaaidi0](https://github.com/jaaidi0)
- 🎬 TikTok: [@botanix.uni](https://tiktok.com/@botanix.uni)

---

## 📜 Licencia

Este proyecto está bajo la Licencia MIT - ver [LICENSE](LICENSE) para más detalles.

```
MIT License

Copyright (c) 2025 Mostapha El Jaidi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 🙏 Agradecimientos

- **Fuentes**: Google Fonts (Poppins, Orbitron, JetBrains Mono)
- **Inspiración**: Diseños futuristas de Cyberpunk y Agro-tech
- **Comunidad**: Stack Overflow, MDN Web Docs

---

<div align="center">

**⭐ Si te gusta este proyecto, dale una estrella en GitHub**

[⬆ Volver arriba](#-mostapha-el-jaidi---agro-tech-developer-portfolio)

</div>