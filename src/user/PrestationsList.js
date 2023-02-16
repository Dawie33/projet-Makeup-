import { useEffect, useState } from "react";
import PrestationsInfo from "../components/PrestationsInfo";
import "../css/prestation.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// j'importe mes hooks mon fichier css et mes composants (Navbar, footer, PrestationsInfo)
// je crée un composant qui va m'afficher la liste de mes prestations.
const PrestationsList = () => {

    // j'utilise useState pour stocker mes prestations en dehors de mon composant
    // (pour garder sa valeur à chaque appel du composant, à chaque "render")
    const [prestations, setPrestations] = useState([]);
 
   // j'utilise la fonction useEffect (qui est un "hook") de react
    
    useEffect(() => {
        // je veux faire un appel fetch (asynchrone donc) pour ça, je déclare une fonction anonyme qui s'auto invoque

        (async () => {
          const prestationsResponse = await fetch('http://wwww.localhost/api/prestations')
          const prestationsData = await prestationsResponse.json();
          setPrestations(prestationsData);
          
   
        })();
    }, []);

    return(
        <>
        {/* j'appelle mon composant Navbar créé auparavant */}
            <Navbar />
            <main>
                <section id="prestations">
                    <h1> Mes Prestations</h1>
                    <div className="prestaDetail">                        
                {/* 
                    Je boucle sur les prestations stockés dans mon state 
                */}
                    {prestations.map((prestation) => {
                        return(
                            // je donne une KEY pour identifier chaque élément de liste. 
                            <div key={prestation.id} className="prestation">
                                {/* je rends l'image et le nom de la prestation cliquable afin de créer une ancre et etre redirigé vers un endroit de la page */}
                                <a href={"#prestation-" + prestation.id}><img src={prestation.image} alt="présentation des prestations" />
                                <p>{prestation.name}</p></a> 
                            </div>
                        )
                        })
                    }
                    </div>
            </section>
                    {/* je boucle une deuxième fois sur les prestations */}
                    {prestations.map((prestation) => {
                        return(
                            // j'appelle mon composant que je passe en props 
                        <PrestationsInfo key={prestation.id} prestation={prestation} />
                        )
                    })}
               
            </main>
            <Footer />
        </>
    );
}
export default PrestationsList;