import { useEffect, useState } from "react";
import "../css/dashboard.css";
import PrestationsDetails from "./adminComponents/PrestationsDetails";
import NavDashboard from "./adminComponents/NavDashboard";
import Sidebar from "./adminComponents/Sidebar";


const Prestations = () =>{

    const [prestations, setprestations] = useState([]);
    useEffect(() =>{

        const jwtLocalStorage=   localStorage.getItem('jwt');
        const jwtconnexion = JSON.parse(jwtLocalStorage).access_token;


        (async () =>{

            const prestationsResponse= await fetch('http://localhost/api/prestations', {
                method: 'GET',
                headers: {
                    authorization: 'Bearer '  +jwtconnexion,
                    'Content-Type': 'application/json'
                },
            });

            const prestationsData = await prestationsResponse.json();
            setprestations(prestationsData)


        })();

    },[])

    return(

        <>

            <NavDashboard />

            <section className="main_page">
                <Sidebar />

                <div className="dashboard_item">

                    <div className="item_list">

                        <div className="title" >
                            <h3>Prestations</h3>    
                            <button  >  Ajouter</button>
                        </div>

                        <table border="1px">

                            <thead >
                                <tr>
                                    <th>Id</th>
                                    <th>Nom</th>
                                    <th>Url image</th>
                                    <th>Prix</th> 
                                    <th>Durée</th>
                                    <th>Participant</th>
                                    <th>Sélectionner</th>
                                </tr>
                            </thead>
                            <tbody>
                        

                                {prestations.map((prestation) =>{
                                    return(                
                                        <PrestationsDetails key={prestation.id}  prestation={prestation}/>
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

export default Prestations