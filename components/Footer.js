import React from "react";
import Clock from "../assets/Clock";
import Instagram from "../assets/Instagram";
import WhatsappIcon from "../assets/WhatsappIcon";

const Footer = () => {
  return (
    <footer id="contacto" className="footer">
      <div className="footer__info-container">
        <div className="footer__contact">
          <span className="footer__title">Dirección</span>
          <p className="footer__text">FWC4+XP3, Higuerote 1231, Miranda</p>
        </div>
        <div className="footer__contact">
          <span className="footer__title">Contacto</span>

          <a href="https://wa.me/584242519013XXXX" className="contact">
            <WhatsappIcon id="footer__icon" /> +58 412-542-8031
          </a>
          <a href="#/" className="contact">
            <Instagram id="footer__icon" />
            @aguacandy
          </a>
        </div>
        <div className="footer__horario">
          <span className="footer__title">
            <Clock id="footer__icon" />
            10:00 am - 10:00 pm
          </span>
        </div>
      </div>
      <div className="footer__copyright">
        <span className="footer__aguacandy">
          © 2022 All right reserved, Aguacandy
        </span>
        <a
          className="footer__dario-chic"
          href="https://www.dariochic.com"
          target="_blank"
          rel="noreferrer"
        >
          Diseñado y Construido por <span className="remark">Dario Chic</span>
        </a>
      </div>
      <img className="footer__img" src="/unicorn.png" alt="Unicorn" />
    </footer>
  );
};

export default Footer;
