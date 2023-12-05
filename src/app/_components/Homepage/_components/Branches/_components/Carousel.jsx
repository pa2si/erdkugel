import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { carouselImages } from './data';
import Image from 'next/image';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <section className="slick-container">
      <Slider {...settings}>
        {carouselImages.map((imageItem) => {
          const { id, image, alt, title, description } = imageItem;
          return (
            <article key={id} className="carousel-item relative">
              <Image
                src={image}
                alt={alt}
                width="0"
                height="0"
                sizes="100vw"
                priority={true}
                className="carousel-image rounded-tr-xl object-cover w-full h-full transition duration-300 ease-linear "
              />
              <div className="px-3 pb-2 carousel-info">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          );
        })}
      </Slider>
    </section>
  );
};
export default Carousel;
