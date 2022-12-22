import {useEffect, useState} from "react";
import ContactDetail from "./ContactDetail"; 




const ContactList = () => {

    const [contacts, setContacts] = useState([]);
 
    useEffect(() => {
    

        const jwtLocalStorage=   localStorage.getItem('jwt');
        const jwtconnexion = JSON.parse(jwtLocalStorage).access_token;


         

        (async () => {
          const contactsResponse = await fetch('http://wwww.localhost/api/contacts', {
            method: 'get',
            headers: {
                authorization: 'Bearer' + " " +jwtconnexion,
                'Content-Type': 'application/json'
            },
          
            
          });
         
          const contactsData = await contactsResponse.json();
          setContacts(contactsData);
      
        })();
        }, []);
     
   
    return(
        <>
            
            <section id="contactList">
                
                <h2>Mes contacts</h2> 
                {contacts.map((contact) =>{
                    return (
                        <>

                        <ContactDetail key={contact.id} contact={contact} />
                  
                        </>
                    )

                })}
            </section>

        </>
    )
}
export default ContactList;