import React    from "react";
// import Transaction from "../../transaction.json";
import Item from "../Item/Item.jsx";
import "./Block.css";
import "../Item/Item.css";

function Block(props) {
  // const [visible, setVisible] = React.useState(false);
  return (
    <div className="block">
      
      {props.block.map(transaction => (
        
        <Item name={transaction.title} description={transaction.Description}/>
         
      ))}
      <h1>Block</h1>
    </div>
  );
};

export default Block;
