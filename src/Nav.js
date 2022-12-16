import { Link } from "react-router-dom";


function Nav() {
    return (
        <header>

        {/* <!-- création de la barre de navigation --> */}
          <nav>
            <div className="logo">
              <img
                className="logo"
                src="../img/Pink Abstract Handwritten Logo.png"
                alt="logo"
              />
            </div>
            <div className="main-menu">
              <ul>
                <li className="nav-item">
                  <Link to="/accueil">ACCUEIL</Link>
                </li>
                <li className="nav-item">
                  <Link to='/prestations'>PRESTATIONS</Link>
                </li>
                <li className="nav-item">
                <Link to='/formulaire/contact'>CONTACT</Link>
                </li>
              </ul>
            </div>
            <div className="main-menu">
            <Link to='/login'className="btn">Se connecter</Link>
            
            </div> 
          </nav>
        </header>
    );
  }
  
  export default Nav;