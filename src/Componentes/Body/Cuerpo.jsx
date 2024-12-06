import React, { useContext } from "react";
import { Contexto } from "../Contexto/Contexto";
import Teoria from "./Cuerpo/Teoria";
import VerdaderoFalso from "./Cuerpo/VerdaderoFalso";
import MultipleOpcion from "./Cuerpo/MultipleOpcion";
import Desarrollo from "./Cuerpo/Desarrollo";
import Bibliografia from "./Cuerpo/Bibliografia";
function Cuerpo() {
  const { seccionActivo } = useContext(Contexto);
  const componentes = {
    Teoria: Teoria,
    VerdaderoFalso: VerdaderoFalso,
    MultipleOpcion: MultipleOpcion,
    Desarrollo: Desarrollo,
    Bibliografia: Bibliografia,
  };
  const ComponenteSeleccionado = componentes[seccionActivo] || null;
  return <>{ComponenteSeleccionado && <ComponenteSeleccionado />}</>;
}

export default Cuerpo;
