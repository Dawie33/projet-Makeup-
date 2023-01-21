import { Link } from "react-router-dom";



const ContactDetails = (props) => {

    return(

        <tr>

            <td>{props.contact.name}</td>
            <td>{props.contact.first_name}</td>
            <td>{props.contact.telephone}</td>
            <td>{props.contact.email}</td>
            <td><Link to={'/contacts/'+ props.contact.id}>voir </Link></td>

        </tr>      
        
    )


  }
  
  export default ContactDetails;