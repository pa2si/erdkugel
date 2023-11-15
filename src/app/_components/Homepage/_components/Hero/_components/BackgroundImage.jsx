import Image from 'next/image';

const BackgroundImage = () => {
  return (
    <div className="w-full h-full absolute bottom-0  z-10  object-cover opacity-60">
      <Image
        src="/images/bg-moon.webp"
        alt="erdkugel logo moon"
        width="0"
        height="0"
        priority={true}
        sizes="100vw"
        className="w-full h-full object-cover overflow-visible "
      />
      {/* White to transparent gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full  bg-white/30 "></div>
    </div>
  );
};
export default BackgroundImage;
