import { Fragment } from "react";
import { DataDepartments } from "../../Data/DataDepartaments";

export default function DataDepartamentsLeftFilter(){
const list = DataDepartments.map((item,index)=>{
    return (
      <div key={index} className="filterItem">
        <input
          type="checkbox"
          className="filterItemCheckBox"
          value={item}
        />
        <span className="filterItemlabel">{item}</span>
      </div>
    );
});

    return (
      <Fragment>
        <div className="filterPanel">
          <h3>Deptarmentos</h3>
          {list}
        </div>
      </Fragment>
    );
}
