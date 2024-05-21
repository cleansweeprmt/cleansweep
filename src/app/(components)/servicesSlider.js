import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { services } from "../(services)/data";

const ServiceSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const settingsMobile = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="py-10">
      <div className="hidden lg:block">
      <Slider {...settings}>
        {services.map((card, index) => (
          <div key={card.id} className="p-4">
            <div
              className="bg-white p-6 rounded shadow h-[348px] bg-cover bg-top relative"
              style={{ backgroundImage: `url(${card.img})` }}
            >
              <div></div>
              <h1 className=" font-extrabold text-white text-2xl absolute bottom-8">
                {card.title}
              </h1>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      <div className="block lg:hidden">
      <Slider {...settingsMobile}>
        {services.map((card, index) => (
          <div key={card.id} className="p-4">
            <div
              className="bg-white p-6 rounded shadow h-[348px] bg-cover bg-top relative"
              style={{ backgroundImage: `url(${card.img})` }}
            >
              <div></div>
              <h1 className=" font-extrabold text-white text-2xl absolute bottom-8">
                {card.title}
              </h1>
            </div>
          </div>
        ))}
      </Slider>
      </div>
     
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className=" absolute left-[45%] -bottom-12 z-10 cursor-pointer text-primary"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-[45%] -bottom-12 z-10 ml-10 cursor-pointer text-primary"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
    </div>
  );
};

export default ServiceSlider;
