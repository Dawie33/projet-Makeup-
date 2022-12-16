import './formulaire.css';
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {  useNavigate } from "react-router";


function Formulaire() {


    const navigate= useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();

        const name = event.target.nom.value;
        const first_name = event.target.prenom.value;
        const prestation = event.target.prestation.value;
        const date = event.target.date.value;
        const adress = event.target.adresse.value;
        const people_number = event.target.participant.value;
        const evnt = event.target.evenement.value;

        const jwtLocalStorage=   localStorage.getItem('jwt');
        const jwtconnexion = JSON.parse(jwtLocalStorage).access_token;


      const jwtResponse =  fetch('http://www.localhost/api/reservations', {
            method: 'put',
            headers: {
                authorization: 'Bearer' + " " +jwtconnexion,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                first_name,
                prestation,
                date,
                adress,
                people_number,
                evnt
                
            })
        });

    }


    return (
        <>
            <Nav />
            <main>
                <h1>Réserver</h1> 
                <section id="contact">
                    
                    <ul>
                        <li>Adele Make Up Artist :</li>
                        <li>Adele.syly@gmail.com</li>
                        <li>06 00 00 00 00</li>
                        <li><a href=''><i className="fab fa-facebook"></i>Facebook</a></li>
                        <li><a href=''><i className="fab fa-youtube"></i>Instagram</a></li>
            
                    </ul>
                    <div className="img">
                        <img src="../img/amatrat.jpg" alt=""/>
                    </div>
                </section>

                <section id='formulaire'>

                    <form onSubmit={handleSubmit}>
                    
                        <label htmlFor="nom">Nom *</label><br />
                        <input
                            type="text"
                            name="nom"
                            id="nom"
                            placeholder="nom"
                            required
                        /><br /><br />

                        <label htmlFor="Prenom">Prénom *</label><br />
                        <input
                            type="text"
                            id="prenom"
                            name="prenom"
                            placeholder="Prénom"
                            required
                        /><br /><br />

                        <label htmlFor="prestation">Prestation *</label><br />
                        <select id="prestation" name="prestation" required>
                            <option value="" disabled selected>Choix prestation...</option>
                            <option value="Mise en beauté naturelle">Mise en beauté naturelle</option>
                            <option value="Maquillage de soirée">Maquillage de soirée</option>
                            <option value="Maquillage artistique">Maquillage artistique</option>
                            <option value="Essai mariage">Essai mariage</option>
                            <option value="Mariage">Mariage</option>
                            <option value="Cours de Maquillage">Cours de Maquillage</option>
                        </select>
                        <br /><br />
                        <label htmlFor="evenement">Evenement *</label><br />
                        <input
                            type="text"
                            id="evenement"
                            name="evenement"
                            placeholder="Evenement"
                            required
                        /><br /><br />

                        <label htmlFor="date">date *</label><br />
                        <input
                            type="date"
                            name="date"
                            id="date"
                            placeholder="date de l'évènement"
                            required
                        /><br /><br />

                        <label htmlFor="Adresse">Adresse</label><br />
                        <input
                            type="text"
                            id="adresse"
                            name="adresse"
                            placeholder="adresse"
                            required
                        /><br /><br />

                        <label htmlFor="participant">Nombre de participant</label><br />
                        <input
                            type="number"
                            min="1"
                            max="5"
                            id="participant"
                            name="participant"
                            placeholder="Nombre de participant"
                            required
                        /><br /><br />
            
                        <button type="submit" > <Link to='/userpage'> Reserver </Link> </button>

                    </form>
                </section>

            </main>
            <Footer />
        </>
    );
}
  
export default Formulaire;