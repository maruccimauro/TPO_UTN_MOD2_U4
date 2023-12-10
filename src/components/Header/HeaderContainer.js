import {Fragment } from "react"
import HeaderRow from "./HeaderRow";
import CatergoryListSelect from "./CategoryListSelect";
import HeaderNav from "./HeaderNav";
import Image from "../General/Image";
import { Link } from "react-router-dom";


export default function HeaderContainer ({children}){
    return (
      <Fragment>
        <header className="headerContainer">
          <HeaderRow styles={["headerRow-Top"]}>
            
              <div className="leftPanel">
                <a className="headerRow-TopAnchor" href=" #">
                  <div className="item">
                    <Image
                      alt="Logo"
                      src="header/amazon.png"
                      className="headerLogo"
                    ></Image>
                  </div>
                </a>
                <a href=" #">
                  <div className="item">
                    <div className="deliveryLeft">
                      <span className="material-symbols-outlined">
                        location_on
                      </span>
                    </div>
                    <div className="deliveryRight">
                      <p>Envios a </p>
                      <p className="bold">Argentina</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="centerPanel">
                <div className="navSearch">
                  <div className="searchFilterConteiner">
                    <select className="searchFilterSelect">
                      <CatergoryListSelect></CatergoryListSelect>
                    </select>
                  </div>
                  <div className="searchBoxContainer">
                    <input
                      className="searchBox"
                      type="box"
                      placeholder="Ingrese algun producto a buscar"
                    ></input>
                  </div>
                  <button className="searchButton"></button>
                </div>
              </div>
            
            <div className="rightPanel">
              <Link className="headerTopAnchorflag">
                <Image className="flagImg" src="flag.png"></Image>
                <span className="flagCountry bold">AR</span>
              </Link>
              <Link className="headerTopAnchor">
                <p className="">Hola, identificate</p>
                <p className="bold">Cuenta y Listas</p>
              </Link>
              <Link className="headerTopAnchor">
                <p className="">Devoluciones</p>
                <p className="bold">y Pedidos</p>
              </Link>
              <Link className="headerTopAnchor bold">
                <Image src="car.png"></Image>
                <span>Carrito</span>
              </Link>
            </div>
          </HeaderRow>
          <HeaderRow styles={["headerRow-Middle"]}>
            <HeaderNav></HeaderNav>
          </HeaderRow>

          <div className="headerRow-Bottom">
            <Link className="headerRow-BottomItem">Cupones</Link>
            <Link className="headerRow-BottomItem">Ofertas Especiales</Link>
            <Link className="headerRow-BottomItem">Outlet</Link>
            <Link className="headerRow-BottomItem">Ofertas Digitales</Link>
          </div>
        </header>
      </Fragment>
    );
}









