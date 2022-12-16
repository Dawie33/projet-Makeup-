
import Nav from "./Nav";
import Footer from "./Footer";
import {  useNavigate } from "react-router";

function Login () {

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
        
        
        if(jwtResponse.status === 200){

            localStorage.setItem('jwt', JSON.stringify(logindata));
            navigate("/userpage");
        }
        else{
            navigate("/accueil");
        }
    }


    return (
    <>
        <Nav />
        
        <form onSubmit={handleSubmit}>
                
            <label htmlFor="email">email *</label><br />
            <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                required
            /><br /><br />

            <label htmlFor="password">password *</label><br />
            <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                required
            /><br /><br />
             <button type="submit" >login </button>
        </form>

        <Footer />  
    </>
    )
}
export default Login;
