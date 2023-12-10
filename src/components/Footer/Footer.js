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
    "Trabaja en Amazon",
    "Blog",
    "Acerca de Amazon",
    "Relaciones con los Inversionistas",
    "Dispositivos Amazon",
    "Amazon Science",
  ],
  [
    "Gana Dinero con Nosotros",
    "Vender productos en Amazon",
    "Vende en Amazon Business",
    "Vender aplicaciones en Amazon",
    "Programa de Afiliados",
    "Anuncia tus Productos",
    "Publica tu Libro en Kindle",
    "Habilita un Amazon Hub",
    "Ver más Gana Dinero con Nosotros",
  ],
  [
    "Productos de Pago de Amazon",
    "Compra con Puntos",
    "Recarga tu Saldo",
    "Conversor de divisas de Amazon",
  ],
  [
    "Podemos Ayudarte",
    "Amazon y el COVID-19",
    "Tu Cuenta",
    "Tus Pedidos",
    "Tarifas de Envío y Políticas",
    "Devoluciones y Reemplazos",
    "Administrar Contenido y Dispositivos",
    "Amazon Assistant",
    "Ayuda",
  ],
];