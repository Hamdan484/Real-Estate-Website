import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Firstpage from "./first-page.jsx";
import SignUp from "./SignUp.jsx";
import Forrent from "./Forrent.jsx";
import Land from "./Land.jsx";

import Contact from "./Contact.jsx";
import Services from "./assets/Services.jsx";
import NavBar from "./assets/navBar.jsx";

import Agents from "./Agents.jsx";
import BlogDetails from "./BlogDetails.jsx";
import NotFound from "./assets/NotFound.jsx";
import Developments from "../data/Developments.jsx";
import Purchase from "./Purchase.jsx";

function App() {
  
   const buyHome=()=>{
   
    
   }
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Firstpage onBuy={buyHome}/>} />
          <Route exact path="/SignUp" element={<SignUp />} />

          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/ForRent" element={<Forrent onBuy={buyHome} />} />
          <Route exact path="/Agents" element={<Agents />} />
          <Route exact path="/Land" element={<Land />} onBuy={buyHome}/>
          <Route exact path="/names/:id" element={<BlogDetails />} />
          <Route exact path="/Purchase" element={<Purchase/>} />
          <Route exact path="/Developments" element={ <Developments onBuy={buyHome}/>} />
          <Route exact path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    
      
     
    </>
  );
}

export default App;
