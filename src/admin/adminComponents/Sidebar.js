import { Link } from "react-router-dom";

const Sidebar = () =>{
    return(

        <section className="sidebar">
              
            <Link to="/users">Utilisateurs </Link>
            <Link to="/reservations">Réservations </Link>
            <Link to="/contacts">Contacts </Link>
            <Link to="/prestations">Prestations </Link>
      
        </section>
    )
}

export default Sidebar;