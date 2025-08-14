import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Трикотажия — магазин трикотажных тканей в Москве',
  description: 'Широкий выбор трикотажа по доступным ценам. Оптовая и розничная продажа. Доставка по России.',
  keywords: 'трикотаж, ткани, купить трикотаж, магазин тканей, трикотаж в рулоне',
  openGraph: {
    title: 'Трикотажия',
    description: 'Качественный трикотаж для шитья и производства',
    url: 'https://trikotazhia.ru',
    siteName: 'Трикотажия',
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="text-gray-900">
        {children}
      </body>
    </html>
  );
}
