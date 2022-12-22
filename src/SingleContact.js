import { useEffect, useState } from "react";
import { useParams } from "react-router";


const SingleContact = () =>{

    const params = useParams();

    const [contact, setcontact] = useState([])
   
    useEffect (()=>{


        
        const jwtLocalStorage=   localStorage.getItem('jwt');
        const jwtconnexion = JSON.parse(jwtLocalStorage).access_token;

        (async () => {

           
         const contactResponse = await fetch('http://wwww.localhost/api/contacts/'+ params.contactId,{
            
         method: 'get',
         headers: {
             authorization: 'Bearer' + " " +jwtconnexion,
             'Content-Type': 'application/json'
         },
        })
         
         const contactData = await contactResponse.json();
              setcontact(contactData);
          console.log(contactResponse);

          })();
        
    },[])

    return(
        <article className="contact_details">
            <p>Nom : {contact.name}</p>
            <p>Prenom : {contact.first_name}</p>
            <p>Téléphone : {contact.telephone}</p>
            <p>Email : {contact.email}</p>
            <p>Description : {contact.description}</p>
        </article>  
    )
}
export default SingleContact;