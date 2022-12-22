import { Link } from "react-router-dom";
import "../css/navbar.css";
import { useState } from "react";

import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import {x}  from "react-icons-kit/feather/x";





function Navbar() {
    
    
  const[toggle, setToggle] = useState('false');

  const handleToggle = ()=>{
    setToggle(!toggle);

  }
 

    return (
      <header>
    
        <nav className={toggle?"menu-nav open":"menu-nav"}> 
            <img
                className="logo"
                src="../img/Pêche Coup de Pinceau Photographie Logo.png"
                alt="logo"
            />
            
           
            <ul className="nav-list">
                <li className="item">
                    <Link to="/accueil">Accueil</Link>
                </li>
                <li className="item">
                    <Link to='/prestations'>Prestations</Link>
                </li>
                <li className="item">
                <Link to='/contacter'>Contact</Link>
                </li>
                <li className="item"> <Link to='/contacter'>Galerie</Link></li>
                <li><Link to='/inscription'className="btn2">S'inscrire</Link></li>
                <li><Link to='/login' className="btn2">Se connecter</Link></li>
            </ul>   
            <div className="toggle-icon" onClick={handleToggle}>
              {toggle? <Icon icon={x} size={30}/>:<Icon icon={menu} size={30}/> }
            </div>         
    
          
        </nav>
       
      </header>
    );
}
  
export default Navbar;