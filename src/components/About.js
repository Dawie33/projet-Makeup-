import { Link } from "react-router-dom";
import "../css/about.css"
const About =()=>{
    return(

        
        <section id="about">
            
            <div className="adeleImg">

            
                <img src="../img/150910_MUM_Sephora_3509.jpg" alt=""></img>
            </div>
        

            <div className="aboutAdele">
                <div className="content">
                    <h3>à propos d'Adèle</h3> 
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. soloribus officia reprehenderit ullam vel est, consequatur numquam. Non nemo laudantium expedita, necessitatibus quas laborum deleniti obcaecati accusantium fugiat autem quos consequuntur velit quis assumenda ipsam minima, amet, eveniet iusto earum incidunt aliquid sapiente placeat vel possimus! Ipsam placeat iste. Lorem, ipsum dolor sit amet consectetur adipisicing elit. soloribus officia reprehenderit ullam vel est, consequatur numquam. Non nemo laudantium expedita, necessitatibus quas laborum deleniti obcaecati accusantium fugiat autem quos 
                
                    </p>
                    <Link> En savoir +</Link>
                 </div>
            </div>

      
        </section>


    )
}
export default About;