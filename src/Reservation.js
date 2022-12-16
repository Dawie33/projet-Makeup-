import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function Reservation () {

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

            <h2>Réservations</h2> 

            {reservations.map((reservation) =>{
                    return(
                        <>

                            <p>{reservation.name}</p>
                            <p>{reservation.first_name}</p>
                            <p>{reservation.prestation}</p>
                            <p>{reservation.date}</p>
                            <p>{reservation.adress}</p>
                            <p>{reservation.people_number}</p>
                            <p>{reservation.event}</p>
                          
                    </> 
                    )

            })}

            <Link to='/réserver'>Réserver</Link>

        </section>


    )
}

export default Reservation 