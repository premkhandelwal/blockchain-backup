import React from "react";
import "../Block/Block";
function Block(props) {
    return (
      <div className="item">
        <h4>{props.name}</h4>
        <h5>{props.description}</h5>

      </div>
    );
  };
  
  export default Block;