import React from "react";
import '../App.css';
import Sidebar from "./Sidebar";

class UI extends React.Component{
  render(){
    return(
      <div className="UI">
      <Sidebar/>
      </div>
    );
  }
}

export default UI
