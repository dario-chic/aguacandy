import React from "react";
import CurveBottom from "./CurveBottom";
import CurveTop from "./CurveTop";
import Section from "./Section";

const Decorations = () => {
  return (
    <Section id="decoraciones" className="section section--decorations candy">
      <CurveTop />
      <h1 className="section__title candy">Decoraciones</h1>
      <p className="section__text">
        Endulzamos y decoramos tu mundo. Si te interesan las decoraciones
        personalizadas no dudes en contactarnos, con gusto seremos cómplices de
        todos esos momentos mágicos junto a tus seres queridos.. <br />
        <br />
        <span className="section__text-bold">
          Recordemos que el amor es: <br />
          <span className="remark">“Que nunca falten los detalles”</span>
        </span>
      </p>
      <CurveBottom />
    </Section>
  );
};

export default Decorations;
