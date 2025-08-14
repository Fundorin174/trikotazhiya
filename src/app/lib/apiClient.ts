import { MediaItem } from '../types';

const YANDEX_MEDIA: MediaItem[] = [
    {
    id: '1',
    src: 'https://downloader.disk.yandex.ru/preview/8f78b2b18c526b53f273303fe36b6c99a837b0cb0a2ab8db2400a75f0307ad7f/689e1207/swKz-TdRfWS7UzVLRxs2-RxLEl9k4LBNAdOoEBwRjXeSAGG_tE_qkb1vTqDabINQ50UgpgoU3xE2te7pZgyOdA%3D%3D?uid=0&filename=004.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048',
    type: 'image',
    alt: 'Трикотажия 4',
  },
  {
    id: '2',
    src: 'https://downloader.disk.yandex.ru/preview/f1b09570b8789b03c77c1f23747c8449819d71e2268bd6842c58d8ea213421bc/689e11e0/jkcwiiJ6SjwEeh4LaBafO6thN8JPy2gJ4A6gR4R6RZrzrbLfvKgC9Qx7pOxK4KA1Ei5kji6aXkqHRzk2OTsoTg%3D%3D?uid=0&filename=001.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048',
    type: 'image',
    alt: 'Трикотажия 1',
  },
  {
    id: '3',
    src: 'https://downloader.disk.yandex.ru/preview/ea0d7abdc763a3dcec02e29163a2a9456237301ec5eb85534b7a59f3192359b5/689e11ed/hVHXUcx4inCE2elrfrRVmlPqeg2wLCfmatej6HnQLemmYugS2kQfhzS0ZfQvbXQ9sp7kCn9dpTAegak9Ztl1DQ%3D%3D?uid=0&filename=002.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048',
    type: 'image',
    alt: 'Трикотажия 2',
  },
  {
    id: '4',
    src: 'https://downloader.disk.yandex.ru/preview/b0152151c48e8115c39f9e7ec7110e32795d930039e7d4b2ce2a4032a5361743/689e11fa/NRrtFihSbjoCgBrBNa3mZ5scrOWuvbUrB_H0VMIZ5CI8mgsAbZo46RTpcpV0Ss88Rm1jxTh9nQqdnoe3rlFJuQ%3D%3D?uid=0&filename=003.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048',
    type: 'image',
    alt: 'Трикотажия 3',
  },
  {
    id: '5',
    src: 'https://downloader.disk.yandex.ru/preview/5c914f1ee952ccf73e24c182cda9dbfa64c7607ca2e9f62dc2507415e5587908/689e1215/uzAl7REqHkInT-ZYUCbKGigjatQPAriepmJXt2nyWpdliwx7rczZccgbb-rx4PJGAZG8B9sNW8CG-RfrI_ag2A%3D%3D?uid=0&filename=005.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048',
    type: 'image',
    alt: 'Трикотажия 5',
  },
];

export async function fetchGalleryMedia(): Promise<MediaItem[]> {
  return YANDEX_MEDIA;
}
