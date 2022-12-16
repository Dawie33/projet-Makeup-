import { Link } from "react-router-dom";
function Services() {
    return (
    
        <section id="services">
            <h2>Mes services Maquillage</h2>
            
            <div className="service">  
                <article>
                    <img src="../img/pexels-becerra-govea-photo-5733013.jpg" alt=""/>
                    <a href="#">
                        <h4>Contact</h4>
                    </a>
                </article> 
                <article> 
                    <img src="../img/pexels-ivan-siarbolin-3695801.jpg" alt=""/>
                    <Link to='/prestations'>
                        <h4>Prestations</h4>
                  </Link>
                </article>
                <article>
                
                    <img src="../img/pexels-imustbedead-10895036.jpg" alt=""/>
                    <a href="#">
                        <h4>Galerie</h4>
                    </a>
                </article>
            </div>
        </section>

        
    );
  }
  
  export default Services;