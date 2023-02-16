import { useEffect, useState } from "react";
import "../css/dashboard.css";
import ReservationDetails from "./adminComponents/ReservationDetails";
import PutReservation from "./adminComponents/PutReservation";
import swal from "sweetalert";
import NavDashboard from "./adminComponents/NavDashboard";
import Sidebar from "./adminComponents/Sidebar";


const Reservations = () => {

    const [reservations, setReservations] = useState([]);

    useEffect(() =>{

        const jwtLocalStorage=   localStorage.getItem('jwt');
        const jwtconnexion = JSON.parse(jwtLocalStorage).access_token;

        (async () =>{

            const reservationsResponse= await fetch('http://localhost/api/reservations', {
                method: 'GET',
                headers: {
                    authorization: 'Bearer ' +jwtconnexion,
                    'Content-Type': 'application/json'
                },
            });

            const reservationData = await reservationsResponse.json();
            setReservations(reservationData)


        })();

    },[])

   
    const handlePut= (event) => {
    
        event.preventDefault();

        const name = event.target.nom.value;
        const first_name = event.target.prenom.value;
        const date = event.target.date.value;
        const adress = event.target.adresse.value;
        const people_number = event.target.participant.value;
        const prestation = event.target.prestation.value;
        const description = event.target.description.value;

        const jwtLocalStorage=   localStorage.getItem('jwt');
        const jwtconnexion = JSON.parse(jwtLocalStorage).access_token;

        (async () => {
            const jwtResponse = await fetch('http://www.localhost/api/reservations', {
                method: 'PUT',
                headers: {
                    authorization: 'Bearer '  + jwtconnexion,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    first_name,
                    prestation,
                    date,
                    adress,
                    people_number,
                    description
                })       
            });  

            if(jwtResponse.status===201){
                swal("OK!", "Réservation Ajoutée", "success");
            }
        })();
    } 

    const [put, setPut] = useState(true) 

    const handleClick = () =>{
       
        setPut(false)
    }


    return (

        <>

            <NavDashboard />

            <section className="main_page">
                <Sidebar />

                <div className="dashboard_item">

                    <div className="item_list">

                        <div className="title" >
                            <h3>Reservations</h3>    
                            <button  onClick={handleClick}>  Ajouter</button>
                        </div>

                        <table border="1px">

                            <thead >
                                <tr>
                                    <th>Id</th>
                                    <th>Prestation</th>
                                    <th>Nom</th>
                                    <th>Prénom</th>
                                    <th>Date</th> 
                                    <th>Adresse</th>
                                    <th>Participant</th>
                                    <th>Selectionner</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reservations.map((reservation) =>{
                                    return(                
                                        <ReservationDetails key={reservation.id}   reservation={reservation}/>
                                    )
                                })}
                            </tbody>
                        </table>

                        {!put ?
                        
                            <PutReservation handlePut={handlePut} />
                            :
                            <div></div>
                        }
                    </div>
                </div>
            </section>
        </>

    )
}

export default Reservations;