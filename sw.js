// Service worker minimale — serve solo a rendere l'app installabile (PWA)
// così la scorciatoia su Android si apre a schermo intero (senza barra indirizzi).
// Nessuna cache: i dati restano sempre presi dalla rete.

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* rete diretta */ });
