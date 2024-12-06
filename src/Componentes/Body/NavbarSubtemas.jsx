import React, { useContext } from "react";
import { Contexto } from "../Contexto/Contexto";
import SubTemas from "./Cuerpo/SubTemas/SubTemas";

function NavbarSubtemas() {
  const { listaSubTemas, temaActivo, listaTemas } = useContext(Contexto);
  let st;
  for (let i = 0; i < listaTemas.length; i++) {
    listaTemas[i] == temaActivo && (st = listaSubTemas[i]);
  }
  const subtemas = st.map((v) => {
    return <SubTemas key={v} nombre={v} />;
  });
  return <div className="contenedorNBSubtemas">{subtemas}</div>;
}

export default NavbarSubtemas;
