import { useEffect, useState } from "react";
import "../css/dashboard.css";
import NavDashboard from "./adminComponents/NavDashboard";
import Sidebar from "./adminComponents/Sidebar";
import { useNavigate, useParams } from "react-router";
import swal from "sweetalert";


const SinglePrestation = () =>{

    const {prestationId} = useParams();
    const navigate = useNavigate();

    const [prestation, setprestation] = useState([]);
    
    const jwtLocalStorage=   localStorage.getItem('jwt');
    const jwtconnexion = JSON.parse(jwtLocalStorage).access_token;

    useEffect(() =>{

        (async () =>{

            const prestationsResponse= await fetch('http://localhost/api/prestations/' + prestationId, {
                method: 'GET',
                headers: {
                    authorization: 'Bearer '  +jwtconnexion,
                    'Content-Type': 'application/json'
                },
            });

            const prestationsData = await prestationsResponse.json();
            setprestation(prestationsData)


        })();

    })

    const handleDelete = ()=>{

        (async () => {

           
            const prestationResponse = await fetch('http://wwww.localhost/api/prestations/'+ prestationId,{
                
            method: 'DELETE',
            headers: {
                authorization: 'Bearer '  +jwtconnexion,
                'Content-Type': 'application/json'
            },
            })
         
            if(prestationResponse.status === 202){
                swal("OK!", "Prestations Supprimée", "success");
                navigate("/dashboard");
            }
        })();
        
    }
    const handleUpdate = (event)=>{
     
        event.preventDefault();
     
  
        const name = event.target.name.value;
        const image = event.target.image.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const duration = event.target.duration.value;
        const max_people_number = event.target.max_people_number.value;

        (async () => {
      
            const prestationResponse = await fetch('http://wwww.localhost/api/prestations/'+ prestationId,{
                    
                method: 'PATCH',
                headers: {
                    authorization: 'Bearer ' + jwtconnexion,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    name,
                    image,
                    description,
                    price,
                    duration,
                    max_people_number  
                })      
            })
            
            if(prestationResponse.status === 202){
                swal("OK!", "Réservation Modifiée", "success");
                navigate("/dashboard");
            }
        })();
    }

    const [update, setUdapte] = useState(true) 

    const handleClick = () =>{
        setUdapte(false)
    }


    return(

        <>

            <NavDashboard />

            <section className="main_page">
                <Sidebar />
                <div className="dashboard_item">
                    
                    <div className="title" >
                        <h3> Prestation n : {prestation.id}</h3>
                    </div>
            
                    <table border="1px">
                        <thead >
                            <tr>
                                <th>Nom</th>
                                <th>Url image</th>
                                <th>Prix</th> 
                                <th>Durée</th>
                                <th>Participant</th>
                                <th>Modifier</th>
                                <th>Supprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{prestation.name}</td>
                                <td>{prestation.image}</td>
                                <td>{prestation.price}</td>
                                <td>{prestation.duration}</td>
                                <td>{prestation.max_people_number}</td>
                            <td><button >modifier</button></td> 
                            <td><button >supprimer</button></td> 
                            </tr>
                        </tbody>
                    </table>


                </div>
            </section>
        </>
    )
}

export default SinglePrestation;