import { Link } from "react-router-dom";

// j'importe le hook link de react router 
//  ce composant va m'afficher le détail des prestations.
// les props vont me permettre de passer les données d'un composant à un autre
// // mes props correspondent à un objet qui contient mes prestation
const PrestationsInfo = ({prestation}) => {

    
    return(
    // j'associe à chaque prestation un id qui se nommera "prestation - (+ id de la prestation)" afin de créer le lien avec mon ancre
    <section  id={"prestation-" + prestation.id}>
        <div className="prestaList">

            <h2>{prestation.name}</h2>
            <article>
                <div className="prestaImg">
                    <img src={prestation.image} alt="prestation proposée par Adele" />
                </div>
                <div className="content">
                    <p>{prestation.description}</p>    
                    <div className="tarifs">
                        <h3>Tarifs : </h3>
                        <p> <strong>{prestation.price} € / {prestation.duration}</strong></p>
                        <p><em>"{prestation.max_people_number} personnes maximun"</em></p>
                         {/* je redirige vers la page inscription */}
               
                         <Link to="/login">Réserver</Link> 
                    </div>              
                </div>
            </article>
        </div>
    </section>
        
    )
  }
  
  export default PrestationsInfo;