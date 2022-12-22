import { useEffect, useState } from "react";

import "./css/dashboard.css";
import ReservationDetails from "./ReservationDetails";






function Reservations () {


    const [reservations, setReservations] = useState([]);
    useEffect(() =>{

        const jwtLocalStorage=   localStorage.getItem('jwt');
        const jwtconnexion = JSON.parse(jwtLocalStorage).access_token;


        (async () =>{

            const reservationsResponse= await fetch('http://localhost/api/reservations', {
                method: 'get',
                headers: {
                    authorization: 'Bearer' + " " +jwtconnexion,
                    'Content-Type': 'application/json'
                },
            });

            const reservationData = await reservationsResponse.json();
            setReservations(reservationData)


            })();

    },[])

    return (
        <section id="reservation">

            <h2> Mes Réservations</h2>

                
           <div className="resa_list">
                
                {reservations.map((reservation) =>{
                        return(
                            <ReservationDetails key ={reservation.id} reservation={reservation} />
                        )

                })}
            
            </div>
           
        </section>


    )
}

export default Reservations;