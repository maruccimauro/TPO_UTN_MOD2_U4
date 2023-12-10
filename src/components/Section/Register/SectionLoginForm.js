import { Fragment } from "react";
import StandarFieldForm from "../../General/StandarFieldForm";
import { SectionLoginFormDataFields } from "../../Data/SectionLoginFormDataFields";

export default function SectionLoginForm() {
  const dataFields = SectionLoginFormDataFields;

  let fields = dataFields.map((field,index) => (
    <StandarFieldForm key={index} field={field}></StandarFieldForm>
  ));

  return (
    <Fragment>
      <section className="standardSection">
        <form className="form" name="miform" action="" method="post">
          <h1>No esperes para ingresar</h1>
          {fields}
          <input type="submit" value="ENVIAR" className="submit" />
        </form>
      </section>
    </Fragment>
  );
}
