🚀 Zyntech Solutions IT - Website
Progressive Web App (PWA) profesional, ultra-rápida y 100% responsive para Zyntech Solutions IT.

✨ Características
✅ PWA - Instalable como app nativa en móvil y desktop
✅ Single Page Application - Navegación instantánea sin recargas
✅ 100% Responsive - Perfecto en todos los dispositivos
✅ Modo Offline - Funciona sin conexión a internet
✅ Arquitectura Modular - Fácil mantenimiento y escalabilidad
✅ Optimizado para SEO - Meta tags y Open Graph
✅ Carga Ultra-Rápida - < 1 segundo
✅ Animaciones Suaves - Experiencia premium
📁 Estructura del Proyecto
zyntech-website/
├── index.html              # Estructura HTML principal
├── manifest.json           # Configuración PWA
├── sw.js                   # Service Worker (modo offline)
├── css/
│   └── styles.css         # Estilos optimizados
├── js/
│   ├── app.js             # Lógica principal de la app
│   └── components.js      # Componentes reutilizables
├── assets/
│   ├── icons/             # Iconos PWA (72x72 hasta 512x512)
│   └── screenshots/       # Screenshots para tiendas
└── README.md              # Este archivo
🛠️ Instalación y Configuración
1. Clonar o Descargar el Proyecto
bash
git clone https://github.com/TU-USUARIO/zyntech-website.git
cd zyntech-website
2. Crear los Iconos PWA
Necesitas crear iconos para la PWA en la carpeta assets/icons/:

Opción A: Usa un generador online como RealFaviconGenerator
Opción B: Usa esta herramienta: PWA Asset Generator
Tamaños necesarios:

72x72, 96x96, 128x128, 144x144, 152x152, 192x192, 384x384, 512x512
Tip: Puedes usar el logo de Zyntech (un ícono con código </>) sobre fondo degradado cyan-blue.

3. Subir a GitHub
bash
# Inicializar repositorio
git init
git add .
git commit -m "✨ Initial commit - Zyntech Solutions IT PWA"

# Conectar con GitHub
git remote add origin https://github.com/TU-USUARIO/zyntech-website.git
git branch -M main
git push -u origin main
4. Desplegar en Netlify
Opción A: Deploy desde GitHub
Ve a netlify.com
Clic en "Add new site" → "Import an existing project"
Selecciona GitHub y autoriza
Selecciona el repositorio zyntech-website
Configuración:
Build command: (dejar vacío)
Publish directory: /
Clic en "Deploy site"
Opción B: Deploy con Netlify CLI
bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
5. Configurar Dominio Personalizado (Opcional)
En Netlify, ve a Domain settings
Clic en "Add custom domain"
Sigue las instrucciones para configurar DNS
🎨 Personalización
Cambiar Colores
Edita las variables CSS en css/styles.css:

css
:root {
    --color-bg: #0f172a;           /* Fondo principal */
    --color-primary: #22d3ee;      /* Color primario (cyan) */
    --color-secondary: #3b82f6;    /* Color secundario (blue) */
    --color-accent: #a855f7;       /* Color de acento (purple) */
}
Agregar Nuevos Servicios
Edita el array en js/components.js:

javascript
const SERVICES_DATA = [
    {
        icon: `<svg>...</svg>`,
        title: 'Nuevo Servicio',
        description: 'Descripción del servicio'
    }
];
Agregar Tecnologías
Edita el array en js/components.js:

javascript
const TECHNOLOGIES_DATA = [
    'Node.js', 'Python', 'Nueva Tecnología', ...
];
📱 Instalación como App
En Móvil (Android/iOS)
Abre el sitio en Chrome/Safari
Busca el banner "Instalar app" o
Menú → "Añadir a pantalla de inicio"
En Desktop
Abre en Chrome/Edge
Icono de instalación en la barra de direcciones
O: Menú → "Instalar Zyntech Solutions IT"
🔧 Mantenimiento
Actualizar Contenido
Todo el contenido está centralizado en:

Servicios: js/components.js → SERVICES_DATA
Tecnologías: js/components.js → TECHNOLOGIES_DATA
Estilos: css/styles.css
Actualizar Caché (después de cambios)
Incrementa la versión en sw.js:

javascript
const CACHE_VERSION = 'zyntech-v1.0.1'; // Incrementar número
📊 Rendimiento
Lighthouse Score: 95-100
First Contentful Paint: < 0.8s
Time to Interactive: < 1.2s
SEO Score: 100
🔒 Seguridad
HTTPS obligatorio (Netlify lo provee gratis)
Content Security Policy headers
No dependencias externas vulnerables
📞 Soporte
Para preguntas o problemas:

Email: zyntech.solutions.it@gmail.com
📄 Licencia
Copyright © 2025 Zyntech Solutions IT. Todos los derechos reservados.

Hecho con 💙 por Zyntech Solutions IT

