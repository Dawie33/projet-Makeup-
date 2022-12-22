import "./css/signup.css";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import { useNavigate } from "react-router";



function Signup () {

    const navigate = useNavigate();
    
    

    const Submit = async (event) => {
        event.preventDefault();

        const first_name = event.target.prenom.value;
        const name = event.target.nom.value;
        const adresse = event.target.adresse.value;
        const telephone = event.target.telephone.value;
        const password = event.target.password.value;
        const repassword = event.target.repassword.value;
        const email = event.target.email.value;


      
    
        const jwtResponse= await fetch('http://www.localhost/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name,
                name,
                adresse,
                telephone,
                email,
                password,
                repassword
                
            })
        }); 

        console.log(jwtResponse);
        const signupdata= await jwtResponse.json();
        
        if(jwtResponse.status===200){
            localStorage.setItem('jwt', JSON.stringify(signupdata));
            navigate("/userpage");
       }


      }

     

    return(
        <>
            <Navbar />

            <section className="formSignup">

                <h1>Inscription</h1>

                <form onSubmit={Submit}>
                    <fieldset>
                    <label htmlFor="prenom"> </label>
                        <input
                            type="text"
                            id="prenom"
                            name="prenom"
                            placeholder="Prénom *"
                            required
                            
                        />
                    <label htmlFor="nom"></label>
                    <input
                        type="text"
                        name="nom"
                        id="nom"
                        placeholder="Nom *"
                        required
                    />
                    <label htmlFor="adresse"></label>
                    <input
                        type="text"
                        name="adresse"
                        id="adresse"
                        placeholder="Adresse *"
                        required
                    />   
                    <label htmlFor="telephone"></label>
                        <input
                        type="text"
                        id="telephone"
                        name="telephone"
                        placeholder="Téléphone *"
                        required
                    />
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email *"
                        required
                    />
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Mot de passe *"
                        required
                    />
                    <label htmlFor="repassword"></label>
                    <input
                        type="password"
                        name="repassword"
                        id="repassword"
                        placeholder="Mot de passe *"
                        required
                    />

                    <button type="submit" > Envoyer </button>
                    </fieldset>

                </form>
          

            </section>
            
        
        
            <Footer />
        </>
    )
}
export default Signup;