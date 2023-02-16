import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import NavDashboard from "./adminComponents/NavDashboard";
import swal from "sweetalert";
import Sidebar from "./adminComponents/Sidebar";

const SingleContact = () =>{

    const params = useParams();
    const navigate = useNavigate ();
    const [contact, setcontact] = useState([])
   
    useEffect (()=>{

        const jwtLocalStorage=   localStorage.getItem('jwt');
        const jwtconnexion = JSON.parse(jwtLocalStorage).access_token;

        (async () => {

           
         const contactResponse = await fetch('http://wwww.localhost/api/contacts/'+ params.contactId,{
            
         method: 'GET',
         headers: {
             authorization: 'Bearer ' +jwtconnexion,
             'Content-Type': 'application/json'
         },
        })
         
            const contactData = await contactResponse.json();
              setcontact(contactData);
      

          })();
        
    },)


    const handleDelete = ()=>{


        
        const jwtLocalStorage=   localStorage.getItem('jwt');
        const jwtconnexion = JSON.parse(jwtLocalStorage).access_token;

        (async () => {

           
            const contactResponse = await fetch('http://wwww.localhost/api/contacts/'+ params.contactId,{
            
            method: 'DELETE',
            headers: {
                authorization: 'Bearer ' +jwtconnexion,
                'Content-Type': 'application/json'
            },
            })
         
           console.log(contactResponse);
            if(contactResponse.status === 202){
                swal("OK!", "Contact Supprimé", "success");

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
                        <h3> Contact : {contact.name}  {contact.first_name}</h3>
                    </div>
                    <table border="1px">
                        <thead >
                            <tr>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Téléphone</th>
                                <th>Email</th> 
                                <th>Description</th>
                                <th>Supprimer</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{contact.name}</td>
                                <td>{contact.first_name}</td>
                                <td>{contact.telephone}</td>
                                <td>{contact.email}</td>
                                <td>{contact.description}</td>
                                <td><button onClick={handleDelete}>supprimer</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        
        </> 
    )
}
export default SingleContact;