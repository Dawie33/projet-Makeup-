import { Link } from "react-router-dom";
import "../css/footer.css";
import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/feather/facebook";
import {instagram} from "react-icons-kit/feather/instagram";
import {twitter} from "react-icons-kit/feather/twitter";
import {linkedin} from "react-icons-kit/feather/linkedin";
import {phone} from "react-icons-kit/feather/phone";
import {mail} from "react-icons-kit/feather/mail";

function Footer() {
  return (
    
    <footer>

      <div className="footer-left">
        <img src="../img/Pêche Coup de Pinceau Photographie Logo.png" alt=""></img>
        <div className="footer-links">
          <Link to="/accueil">Accueil</Link>
          <Link to="/prestations">Prestations</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/inscription">Inscription</Link>
        </div>
      </div>

      <div className="footer-center">
        <h4>Contact :</h4>
        <div>
          <Icon className="icon" icon={phone} size={20}/>
          <p>06 00 00 00 00</p>
        </div>
        <div>
          <Icon className="icon" icon={mail} size={20}/>
          <p><a href="mailto:Adele.syly@gmail.com">Adele.syly@gmail.com</a></p>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-img">
          <img src="../img/IMG_20151213_202147.jpg" alt="Adele"/>
          <img src="../img/IMG_20130717_000059.jpg" alt="Adele"/>
          <img src="../img/IMG_20140708_113835.jpg" alt="Adele"/>
          <img src="../img/IMG_20140715_011841.jpg" alt="Adele"/>
          <img src="../img/IMG_20140721_011144.jpg" alt="Adele"/>
          <img src="../img/IMG_20151210_115553.jpg" alt="Adele"/>
        </div>
        <div className="footer-icons">
          <Link><Icon icon={facebook} size={25}/> </Link>
          <Link><Icon icon={instagram} size={25}/></Link>
          <Link><Icon icon={twitter} size={25}/></Link>
          <Link><Icon icon={linkedin} size={25}/></Link>
        </div>
      </div>

    </footer>
            
  );
}
  
export default Footer;