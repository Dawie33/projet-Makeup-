
import Footer from "../components/Footer";
import "../css/contact.css";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import swal from "sweetalert";



function Contact  () {


    const navigate = useNavigate();
  

    const handleSubmit = (event) => {
        event.preventDefault();

        const name = event.target.nom.value;
        const first_name = event.target.prenom.value;
        const telephone = event.target.telephone.value;
        const email = event.target.email.value;
        const description = event.target.description.value;

        (async () => {

            const contactresponse= await fetch('http://www.localhost/api/contacts', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    first_name,
                    name,
                    telephone,
                    email,
                    description
                    
                })
            });

            if(contactresponse.status === 201){
                swal("OK!", "Message Envoyé", "success");

                navigate("/accueil");
            }

         })();

       
       
    }
    


    return(
        <>
            <Navbar />
          

            <section id="contact">
                <h2>Me contacter</h2>
                <div className="contact">
                        
                        <ul>
                            <li>Adele Make Up Artist :</li>
                            <li>Adele.syly@gmail.com</li>
                            <li>06 00 00 00 00</li>
                            <li><a href=''><i className="fab fa-facebook"></i> Facebook</a></li>
                            <li><a href=''><i className="fab fa-youtube"></i> Instagram</a></li>
                
                        </ul>
                        <div className="img">
                            <img src="../img/IMG_20151213_202147.jpg" alt=""/>
                        </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="formInput">

                        <label htmlFor="nom">Nom *</label> 
                        <input
                            type="text"
                            name="nom"
                            id="nom"
                            required
                        /> 

                        <label htmlFor="Prenom">Prénom *</label>
                        <input
                            type="text"
                            id="prenom"
                            name="prenom"
                            required
                        /> 
                         <label htmlFor="telephone">Téléphone *</label>
                            <input
                            type="text"
                            id="telephone"
                            name="telephone"
                            required
                        />
                        <label htmlFor="email">Email *</label> 
                            <input
                            type="email"
                            id="email"
                            name="email"
                            required
                         />

                        
                    </div>
                    <div className="formInput">
                        <label htmlFor="description">Votre demande *</label>
                        <textarea id="description" name="description"  placeholder="Décrivez votre demande" required>
                        </textarea>
                        <button type="submit" > Envoyer </button>
                    </div>    
                </form>

            </section>

            <Footer />
        </>


    )
}
export default Contact