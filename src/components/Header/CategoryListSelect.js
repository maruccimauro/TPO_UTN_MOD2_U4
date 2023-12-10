import { Fragment } from "react";
import { DataDepartments } from "../Data/DataDepartaments";

export default function CatergoryListSelect(){
const departmentOptions = DataDepartments;

const items = departmentOptions.map((item,index) => <option key={index} className="departmentOptions"> {item} </option>);

return(
    <Fragment>
        {items}
    </Fragment>
)

}

