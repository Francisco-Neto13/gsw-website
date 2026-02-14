"use client";

import { useRef, useEffect, useState } from 'react';

interface Photo {
  src: string;
  title: string;
  description?: string;
}

export default function Gallery() {
  const photos: Photo[] = [
    { src: "/gallery/thumbs/1.webp", title: "Anti-Afk", description: "Annihilation e o tempo do AFK" },
    { src: "/gallery/thumbs/2.webp", title: "Annihilation", description: "Momentos antes do LAG" },
    { src: "/gallery/thumbs/3.webp", title: "Caça ao Tesouro", description: "Evento da P4gu" },
    { src: "/gallery/thumbs/4.webp", title: "Gambling", description: "Rodando Míticas" },
    { src: "/gallery/thumbs/5.webp", title: "Líderes", description: "Todos os nossos Heróis" },
    { src: "/gallery/thumbs/6.webp", title: "Reunião Natalina", description: "Natal 2024" },
    { src: "/gallery/thumbs/7.webp", title: "Reunião na Neve", description: "Antigo Natal" },
    { src: "/gallery/thumbs/8.webp", title: "Guerras Antigas", description: "Primeiras Guerras" },
    { src: "/gallery/thumbs/9.webp", title: "WarTeam 2024", description: "O Warteam PRIME?" },
    { src: "/gallery/thumbs/10.webp", title: "Rework das Raids", description: "Orphion virou nosso pet" },
    { src: "/gallery/thumbs/13.webp", title: "Final de Season I", description: "Season 1. O ínicio" },
    { src: "/gallery/thumbs/12.webp", title: "Final de Season II", description: "Season 2. Tempo de Canyon" },
    { src: "/gallery/thumbs/11.webp", title: "Final de Season III", description: "Season 21. Tempo da Brazucoin" },
    { src: "/gallery/thumbs/14.webp", title: "Reunião na Ilha I", description: "Comemoração Pós-evento" },
    { src: "/gallery/thumbs/15.webp", title: "Reunião na Ilha II", description: "Comemoração Pós-evento" },
    { src: "/gallery/thumbs/16.webp", title: "O Trem", description: "Faye e seu grande Trem-Crodilo" },
  ];

  const getFullImage = (thumbPath: string) => {
    return thumbPath.replace('/thumbs/', '/full/');
  };

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [visiblePhotos, setVisiblePhotos] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const selectedPhoto = selectedPhotoIndex !== null ? photos[selectedPhotoIndex] : null;

  const goToNext = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    }
  };

  const goToPrev = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
    }
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-photo-index') || '0');
          if (entry.isIntersecting) {
            setVisiblePhotos((prev) => new Set(prev).add(index));
            entry.target.classList.add('visible'); 
          }
        });
      },
      {
        root: null,
        rootMargin: '100px',
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('[data-photo-index], .reveal-on-scroll');
    elements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      else if (e.key === 'ArrowRight') goToNext();
      else if (e.key === 'ArrowLeft') goToPrev();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex]);

  return (
    <section id="galeria" className="relative py-32 px-6 bg-black overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom,rgba(113,22,173,0.03)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-20 text-center reveal-on-scroll">
          <span className="block mb-4 text-xs font-bold tracking-[0.6em] uppercase text-gsw">
            Memórias Eternas
          </span>
          <h2 className="text-5xl sm:text-7xl font-black tracking-tight text-white mb-8">
            Galeria dos <span className="text-gsw">Guardiões</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto italic leading-relaxed">
            "Cada imagem conta uma história, cada momento eternizado na memória dos Guardiões."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {photos.map((photo, index) => {
            const isVisible = visiblePhotos.has(index);

            return (
              <div
                key={index}
                data-photo-index={index}
                className="group relative aspect-video rounded-xl overflow-hidden bg-zinc-900 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                onClick={() => setSelectedPhotoIndex(index)}
              >
                {isVisible ? (
                  <>
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-bold text-sm mb-1">{photo.title}</h3>
                      {photo.description && <p className="text-zinc-300 text-xs">{photo.description}</p>}
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full bg-zinc-800/50 animate-pulse" />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-24 text-center reveal-on-scroll">
          <p className="text-zinc-500 italic border-t border-white/5 pt-12 inline-block px-12 leading-relaxed">
            "Onde houver uma batalha, haverá um <span className="text-gsw/60 font-bold text-sm tracking-widest uppercase">Guardião</span>. Onde houver uma conquista, haverá um registro. O legado da GsW é eterno."
          </p>
        </div>
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors text-3xl font-light z-50"
            onClick={() => setSelectedPhotoIndex(null)}
          > x </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-all duration-300 hover:scale-110 z-50 bg-black/50 rounded-full p-3"
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-all duration-300 hover:scale-110 z-50 bg-black/50 rounded-full p-3"
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full flex items-center justify-center" style={{ maxHeight: 'calc(100vh - 200px)' }}>
              <img
                src={getFullImage(selectedPhoto.src)}
                alt={selectedPhoto.title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
            <div className="mt-8 mb-4 text-center max-w-2xl">
              <h3 className="text-2xl font-black text-white mb-2">{selectedPhoto.title}</h3>
              {selectedPhoto.description && <p className="text-zinc-400 italic text-sm">{selectedPhoto.description}</p>}
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-500 text-sm flex gap-4 items-center">
            <span className="hidden sm:inline">Use <kbd className="px-2 py-1 bg-white/10 rounded">←</kbd> <kbd className="px-2 py-1 bg-white/10 rounded">→</kbd> para navegar</span>
            <span className="border-l border-white/20 pl-4 hidden sm:block"></span>
            <span>Pressione <kbd className="px-2 py-1 bg-white/10 rounded">ESC</kbd> para fechar</span>
          </div>
        </div>
      )}
    </section>
  );
}