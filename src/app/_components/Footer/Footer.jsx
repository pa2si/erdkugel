import Companies from './_components/Companies';
import { legalData } from './data';
import Link from 'next/link';

const Footer = () => {
  const { email, imprint, privacyPolicy } = legalData;

  return (
    <footer className=" md:text-lg w-full grid grid-cols-1 sm:grid-cols-3 sm:justify-between text-center pt-1 pl-4 pr-4 pb-2 sm:pb-0 bg-black bg-opacity-80 text-white z-50 border-t-2">
      <Companies />

      <section>
        <section className=" pt-4 sm:pt-0 pb-3 sm:pb-0 flex justify-center items-center border-b sm:border-b-0 border-white">
          <p className="pb-1 sm:pb-1 md:pb-0">
            <a href={`mailto:${email}`} className="hover:text-erdkugel-yellow">
              {email}
            </a>
          </p>
        </section>

        <section className="pt-4 sm:pt-0 pb-2 sm:pb-0 flex justify-center items-center leading-4 lg:leading-5 ">
          <p className="pr-3 pb-0  text-white transition-colors duration-300 ease-in-out hover:text-erdkugel-yellow">
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
