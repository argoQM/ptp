import React, { useContext } from "react";
import { Contexto } from "../../../Contexto/Contexto";

function SubTemas({ nombre }) {
  const {
    setSubTemaActivo,
    subTemaActivo,
    btnSecciones,
    setSeccionActivo,
    setIndice,
    setCorregirVF,
  } = useContext(Contexto);

  let nombreClase =
    subTemaActivo === nombre ? "subtema subtemaActiva" : "subtema";

  return (
    <div
      className={nombreClase}
      onClick={(e) => {
        setSubTemaActivo(nombre);
        setSeccionActivo(btnSecciones[0][1]);
        setIndice(0);
        setCorregirVF(false);
        document
          .querySelectorAll(".subtemaActiva")
          .forEach((el) => el.classList.remove("subtemaActiva"));
        e.currentTarget.classList.add("subtemaActiva");
      }}
    >
      {nombre}
    </div>
  );
}

export default SubTemas;
