import { Fragment } from "react"

export default function StandarFieldForm({field}){
    let {type,className,name,id,placeholder,label} = field;

    return (
      <Fragment>
        <label htmlFor="nickName">{label}</label>
        <input
          type={type}
          className={className}
          name={name}
          id={id}
          placeholder={placeholder}
        />
      </Fragment>
    );
}