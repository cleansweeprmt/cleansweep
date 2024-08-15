import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { services } from "../(services)/data";
import Link from "next/link";

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
            <Link href={`/services/${card.slug}`}>
            <div
              className="bg-white p-6 rounded shadow h-[348px] bg-cover bg-top relative"
              style={{ backgroundImage: `url(${card.img})` }}
            >
              <div></div>
              <h1 className=" font-extrabold text-white text-2xl absolute bottom-8">
                {card.title}
              </h1>
            </div></Link>
          </div>
        ))}
      </Slider>
      </div>
      <div className="block lg:hidden">
      <Slider {...settingsMobile}>
      {services.map((card, index) => (
          <div key={index} className="p-4">
            <div
              className="bg-white p-4 rounded shadow h-[348px] bg-cover bg-top flex justify-between items-end relative"


              style={{ backgroundImage: `url(${card.img})` }}
            >
                <div className="bg-transparent h-full w-full absolute top-0 left-0  hover:bg-[#0C9494] hover:opacity-50 flex items-center text-transparent hover:text-white justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 z-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>

                </div>
                <div>
                <a className=" font-extrabold text-white text-2xl cursor-pointer " href={`/services/${card.title}`}>
                {card.title}
              </a>
                    </div>
                
           
              
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
