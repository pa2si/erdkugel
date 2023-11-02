import Hero from '@/app/_components/Homepage/_components/Hero/Hero';
import SectionOne from '@/app/_components/Homepage/_components/SectionOne/SectionOne';
import StudioWebsiteLiink from './_components/StudioWebsiteLiink';
import AnimatedText from '@/utils/AnimatedText';

const Homepage = () => {
  return (
    <main>
      <h1 className="sr-only">Welcome to Erdkugel</h1>
      <Hero />
      <SectionOne />
      <AnimatedText
        text="Helaergaer aergaerg aeaergaer aergaerg aerg aerg "
        className="text´[200px] h-screen bg-white"
      />
      {/*       <StudioWebsiteLiink /> */}
    </main>
  );
};

export default Homepage;
