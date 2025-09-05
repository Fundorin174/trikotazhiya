export interface MediaItem {
  id: string;
  src: string;
  alt?: string;
  type?: 'photo' | 'video';
}