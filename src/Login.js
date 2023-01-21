
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {  useNavigate } from "react-router";
import "./css/login.css"

const Login = () => {

    const navigate= useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;


        const jwtResponse = await fetch('http://www.localhost/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
            
            })
        });

        const logindata= await jwtResponse.json();
        
        if(jwtResponse.status === 200 && logindata.roles==="admin"){

            localStorage.setItem('jwt', JSON.stringify(logindata));
            navigate("/dashboard");

        } else if(jwtResponse.status === 200 && logindata.roles==="user"){
            localStorage.setItem('jwt', JSON.stringify(logindata));
            navigate("/userpage");
        }
        else{
            navigate("/accueil");
        }
    }


    return (
    <>
       <Navbar />
       <main>
            <section id="loginForm">
                <div className="formImg">
                    <img src="../img/pexels-𝐕𝐞𝐧𝐮𝐬-𝐇𝐃-𝐌𝐚𝐤𝐞-𝐮𝐩-&-𝐏𝐞𝐫𝐟𝐮𝐦𝐞-1749452.jpg" alt=""></img>
                </div>

                <div className="formContent">
                    <h2> Se Connecter</h2> 
                    <p><em> ( Vous devez être connecté pour effectuer une réservation )</em></p>
                    <form onSubmit={handleSubmit}>
                            
                        <label htmlFor="email"></label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email "
                            required
                        />

                        <label htmlFor="password"></label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Mot de Passe "
                            required
                        />
                        <button type="submit" >Envoyer </button>
                    </form>
                </div>
            </section>
        </main>
        <Footer />  
    </>
    )
}
export default Login;
