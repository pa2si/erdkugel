import Image from 'next/image';
import { motion, useTransform, useScroll } from 'framer-motion';

const DialogueHeading = () => {
  const { scrollYProgress } = useScroll();

  const textYValue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, -200, -600 * 2]
  );

  const scaleBigger = useTransform(scrollYProgress, [0, 0.6, 1], [0.2, 1, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.6]);

  return (
    <motion.article
      className=" h-screen "
      style={{ y: textYValue, scale: scaleBigger, opacity: textOpacity }}
    >
      {/*       <div className=" flex justify-center h-40 w-auto">
        <Image
          src="/images/jasper-benning-Tnk-ksP8Aqs-unsplash.webp"
          alt="dialogue waveform"
          width="0"
          height="0"
          sizes="100vw"
          style={{
            objectFit: 'cover',
            width: '13%',
            height: '100%',
            scale: 1.12,
          }}
          className="rounded-full "
        />
      </div> */}

      <div className="  flex flex-col mx-auto w-3/4 mt-6 ">
        <h2 className="text-center text-6xl sm:leading-tight">
          <span className="text-white">erdkugel</span> stands for
          <span className="text-yellow-300 "> SOUND POST PRODUCTION </span>
          and
          <span className="text-orange-900"> DIALOGUE EDITING </span>
          <span className="text-white"> wizardry</span>
        </h2>
      </div>
    </motion.article>
  );
};
export default DialogueHeading;
