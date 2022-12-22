import ContactList from "./ContactList";
import Reservations from "./Reservations"


const Dashboard = () => {
    return(
        <section id="dashboard">
            <h1>Dashboard</h1>
            <div className="dashboard_items" >
                
                <Reservations />
                <ContactList />
            </div>
        </section>
    )
}
export default Dashboard;