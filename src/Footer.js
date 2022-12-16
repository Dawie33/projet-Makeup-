import { Link } from "react-router-dom";

function Footer() {
    return (
      
 <footer>
      
      <div className="items">
        <ul>
          <li><strong>Adele Make up Artist</strong></li>
          <li> <Link to="/accueil">Accueil</Link></li>
          <li> <a href="">Contact</a></li>
          <li> <Link to="/prestations">Prestations</Link></li>
        </ul>
      </div>

      <div className="items"> 
        <ul >
          <li><strong>Me suivre</strong></li>
          <li><a href="#"><i className="fab fa-facebook"></i>Facebook</a></li>
          <li><a href="#"><i className="fab fa-youtube"></i>Instagram</a></li>
        </ul>
      </div>

      <div className="items">
          <ul>
              <li><strong>Contact</strong></li>
              <li>06 XX XX XX XX</li>
              <li>Mail: Adele.syly@gmail.com</li>
          </ul>
      </div>
    
    </footer>

      
    );
  }
  
  export default Footer;