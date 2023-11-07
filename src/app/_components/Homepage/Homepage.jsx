import Hero from '@/app/_components/Homepage/_components/Hero/Hero';
import About from './_components/About/About';
import StudioBerlin from './_components/StudioBerlin/StudioBerlin';
import CatchPhrase from '@/app/_components/Homepage/_components/Catchphrase/CatchPhrase';

const Homepage = () => {
  return (
    <main>
      <h1 className="sr-only">Welcome to Erdkugel</h1>
      <Hero />
      {/*   <StudioBerlin />
      <CatchPhrase />
      <About /> */}
    </main>
  );
};

export default Homepage;
