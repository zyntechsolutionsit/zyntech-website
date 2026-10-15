// =========================
// DATA - Contenido del sitio
// =========================

const SERVICES_DATA = [
    // Servicios de Desarrollo
    {
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>`,
        title: 'Desarrollo Backend',
        description: 'APIs robustas, microservicios y arquitecturas escalables con las últimas tecnologías'
    },
    {
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>`,
        title: 'Desarrollo Web a Medida',
        description: 'Sitios web personalizados, responsive y optimizados para tu negocio'
    },
    {
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>`,
        title: 'Desarrollo de Apps Móviles',
        description: 'Aplicaciones nativas e híbridas para iOS y Android adaptadas a tus necesidades'
    },
    {
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>`,
        title: 'Desarrollo de E-Commerce',
        description: 'Tiendas online completas con pasarelas de pago y gestión de inventario'
    },
    {
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>`,
        title: 'Desarrollo de Stock a Medida',
        description: 'Sistemas de gestión de inventario personalizados para tu empresa'
    },
    
    // Servicios de Cloud e Infraestructura
    {
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
            </svg>`,
        title: 'Soluciones Cloud',
        description: 'Migración y optimización en AWS, Azure y Google Cloud Platform'
    },
    {
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
            </svg>`,
        title: 'Bases de Datos',
        description: 'Diseño, implementación y optimización de bases de datos SQL y NoSQL'
    },
    
    // Consultoría
    {
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>`,
        title: 'Consultoría Informática',
        description: 'Asesoramiento personalizado en arquitectura de software y transformación digital'
    },
    
    // Servicios Contables
    {
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>`,
        title: 'Asesoramiento Contable',
        description: 'Staff de CPA certificados para gestión contable y tributaria de tu empresa'
    },
    
    // Reportería y BI
    {
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>`,
        title: 'Reportería y Business Intelligence',
        description: 'Dashboards personalizados en Power BI, Tableau y herramientas de análisis de datos'
    },
    
    // Infraestructura Física
    {
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
            </svg>`,
        title: 'Cableado Estructurado',
        description: 'Instalación y certificación de redes de datos categoría 6, 6A y fibra óptica'
    },
    {
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>`,
        title: 'Cámaras de Seguridad',
        description: 'Sistemas CCTV IP con almacenamiento local y en la nube, acceso remoto 24/7'
    },
    {
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
            </svg>`,
        title: 'Sistemas de Parking',
        description: 'Control de acceso vehicular automatizado con barreras y lectores RFID'
    },
    {
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
            </svg>`,
        title: 'Sistemas Biométricos',
        description: 'Control de acceso y asistencia con reconocimiento facial y huella dactilar'
    }
];


// =========================
// DATA - Productos propios
// =========================
// A diferencia de SERVICES_DATA (lo que hacemos por encargo), esto son
// productos terminados de Zyntech que cualquiera puede usar hoy. Por eso viven
// en su propia sección y cada uno lleva enlace: no se contrata, se entra.
//
// Para añadir el siguiente producto basta con otro objeto en esta lista.

// ----------------------------------------------------------------------------
// AQUI VA EL ENLACE DE CERTI
// ----------------------------------------------------------------------------
// CERTI ya no vive dentro de este sitio: es un proyecto de Netlify aparte, para
// que publicar una cosa no obligue a republicar la otra.
//
// Pon abajo la direccion que te dio Netlify, sin barra al final. Es el UNICO
// sitio que hay que tocar: de aqui salen todos los enlaces de la tarjeta.
//
// Mientras este vacio, la seccion de Productos NO se pinta. Es a proposito:
// vale mas no ensenar el producto que ensenarlo con botones que no llevan a
// ninguna parte.

const CERTI_URL = 'https://certi-reservas.netlify.app';


const PRODUCTS_DATA = [
    {
        id: 'certi',
        name: 'CERTI',
        tagline: 'Reservas y agenda para tu negocio',
        description: 'Tus clientes reservan solos desde el celular y tu controlas la agenda, el personal y los turnos del dia. Barberias, spas, consultorios, talleres, veterinarias y mas.',
        badge: 'Disponible',
        // Los logos se sirven desde este mismo sitio y no desde el de cada
        // producto: si CERTI se cayera, esta seccion seguiria pintandose.
        logo: 'assets/producto-certi.png',
        highlights: ['Reserva en 3 toques', 'Varias sucursales', 'Turnos sin cita previa'],
        actions: [
            { label: 'Conocer CERTI', href: CERTI_URL + '/', primary: true, external: true },
            { label: 'Descargar la app', href: 'https://play.google.com/store/apps/details?id=com.turnosync.app', external: true }
        ]
    },
    {
        id: 'kaudex',
        name: 'KAUDEX',
        tagline: 'Tus finanzas personales, sin internet',
        description: 'Controla ingresos, gastos y deudas desde el celular. Funciona sin conexion: los datos viven en tu telefono, no en la nube. Pensado para Latinoamerica, con 17 monedas.',
        badge: 'Disponible',
        logo: 'assets/producto-kaudex.png',
        highlights: ['Funciona sin internet', '17 monedas', 'Control de deudas'],
        // Solo la app: KAUDEX no tiene sitio propio, asi que una segunda accion
        // seria un boton de relleno.
        actions: [
            { label: 'Descargar la app', href: 'https://play.google.com/store/apps/details?id=com.monetariax.app', primary: true, external: true }
        ]
    }
];

// =========================
// COMPONENTS - Renderizado
// =========================

const Components = {
    // Renderiza las tarjetas de servicios
    renderServices() {
        const container = document.getElementById('services-container');
        if (!container) return;
        
        container.innerHTML = SERVICES_DATA.map((service, index) => `
            <div class="service-card" style="animation-delay: ${index * 0.05}s">
                <div class="service-icon">
                    ${service.icon}
                </div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `).join('');
    },

    // Renderiza las tarjetas de productos
    renderProducts() {
        const container = document.getElementById('products-container');
        if (!container) return;

        // Sin direccion configurada no hay nada que ensenar. Se esconde la
        // seccion entera, no solo las tarjetas, para que no quede un titulo
        // flotando sobre un hueco vacio.
        if (!CERTI_URL) {
            const seccion = document.getElementById('productos');
            if (seccion) seccion.style.display = 'none';

            // Y todo lo que apunta a ella: el enlace del menu y el boton de
            // la portada. Un enlace que baja a una seccion escondida deja la
            // pagina quieta y parece que esta rota.
            document.querySelectorAll('a[href="#productos"]')
                .forEach(a => a.style.display = 'none');
            return;
        }

        container.innerHTML = PRODUCTS_DATA.map((p, i) => {
            const highlights = p.highlights
                .map(h => `<li>${h}</li>`)
                .join('');

            const actions = p.actions.map(a => `
                <a href="${a.href}"
                   class="btn ${a.primary ? 'btn-primary' : 'btn-secondary'}"
                   ${a.external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                    ${a.label}
                </a>
            `).join('');

            return `
                <article class="product-card" style="animation-delay:${i * 0.1}s">
                    <div class="product-visual">
                        <img class="product-logo" src="${p.logo}" alt="${p.name}" loading="lazy">
                        <span class="product-badge">${p.badge}</span>
                    </div>
                    <div class="product-body">
                        <h3 class="product-name">${p.name}</h3>
                        <p class="product-tagline">${p.tagline}</p>
                        <p class="product-description">${p.description}</p>
                        <ul class="product-highlights">${highlights}</ul>
                        <div class="product-actions">${actions}</div>
                    </div>
                </article>
            `;
        }).join('');
    },

    // Inicializa todos los componentes
    init() {
        this.renderServices();
        this.renderProducts();
    }
};

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Components.init());
} else {
    Components.init();
}