import { MediaItem } from '../types';


const SLIDER_MEDIA: MediaItem[] = [
  {
    id: 'video-main',
    src: '/images/slider/video.mp4',
    type: 'video',
    alt: 'Видео главная',
  },
  {
    id: 'photo-1',
    src: '/images/slider/photo_2025-09-05_11-44-09.jpg',
    type: 'photo',
    alt: 'Трикотажия 1',
  },
  {
    id: 'photo-2',
    src: '/images/slider/photo_2025-09-05_11-44-09 (2).jpg',
    type: 'photo',
    alt: 'Трикотажия 2',
  },
  {
    id: 'photo-3',
    src: '/images/slider/photo_2025-09-05_11-46-38.jpg',
    type: 'photo',
    alt: 'Трикотажия 3',
  },
  {
    id: 'photo-4',
    src: '/images/slider/photo_2025-09-05_14-01-40.jpg',
    type: 'photo',
    alt: 'Трикотажия 4',
  },
  {
    id: 'photo-5',
    src: '/images/slider/photo_2025-09-05_14-01-44.jpg',
    type: 'photo',
    alt: 'Трикотажия 5',
  },
  {
    id: 'photo-6',
    src: '/images/slider/photo_2025-09-05_14-01-50.jpg',
    type: 'photo',
    alt: 'Трикотажия 6',
  },
  {
    id: 'photo-7',
    src: '/images/slider/photo_2025-09-05_14-01-54.jpg',
    type: 'photo',
    alt: 'Трикотажия 7',
  },
  {
    id: 'video-1',
    src: '/images/slider/video_2025-09-05_14-01-24.mp4',
    type: 'video',
    alt: 'Видео 1',
  },
  {
    id: 'video-2',
    src: '/images/slider/video_2025-09-05_14-01-30.mp4',
    type: 'video',
    alt: 'Видео 2',
  },
];

export async function fetchGalleryMedia(): Promise<MediaItem[]> {
  return SLIDER_MEDIA;
}
