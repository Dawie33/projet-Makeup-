import { Link } from "react-router-dom";
import "../css/navbar.css";
import { useState } from "react";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import {x}  from "react-icons-kit/feather/x";
import { useNavigate } from "react-router-dom";

// j'importe mes hook de React : Link, useState, useNavigate et mes icones pour l responsive.
//  je crée un composant NavBar pour l'appeler sur plusieurs pages. 
const  Navbar = () => {

  // je déclare ma constante navigate 
  const navigate = useNavigate();

  // je créé un state toggle qui est au départ false
  const[toggle, setToggle] = useState('true');

  //  ma fonction handleToggle me permettra de changer l'état de mon state avec setToggle et le passera en true 
  const handleToggle = ()=>{
    setToggle(!toggle);

  }
  // la fonction hangleLogOut permet de supprimer le JWT de connexion du locale storage et de rediriger vers la page login avec useNavigate
  const handleLogOut= () =>{
    localStorage.clear();
    navigate("/login");
  }
  //  je déclare une constante jwtconnexion qui me permet de lire le local storage.
 const jwtconnexion = localStorage.getItem('jwt') 
  
    return (
      <header>
        {/* je donne une classe à ma nav avec un rendu conditionnel si le state est true j'affiche la classe "menu-nav" sinon j'affiche "menu-nav open" */}
        <nav className={toggle? "menu-nav" :"menu-nav open"}> 
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
                    <Link to='/listeprestations'>Prestations</Link>
                </li>
                <li className="item">
                <Link to='/contact'>Contact</Link>
                </li>
               
               {/* rendu conditionnel : si je n'ai pas de JWT dans le local storage  j'affiche les btn s'inscrire et se connecter sinon j'affiche  réservation et se déconnecter*/}

                { !jwtconnexion ?
                <>
                  <li><Link to='/inscription'className="btn2">S'inscrire</Link></li>
                  <li><Link to='/login'className="btn2">Se connecter</Link></li>
                </>
                :
                <>
                  <li><Link to='/reservation/formulaire' className="btn2"> Réservation </Link></li>
                  <li><Link  onClick={handleLogOut}to='/login' className="btn2">Se déconnecter</Link></li>
                </>              
                }

            </ul>  
             {/* je mets un écouteur d'évènement au click j'utilise la fonction handleToggle pour changer l'état de mon state. */}
            <div className="toggle-icon" onClick={handleToggle}>
              {toggle? <Icon icon={menu} size={30}/> : <Icon icon={x} size={30}/>}
            </div>         
        </nav>
      </header>
    );
  

}
  // j'exporte mon composant pour pouvoir le réutiliser
export default Navbar;