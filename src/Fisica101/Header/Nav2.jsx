import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="enlacesPrincipales">
        {/* <NavLink to={"/"}>
          <i className="fa fa-home" aria-hidden="true"></i> Inicio
        </NavLink> */}
        <NavLink to={"https://www.fq.edu.uy/?q=es/node/455"}>
          <img
            className="detemaheader"
            src="src/images/logos/detema.png"
            alt="Logo DETEMA"
          />
        </NavLink>
        <NavLink to={"https://moodle3.fq.edu.uy/enrol/index.php?id=33"}>
          <span>MoodleFQ</span>
        </NavLink>
        <NavLink to={"https://www.fq.edu.uy/"}>
          <img
            className="logofq"
            src="src\images\logos\Logotipos_Facultad de Quimica_Horizontal reducido_Color_Texto negro.png"
            alt="logo FQ"
          />
        </NavLink>
        <NavLink to={"https://bedelias.udelar.edu.uy/"}>
          <span className="detemaheader">Bedelias Central</span>
        </NavLink>
        <NavLink to={"/"}>
          <span className="bedelias">Curso de Nivelación</span>
        </NavLink>
      </nav>
    </>
  );
}
