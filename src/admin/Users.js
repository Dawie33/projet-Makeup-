import { useEffect, useState } from "react";
import "../css/dashboard.css";
import NavDashboard from "./adminComponents/NavDashboard";
import UserDetails from "./UserDetails";
import Sidebar from "./adminComponents/Sidebar";



const Users =() => {


    const [users, setUsers] = useState([]);

    useEffect(() =>{

        const jwtLocalStorage=   localStorage.getItem('jwt');
        const jwtconnexion = JSON.parse(jwtLocalStorage).access_token;


        (async () =>{

            const usersResponse= await fetch('http://localhost/api/users', {
                method: 'GET',
                headers: {
                    authorization: 'Bearer' + " " +jwtconnexion,
                    'Content-Type': 'application/json'
                },
            });

            const usersData = await usersResponse.json();
            setUsers(usersData)


        })();

    },[])

    return (

  
        <>

            <NavDashboard />

            <section className="main_page">
                <Sidebar />

                <div className="dashboard_item">

                    <div className="item_list">
                        <div className="title" >
                            <h3> Utilisateurs</h3>
                        </div>
                        <table border="1px">

                            <thead >
                                <tr>
                                    <th>Id</th>
                                    <th>Nom</th>
                                    <th>Prénom</th>
                                    <th>Adresse</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {users.map((user) =>{
                                    return(
                                        <UserDetails key={user.id} user={user}/>                         
                                    )

                                })}
                        
                    
                            </tbody>
                        </table>
                    </div>
                </div>    
            </section>
                    
    
        </>

    )
}

export default Users;