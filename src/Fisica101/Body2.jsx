import React, { useContext } from "react";
import "./Fisica101.css";
import { ContextoFisica101, Datos } from "./ContextoFisica101";
import ListaVideosTeoricos from "./Contenido/ListaVideosTeoricos";
import ListaVideosPracticosA from "./Contenido/ListaVideosPracticosA";
import ListaVideosPracticosB from "./Contenido/ListaVideosPracticosB";
import VideoActivo from "./Contenido/VideoActivo";
function Body2() {
  const {
    tema,
    setTema,
    listaTemas,
    listaTemasAbreviados,
    setIndiceTema,
    indiceTema,
  } = useContext(ContextoFisica101);
  const temasCompletos = listaTemas.map((v, index) => {
    return (
      <span
        key={index}
        className="tituloCompleto"
        onClick={() => {
          setTema(listaTemas[index]);
          setIndiceTema(index);
        }}
      >
        {v}
      </span>
    );
  });
  const temasAbreviados = listaTemasAbreviados.map((v, index) => {
    return (
      <div key={index} className="tituloAbreviado">
        {v}
      </div>
    );
  });
  return (
    <>
      <div className="bodyPrincipal2">
        <Datos>
          <div className="temario">
            <span className="temasAbreviados">{temasAbreviados}</span>
            <span className="temasCompletos">{temasCompletos}</span>
          </div>
          <div className="contenido">
            <h1 className="tituloDelTemaActivo">{tema}</h1>
            <h2 className="tituloVideosTeoricos">
              Videos de las clases teoricas
            </h2>
            <div className="VideoActivo">
              <VideoActivo />
            </div>
            <div className="contenedorDeListaDeVideos">
              <ListaVideosTeoricos nombre={indiceTema} />
            </div>
            <h2 className="tituloVideosTeoricos">
              Videos de las clases practicas
            </h2>
            <h3 className="tituloVideosPracticos">Practico A</h3>
            <div className="contenedorDeListaDeVideos">
              <ListaVideosPracticosA nombre={indiceTema} />
            </div>
            <h3 className="tituloVideosPracticos">Practico B</h3>
            <div className="contenedorDeListaDeVideos">
              <ListaVideosPracticosB nombre={indiceTema} />
            </div>
          </div>
        </Datos>
      </div>
    </>
  );
}

export default Body2;
