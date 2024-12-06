import React, { useContext, useState, useEffect } from "react";
import { Contexto } from "../../../Contexto/Contexto";

function TarjetaVF({ contenido, index }) {
  const { corregirVF } = useContext(Contexto);
  const [seleccionado, setSeleccionado] = useState("");
  const [di, setDi] = useState(0);

  useEffect(() => {
    setDi(Math.floor(Math.random() * 10000));
  }, []);

  const cambio = (e) => {
    setSeleccionado(e.target.value);
  };

  let resolucion = "";
  seleccionado === contenido[1]
    ? (resolucion = `Correcto`)
    : (resolucion = `Incorrecto: `);
  const clase = `tvf tvf${index}`;
  return (
    <>
      <div className={clase}>
        <div className="enunciadoVF">{contenido[0]}</div>
        <div className="rbtnVF">
          <div className="opcionVF">
            <label htmlFor="verdadero">Verdadero</label>
            <input
              type="radio"
              name={di}
              id="verdadero"
              value="verdadero"
              checked={seleccionado === "verdadero"}
              onChange={cambio}
            />
          </div>
          <div className="opcionVF">
            <label htmlFor="falso">Falso</label>
            <input
              type="radio"
              name={di}
              id="falso"
              value="falso"
              checked={seleccionado === "falso"}
              onChange={cambio}
            />
          </div>
        </div>
        <div className="contenedorExplicacionVF">
          {corregirVF && (
            <div className="explicacionVF">
              <div>{resolucion}</div>
              <div>{contenido[2]}</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TarjetaVF;
