import { Fragment } from "react";
import { Link } from "react-router-dom";
import Image from "../../General/Image";
import DataDepartamentsLeftFilter from "./DepartamentsLeftFilter";
import { DataProducts	 } from "../../Data/DataProducts";


export default function ProductsList(){


let productItems = DataProducts.map((product, index) => {
  return (
    <div key={product.id} className="productItem">
      <div className="productItemTopPanel">
        <Link to={`/verproducto/${product.id}`}>
          <Image
            src={product.filesData[0]}
            className="productItemTopPanelImg"
          ></Image>
        </Link>
      </div>
      <div className="productItemBottonPanel">
        <div className="productItemOffer">{product.offer}</div>
        <div className="productItemPrice">${product.price}</div>
        <div className="productItemTittle">
          <Link to={`/verproducto/${product.id}`}>{product.tittle}</Link>
        </div>
      </div>
    </div>
  );
});

    return (
      <Fragment>
        <div className="productListSectionbanner">
          <h2>Los más vendidos de Omazon</h2>
          <p>
            Nuestros productos más populares según las ventas. Se actualizan con
            frecuencia.
          </p>
        </div>
        <section className="standardSection productListSection">
          <div className="leftPanel">
            <DataDepartamentsLeftFilter />
          </div>
          <div className="rightPanel">{productItems}</div>
        </section>
      </Fragment>
    );
}