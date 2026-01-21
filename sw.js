// Service Worker para Zyntech Solutions IT
// Versión de caché - incrementar cuando hagas cambios
const CACHE_VERSION = 'zyntech-v1.0.0';
const CACHE_NAME = `${CACHE_VERSION}-static`;
const DYNAMIC_CACHE = `${CACHE_VERSION}-dynamic`;

// Archivos a cachear inmediatamente
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/js/app.js',
    '/js/components.js',
    '/manifest.json',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap'
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
    console.log('[SW] Instalando Service Worker...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[SW] Cacheando archivos estáticos');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => {
                console.log('[SW] Instalación completa');
                return self.skipWaiting(); // Activar inmediatamente
            })
            .catch(error => {
                console.error('[SW] Error en instalación:', error);
            })
    );
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
    console.log('[SW] Activando Service Worker...');
    
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames
                        .filter(name => name.startsWith('zyntech-') && name !== CACHE_NAME && name !== DYNAMIC_CACHE)
                        .map(name => {
                            console.log('[SW] Eliminando caché antigua:', name);
                            return caches.delete(name);
                        })
                );
            })
            .then(() => {
                console.log('[SW] Activación completa');
                return self.clients.claim(); // Tomar control inmediatamente
            })
    );
});

// Estrategia de caché: Cache First, luego Network
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Ignorar solicitudes no-HTTP
    if (!request.url.startsWith('http')) {
        return;
    }

    // Estrategia Cache First para archivos estáticos
    if (STATIC_ASSETS.some(asset => request.url.includes(asset))) {
        event.respondWith(
            caches.match(request)
                .then(cachedResponse => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    return fetch(request)
                        .then(response => {
                            return caches.open(CACHE_NAME)
                                .then(cache => {
                                    cache.put(request, response.clone());
                                    return response;
                                });
                        });
                })
                .catch(() => {
                    // Página offline de respaldo
                    if (request.destination === 'document') {
                        return caches.match('/index.html');
                    }
                })
        );
        return;
    }

    // Estrategia Network First con fallback a caché para contenido dinámico
    event.respondWith(
        fetch(request)
            .then(response => {
                // Solo cachear respuestas exitosas
                if (!response || response.status !== 200 || response.type === 'error') {
                    return response;
                }

                const responseToCache = response.clone();

                caches.open(DYNAMIC_CACHE)
                    .then(cache => {
                        // Limitar tamaño del caché dinámico
                        cache.put(request, responseToCache);
                        limitCacheSize(DYNAMIC_CACHE, 50);
                    });

                return response;
            })
            .catch(() => {
                // Fallback a caché si la red falla
                return caches.match(request)
                    .then(cachedResponse => {
                        if (cachedResponse) {
                            return cachedResponse;
                        }
                        
                        // Página offline genérica
                        if (request.destination === 'document') {
                            return caches.match('/index.html');
                        }
                    });
            })
    );
});

// Función auxiliar para limitar el tamaño del caché
function limitCacheSize(cacheName, maxItems) {
    caches.open(cacheName)
        .then(cache => {
            cache.keys()
                .then(keys => {
                    if (keys.length > maxItems) {
                        cache.delete(keys[0])
                            .then(() => limitCacheSize(cacheName, maxItems));
                    }
                });
        });
}

// Manejar mensajes del cliente
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'CLEAR_CACHE') {
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(name => caches.delete(name))
            );
        }).then(() => {
            event.ports[0].postMessage({ success: true });
        });
    }
});

// Sincronización en segundo plano (para envío de formularios offline)
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-messages') {
        event.waitUntil(syncMessages());
    }
});

async function syncMessages() {
    // Aquí implementarías la lógica para enviar mensajes pendientes
    // cuando se recupere la conexión
    console.log('[SW] Sincronizando mensajes pendientes...');
}