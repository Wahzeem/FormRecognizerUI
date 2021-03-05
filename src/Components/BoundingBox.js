import React from "react";

function BoundingBox (props) {
  return(
    <svg className="bounding">
   <path d={props.nums} />
   </svg>
  )
}

export default BoundingBox
