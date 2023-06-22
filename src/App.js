import React from "react"
import Home from "./pages/Home"
import Realisation from "./pages/Realisation"
import Contact from "./pages/Contact"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './css/App.css';

export default function App() {
  return(
    <Router>   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/realisation" element={<Realisation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
   )
}