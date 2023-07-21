import React, { useState, useEffect } from "react";
import classes from "./Carousel.module.css";
import { SliderData } from "./SliderData";
const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  });
  const length = slides.length;

  const nextSlide = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === length - 1 ? 0 : prevCurrent + 1
    );
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className={classes.slider}>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? classes.slideAct : classes.slide}
            key={index}
            style={{
              transform: `translateX(-${(index - current) * 100}%)`,
              transition: "transform 1.5s ease-in-out",
            }}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="travel img"
                className={classes.image}
              />
            )}
          </div>
        );
      })}
    </section>
  );
};
export default Carousel;
