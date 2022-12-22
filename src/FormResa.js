import './css/formResa.css';
import Navbar from './components/Navbar';

import Footer from './components/Footer';
import { useNavigate } from 'react-router';


function FormResa() {



   const navigate = useNavigate();



    const handleSubmit = async (event) => {


     
    
        event.preventDefault();

        const name = event.target.nom.value;
        const first_name = event.target.prenom.value;
        const date = event.target.date.value;
        const adress = event.target.adresse.value;
        const people_number = event.target.participant.value;
        const prestation = event.target.prestation.value;
        const description = event.target.description.value;


        const jwtLocalStorage=   localStorage.getItem('jwt');
        const jwtconnexion = JSON.parse(jwtLocalStorage).access_token;


        const jwtResponse = await fetch('http://www.localhost/api/reservations', {
            method: 'put',
            headers: {
                authorization: 'Bearer' + " " + jwtconnexion,
                'Content-Type': 'application/json'
            },
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

        

       if(jwtResponse.status===201){
      
         navigate("/userpage")
       }

    } 

 

    return (
        <>

        <Navbar />
    
        <main>
            <section id='reservation'>
                <h1>Réserver</h1> 
                <form onSubmit={handleSubmit}>

                    <div className='formResa'>
                        <label htmlFor="nom">Nom *</label>
                        <input
                            type="text"
                            name="nom"
                            id="nom"
                            placeholder="Nom"
                            required
                        />

                        <label htmlFor="Prenom">Prénom *</label>
                        <input
                            type="text"
                            id="prenom"
                            name="prenom"
                            placeholder="Prénom"
                            required
                        />
                    
                        <label htmlFor="date">date *</label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            placeholder="date de l'évènement"
                            required
                        />

                        <label htmlFor="Adresse">Adresse *</label>
                        <input
                            type="text"
                            id="adresse"
                            name="adresse"
                            placeholder="Adresse"
                            required
                        />

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
            
                        <button type="submit" > Reserver </button>
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
                        </select> <br/>
                        
                     
                        <label htmlFor="description">Description de l'évènement</label>
                        <textarea id="description" name="description"  placeholder="Décrivez votre demande" required>
                        </textarea>
                    </div>

                    
                </form>
            </section>

        </main>
      
        <Footer />
     
        </>
    );
}
  
export default FormResa;