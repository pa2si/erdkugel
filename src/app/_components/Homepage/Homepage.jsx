import Hero from '@/app/_components/Homepage/_components/Hero/Hero';
import SectionOne from '@/app/_components/Homepage/_components/SectionOne/SectionOne';
import StudioWebsiteLiink from './_components/StudioWebsiteLiink';

const Homepage = () => {
  return (
    <main>
      <h1 className="sr-only">Welcome to Erdkugel</h1>
      <Hero />
      <SectionOne />
      {/*       <StudioWebsiteLiink /> */}
    </main>
  );
};

export default Homepage;
