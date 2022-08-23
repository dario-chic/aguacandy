import React from "react";

const Slide = (props) => {
  const { reference, element } = props;
  return (
    <picture className="slider__element" ref={reference}>
      <img className="slider__img" src={element.img} alt={element.name}></img>
      <div className="slider__front">
        <p className="slider__text">{element.name}</p>
      </div>
    </picture>
  );
};

export default Slide;
