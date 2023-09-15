import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../Assets/Imgs/img1.jpeg";
import img2 from "../../Assets/Imgs/img2.jpeg";
import img3 from "../../Assets/Imgs/img3.jpeg";
import img4 from "../../Assets/Imgs/img4.jpeg";
import img5 from "../../Assets/Imgs/img5.jpeg";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const SliderData = [
    {
      image: img1,
    },
    {
      image: img2,
    },
    {
      image: img3,
    },
    {
      image: img4,
    },
    {
      image: img5,
    },
  ];
  return (
    <div className="container p-6 mx-auto">
      <Slider {...settings}>
        {SliderData.map((img, idx) => (
          <img
            key={img.image}
            src={img.image}
            alt={`img-${idx}`}
            className="w-full h-96 lg:h-[70vh] object-scale-down"
          />
        ))}
      </Slider>
    </div>
  );
};
export default Carousel;
