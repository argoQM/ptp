import React, { useContext } from "react";
import { Contexto } from "../../../Contexto/Contexto";

function Secciones({ nombre }) {
  const { setSeccionActivo, setCorregirVF, seccionActivo } =
    useContext(Contexto);
  let nombreClase =
    seccionActivo === nombre[1] ? "secciones seccionActiva" : "secciones";

  return (
    <div
      className={nombreClase}
      onClick={(e) => {
        setSeccionActivo(nombre[1]);
        setCorregirVF(false);
        document
          .querySelectorAll(".seccionActiva")
          .forEach((el) => el.classList.remove("seccionActiva"));
        e.currentTarget.classList.add("seccionActiva");
      }}
    >
      {nombre[0]}
    </div>
  );
}

export default Secciones;
