import TitleHTwo from '@/utils/TitleHTwo';
import Image from 'next/image';
import StudioOffers from './_components/StudioOffers';

const StudioBerlin = () => {
  return (
    <section className="min-h-screen w-screen bg-slate-50">
      <div className=" w-4/5 mx-auto pt-20  ">
        <TitleHTwo text="studio berlin" />
        <StudioOffers />
      </div>
    </section>
  );
};
export default StudioBerlin;
