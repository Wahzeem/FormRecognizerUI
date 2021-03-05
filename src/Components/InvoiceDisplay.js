import React from "react";
import '../App.css';
import invoiceData from "../data/InvoiceResult-project_invoice_01";
import BoundingBox from "./BoundingBox";


const InvoiceDisplay = (props) => {

  return(
    <img src={props.imgSRC} alt="Invoice_image" width="100%" height="100%"/>
  )

};


export default InvoiceDisplay;
