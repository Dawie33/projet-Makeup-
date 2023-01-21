import { Link } from "react-router-dom";
import '../css/services.css'
function Services() {
    return (
    
        <section id="services">
            <h3>Mes services Maquillage</h3>
            
            <div className="service">  
                <article>
                    <img src="../img/IMG_20151213_202147.jpg" alt=""/>
                    <Link to='/contact' ><h4>Contact</h4></Link>
           
                </article> 
                <article> 
                    <img src="../img/IMG_20151210_115553.jpg" alt=""/>
                    <Link to='/prestations'>
                        <h4>Prestations</h4>
                  </Link>
                </article>

            </div>
        </section>

        
    );
  }
  
  export default Services;