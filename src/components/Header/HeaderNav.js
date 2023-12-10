import React from "react";
import { Link } from "react-router-dom";

export default function HeaderNav() {
  const links = Links.map((link,index )=>{
    return (
 
        <Link key={index} className="navBarItem"  to={link.to}>
          {link.tittle}
        </Link>

    );
  })
  return (
    <div className="navBar">
      <Link key={-1} href="# " className="navBarItem navBarItemAll">
        <span className="material-symbols-outlined">menu</span>
        <span className="navBarItemAllParagraph">Todo</span>
      </Link>
      {links}
    </div>
  );
}

const Links = [
  {
    tittle: "Ofertas del dia",
    to: "/productsList",
  },
  {
    tittle: "Inicio",
    to: "/home",
  },
  {
    tittle: "Registrarse",
    to: "/registrarse",
  },
  {
    tittle: "Ingresar",
    to: "/ingresar",
  },
];