import { Fragment } from "react";

export default function Image({ src, alt = src, style = {}, className =""}) {
  return (
    <Fragment>
      <img
        src={require(`../../images/${src}`)}
        alt={alt}
        className={className}
        style={style}

      ></img>
    </Fragment>
  );
}
