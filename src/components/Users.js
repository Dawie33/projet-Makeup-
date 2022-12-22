import { useState, useEffect } from "react";
import '../css/users.css';
import { Link } from "react-router-dom";

const Users = () =>{

    const [users, setUsers] = useState([])
     
    useEffect(() => {
    

        (async () => {
          const usersResponse = await fetch('http://wwww.localhost/api/users')
          const usersData = await usersResponse.json();
            setUsers(usersData);
      
        })();
    }, []);
     
    return(
        <div className="users">
            <h1>Users</h1>
            <Link to="/users/new"> <span>Ajouter un user</span></Link>
            <div className="users_list">
                {users.map((user)=>{
                    return(
                        <div className="users_card" key={user.id}>
                            <Link to={'/users/'+ user.id}>
                            <p>{user.name}</p>
                            <p>{user.first_name}</p>
                            <p>{user.id}</p>
                            <p>{user.adresse}</p>
                            <p>{user.telephone}</p>
                            <p>{user.email}</p>
                            <p>{user.created_at}</p>
                            </Link>
                        </div>


                        

                    )
                })};
            </div>
        </div>
    )
}
export default Users;