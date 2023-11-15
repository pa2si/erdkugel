import { carouselText } from '../data';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselText = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
  };
  return (
    <Slider {...settings}>
      {carouselText.map((carouselText) => {
        const { id, src, text } = carouselText;
        return (
          <article key={id} className="pt-3">
            <p className="text-4xl  text-white text-center">{text}</p>
          </article>
        );
      })}
    </Slider>
  );
};
export default CarouselText;
