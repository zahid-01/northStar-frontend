import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MotionComponent from "../Header/Animation";
import img1 from "../../Assets/Imgs/p1.jpeg";
import img2 from "../../Assets/Imgs/p2.jpeg";
import img3 from "../../Assets/Imgs/p3.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKissWinkHeart } from "@fortawesome/free-regular-svg-icons";

const Testimonial = () => {
  const testimonials = [
    {
      imageSrc: img1,
      altText: "Testimonial 1",
      name: "Basit",
      text: "The laptop exceeded my expectations with its lightning-fast performance, sleek design, and impressive battery life. A game-changer for productivity!",
    },
    {
      imageSrc: img2,
      altText: "Testimonial 2",
      name: "Mateen",
      text: "The printer delivers exceptional print quality, fast printing speed, and hassle-free connectivity. A reliable companion for all my printing needs!",
    },
    {
      imageSrc: img3,
      altText: "Testimonial 3",
      name: "Zahid",
      text: "The photocopier's sharp and vibrant reproductions, user-friendly interface, and efficient functionality make it an invaluable asset for my business. Highly recommended!",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <MotionComponent>
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold mt-6 mb-4">
        Testimonials
      </h2>
      <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8 xl:p-10">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <img
                src={testimonial.imageSrc}
                alt={testimonial.altText}
                className="rounded-full w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 mx-auto mb-4"
              />
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-2">
                {testimonial.name}
                <FontAwesomeIcon
                  icon={faKissWinkHeart}
                  style={{ marginLeft: "5px" }}
                />
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-600">
                {testimonial.text}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </MotionComponent>
  );
};

export default Testimonial;
