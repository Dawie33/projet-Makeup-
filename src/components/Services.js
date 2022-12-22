import { Link } from "react-router-dom";
import '../css/services.css'
function Services() {
    return (
    
        <section id="services">
            <h2>Mes services Maquillage</h2>
            
            <div className="service">  
                <article>
                    <img src="../img/IMG_20151213_202147.jpg" alt=""/>
                    <a href="#">
                       <Link to='/contacter' ><h4>Contact</h4></Link>
                    </a>
                </article> 
                <article> 
                    <img src="../img/IMG_20151210_115553.jpg" alt=""/>
                    <Link to='/prestations'>
                        <h4>Prestations</h4>
                  </Link>
                </article>
                <article className="article3">
                
                    <img src="../img/151013_MUM_Sephora_5111.jpg" alt=""/>
                    <a href="#">
                        <h4>Galerie</h4>
                    </a>
                </article>
            </div>
        </section>

        
    );
  }
  
  export default Services;