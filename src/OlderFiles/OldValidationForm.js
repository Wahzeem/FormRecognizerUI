import React from "react";
import Button from "./Button";
import invoiceData from "../data/InvoiceResult-project_invoice_01";

const ValidationForm = (props) => {

  const docResult = invoiceData.analyzeResult.documentResults.[0];

  const buttonClick = ()=>{
    alert("Details Saved!")
  }

  return(
    <div className="container formSection">

    <form className="formDoc">

<label htfor="cName" >Customer Name: </label><br/>
<input name="cName" defaultValue={docResult.fields.CustomerName.text}/>
<span>{docResult.fields.CustomerName.confidence}</span><br/>



<label htfor="cName" >Customer Address: </label><br/>
<input name="cName" defaultValue={docResult.fields.CustomerAddress.text}/>
<span>{docResult.fields.CustomerAddress.confidence}</span><br/>



<label htfor="cName" >Customer Address Recipient: </label><br/>
<input name="cName" defaultValue={docResult.fields.CustomerAddressRecipient.text}/>
<span>{docResult.fields.CustomerAddressRecipient.confidence}</span><br/>



<label htfor="cName" >Amount Due: </label><br/>
<input name="cName" defaultValue={docResult.fields.AmountDue.text}/>
<span>{docResult.fields.AmountDue.confidence}</span><br/>



<label htfor="cName" >Due Date: </label><br/>
<input name="cName" defaultValue={docResult.fields.DueDate.text}/>
<span>{docResult.fields.DueDate.confidence}</span><br/>



<label htfor="cName" >Invoice Date: </label><br/>
<input name="cName" defaultValue={docResult.fields.InvoiceDate.text}/>
<span>{docResult.fields.InvoiceDate.confidence}</span><br/>



<label htfor="cName" >Invoice Id: </label><br/>
<input name="cName" defaultValue={docResult.fields.InvoiceId.text}/>
<span>{docResult.fields.InvoiceId.confidence}</span><br/>



<label htfor="cName" >Invoice Total: </label><br/>
<input name="cName" defaultValue={docResult.fields.InvoiceTotal.text}/>
<span>{docResult.fields.InvoiceTotal.confidence}</span><br/>



<label htfor="cName" >Remittance Address: </label><br/>
<input name="cName" defaultValue={docResult.fields.RemittanceAddress.text}/>
<span>{docResult.fields.RemittanceAddress.confidence}</span><br/>



<label htfor="cName" >Remittance Address Recipient: </label><br/>
<input name="cName" defaultValue={docResult.fields.RemittanceAddressRecipient.text}/>
<span>{docResult.fields.RemittanceAddressRecipient.confidence}</span><br/>



<label htfor="cName" >Sub Total: </label><br/>
<input name="cName" defaultValue={docResult.fields.SubTotal.text}/>
<span>{docResult.fields.SubTotal.confidence}</span><br/>



<label htfor="cName" >Total Tax: </label><br/>
<input name="cName" defaultValue={docResult.fields.TotalTax.text}/>
<span>{docResult.fields.TotalTax.confidence}</span><br/>



<label htfor="cName" >Vendor Name: </label><br/>
<input name="cName" defaultValue={docResult.fields.VendorName.text}/>
<span>{docResult.fields.VendorName.confidence}</span><br/>

<Button color="blue" text="Save" onClick={buttonClick}/>

  </form>

    </div>
  )
}

export default ValidationForm
