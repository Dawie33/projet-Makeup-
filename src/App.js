
import About from "./About"
import Prestations from "./Prestations";
import Login from "./Login";
import ContactFormulaire from "./ContactFormulaire"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserPage from "./UserPage";
import Formulaire from "./Formulaire";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/accueil" element={<About/>} />
          <Route path="/prestations" element={<Prestations />} />
          <Route path="/formulaire/contact" element={<ContactFormulaire />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/réserver" element={<Formulaire />} />
        </Routes>
      </BrowserRouter>
    </>


  );
}

export default App;
