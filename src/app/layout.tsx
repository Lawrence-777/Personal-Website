import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SITE_URL } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: '李梁 - 数据工程师 | AI数据工程 & 数仓建设',
    template: '%s | 李梁',
  },
  description:
    '3年数据工程经验,擅长AI训练数据生产、离线数仓0→1建设、数据质量治理。覆盖 Doris/Hive 数仓建模与 LLM 信息抽取全链路。',
  keywords: [
    '数据工程师',
    'AI数据工程',
    '数据仓库',
    'Python开发',
    'siRNA',
    '大模型训练数据',
    '数据质量治理',
    'Doris',
    'Hive',
  ],
  authors: [{ name: '李梁' }],
  creator: '李梁',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: SITE_URL,
    title: '李梁 - 数据工程师',
    description: 'AI数据工程全链路 · 数仓0→1独立交付',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '李梁个人简历',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '李梁 - 数据工程师',
    description: 'AI数据工程 & 数仓建设专家',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
