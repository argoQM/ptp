import React, { useContext, useEffect } from "react";
import { Contexto } from "../../Contexto/Contexto";
import VideosTeo from "./Teoria/VideosTeo";

function Teoria() {
  const {
    listaTeoria,
    listaSubTemas,
    listaTemas,
    temaActivo,
    subTemaActivo,
    indice,
    setIndice,
  } = useContext(Contexto);

  let temaIndex;
  for (let i = 0; i < listaTemas.length; i++) {
    if (temaActivo === listaTemas[i]) {
      temaIndex = i;
      break;
    }
  }

  let subTemaIndex;
  for (let i = 0; i < listaSubTemas[temaIndex].length; i++) {
    if (subTemaActivo === listaSubTemas[temaIndex][i]) {
      subTemaIndex = i;
      break;
    }
  }

  let conten = listaTeoria[temaIndex][0][0];
  if (listaTeoria[temaIndex][subTemaIndex]) {
    conten = listaTeoria[temaIndex][subTemaIndex][indice];
  } else {
    conten = listaTeoria[temaIndex][0][0];
  }

  let btn;
  if (listaTeoria[temaIndex][subTemaIndex]) {
    btn = listaTeoria[temaIndex][subTemaIndex];
  } else {
    btn = listaTeoria[temaIndex][0];
  }

  const btnTeo = btn.map((v, index) => {
    let nombreClase = indice === index ? "btnTeo btnTeoActiva" : "btnTeo";

    return (
      <span
        key={index}
        id={index}
        className={nombreClase}
        onClick={(e) => {
          setIndice(index);
          document
            .querySelectorAll(".btnTeoActiva")
            .forEach((el) => el.classList.remove("btnTeoActiva"));
          e.currentTarget.classList.add("btnTeoActiva");
        }}
      ></span>
    );
  });

  return (
    <>
      <div className="contenedorMaterialTeorico">
        <VideosTeo indice={conten} />
      </div>
      <div className="botonesTeoria">{btnTeo}</div>
    </>
  );
}

export default Teoria;
