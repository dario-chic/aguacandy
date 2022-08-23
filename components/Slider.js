import React, { useRef } from "react";
import Arrow from "../assets/Arrow";
import Point from "../assets/Point";
import useSlider from "../hooks/useSlider";
import Slide from "./Slide";

const Slider = ({ elements }) => {
  const elementList = useRef([]);

  const { currentItem, handleRight, handleLeft } = useSlider(elementList);

  return (
    <div className="slider">
      <div className="slider__tools">
        <Arrow id="slider__arrow-r" onClick={handleRight} />
        <Arrow id="slider__arrow-l" onClick={handleLeft} />
        <div className="slider__dots">
          {elements.map((el, i) => (
            <Point
              id="slider__dot"
              key={i}
              color={i === currentItem.number ? "#e15d8d" : "#603c5f"}
            />
          ))}
        </div>
      </div>
      <div className="slider__container">
        {elements.map((e, i) => (
          <Slide
            key={i}
            element={e}
            reference={(el) => (elementList.current[i] = el)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
