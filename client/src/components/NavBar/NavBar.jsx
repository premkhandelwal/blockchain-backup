import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <header>
            <Link className="logo" to={"/"} style={{textDecoration:'none'}}>
                
                
                {/* <img src="https://st4.depositphotos.com/16552764/20957/v/600/depositphotos_209572350-stock-illustration-block-chain-logo-illustration-block.jpg"  alt="NavrBar"/>
              */}
                <h5>IOTChain</h5>
                
            </Link>
            <div className="display-menu"> 
                <Link className="menu" to={"/"}>Home</Link>
                <Link className="menu" to={"/logs"}>Logs</Link>
                <Link className="menu" to={"/about"}>Problem</Link>     
            </div>
        </header>

    );
}
export default NavBar;