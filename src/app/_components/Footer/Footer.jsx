import Companies from './_components/Companies';
import { legalData } from './data';
import Link from 'next/link';

const Footer = () => {
  const { email, imprint, privacyPolicy } = legalData;

  return (
    <footer className=" md:text-lg bottom-0 w-full grid grid-cols-1 sm:grid-cols-3  sm:maxjustify-center sm:justify-between text-center pt-1 pl-4 pr-4 pb-2 sm:pb-0 bg-slate-700 bg-opacity-100 sm:bg-black sm:bg-opacity-50 text-white z-50 border-t-2">
      <Companies />

      <section>
        <section className="flex justify-center items-center pt-2 pb-1 sm:pt-0 sm:pb-0 border-b sm:border-b-0 border-white">
          <p className="pb-1 sm:pb-0 md:pb-0">
            <a href={`mailto:${email}`} className="hover:text-erdkugel-yellow">
              {email}
            </a>
          </p>
        </section>

        <section className="flex justify-center items-center pt-2 sm:pt-0 leading-4 lg:leading-5 ">
          <p className="pr-3 pb-0 text-white transition-colors duration-300 ease-in-out hover:text-erdkugel-yellow">
            <Link href={'/imprint'}>{imprint}</Link>
          </p>
          <p>|</p>
          <p className=" pl-3 text-white transition-colors duration-300 ease-in-out hover:text-erdkugel-yellow">
            <Link href="/privacy-policy">{privacyPolicy}</Link>
          </p>
        </section>
      </section>
    </footer>
  );
};
export default Footer;
