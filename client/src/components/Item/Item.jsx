import React from "react";
import "../Block/Block";
function Block(props) {
    return (
      <div className="item">
         <h4>Transaction Hash: {props.transactionHash}</h4>
            <h4>Block Number: {props.transactionData.blockNumber}</h4>
            <h4>Event Data: {JSON.stringify(props.transactionData.eventData)}</h4>
        {/* <h4>{props.name}</h4>
        <h5>{props.description}</h5> */}

      </div>
    );
  };
  
  export default Block;