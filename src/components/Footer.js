import { Link } from "react-router-dom";
import "../css/footer.css"

function Footer() {
    return (
      
 <footer>
      
      <div className="items">
        <ul>
          <li><strong>Adele Make up Artist</strong></li>
          <li> <Link to="/accueil">Accueil</Link></li>
          <li> <Link to="/contacter">Contact</Link></li>
          <li> <Link to="/prestations">Prestations</Link></li>
        </ul>
      </div>

      <div className="items"> 
        <ul >
          <li><img
              className="logo"
              src="../img/Pêche Coup de Pinceau Photographie Logo.png"
              alt="logo"
            /></li>
        </ul>
      </div>

      <div className="items">
          <ul>
              <li><strong>Contact</strong></li>
              <li>06 XX XX XX XX</li>
              <li>Adele.syly@gmail.com</li>
              <li><a href="#"><i className="fab fa-facebook"></i>Facebook</a></li>
              <li><a href="#"><i className="fab fa-youtube"></i>Instagram</a></li>
          </ul>
      </div>
    
    </footer>

      
    );
  }
  
  export default Footer;