import React, { useContext } from "react";
import { Contexto } from "../Contexto/Contexto";
import Tema from "./Cuerpo/Temas/Tema";

function NavbarTemas() {
  const { listaTemas } = useContext(Contexto);
  const temas = listaTemas.map((v) => {
    return <Tema key={v} nombreTema={v} />;
  });
  return <div className="contenedorNBTemas ">{temas}</div>;
}

export default NavbarTemas;
