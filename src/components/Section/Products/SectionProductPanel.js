import { Fragment, useState } from "react";
import MiniatureImageProduct from "./MiniatureImageProduct";
import Image from "../../General/Image";
import { useParams } from "react-router-dom";
import { DataProducts } from "../../Data/DataProducts";


export default function SectionProductPanel() {
  const {id} = useParams();
  const [sell, setSell] = useState(false);

  const { filesData, leyend, aboutProduct, productPropsData, offer,price } =
    DataProducts[id];
  const [selectImage, setSelectImage] = useState(filesData[0]);

  const files = filesData.map((file, index) => (
    <MiniatureImageProduct
      key={index}
      file={file}
      onMouseOver={() => {
        setSelectImage(file);
      }}
    ></MiniatureImageProduct>
  ));

  const productProps = productPropsData.map((productProp, index) => (
    <p key={index} className="productPropItem">
      <span className="productPanelProp">{productProp[0]} </span>:{" "}
      {productProp[1]}{"."}
    </p>
  ));

  let sellProduct = sell ? <p>Gracias, por su compra.</p> : "";
  return (
    <Fragment>
      <section className="standardSection productSection">
        <div className="productPanel">
          <div className="imgPanel">
            <div className="leftPanel">{files}</div>
            <div className="rightPanel">
              <Image
                src={selectImage}
                className="principalImageProduct"
              ></Image>
            </div>
          </div>

          <div className="informationPanel">
            <div className="topPanel">{leyend}</div>
            <div className="separatorPanelv2"></div>
            <div className="productItemOffer">{offer}</div>
            <div className="productItemPrice">${price}</div>

            <input
              type="submit"
              value="COMPRAR"
              onClick={() => {
                setSell(true);
              }}
              className="buttonBuyProduct"
            />

            {sellProduct}
            <div className="separatorPanel"></div>
            <div className="middlePanel">{productProps}</div>
            <div className="separatorPanel"></div>
            <div className="bottomPanel">About this : <br/>{aboutProduct} Product code: ( COD:{id} )</div>
          </div>
          <div className="othersPanel"></div>
        </div>
      </section>
    </Fragment>
  );
}
