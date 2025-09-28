import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Трикотажия — магазин трикотажных тканей в Воронеже',
  description: 'Широкий выбор трикотажных тканей по доступным ценам. Воронеж, улКольцовская, 68',
  keywords: 'трикотажные полотна, ткани, купить трикотажные полотна, магазин тканей, трикотаж в рулоне, магазин тканей в Воронеже, трикотаж Воронеж, ткани Воронеж, кулирка, футер, кашкорсе, пике, капитоний, рибана, яркие принты, трикотажные полотна, ткани в Воронеже дешего, ткани в Воронеже купить, магазин тканей Воронеж, трикотажия, купить ткань для шитья, ткани для шитья, трикотажные ткани для шитья, магазин тканей для шитья, магазин тканей для шитья в Воронеже',
  openGraph: {
    title: 'Трикотажия',
    description: 'Качественный трикотаж для шитья и производства',
    url: 'https://трикотажия.рф',
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
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="text-gray-900">
        {children}
      </body>
    </html>
  );
}
