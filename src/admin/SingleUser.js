import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import NavDashboard from "./adminComponents/NavDashboard";
import swal from "sweetalert";
import Sidebar from "./adminComponents/Sidebar";


const SingleUser = () =>{

    const params = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState([])
   
    useEffect (()=>{


        
        const jwtLocalStorage=   localStorage.getItem('jwt');
        const jwtconnexion = JSON.parse(jwtLocalStorage).access_token;

        (async () => {

           
            const userResponse = await fetch('http://wwww.localhost/api/users/'+ params.userId,{
            
                method: 'GET',
                headers: {
                    authorization: 'Bearer' + " " +jwtconnexion,
                    'Content-Type': 'application/json'
                },
            })
         
            const userData = await userResponse.json();
            setUser(userData);
        
      

        })();
         
    },[])

    const handleDelete = ()=>{


        
        const jwtLocalStorage=   localStorage.getItem('jwt');
        const jwtconnexion = JSON.parse(jwtLocalStorage).access_token;

        (async () => {

           
            const userResponse = await fetch('http://wwww.localhost/api/users/'+ params.userId,{
                
                method: 'DELETE',
                headers: {
                    authorization: 'Bearer' + " " +jwtconnexion,
                    'Content-Type': 'application/json'
                },
            })
         
            if(userResponse.status === 202){
                swal("OK!", "Utilisateur Supprimé", "success");

                navigate("/dashboard");
            }
      
        })();
        
    }
   

    return(
        <>

            <NavDashboard />

            
            <section className="main_page">
                <Sidebar />

            
                <div className="dashboard_item">

                    <div className="title" >
                        <h3> Utilisateur : {user.first_name}</h3>
                    </div>
                    <table border="1px">
                        <thead >
                            <tr>
                                <th>Id</th>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Téléphone</th>
                                <th>Email</th> 
                                <th>Adresse</th>
                                <th>Roles</th>
                                <th>Supprimer</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.first_name}</td>
                                <td>{user.telephone}</td>
                                <td>{user.email}</td>
                                <td>{user.adresse}</td>
                                <td>{user.roles}</td>
                                <td><button onClick={handleDelete}>supprimer</button></td>
                            </tr>       
                        </tbody>
                    </table> 
                </div>

            </section>
       
       </> 
    )
}
export default SingleUser;