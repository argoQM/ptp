import React from "react";
import "../App.css";
import Body from "./Body2";
import Footer from "../Componentes/Footer";
import Header from "./Header2";
import { Datos } from "./ContextoFisica101";

function Fisica101() {
  return (
    <>
      <Datos>
        <Header />
        <Body />
        <Footer />
      </Datos>
    </>
  );
}

export default Fisica101;
