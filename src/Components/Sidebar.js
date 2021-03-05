import React from "react";
import '../App.css';
import {SidebarData} from "./SidebarData";
import InvoiceDisplay from "./InvoiceDisplay"
import ValidationForm from "./ValidationForm"

class Sidebar extends React.Component {

    state = {
      imgURL:"",
      invoiceInput:""
   }

  render(props){
  return (
  <div className="Sidebar">
<ul className="SidebarList">
  {SidebarData.map((val, key) => {
    return (

      <li key={key}
          className="row"
          id={this.state.imgURL === val.imgPath ? "active" : ""}
          onClick={(e)=>{console.log(val.invoiceData);this.setState({
            imgURL : val.imgPath,
            invoiceInput : val.invoiceData,
          });}}>

      <div id="itemId">{val.title}</div>
      <img className="sideImg" src={val.imgPath} alt="menuImg" width="30px" height="40px"/>

    </li>

  );
  })}
  </ul>
<div className="InvoiceArea">
  <InvoiceDisplay imgSRC={this.state.imgURL}/>
</div>

<div className="InvoiceDataArea">
  <ValidationForm dataInv={this.state.invoiceInput}/>
</div>

</div>
);
}
}


export default Sidebar;
