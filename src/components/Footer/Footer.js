import { Fragment } from "react";

export default function Footer(){

    const footerMenu = footerMenus.map((list,index)=>{
        const listItem = list.map((item,index)=>{
            return (
              <li key={index} className="footerListItem">
                {item}
              </li>
            );
        })
        return (
          <div>
            <ul key={index} className="footerList">
              {listItem}
            </ul>
          </div>
        );

    })
    return (
      <frameElement>
        <div className="footer">
          <div className="footerTop"></div>
          <div className="footerMiddle">
            <div className="footerMiddleMenuContainer">{footerMenu}</div>
          </div>
          <div className="footerBottom">
            <p>© 1996-2023 Omazon.com, Inc. o sus afiliados</p>
          </div>
        </div>
      </frameElement>
    );
}



const footerMenus = [

  [
    "Conócenos",
    "Trabaja en Omazon",
    "Blog",
    "Acerca de Omazon",
    "Relaciones con los Inversionistas",
    "Dispositivos Omazon",
    "Omazon Science",
  ],
  [
    "Gana Dinero con Nosotros",
    "Vender productos en Omazon",
    "Vende en Omazon Business",
    "Vender aplicaciones en Omazon",
    "Programa de Afiliados",
    "Anuncia tus Productos",
    "Publica tu Libro en Kindle",
    "Habilita un Omazon Hub",
    "Ver más Gana Dinero con Nosotros",
  ],
  [
    "Productos de Pago de Omazon",
    "Compra con Puntos",
    "Recarga tu Saldo",
    "Conversor de divisas de Omazon",
  ],
  [
    "Podemos Ayudarte",
    "Omazon y el COVID-19",
    "Tu Cuenta",
    "Tus Pedidos",
    "Tarifas de Envío y Políticas",
    "Devoluciones y Reemplazos",
    "Administrar Contenido y Dispositivos",
    "Omazon Assistant",
    "Ayuda",
  ],
];