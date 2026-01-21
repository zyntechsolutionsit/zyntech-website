// =========================
// DATA - Contenido del sitio
// =========================

const SERVICES_DATA = [
    {
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>`,
        title: 'Desarrollo Backend',
        description: 'Arquitecturas robustas y escalables con las últimas tecnologías'
    },
    {
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
            </svg>`,
        title: 'Soluciones Cloud',
        description: 'Migración y optimización en plataformas AWS, Azure y Google Cloud'
    },
    {
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
            </svg>`,
        title: 'Bases de Datos',
        description: 'Diseño, implementación y optimización de bases de datos'
    },
    {
        icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
            </svg>`,
        title: 'APIs & Microservicios',
        description: 'Desarrollo de APIs RESTful y arquitecturas de microservicios'
    }
];

const TECHNOLOGIES_DATA = [
    'Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB',
    'Docker', 'Kubernetes', 'AWS', 'Git', 'Redis',
    'Express', 'FastAPI', 'Spring Boot', 'GraphQL', 'Nginx'
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
            <div class="service-card" style="animation-delay: ${index * 0.1}s">
                <div class="service-icon">
                    ${service.icon}
                </div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `).join('');
    },

    // Renderiza las tecnologías
    renderTechnologies() {
        const container = document.getElementById('tech-container');
        if (!container) return;
        
        container.innerHTML = TECHNOLOGIES_DATA.map((tech, index) => `
            <div class="tech-badge" style="animation-delay: ${index * 0.05}s">
                ${tech}
            </div>
        `).join('');
    },

    // Inicializa todos los componentes
    init() {
        this.renderServices();
        this.renderTechnologies();
    }
};

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Components.init());
} else {
    Components.init();
}