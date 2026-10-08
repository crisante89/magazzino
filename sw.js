// Service worker minimale per l'installabilita' (PWA).
// Carica SEMPRE la pagina dalla rete (niente cache): cosi' gli aggiornamenti
// dell'app si vedono subito, senza attendere la cache del browser.

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request, { cache: 'reload' }).catch(() => fetch(e.request)));
  }
});
