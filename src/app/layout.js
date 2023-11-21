import './globals.css';
import Header from './_components/Header/Header';
import Footer from '@/app/_components/Footer/Footer';

import { AppProvider } from '@/utils/context';
import Modal from './_components/Homepage/_components/Branches/_components/Modal/Modal';

export const metadata = {
  title: {
    default: 'erdkugel',
    template: '%s | erdkugel',
  },
  description:
    "Erdkugel Lab and Erdkugel Studios Berlin: Experts in sound post-production, room and studio design, offering customized, ergonomic solutions and full-service sound editing and supervision in Berlin's Kreuzberg district.",
  keywords: [
    'erdkugel gmbh, erdkugel lab, erdkugel studio berlin, sound post production, studio construction,',
  ],
  category: 'sound',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
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
          <Modal />
        </AppProvider>
      </body>
    </html>
  );
}
