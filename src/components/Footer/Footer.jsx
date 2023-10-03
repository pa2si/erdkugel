import Image from 'next/image';
import landingData from '@/components/Footer/data';

const Footer = () => {
  const {
    firma,
    strasse,
    plz,
    geschaeftsfuehrer,
    email,
    tel,
    linkedInText,
    impressum,
    datenschutz,
  } = landingData;

  return (
    <footer className="absolute md:text-lg bottom-0 w-full flex flex-col sm:flex-row justify-center sm:justify-between text-center p-4 bg-gray-800 bg-opacity-60 text-white z-50 border-t-4">
      <div className="pb-4 sm:pb-0 border-b sm:border-b-0 border-white">
        <p className="mb-1 md:mb-2">{firma}</p>
        <p className="mb-1 md:mb-2">{strasse}</p>
        <p>{plz}</p>
      </div>
      <div className="  pb-4 sm:pb-0 pt-4 sm:pt-0 border-b sm:border-b-0 border-white  ">
        <p className="mb-1 md:mb-2">{geschaeftsfuehrer}</p>
        <p className="mb-1 md:mb-2">
          <a
            href="mailto:andre@erdkugel.net"
            className="text-white hover:text-erdkugel-yellow"
          >
            {email}
          </a>
        </p>
        <p>
          <a
            href={`tel:${tel}`}
            className="text-white hover:text-erdkugel-yellow"
          >
            +49 175 7239032
          </a>
        </p>
      </div>
      <div className="pt-4 sm:pt-0">
        <p className="mb-1 md:mb-2 ">
          <a
            href="https://de.linkedin.com/company/erdkugel?trk=public_profile_topcard-current-company"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logos/In-White-26.png"
              alt="LinkedIn Logo"
              width={26}
              height={26}
              className="mr-2 inline-block align-middle"
            />
            <span className="inline-block align-middle">{linkedInText}</span>
          </a>
        </p>
        <p className="mb-1 md:mb-2 ">
          {impressum} / {datenschutz}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
