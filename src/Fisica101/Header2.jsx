import React from "react";
import NavbarEnlaces from "./Header/NavbarEnlaces2";

function Header() {
  const toggleModoNocturno = () => {
    const body = document.querySelector("body");
    body.classList.toggle("activo");
  };

  return (
    <>
      <div className="headerPrincipal">
        <NavbarEnlaces className="enlacesPrincipales" />
        <span className="switchModo" onClick={toggleModoNocturno}>
          <i className="fa fa-certificate" aria-hidden="true"></i>
        </span>
      </div>
    </>
  );
}

export default Header;
