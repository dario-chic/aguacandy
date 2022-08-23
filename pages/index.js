import React from "react";
import About from "../components/About";
import Arreglos from "../components/Arreglos";
import Customers from "../components/Customers";
// import Decorations from "./components/Decorations";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Nav from "../components/Nav";
import Products from "../components/Products";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Main>
        <About />
        <Arreglos />
        <Products />
        {/* <Decorations /> */}
        <Customers />
      </Main>
      <Footer />
    </>
  );
}
