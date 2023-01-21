import { Link } from "react-router-dom";

const UserDetails = (props) =>{



    return(
        <tr >
            <td >{props.user.id}</td>
            <td>{props.user.name}</td>
            <td>{props.user.first_name}</td>
            <td>{props.user.telephone}</td>
            <td>{props.user.email}</td>
      
            <td><Link to={'/users/'+ props.user.id}>  voir </Link></td> 
        </tr>
     
    )
}
export default UserDetails;