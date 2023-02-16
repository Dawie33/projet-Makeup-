
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../css/userpage.css";
import dateFormat from "dateformat";



const UserPage = () => {


    const [reservations, setReservations] = useState([]);
    useEffect(() =>{

        const jwtLocalStorage=   localStorage.getItem('jwt');
        const jwtconnexion = JSON.parse(jwtLocalStorage).access_token;


        (async () =>{

            const reservationsResponse= await fetch('http://localhost/api/reservations', {
                method: 'get',
                headers: {
                    authorization: 'Bearer ' + jwtconnexion,
                    'Content-Type': 'application/json'
                },
            });

            const reservationData = await reservationsResponse.json();
            setReservations(reservationData)


            })();

    },[])

    return (
        <>

            <Navbar />
            <section id="reservationsList">

                <h1> Mes Réservations</h1>
            
            
                
                <div className="reservationsDetails">
                    {reservations.map((reservation) =>{

                        const date = dateFormat(reservation.date, "dd/mm/yyyy");

                        return(  

                            <div className="reservations" key={reservation.id}>
                                        
                        
                                <p>{reservation.prestation}</p>
                                <p>Date: {date}</p>
                                <p>Lieu: {reservation.adress}</p>
                                <p>Nombre de participant: {reservation.people_number}</p>
                        
                            </div>
                                            
                        
                        )

                    })} 
                    
                </div>
                    <Link to="/reservation/formulaire">Réserver</Link>
            </section>
            <Footer />
        </>


    )
}

export default UserPage;