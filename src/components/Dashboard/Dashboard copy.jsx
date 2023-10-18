'use client';

import Image from 'next/image';
import styles from './Dashboard.module.css';

const Homepage = () => {
  return (
    <main className="bg-white bg-opacity-50 ">
      <div className="hidden">
        <h1>Welcome to Erdkugel</h1>
      </div>
      <div className="flex flex-col items-center h-screen relative">
        <div className={styles.logo}>
          <Image
            src="/logos/erdkugel-logo.webp"
            alt="erdkugel logo"
            fill
            quality={100}
            priority={true}
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 100vw"
          />
        </div>
      </div>
    </main>
  );
};
export default Homepage;
