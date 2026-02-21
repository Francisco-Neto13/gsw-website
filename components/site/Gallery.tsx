"use client";

import { useRef, useEffect, useState, useCallback } from 'react';
import { supabase } from '@/lib/supabase';

interface Photo {
  id?: number;
  src: string;
  thumb_src?: string;
  title: string;
  description?: string;
  ordem?: number;
}

export default function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const { data, error } = await supabase
          .from('galeria')
          .select('id, src, thumb_src, title, description, ordem')
          .order('ordem', { ascending: true });

        if (error) throw error;
        if (data) setPhotos(data);
      } catch (error) {
        console.error("Erro ao carregar galeria:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos();
  }, []);

  const selectedPhoto = selectedPhotoIndex !== null ? photos[selectedPhotoIndex] : null;

  const goToNext = useCallback(() => {
    setSelectedPhotoIndex((prev) =>
      prev !== null ? (prev + 1) % photos.length : null
    );
  }, [photos.length]);

  const goToPrev = useCallback(() => {
    setSelectedPhotoIndex((prev) =>
      prev !== null ? (prev - 1 + photos.length) % photos.length : null
    );
  }, [photos.length]);

  useEffect(() => {
    if (photos.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '100px', threshold: 0.1 }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [photos]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      else if (e.key === 'ArrowRight') goToNext();
      else if (e.key === 'ArrowLeft') goToPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, goToNext, goToPrev]);

  return (
    <section id="galeria" className="relative py-16 sm:py-32 px-4 sm:px-6 bg-black overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom,rgba(113,22,173,0.03)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-20 text-center reveal-on-scroll">
          <span className="block mb-3 sm:mb-4 text-xs font-bold tracking-[0.6em] uppercase text-gsw">
            Memórias Eternas
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white mb-4 sm:mb-8">
            Galeria dos <span className="text-gsw">Guardiões</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto italic leading-relaxed text-sm sm:text-base px-2">
            "Cada imagem conta uma história, cada momento eternizado na memória dos Guardiões."
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gsw" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            {photos.map((photo, index) => (
              <div
                key={photo.id ?? index}
                className="group relative aspect-video rounded-xl overflow-hidden bg-zinc-900 cursor-pointer will-change-transform hover:scale-[1.02] transition-transform duration-200"
                onClick={() => setSelectedPhotoIndex(index)}
              >
                <img
                  src={photo.thumb_src || photo.src}
                  alt={photo.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3 sm:p-4">
                  <h3 className="text-white font-bold text-xs sm:text-sm mb-1">{photo.title}</h3>
                  {photo.description && (
                    <p className="text-zinc-300 text-xs hidden sm:block">{photo.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 sm:mt-24 text-center reveal-on-scroll">
          <p className="text-zinc-500 italic border-t border-white/5 pt-10 sm:pt-12 inline-block px-6 sm:px-12 leading-relaxed text-sm">
            "Onde houver uma batalha, haverá um{" "}
            <span className="text-gsw/60 font-bold text-sm tracking-widest uppercase">Guardião</span>.
            O legado da GsW é eterno."
          </p>
        </div>
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center p-2 sm:p-4 animate-fade-in"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/60 hover:text-white transition-colors text-3xl font-light z-50"
            onClick={() => setSelectedPhotoIndex(null)}
            aria-label="Fechar"
          >
            x
          </button>

          <button
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white z-50 bg-black/50 rounded-full p-2 sm:p-3 transition-transform duration-200 hover:scale-110"
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            aria-label="Foto anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white z-50 bg-black/50 rounded-full p-2 sm:p-3 transition-transform duration-200 hover:scale-110"
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            aria-label="Próxima foto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative w-full flex items-center justify-center"
              style={{ maxHeight: 'calc(100vh - 160px)' }}
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>

            <div className="mt-4 sm:mt-8 mb-2 sm:mb-4 text-center max-w-2xl px-4">
              <h3 className="text-lg sm:text-2xl font-black text-white mb-1 sm:mb-2">
                {selectedPhoto.title}
              </h3>
              {selectedPhoto.description && (
                <p className="text-zinc-400 italic text-xs sm:text-sm">
                  {selectedPhoto.description}
                </p>
              )}
            </div>
          </div>

          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-zinc-500 text-sm flex gap-4 items-center">
            <span className="hidden sm:inline">
              Use{" "}
              <kbd className="px-2 py-1 bg-white/10 rounded">←</kbd>{" "}
              <kbd className="px-2 py-1 bg-white/10 rounded">→</kbd>{" "}
              para navegar
            </span>
            <span className="border-l border-white/20 pl-4 hidden sm:block" />
            <span className="hidden sm:inline">
              Pressione <kbd className="px-2 py-1 bg-white/10 rounded">ESC</kbd> para fechar
            </span>
          </div>

          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-white/60 text-xs sm:text-sm font-medium">
            {selectedPhotoIndex !== null && `${selectedPhotoIndex + 1} / ${photos.length}`}
          </div>
        </div>
      )}
    </section>
  );
}