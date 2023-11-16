import Branches from './_components/Branches/Branches';
import Modal from './_components/Branches/_components/Modal/Modal';
import UnderConstruction from './_components/UnderConstruction/UnderConstruction';

const Homepage = () => {
  return (
    <main className="flex-grow">
      <h1 className="sr-only">Welcome to Erdkugel</h1>
      <Branches />
      <Modal />
      <UnderConstruction />
    </main>
  );
};

export default Homepage;
