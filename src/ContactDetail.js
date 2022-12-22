import { Link } from "react-router-dom";



const ContactDetail = (props) => {

    return(

        <Link to={'/contacts/'+ props.contact.id}>
    
            <article className="contact_details">
                <p>Nom : {props.contact.name}</p>
                <p>Prenom : {props.contact.first_name}</p>
                <p>Téléphone : {props.contact.telephone}</p>
                <p>Email : {props.contact.email}</p>
                <p>Description : {props.contact.description}</p>
            </article>  
        </Link>
        
    )


  }
  
  export default ContactDetail;