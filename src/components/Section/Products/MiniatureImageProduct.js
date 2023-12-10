import { Fragment } from "react";
import Image from "../../General/Image";


export default function MiniatureImageProduct({ file, onMouseOver }) {
  return (
    <Fragment>
      <a href=" #" onMouseOver={onMouseOver}>
        <Image src={file} className="miniatureImageProduct"></Image>
      </a>
    </Fragment>
  );
}