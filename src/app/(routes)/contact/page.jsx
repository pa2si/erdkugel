export const metadata = {
  title: 'contact',
  description:
    ' find here the contacts for erdkugel lab and erdkugel studio berlin',
};

import Contacts from './_components/Contacts';
import TitleHOne from '@/utils/TitleHOne';

const Page = () => {
  return (
    <main className="pt-20 min-h-screen container max-w-screen-lg mx-auto">
      <div
        className=" flex justify-center underline decoration-erdkugel-text decoration-2 underline-offset-8"
        id="transNav"
      >
        <TitleHOne text="contact" />
      </div>
      {/*      <section className="pt-16 text-center ">
        <h1>contact</h1>
        <div className="title__underline"></div>
      </section> */}
      <Contacts />
    </main>
  );
};

export default Page;
