import { Fragment } from "react";
import { ResolveStyle } from "../General/Tools";

export default function headerRow({ children, styles }) {
  return (
    <Fragment>
      <div className={ResolveStyle("headerRow " , styles )}>{children}</div>
    </Fragment>
  );
}
