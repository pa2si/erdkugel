import carouselText from './data';
import Slider from 'react-slick';

const CarouselText = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {carouselText.map((carouselText) => {
        const { id, text } = carouselText;
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
