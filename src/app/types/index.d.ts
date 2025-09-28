export interface MediaItem {
  id: string;
  src: string;
  type: 'image' | 'video';
  alt?: string;
}
