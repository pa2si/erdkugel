import TitleHTwo from '@/utils/TitleHTwo';
import Image from 'next/image';

const About = () => {
  return (
    <section className="min-h-screen flex justify-center items-center bg-slate-50  px-4 md:px-6 lg:px-8">
      <div className="container max-w-screen-lg pt-20">
        <TitleHTwo text="lab" />
        <article className="mt-7 max-w-screen-lg mx-auto text-xl md:text-2xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            magnam labore, libero deserunt possimus voluptatum officiis in
            dolore reiciendis vitae accusantium expedita neque doloremque iusto
            laudantium alias veritatis est sit maxime architecto quasi nobis.
            Voluptas inventore vitae similique quidem culpa!
          </p>
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative w-full h-64 sm:h-auto">
              <Image
                src="/images/AndreStiebe.jpg"
                alt="erdkugel text"
                width="0"
                height="0"
                sizes="100vw"
                priority={true}
                className="mx-auto object-contain w-full h-3/5"
              />
            </div>
            <div className="md:col-span-2 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur, voluptates labore adipisci hic eos sit nesciunt
              earum ducimus molestiae quam voluptas quod aperiam! Sunt, facilis
              blanditiis. Quis, maxime in facilis, veniam adipisci suscipit
              porro mollitia vero nisi omnis doloribus fugiat impedit laudantium
              soluta repellendus velit. Et minima, debitis fugiat animi quas
              voluptas cum expedita inventore vitae ullam atque beatae omnis
              unde ipsam, ex reprehenderit. Laudantium quam vitae aliquam sequi
              vero ullam laborum unde dicta, enim ex aperiam optio atque.
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
