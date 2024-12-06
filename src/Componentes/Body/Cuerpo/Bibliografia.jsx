import React, { useContext, useState } from "react";
import { Contexto } from "../../Contexto/Contexto";

function Bibliografia() {
  const {
    temaActivo,
    subTemaActivo,
    listaBibliografia,
    listaTemas,
    listaSubTemas,
  } = useContext(Contexto);
  const [diapo, setDiapo] = useState(0);
  const [btnDiapo, setBtnDiapo] = useState(0);
  let temaIndex;
  for (let i = 0; i < listaTemas.length; i++) {
    temaActivo == listaTemas[i] && (temaIndex = i);
  }
  let subTemaIndex;
  for (let i = 0; i < listaSubTemas[temaIndex].length; i++) {
    subTemaActivo == listaSubTemas[temaIndex][i] && (subTemaIndex = i);
  }
  const formulas = (diapo) => {
    diapo > listaBibliografia[temaIndex][subTemaIndex][1].length - 1 &&
      setDiapo(0);
    diapo < 0 &&
      setDiapo(listaBibliografia[temaIndex][subTemaIndex][1].length - 1);
    return (
      <div className="formulasBio">
        {listaBibliografia[temaIndex][subTemaIndex][1][diapo]}
      </div>
    );
  };
  const bibliogragia = listaBibliografia[temaIndex][subTemaIndex][2].map(
    (v, index) => {
      return (
        <div key={index} className="bibliografiaBio">
          {listaBibliografia[temaIndex][subTemaIndex][2][index]}
        </div>
      );
    }
  );
  // ###############################################

  let btn;
  if (listaBibliografia[temaIndex][subTemaIndex]) {
    btn = listaBibliografia[temaIndex][subTemaIndex][1];
  } else {
    btn = listaBibliografia[temaIndex][0][1];
  }

  const btnTeo = btn.map((v, index) => {
    let nombreClase = btnDiapo === index ? "btnTeo btnTeoActiva" : "btnTeo";

    return (
      <span
        key={index}
        id={index}
        className={nombreClase}
        onClick={(e) => {
          setBtnDiapo(index);
          setDiapo(index);
          document
            .querySelectorAll(".btnTeoActiva")
            .forEach((el) => el.classList.remove("btnTeoActiva"));
          e.currentTarget.classList.add("btnTeoActiva");
        }}
      ></span>
    );
  });
  // ###############################################

  return (
    <>
      <div className="contenedorResumen">
        <div className="resumenBio">
          {listaBibliografia[temaIndex][subTemaIndex][0]}
        </div>
        <div className="contenedorFormulas">
          {formulas(diapo)}
          <div className="btnBibliografia">{btnTeo}</div>
        </div>
        <div className="contenedorBiblio">{bibliogragia}</div>
      </div>
    </>
  );
}

export default Bibliografia;
