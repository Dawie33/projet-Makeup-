import "../css/formResa.css"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router';
import swal from "sweetalert";
// 'jimporte ma barre de navigation mon hook et mes composants

// je crée un composant FormResa pour afficher un formulaire de réservation
const FormResa = () => {

// je déclare ma constante navigate pour utilisation mon hook
    const navigate = useNavigate();

    // ma fontion handleSumit va récupérer les données de mon formulaire à la validation 
    const handleSubmit = (event) => {
    // je supprime levenement rechargement de page
        event.preventDefault();

    // event.target.{Nom de la valeur}.value permet de récupérer la valeur dans le formulaire
   
        const name = event.target.nom.value;
        const first_name = event.target.prenom.value;
        const date = event.target.date.value;
        const adress = event.target.adresse.value;
        const people_number = event.target.participant.value;
        const prestation = event.target.prestation.value;
        const description = event.target.description.value;

        // je lis le jwt stocké dans le localstorage au moment de l'authentification 
        const jwtLocalStorage=   localStorage.getItem('jwt');
        // Le localStorage stocke les données sous forme de chaines de caractères je transforme donc la donnée en JSON 
        const jwtconnexion = JSON.parse(jwtLocalStorage).access_token;
    
        // je réalise mon appel asynchrone vers mon API et j'utilisa la méthode HTTP PUT
        (async () => {
            const jwtResponse = await fetch('http://www.localhost/api/reservations',
             {
                method: 'POST',
                // /* je créé l'en-tête Authorization contenant le JWT */
                headers: {
                    authorization: 'Bearer ' + jwtconnexion,
                    'Content-Type': 'application/json'
                },
                // je converti les valeur en JSON et j'effectue la requête
                body: JSON.stringify({
                    name,
                    first_name,
                    prestation,
                    date,
                    adress,
                    people_number,
                    description                
                })                   
            });  
            // si ma requête renvoie un statut 201 (créé) et je navigue vers la page utilisateur
            if(jwtResponse.status===201){
                swal("OK!", "Réservation Ajoutée", "success");
                navigate("/userpage")
            }
        })();
    } 

    
    return (
        <>

        <Navbar />
        <main>
            <section id='reservation'>
                <h1>Réserver</h1> 
                 {/* onsubmit permet de mettre un écouteur d'évèvement click sur le submit */}
                <form onSubmit={handleSubmit}>

                    <div className='formResa'>
                        <label htmlFor="nom">Nom *</label>
                        <input
                            type="text"
                            name="nom"
                            id="nom"
                            placeholder="Nom"
                            required
                        /> <br />

                        <label htmlFor="Prenom">Prénom *</label>
                        <input
                            type="text"
                            id="prenom"
                            name="prenom"
                            placeholder="Prénom"
                            required
                        /><br />
                        <label htmlFor="date">Date *</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            required
                           
                        /><br />
                        
                        <label htmlFor="Adresse">Adresse *</label>
                        <input
                            type="text"
                            id="adresse"
                            name="adresse"
                            placeholder="Adresse"
                            required
                        /><br />

                        <label htmlFor="participant">Nombre de participant *</label>
                        <input
                            type="number"
                            min="1"
                            max="5"
                            id="participant"
                            name="articipant"
                            placeholder="Nombre de participant"
                            required
                        />
            
                      
                    </div>
                    <div className='formResa' >
                        <label htmlFor="prestation">Prestation *</label>
                        <select  id="prestation" name="prestation" required>
                            <option value="Mise en beauté naturelle" disabled selected>Choix prestation...</option>
                            <option value="Mise en beauté naturelle">Mise en beauté naturelle</option>
                            <option value="Maquillage de soirée">Maquillage de soirée</option>
                            <option value="Maquillage artistique">Maquillage artistique</option>
                            <option value="Essai mariage">Essai mariage</option>
                            <option value="Mariage">Mariage</option>
                            <option value="Cours de Maquillage">Cours de Maquillage</option>
                        </select> <br />
                        
                        <label htmlFor="description">Description de l'évènement</label><br />
                        <textarea id="description" name="description"  placeholder="Décrivez votre demande" required>
                        </textarea> <br />
                        <button type="submit" > Reserver </button>
                    </div>

                        
                </form>
            </section>
            
        </main>
        <Footer />
        </>
    );
}
  
export default FormResa;