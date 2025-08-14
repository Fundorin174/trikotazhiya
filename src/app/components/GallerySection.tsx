"use client";

import React, { useRef, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { MediaItem } from '../types';

interface GallerySectionProps {
  media: MediaItem[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ media }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const prevBtn = useRef<HTMLButtonElement>(null);
  const nextBtn = useRef<HTMLButtonElement>(null);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      if (prevBtn.current) prevBtn.current.disabled = !emblaApi.canScrollPrev();
      if (nextBtn.current) nextBtn.current.disabled = !emblaApi.canScrollNext();
    };
    emblaApi.on('select', onSelect);
    onSelect();
    // Автосмена слайдов
    const interval = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 5000);
    return () => {
      emblaApi.off('select', onSelect);
      clearInterval(interval);
    };
  }, [emblaApi]);

  return (
    <section id="gallery" className="py-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Галерея</h2>
      <div className="relative max-w-4xl mx-auto h-[500px]">
        <div className="overflow-hidden rounded-lg h-full" ref={emblaRef}>
          <div className="flex h-full items-center">
            {media.map(item => (
              <div className="min-w-0 flex-[0_0_100%] px-2 h-full flex items-center justify-center" key={item.id}>
                {item.type === 'image' ? (
                  <img src={item.src} alt={item.alt || ''} loading="lazy" decoding="async" className="max-h-full max-w-full object-contain mx-auto" />
                ) : (
                  <video src={item.src} controls preload="none" className="max-h-full max-w-full object-contain mx-auto" />
                )}
              </div>
            ))}
          </div>
        </div>
        <button
          ref={prevBtn}
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#15B4B1] text-white rounded-full p-2 shadow-lg hover:bg-[#E63946] transition z-10"
          aria-label="Предыдущее фото"
        >
          &#8592;
        </button>
        <button
          ref={nextBtn}
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#15B4B1] text-white rounded-full p-2 shadow-lg hover:bg-[#E63946] transition z-10"
          aria-label="Следующее фото"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default GallerySection;
