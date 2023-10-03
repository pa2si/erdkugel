import './globals.css';
import { AppProvider } from '@/utils/context';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'erdkugel concept',
  description: 'erdkugel',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          {' '}
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
