import React from "react";
import "./navbar.css";
const Menu=({id,title,url})=>(
        <div  style={{ backgroundImage:`url(${url})` }} className="menu" id="first">
                    <div className="content" id="second">
                        <h1 className="title" >{title}</h1>
                        <span className="text">Shop Now</span>
                    </div>
                </div>
)
export default Menu;