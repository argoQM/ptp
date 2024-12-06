import React, { useContext, useEffect, useState } from "react";
import { Contexto } from "../../Contexto/Contexto";
import TarjetaMO from "./TarjetasMO/TarjetaMO";
function MultipleOpcion() {
  const {
    listaTemas,
    listaSubTemas,
    listaPreguntasMO,
    temaActivo,
    subTemaActivo,
    actualizarVF,
    setCorregirVF,
    setActualizarVF,
  } = useContext(Contexto);

  const [conten, setConten] = useState([[], [], []]);

  useEffect(() => {
    const seleccionarPregunta = () => {
      let indiceTemas = listaTemas.indexOf(temaActivo);
      let subTemaIndex = listaSubTemas[indiceTemas]?.indexOf(subTemaActivo);

      if (indiceTemas === -1 || subTemaIndex === -1) return;

      let nuevasPreguntas = [];
      for (let i = 0; i < 3; i++) {
        let indicePregunta = Math.floor(
          Math.random() * listaPreguntasMO[indiceTemas][subTemaIndex]?.length
        );
        let nuevaPregunta =
          listaPreguntasMO[indiceTemas][subTemaIndex][indicePregunta];
        nuevasPreguntas.push(nuevaPregunta);
      }
      setConten(nuevasPreguntas);
    };

    if (actualizarVF || conten[0].length === 0) {
      seleccionarPregunta();
      setActualizarVF(false);
    }
  }, [
    actualizarVF,
    listaTemas,
    listaSubTemas,
    listaPreguntasMO,
    temaActivo,
    subTemaActivo,
  ]);

  return (
    <>
      <div className="contenedorTarjetasMO">
        {conten.map((contenido, index) => (
          <TarjetaMO key={index} contenido={contenido} index={index} />
        ))}
      </div>
      <div className="btnMO">
        <button
          onClick={() => {
            setCorregirVF(true);
          }}
        >
          Corregir
        </button>
        <button
          onClick={() => {
            setActualizarVF(!actualizarVF);
            setCorregirVF(false);
          }}
        >
          Actualizar
        </button>
      </div>
    </>
  );
}

export default MultipleOpcion;
