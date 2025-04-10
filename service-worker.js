const cacheName = "personalize-presente-v1";
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
      .then(() => console.log("Service Worker registrado!"))
      .catch(error => console.error("Erro ao registrar o Service Worker:", error));
  }
  
  // script.js
document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("slide-track");
    const slides = Array.from(track.children);
  
    // Duplica as imagens para fazer um looping suave
    slides.forEach(slide => {
      const clone = slide.cloneNode(true);
      track.appendChild(clone);
    });
  });
  