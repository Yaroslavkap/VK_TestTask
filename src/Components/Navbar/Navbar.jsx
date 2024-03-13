import React from "react";
import "./Navbar.css"
import {Link} from 'react-router-dom'

const Navbar = function(props) {
     

    return(
      <div className="navbar">
        <div className="navbar_label"><font className="label_font1">VK</font><font className="label_font2">app</font></div>
        <ul className="navbar_links">
            <li><Link className="links" to='/task1'>Задание 1</Link></li>
            
            <li><Link className="links" to='/task2' >Задание 2</Link></li>

            
        </ul>
      
      </div>
    )
}

export default Navbar