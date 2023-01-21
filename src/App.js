
import Home from "./Home"
import PrestationsList from "./user/PrestationsList";
import Login from "./Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FormResa from "./user/FormResa";
import Contact from "./user/Contact";
import Signup from "./user/Signup";
import UserPage from "./user/UserPage";
import Dashboard from "./admin/adminComponents/Dashboard";
import SingleContact from "./admin/SingleContact";
import SingleReservation from "./admin/SingleReservation";
import SingleUser from "./admin/SingleUser";
import Users from "./admin/Users";
import Contacts from "./admin/Contacts"
import Reservations from "./admin/Reservations";
import Prestations from "./admin/Prestations";
import DateCalendar from "./components/DateCalendar";




const App =()=> {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/userpage" element={<UserPage />} /> 
          <Route path="/accueil" element={<Home/>} />
          <Route path="/listeprestations" element={<PrestationsList />} />
          <Route path="/reservation/formulaire" element={<FormResa />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inscription" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/prestations" element={<Prestations />} />
          <Route path="/users/:userId" element={<SingleUser />} />
          <Route path="/reservations/:reservationId" element={<SingleReservation />} />
          <Route path="/contacts/:contactId" element={<SingleContact />} />
        </Routes>
      </BrowserRouter>




    </>


  );
}

export default App;
