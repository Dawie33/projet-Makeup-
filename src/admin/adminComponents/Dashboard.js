import NavDashboard from "./NavDashboard";
import "../../css/dashboard.css";
import Sidebar from "./Sidebar";




const Dashboard = () => {
   

    return(

        <section className="dashboard">
            
            <NavDashboard />

            <div className="main-items">

              <Sidebar />
                <div>
                    <h2>TABLEAU DE BORD</h2>
                </div>
            </div>

        </section>
    )
}
export default Dashboard;