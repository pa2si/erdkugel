import Header from '@/app/(routes)/_components/Header/Header';

export default function NestedRoutesLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
