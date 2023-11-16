import './globals.css';
import Header from './_components/Header/Header';
import Footer from '@/app/_components/Footer/Footer';

import { AppProvider } from '@/utils/context';

export const metadata = {
  title: {
    default: 'erdkugel',
    template: '%s | erdkugel',
  },
  description: 'erdkugel is ',
  keywords: [
    'sound post production, studio constuction, studio design, cinema sound, dialogue edit, sound mixing, sound recording, voice recording, adr, dubbing, sound design',
  ],
  category: 'sound',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen bg-slate-50">
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
