import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import BurguerBar from "../assets/BurguerBar";
// import logo from "../assets/logo.png";

const Nav = () => {
  const [scroll, setScroll] = useState(true);
  const [navIsActive, setNavIsActive] = useState(false);
  const nav = useRef();
  const list = useRef();

  const handleNav = () => {
    if (navIsActive) setNavIsActive(false);
    if (!navIsActive) setNavIsActive(true);
  };

  useEffect(() => {
    var lastScrollTop = 0;

    window.addEventListener(
      "scroll",
      function () {
        var actualScroll =
          window.pageYOffset || document.documentElement.scrollTop;

        if (actualScroll > lastScrollTop) {
          setScroll(false);
        } else {
          setScroll(true);
        }

        lastScrollTop = actualScroll <= 0 ? 0 : actualScroll; // For Mobile or negative scrolling
      },
      false
    );
  }, []);

  return (
    <nav
      className={`nav ${scroll ? "up" : "down"} ${
        navIsActive ? "active" : "inactive"
      }`}
      ref={nav}
    >
      <a href="#inicio">
        <picture className="nav__logo">
          <img src="/logo.png" alt="aguacandy-logo" />
        </picture>
      </a>
      <span className="nav__bar" onClick={handleNav}>
        <BurguerBar id="nav__bar" />
      </span>
      <div
        className={`nav__transparent ${navIsActive ? "active" : "inactive"}`}
        onClick={handleNav}
      ></div>
      <ul
        className={`nav__list ${navIsActive ? "active" : "inactive"}`}
        ref={list}
      >
        <li className="nav__item" onClick={handleNav}>
          <a className="nav__link" href="#sobre-nosotros">
            Sobre Nosotros
          </a>
        </li>
        <li className="nav__item" onClick={handleNav}>
          <a className="nav__link" href="#arreglos">
            Arreglos
          </a>
        </li>
        {/* <li className="nav__item">
          <a className="nav__link" href="#decoraciones">
            Decoraciones
          </a>
        </li> */}
        <li className="nav__item" onClick={handleNav}>
          <a className="nav__link" href="#productos">
            Productos
          </a>
        </li>
        <li className="nav__item" onClick={handleNav}>
          <a className="nav__link" href="#contacto">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
