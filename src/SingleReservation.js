import { useEffect, useState } from "react";
import { useParams } from "react-router";


const SingleReservation = () =>{

    const params = useParams();

    const [reservation, setreservation] = useState([])
   
    useEffect (()=>{


        
        const jwtLocalStorage=   localStorage.getItem('jwt');
        const jwtconnexion = JSON.parse(jwtLocalStorage).access_token;

        (async () => {

           
         const reservationResponse = await fetch('http://wwww.localhost/api/reservations/'+ params.reservationId,{
            
         method: 'get',
         headers: {
             authorization: 'Bearer' + " " +jwtconnexion,
             'Content-Type': 'application/json'
         },
        })
         
         const reservationData = await reservationResponse.json();
              setreservation(reservationData);
      

          })();
        
    },[])

    return(
        
        <article className="resaDetail">
         
        <p> {reservation.prestation}</p>
        <p>{reservation.date}</p>
        <p>{reservation.adress}</p>
        <p>{reservation.people_number} participant(s)</p>
        <p>{reservation.description}</p>
        <p>{reservation.id}</p>

    </article>
    )
}
export default SingleReservation;