import React, { useContext, useEffect } from "react";
import { Contexto } from "../../../Contexto/Contexto";

function Tema({ nombreTema }) {
  const {
    setTemaActivo,
    setSubTemaActivo,
    setSeccionActivo,
    setIndice,
    listaSubTemas,
    listaTemas,
    temaActivo,
    subTemaActivo,
    btnSecciones,
    setCorregirVF,
  } = useContext(Contexto);

  useEffect(() => {
    // Encuentra el índice del tema activo en la lista de temas
    const temaIndex = listaTemas.indexOf(temaActivo);

    // Si el subTemaActivo no está en la lista de subtemas, establece el primer subtema
    if (!listaSubTemas[temaIndex]?.includes(subTemaActivo)) {
      setSubTemaActivo(listaSubTemas[temaIndex][0]);
    }
  }, [temaActivo, listaSubTemas, subTemaActivo, setSubTemaActivo]);

  return (
    <div
      className="tema"
      onClick={() => {
        setTemaActivo(nombreTema);
        setSeccionActivo(btnSecciones[0][1]);
        setIndice(0);
        setCorregirVF(false);
      }}
    >
      {nombreTema}
    </div>
  );
}

export default Tema;
