import './globals.css';
import { AppProvider } from '@/utils/Context';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Navbar';

export const metadata = {
  title: 'erdkugel lab',
  description: 'erdkugel',
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
