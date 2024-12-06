import React, { useContext } from "react";
import { ContextoFisica101 } from "../ContextoFisica101";

function ListaVideosTeoricos({ nombre }) {
  const { listaMiniaturasA, listaVideosA, setVideoActivo } =
    useContext(ContextoFisica101);
  const temaind = listaMiniaturasA[nombre].map((v) => {
    return v;
  });
  const clasesListado = temaind.map((v, index) => {
    return (
      <div
        key={v[1]}
        className="miniatura"
        onClick={() => {
          setVideoActivo(listaVideosA[nombre][index][0]);
        }}
      >
        <img src={v[0]} alt="jaj" className="miniaturaImg" />

        <span className="clase">{v[1]}</span>
      </div>
    );
  });
  return (
    <>
      <div className="contenedorMiniaturas">{clasesListado}</div>
    </>
  );
}

export default ListaVideosTeoricos;
