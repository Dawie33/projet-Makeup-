import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/homeNav.css";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import {x}  from "react-icons-kit/feather/x";



function HomeNav() {

  const[toggle, setToggle] = useState('false');

  const handleToggle = ()=>{
    setToggle(!toggle);

  }

 

    return (
      <header>
        <section id="header">
          <nav className=  {toggle?"navbar open":"navbar"} > 
            <img
              className="logo"
              src="../img/Pêche Coup de Pinceau Photographie Logo.png"
              alt="logo"
            />
            
        
              <ul className="nav-links">
                <li className="nav-item">
                  <Link to="/accueil">Accueil</Link>
                </li>
                <li className="nav-item">
                  <Link to='/prestations'>Prestations</Link>
                </li>
                <li className="nav-item">
                <Link to='/contacter'>Contact</Link>
                </li>
                <li className="nav-item"> <Link to='/contacter'>Galerie</Link></li>
                <li><Link to='/inscription'className="btn">S'inscrire</Link></li>
                <li><Link to='/login' className="btn">Se connecter</Link></li>
              </ul>            
       
            <div className="toggle-icon" onClick={handleToggle}>
              {toggle? <Icon icon={x} size={30}/>:<Icon icon={menu} size={30}/> }
            </div>
          </nav>
          <section id="title">
              <h1> ADELE </h1>
              <p> MAKE UP ARTIST</p>
          </section>
        </section>
      </header>
    );
}
  
export default HomeNav;