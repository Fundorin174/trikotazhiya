"use client";

import React, { useRef, useEffect, useCallback, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { MediaItem } from '../types';

interface GallerySectionProps {
  media: MediaItem[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ media }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const prevBtn = useRef<HTMLButtonElement>(null);
  const nextBtn = useRef<HTMLButtonElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [autoPlayPaused, setAutoPlayPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoJustEnded, setVideoJustEnded] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setVideoJustEnded(false);
      if (prevBtn.current) prevBtn.current.disabled = !emblaApi.canScrollPrev();
      if (nextBtn.current) nextBtn.current.disabled = !emblaApi.canScrollNext();
      const selectedIdx = emblaApi.selectedScrollSnap();
      setActiveIndex(selectedIdx);
      // Если активный слайд — видео, останавливаем автосмену и запускаем видео
      if (media[selectedIdx]?.type === 'video') {
        setAutoPlayPaused(true);
        const video = videoRefs.current[selectedIdx];
        if (video && !videoJustEnded) {
          video.currentTime = 0;
          video.play();
        }
      } else {
        // Если фото — автосмена разрешена
        setAutoPlayPaused(false);
        // Остановить все видео
        videoRefs.current.forEach(video => {
          if (video) {
            video.pause();
            video.currentTime = 0;
          }
        });
      }
    };
    emblaApi.on('select', onSelect);
    onSelect();
    // Автосмена слайдов
    let interval: NodeJS.Timeout | null = null;
    if (!autoPlayPaused) {
      interval = setInterval(() => {
        if (emblaApi) emblaApi.scrollNext();
      }, 5000);
    }
    return () => {
      emblaApi.off('select', onSelect);
      if (interval) clearInterval(interval);
    };
  }, [emblaApi, autoPlayPaused, media, videoJustEnded]);

  // После окончания видео — включить автосмену и оставить видео на паузе
  const handleVideoEnded = useCallback(() => {
    setAutoPlayPaused(false);
    setVideoJustEnded(true);
    // Оставить видео на паузе и сбросить на начало, не запускать повторно
    const video = videoRefs.current[activeIndex];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [activeIndex, emblaApi]);

  return (
    <section id="gallery" className="py-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Галерея</h2>
      <div className="relative max-w-4xl mx-auto h-[500px]">
        <div className="overflow-hidden rounded-lg h-full" ref={emblaRef}>
          <div className="flex h-full items-center">
            {media.map((item, idx) => (
              <div className="min-w-0 flex-[0_0_100%] px-2 h-full flex items-center justify-center" key={item.id}>
                {item.type === 'photo' ? (
                  <Image
                    src={item.src}
                    alt={item.alt || ''}
                    width={800}
                    height={500}
                    className="max-h-full max-w-full object-contain mx-auto"
                    priority={idx === 0}
                  />
                ) : (
                  <video
                    ref={el => {
                      videoRefs.current[idx] = el || null;
                    }}
                    src={item.src}
                    controls
                    preload="none"
                    muted
                    className="max-h-full max-w-full object-contain mx-auto"
                    onEnded={handleVideoEnded}
                  />
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
