import React    from "react";
// import Transaction from "../../transaction.json";
import Item from "../Item/Item.jsx";
import "./Block.css";
import "../Item/Item.css";

function Block(props) {
  // const [visible, setVisible] = React.useState(false);
  return (
    <div className="block">
      
      <Item transactionHash={props.transactionHash} transactionData={props.transactionData}/>
      {/* {props.block.map(transaction => (
        
         
      ))} */}
      <h1>Block</h1>
    </div>
  );
};

export default Block;
