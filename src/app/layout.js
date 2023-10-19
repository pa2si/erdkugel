import './globals.css';
import { AppProvider } from '@/utils/Context';
import Footer from '@/app/_components/Footer/Footer';
import Header from '@/app/_components/Header/Header';

export const metadata = {
  title: {
    default: 'erdkugel lab',
    template: '%s | erdkugel lab',
  },
  description: 'erdkugel is ',
  keywords: [
    'sound post production, studio building, cinema sound, dialogue edit, sound mixing ',
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
      <body>
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
