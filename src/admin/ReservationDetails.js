import { Link} from "react-router-dom";
import dateFormat from "dateformat";

const ReservationDetails = (props) =>{

  
   

    const date = dateFormat(props.reservation.date, "dd/mm/yyyy");

    return(

        <tr >

            <td>{props.reservation.id}</td>
            <td>{props.reservation.prestation}</td>
            <td>{props.reservation.name}</td>
            <td>{props.reservation.first_name}</td>
            <td>{date}</td>
            <td>{props.reservation.adress}</td>
            <td>{props.reservation.people_number}</td>
            <td><Link to={'/reservations/'+ props.reservation.id}> voir </Link></td>  
           

        </tr>

    )
}
export default ReservationDetails;