import { useEffect, useState } from "react";
import PrestationsDetail from "./PrestationDetail";
import "./prestation.css";
import Nav from "./Nav";
import Footer from "./Footer";


const Prestations = () => {

    const [prestations, setPrestations] = useState([]);
 
    useEffect(() => {
    

        (async () => {
          const prestationsResponse = await fetch('http://wwww.localhost/api/prestations')
          const prestationsData = await prestationsResponse.json();
          setPrestations(prestationsData);
      
        })();
    }, []);
     
   
    
    return(
        <>
            <Nav />

            <section id="prestations">

                <h1> Mes Prestations</h1>
                <div className="prestaDetail">
                {prestations.map((prestation) => {
                    return(
                        <div className="prestation">
                            <a href={"#prestation-" + prestation.id}><img src={prestation.image} alt="" />
                            <p>{prestation.name}</p></a> 
                        </div>
                    )
                    })
                }
                </div>
            

                {prestations.map((prestation) => {
                    return(

                    <PrestationsDetail key={prestation.id} prestation={prestation} />
                    )
                })}
            </section>

            <Footer />
        </>
       
    );


}
  
  export default Prestations;