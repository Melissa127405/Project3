import './App.css';
import React, {useState} from'react';
import { BrowserRouter, Routes, Route } from "react-route-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main';
import Contactpage from './Pages/Contactpage';
import Groompage from './Pages/Groompage';
import Homepage from './Pages/Homepage';

function App() {
   

   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/contactpage" element={<Contactpage />} />
            <Route path="/groompage" element={<Groompage />} />
            <Route path="/homepage" element={<Homepage />} />
         </Routes>
      </BrowserRouter>
   );
}
     
export default App;