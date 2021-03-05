import React from "react";
import Button from "./Button";
import invoiceData from "../data/InvoiceResult-project_invoice_02";

const invoiceURL = invoiceData;

class ValidationForm extends React.Component {

  render(props){

    // const current = invoiceURL + {props.dataInv}

    const fieldName = Object.keys(invoiceData.analyzeResult.documentResults.[0].fields);
    const formData = invoiceData.analyzeResult.documentResults.[0];
    // const invoice = props.data;
    // console.log(invoice);

    const buttonClick = ()=>{
      alert("Details Saved!")
    }

  return(
    <form className="container formSection">

    {fieldName.map((val, key)=>{
      return(
          <div key={key}
          className="formDoc">

          <div>
          <label htfor="dataInput" >{val}</label><br/>
          <input name="dataInput" defaultValue={formData.fields[val].text}/>

          </div>

          </div>
      );
    })}


<Button color="blue" text="Save" onClick={buttonClick}/>

    </form>
  )
}
}

export default ValidationForm
