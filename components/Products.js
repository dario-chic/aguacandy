import React from "react";
import { useState } from "react";
import Section from "./Section";
import Slider from "./Slider";
import aguacandyData from "../data/aguacandyData";

const Products = () => {
  const [items] = useState(aguacandyData.productos);

  return (
    <Section className="section section--products candy" id="productos">
      <h1 className="section__title candy">Productos</h1>
      <p className="section__text">
        Contamos con productos nacionales e importados de la mejor calidad y con
        los mejores precio de todo el mercado!.
        <br />
        <br />A continuación te mostramos una lista de los productos mas
        vendidos de nuestra tienda, para ver el catalogo completo,
        <a className="remark" href="#/" target="_blank" rel="noreferrer">
          {" "}
          contactanos!
        </a>
      </p>
      <Slider elements={items} />
    </Section>
  );
};

export default Products;
