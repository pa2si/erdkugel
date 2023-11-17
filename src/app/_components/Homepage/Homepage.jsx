import Branches from './_components/Branches/Branches';

const Homepage = () => {
  return (
    <main className="flex-grow">
      <h1 className="sr-only">Welcome to Erdkugel</h1>
      <Branches />
    </main>
  );
};

export default Homepage;
