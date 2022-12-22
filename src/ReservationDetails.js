import "./css/dashboard.css"
import { Link } from "react-router-dom";

const ReservationDetails = (props) => {

    return(
        <>
            <article className="resaDetail">
                <Link to={'/reservations/'+ props.reservation.id}>
                    <p> {props.reservation.prestation}</p>  
                    <p> {props.reservation.name}</p>
                    <p> {props.reservation.first_name}</p>
                    <p>{props.reservation.date}</p>
                    <p>{props.reservation.adress}</p>
                    <p>{props.reservation.people_number} participant(s)</p>
                    <p>{props.reservation.description}</p>
                    <p>{props.reservation.id}</p>
                </Link>
            </article>
            <button>modifier</button>
            <button>supprimer</button>
        </> 
    )

};
export default ReservationDetails;