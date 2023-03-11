import React from "react";
import Block from "../Block/Block";
import BlockData from "../../transaction.json";
//import Navbar from "./components/Navbar/Navbar";
const Logs=()=>{
    const [visible, setVisible] = React.useState(false);
    return(
        <div className='box'>
       {/* <Navbar></Navbar>  */}
      
      
      
      <div className='buttonmain'>
         <button onClick={() => setVisible(!visible)}>{visible ? 'Hide Transaction' : 'Display Transaction'}</button>
         
      </div>
      {visible?BlockData.map(block => (
        <Block block={block}/>
        
      )): <div/>}
  
  
      
    </div>

    )
}
export default Logs;