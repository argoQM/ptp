import React, { useContext } from "react";
import { Contexto } from "../Contexto/Contexto";

function Cabecera() {
  const { temaActivo } = useContext(Contexto);
  return <div>{temaActivo}</div>;
}

export default Cabecera;
