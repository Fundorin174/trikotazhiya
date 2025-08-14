import React from 'react';
import { MediaItem } from '../types';

interface GallerySectionProps {
  media: MediaItem[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ media }) => {
  return (
    <section id="gallery" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Галерея</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {media.map(item => (
          <div key={item.id} className="relative">
            {item.type === 'image' ? (
              <img src={item.src} alt={item.alt || ''} loading="lazy" decoding="async" className="rounded-lg w-full h-auto" />
            ) : (
              <video src={item.src} controls preload="none" className="rounded-lg w-full h-auto" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
