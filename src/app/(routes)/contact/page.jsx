export const metadata = {
  title: 'contact',
  description:
    ' find here the contacts for erdkugel lab and erdkugel studio berlin',
};

import Contacts from './_components/Contacts';

const Page = () => {
  return (
    <main className="pt-3 sm:h-screen">
      <section className="pt-16 text-center ">
        <h1>contact</h1>
        <div className="title__underline"></div>
      </section>
      <Contacts />
    </main>
  );
};

export default Page;
