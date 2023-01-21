import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const NavDashboard = () => {

    const navigate = useNavigate();

    const handleLogOut= () =>{

        localStorage.removeItem('jwt');
        navigate('/login')

    }
    const handleGoBack = () =>{
        navigate('/dashboard')
     }


    return (
            
        <section>
            <div className="navDashboard">
                <h1> Bienvenue Adele </h1>
              
                <div>

                    <button onClick={handleGoBack}>Retour</button>
                    <button onClick={handleLogOut}>Déconnection</button>
                </div>

            </div>
        </section>

    )
}
export default NavDashboard;
