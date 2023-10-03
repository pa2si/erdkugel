import Image from 'next/image';
import styles from './Landing.module.css';
import Link from 'next/link';

const Landing = () => {
  return (
    <>
      <div className={`${styles.wrapper} relative h-screen`}>
        <div
          className={`${styles.logo} absolute left-1/2 transform -translate-x-1/2 z-50`}
        >
          <Image
            src="/logos/erdkugel_BB_final_original.png"
            alt="erdkugel logo"
            fill={true}
            quality={100}
            priority={true}
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className={`${styles.moon} absolute inset-0 z-0`}>
          <Image
            src="/images/erdkugel-landing-background-ohne-logo.png"
            alt="Background Image"
            fill={true}
            quality={100}
            priority={true}
            style={{ objectFit: 'cover' }}
          />
        </div>
        {/*         <Link
          href="/erkugel-studios"
          className={`${styles.button} hover:bg-erdkugel-yellow text-gray-600 font-semibold py-3 px-4 border border-gray-400 rounded shadow" `}
        >
          Erdkugel Studios
        </Link> */}
      </div>
    </>
  );
};
export default Landing;
