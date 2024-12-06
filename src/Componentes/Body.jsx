import React from "react";
import Cabecera from "./Body/Cabecera";
import NavbarSubtemas from "./Body/NavbarSubtemas";
import Cuerpo from "./Body/Cuerpo";
import NavbarSecciones from "./Body/NavbarSecciones";
import NavbarTemas from "./Body/navbarTemas";
import { Datos } from "./Contexto/Contexto";

function Body() {
  return (
    <>
      <div className="bodyPrincipal">
        <Datos>
          <div className="contenedorCabecera">
            <Cabecera nombreTema={"titulo"} />
          </div>
          <div className="contenedorNBSubtemas">
            <NavbarSubtemas />
          </div>
          <div className="contenedorCuerpo">
            <Cuerpo />
          </div>
          <div className="contenedorNBSecciones">
            <NavbarSecciones />
          </div>
          <div className="contenedorNBTemas">
            <NavbarTemas />
          </div>
        </Datos>
      </div>
    </>
  );
}

export default Body;
