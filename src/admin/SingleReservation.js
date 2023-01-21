
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import dateFormat from "dateformat";
import "../css/dashboard.css"
import UpdateReservation from "./adminComponents/UpdateReservation";
import NavDashboard from "./adminComponents/NavDashboard";
import swal from "sweetalert";
import Sidebar from "./adminComponents/Sidebar";

const SingleReservation = () =>{

    const {reservationId} = useParams();
    const navigate = useNavigate();
   
  
    const [reservation, setreservation] = useState([]);
   
    useEffect (()=>{

        const jwtLocalStorage=   localStorage.getItem('jwt');
        const jwtconnexion = JSON.parse(jwtLocalStorage).access_token;

        (async () => {

            const reservationResponse = await fetch('http://wwww.localhost/api/reservations/'+ reservationId,{
                
            method: 'GET',
            headers: {
                authorization: 'Bearer' + " " +jwtconnexion,
                'Content-Type': 'application/json'
            },
            })
         
            const reservationData = await reservationResponse.json();
            setreservation(reservationData);
       

        })();
   
    },[])



    const handleDelete = ()=>{

        const jwtLocalStorage=   localStorage.getItem('jwt');
        const jwtconnexion = JSON.parse(jwtLocalStorage).access_token;

        (async () => {

           
            const reservationResponse = await fetch('http://wwww.localhost/api/reservations/'+ reservationId,{
                
            method: 'DELETE',
            headers: {
                authorization: 'Bearer' + " " +jwtconnexion,
                'Content-Type': 'application/json'
            },
            })
         
            if(reservationResponse.status === 202){
                swal("OK!", "Réservation Supprimée", "success");

                navigate("/dashboard");
            }
        })();
        
    }
    
    const handleUpdate = (event)=>{
     
        event.preventDefault();

        const date = event.target.date.value;
        const adress = event.target.adresse.value;
        const people_number = event.target.participant.value;
        const prestation = event.target.prestation.value;
        const description = event.target.description.value;
    
        const jwtLocalStorage=   localStorage.getItem('jwt');
        const jwtconnexion = JSON.parse(jwtLocalStorage).access_token;

        (async () => {
      
            const reservationResponse = await fetch('http://wwww.localhost/api/reservations/'+ reservationId,{
                    
                method: 'PATCH',
                headers: {
                    authorization: 'Bearer' + " " + jwtconnexion,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    prestation,
                    date,
                    adress,
                    people_number,
                    description  
                })      
            })
            
            if(reservationResponse.status === 202){
                swal("OK!", "Réservation Modifiée", "success");
                navigate("/dashboard");
            }
        })();
    }



    const [update, setUdapte] = useState(true) 

    const handleClick = () =>{
        setUdapte(false)
    }
   
    const date = dateFormat(reservation.date, "dd/mm/yyyy");

    return(
        <>


            <NavDashboard />

            <section className="main_page">
                <Sidebar />

            
                <div className="dashboard_item">
                    
                    <div className="title" >
                        <h3> Réservation n : {reservation.id}</h3>
                    </div>
            
                    <table border="1px">
                        <thead >
                            <tr>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Prestation</th>
                                <th>Date</th> 
                                <th>Adresse</th>
                                <th>Participant</th>
                                <th>Détails</th>
                                <th>Modifier</th>
                                <th>Supprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{reservation.name}</td>
                                <td>{reservation.first_name}</td>
                                <td>{reservation.prestation}</td>
                                <td>{date}</td>
                                <td>{reservation.adress}</td>
                                <td>{reservation.people_number} participant(s)</td>
                                <td>{reservation.description}</td>
                            <td><button onClick={handleClick}>modifier</button></td> 
                            <td><button onClick={handleDelete}>supprimer</button></td> 
                            </tr>
                        </tbody>
                    </table>


                    {!update ?
                    
                        <UpdateReservation handleUpdate={handleUpdate} />

                        :
                        <div></div>
                    }
                </div>
                    
            </section>
          

          
        </>
    )
}
export default SingleReservation;