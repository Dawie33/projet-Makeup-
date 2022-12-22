
import HomeNav from "./HomeNav";
import Footer from "./Footer";
import Services from "./Services";
function About() {
    return (
        <>
            <HomeNav />
               
            
                <section id="about">
                    <article>

                        <div className="imgAdele">
                            <img src="../img/150910_MUM_Sephora_3509.jpg"></img>
                          
                        </div>
                        <div className="aboutAdele">
                            <div className="content">
                                <h3>à propos d'Adèle</h3> 
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. soloribus officia reprehenderit ullam vel est, consequatur numquam. Non nemo laudantium expedita, necessitatibus quas laborum deleniti obcaecati accusantium fugiat autem quos consequuntur velit quis assumenda ipsam minima, amet, eveniet iusto earum incidunt aliquid sapiente placeat vel possimus! Ipsam placeat iste. </p>
                            </div>
                        </div>
                    </article>
                 
                </section>
            <Services />
            <Footer />
        </>
    );
  }
  
  export default About;