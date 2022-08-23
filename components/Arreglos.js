import React from "react";
import CurveBottom from "./CurveBottom";
import CurveTop from "./CurveTop";
import Section from "./Section";
import aguacandyData from "../data/aguacandyData";
import { useState } from "react";
import Slider from "./Slider";

const Arreglos = () => {
  const [items] = useState(aguacandyData.arreglos);

  return (
    <Section id="arreglos" className="section section--main">
      <CurveTop />
      <h1 className="section__title candy">Somos tus Complices</h1>
      <p className="section__text">
        Porque no hay nada más dulce que sacarle una sonrisa a nuestros seres
        queridos. Nos volvemos tus complices ideales para sorprender con
        nuestros candydetalles únicos e inolvidables!
      </p>
      <Slider elements={items} />
      <CurveBottom />
    </Section>
  );
};

export default Arreglos;
