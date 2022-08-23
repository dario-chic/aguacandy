import React from "react";
import Section from "./Section";
import aguacandyData from "../data/aguacandyData";
import { useState } from "react";
import Customer from "./Customer";
import CurveTop from "./CurveTop";

const Customers = () => {
  const [customers] = useState(aguacandyData.clientes);
  return (
    <Section className="section section--clientes">
      <CurveTop />
      <h2 className="section__title">No somos una Dulcería</h2>
      <p className="section__text">
        No somos solo una tienda de dulces o decoraciones, nuestro real trabajo
        es traer alegría y felicidad a nuestros clientes.
        <br />
        <br />Y nos enorgullece decir que siempre cumplimos con nuestros
        objetivos 🥰.
        <br />
        <br /> Pero no nos creas a nosotros, mira por ti la felicidad en el
        rostro de nuestros clientes y lo que dicen sobre nosotros!:
      </p>
      <div className="customers">
        {customers.map((el, i) => (
          <Customer key={i} element={el} />
        ))}
      </div>
    </Section>
  );
};

export default Customers;
