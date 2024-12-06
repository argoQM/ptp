import React, { useContext, useState, useEffect } from "react";
import { Contexto } from "../../Contexto/Contexto";
import TarjetaVF from "./TarjetasVF/TarjetaVF";

function VerdaderoFalso() {
  const {
    listaTemas,
    listaSubTemas,
    listaPreguntasVF,
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
          Math.random() * listaPreguntasVF[indiceTemas][subTemaIndex]?.length
        );
        let nuevaPregunta =
          listaPreguntasVF[indiceTemas][subTemaIndex][indicePregunta];
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
    listaPreguntasVF,
    temaActivo,
    subTemaActivo,
  ]);

  return (
    <>
      <div className="contenedorTarjetasVF">
        {conten.map((contenido, index) => (
          <TarjetaVF key={index} contenido={contenido} index={index} />
        ))}
      </div>
      <div className="btnVF">
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

export default VerdaderoFalso;
