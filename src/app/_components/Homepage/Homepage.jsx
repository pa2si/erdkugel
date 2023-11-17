import Branches from './_components/Branches/Branches';
import UnderConstruction from './_components/UnderConstruction/UnderConstruction';

const Homepage = () => {
  return (
    <main className="flex-grow">
      <h1 className="sr-only">Welcome to Erdkugel</h1>
      <Branches />
      <UnderConstruction />
    </main>
  );
};

export default Homepage;
