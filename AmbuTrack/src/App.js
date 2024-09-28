import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import hospital from "./components/Hospital";
import Ambulance from "./components/Ambulance";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Hospital from "./components/Hospital";

// Arrow function for Header
const Header = () => {
  return <h1>Hello world, I am learning React basics from Meta</h1>;
};

function App() {
  return (
    <div>
      <Nav />

      <Routes>
        {/* Correctly close the Home component */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ambulance" element={<Ambulance />} />
        <Route path="/hospital" element={<Hospital />} />
      </Routes>
    </div>
  );
}

export default App;
