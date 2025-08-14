
import { PEXELS_API_KEY, PEXELS_API_URL } from './constants';
import { MediaItem } from '../types';

interface PexelsPhoto {
  id: number;
  src: { large: string };
  alt?: string;
}

interface PexelsResponse {
  photos?: PexelsPhoto[];
}

export async function fetchGalleryMedia(): Promise<MediaItem[]> {
  const res = await fetch(PEXELS_API_URL, {
    headers: { Authorization: PEXELS_API_KEY },
    cache: 'force-cache',
  });
  if (!res.ok) return [];
  const data: PexelsResponse = await res.json();
  return (
    data.photos?.map((photo) => ({
      id: String(photo.id),
      src: photo.src.large,
      type: 'image' as const,
      alt: photo.alt,
    })) || []
  );
}
