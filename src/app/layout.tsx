import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rasastra — Software House',
  description:
    'Premium software house based in Malang, Indonesia. We design and build custom websites, UI/UX interfaces, and games for startups and businesses.',
  openGraph: {
    title: 'Rasastra — Software House',
    description: 'From concept to launch. We craft digital products that drive results.',
    url: 'https://rasastra.vercel.app',
    siteName: 'Rasastra',
    images: [{ url: 'https://rasastra.vercel.app/assets/images/logo.png' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rasastra — Software House',
    description: 'From concept to launch. We craft digital products that drive results.',
  },
  icons: { icon: '/assets/images/logo.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
