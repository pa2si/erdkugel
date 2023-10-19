import Image from 'next/image';
import styles from './Dashboard.module.css';

const Homepage = () => {
  return (
    <main className="bg-white bg-opacity-10 ">
      <h1 className="hidden">Welcome to Erdkugel</h1>
      <section className="flex flex-col items-center h-screen relative">
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
      </section>
    </main>
  );
};
export default Homepage;
