import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/homeNav.css";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import {x}  from "react-icons-kit/feather/x";
import { useNavigate } from "react-router-dom";




function HomeNav() {

  const navigate = useNavigate();

  const[toggle, setToggle] = useState('true');

  const handleToggle = ()=>{
    setToggle(!toggle);

  }

  const handleLogOut= () =>{

    localStorage.removeItem('jwt');
    navigate("/login");
  }

 

    return (
      <header>
        <section id="header">
          <nav className=  {toggle?"navbar":"navbar open"} > 
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
                    <Link to='/listeprestations'>Prestations</Link>
                  </li>
                  <li className="nav-item">
                  <Link to='/contact'>Contact</Link>
                  </li>
                

                  { (localStorage.getItem('jwt'))  ?
                  <>
                    <li><Link to='/reservation/formulaire' className="btn"> Réservation </Link></li>
                    <li><Link  onClick={handleLogOut}to='/login' className="btn">Se déconnecter</Link></li>
                  </>
                  :
                  <>
                    <li><Link to='/inscription'className="btn">S'inscrire</Link></li>
                    <li><Link to='/login'className="btn">Se connecter</Link></li>
                  </>
                  } 
              </ul>      
       
            <div className="toggle-icon" onClick={handleToggle}>
              {toggle? <Icon icon={menu} size={30}/> : <Icon icon={x} size={30}/>}
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