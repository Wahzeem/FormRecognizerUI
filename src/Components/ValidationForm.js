import React from "react";
import Button from "./Button";
import invoiceData from "../data/InvoiceResult-project_invoice_03";

class ValidationForm extends React.Component {

  render(props){

    const fieldName = Object.keys(invoiceData.analyzeResult.documentResults.[0].fields);
    // const test = docResult

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
          <input name="dataInput" defaultValue={invoiceData.analyzeResult.documentResults.[0].fields.val}/>

          <p onClick={()=>{console.log(invoiceData.analyzeResult.documentResults.[0].fields);}}>
          debug</p>
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
