
import Home from "./components/Home"
import Prestations from "./Prestations";
import Login from "./Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import FormResa from "./FormResa";
import Contact from "./Contact";
import Signup from "./Signup";
import Users from "./components/Users";
import SingleReservation from "./SingleReservation";
import Dashboard from "./Dashboard";
import SingleContact from "./SingleContact";



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={< Dashboard />} /> 
          <Route path="/accueil" element={<Home/>} />
          <Route path="/prestations" element={<Prestations />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reservation/formulaire" element={<FormResa />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inscription" element={<Signup />} />
          <Route path="/users" element={<Users />} />
          <Route path="/reservations/:reservationId" element={<SingleReservation />} />
          <Route path="/contacts/:contactId" element={<SingleContact />} />
        </Routes>
      </BrowserRouter>
    </>


  );
}

export default App;
