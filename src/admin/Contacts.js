import {useEffect, useState} from "react";
import NavDashboard from "./adminComponents/NavDashboard";
import Sidebar from "./adminComponents/Sidebar";
import ContactDetails from "./ContactDetails"; 




const Contacts = () => {

    const [contacts, setContacts] = useState([]);
 
    useEffect(() => {
    

        const jwtLocalStorage=   localStorage.getItem('jwt');
        const jwtconnexion = JSON.parse(jwtLocalStorage).access_token;


         

        (async () => {
          const contactsResponse = await fetch('http://wwww.localhost/api/contacts', {
            method: 'GET',
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
            <NavDashboard />
            <section className="main_page">
                <Sidebar />
                <div className="dashboard_item">

                    <div className="item_list">
                        <div className="title" >
                            <h3>Contacts</h3>
                        </div>
                        <table border="1px">

                            <thead >
                                <tr>
                                    <th>Id</th>
                                    <th>Nom</th>
                                    <th>Prénom</th>
                                    <th>Adresse</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact) =>{
                                    return (
                                        <ContactDetails key={contact.id} contact={contact} />
                                    )

                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Contacts;