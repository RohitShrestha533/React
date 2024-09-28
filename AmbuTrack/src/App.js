import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Ambulance from "./components/Ambulance";
import "./App.css";

import { Routes, Route } from "react-router-dom";

// Arrow function for Header
const Header = () => {
  return <h1>Hello world, I am learning React basics from Meta</h1>;
};

function App() {
  return (
    <div>
      <Nav />
      <Header />

      <Routes>
        {/* Correctly close the Home component */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ambulance" element={<Ambulance />} />
      </Routes>
    </div>
  );
}

export default App;
