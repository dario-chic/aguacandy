import React from "react";
import WhatsappIcon from "../assets/WhatsappIcon";
import Button from "./Button";
import CurveBottom from "./CurveBottom";
import { useState } from "react";
import { useEffect } from "react";
import aguacandyData from "../data/aguacandyData";
import { useRef } from "react";
import Point from "../assets/Point";

const Header = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const [beforeImg, setBeforeImg] = useState(null);
  const images = useRef([]);

  useEffect(() => {
    images.current.forEach((el, i) => {
      el.className = "header__picture";
      if (i === currentImg) el.className = "header__picture appear-r";
      if (i === beforeImg) el.className = "header__picture  disappear-l";
    });

    setTimeout(() => {
      setBeforeImg(currentImg);
      if (currentImg === images.current.length - 1) {
        setCurrentImg(0);
        return;
      } else {
        setCurrentImg(currentImg + 1);
      }
    }, 5000);
  }, [currentImg, beforeImg, images]);

  return (
    <header className="header">
      <div className="header__container">
        <h1
          className="header__title"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          Hecho con Dulzura
        </h1>
        <p
          className="header__subtitle"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="600"
        >
          El toque de dulzura que necesitas
        </p>
        <div
          className="header__pictures"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="800"
        >
          {aguacandyData.header.map((el, i) => (
            <picture
              className="header__picture"
              key={i}
              ref={(el) => (images.current[i] = el)}
            >
              <img className="header__img" src={el.img} alt={el.text} />
              <p className="header__img-txt">{el.text}</p>
              <div className="slider__front"></div>
            </picture>
          ))}
          <div className="slider__dots">
            {aguacandyData.header.map((el, i) => (
              <Point
                id="slider__dot"
                key={i}
                color={i === currentImg ? "#45b8e5" : "#603c5f"}
              />
            ))}
          </div>
        </div>
        <div
          className="header__contact"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="1000"
        >
          <p className="header__contact-text">
            Envíanos un menaje y con gusto te atenderemos.
          </p>
          <a
            id="whatsapp-contact"
            href="https://api.whatsapp.com/send?phone=584125428031&text=Hola%20Aguacandy!%20%F0%9F%8D%AC"
            target="_blank"
            rel="noreferrer"
            style={{ visibility: "hidden" }}
          >
            whatsapp
          </a>
          <Button
            className="btn btn--header__contact"
            onClick={(e) => document.getElementById("whatsapp-contact").click()}
          >
            <WhatsappIcon id="header__contact-whatsapp" />
            Contáctanos
          </Button>
        </div>
      </div>
      <CurveBottom />
    </header>
  );
};

export default Header;
