import TitleHTwo from '@/utils/TitleHTwo';
import StudioOffersList from './_components/StudioOffersList';

const StudioBerlin = () => {
  return (
    <section className="min-h-screen w-screen bg-slate-50">
      <div className=" w-4/5 mx-auto pt-20  ">
        <TitleHTwo text="studio berlin" />
        <StudioOffersList />
      </div>
    </section>
  );
};
export default StudioBerlin;
