import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/pages/about/About";
import Portfolio from "./components/pages/portfolio/Portfolio";
import Contact from "./components/pages/contact/Contact";
import LandingPage from "./components/pages/landing/LandingPage";

import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      {/* ---------------  CREATE ROUTES  -------------  */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
