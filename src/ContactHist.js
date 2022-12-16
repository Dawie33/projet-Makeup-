import {useEffect, useState} from "react";


const ContactHist = () => {

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
                
                <h2>Historique contact</h2> 
                {contacts.map((contact) =>{
                    return (

                        <article>
                            <p>Nom : {contact.name}</p>
                            <p>Prenom : {contact.first_name}</p>
                            <p>Description : {contact.description}</p>
                        </article>  
                    
                    )

                })}
            </section>

        </>
    )
}
export default ContactHist;