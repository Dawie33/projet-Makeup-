
import Nav from "./Nav";
import Footer from "./Footer";
import Services from "./Services";
function About() {
    return (
        <>
            <Nav />
                <div id="banner"></div>
                <section id="title">
                    <h1> ADELE </h1>
                    <p> MAKE UP ARTIST</p>
                </section>

                <section id="about">
                    <div className="aboutAdele">
                        <div>
                            <h3>à propos d'Adèle</h3> 
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit saepe maxime explicabo sequi blanditiis, doloribus officia reprehenderit ullam vel est, consequatur numquam. Non nemo laudantium expedita, necessitatibus quas laborum deleniti obcaecati accusantium fugiat autem quos consequuntur velit quis assumenda ipsam minima, amet, eveniet iusto earum incidunt aliquid sapiente placeat vel possimus! Ipsam placeat iste, optio perferendis voluptates rerum eius vitae voluptatum quasi error deleniti! Perferendis consectetur dolore maxime assumenda natus.</p>
                        </div>
                    </div>
                    <div className="imgAdele">
                    <img
                        src="../img/pexels-laura-garcia-4006699.jpg"
                        alt="photo d'adèle qui maquille une cliente"
                    />
                    </div>
                </section>
            <Services />
            <Footer />
        </>
    );
  }
  
  export default About;