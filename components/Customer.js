import React from "react";

const Customer = ({ element }) => {
  return (
    <picture className="customer">
      <img className="customer__img" src={element.img} alt={element.name}></img>
      <div className="customer__front">
        <p className="customer__text">{element.text}</p>
      </div>
    </picture>
  );
};

export default Customer;
