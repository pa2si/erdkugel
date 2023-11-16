import TitleHTwo from '@/utils/TitleHTwo';
import BranchesList from './_components/BranchesList';

const Branches = () => {
  return (
    <section>
      {/*       <div className=" sm:w-4/5 sm:mx-auto "> */}
      <div className=" sm:w-10/11 lg:w-10/12 2xl:w-4/5  sm:mx-auto pt-20  ">
        <TitleHTwo />
        <BranchesList />
      </div>
    </section>
  );
};
export default Branches;
