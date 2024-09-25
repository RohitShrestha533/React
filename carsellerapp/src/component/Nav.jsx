import React, { useState } from "react";

const Nav = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQuery1, setSearchQuery1] = useState("");

  const handleInputChange1 = (e) => {
    const value = e.target.value;
    setSearchQuery1(value); // Update the state
    onSearch(searchQuery, e.target.value); // Call onSearch with the updated state values
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value); // Update the state
    onSearch(e.target.value, searchQuery1); // Call onSearch with the updated state values
  };

  return (
    <>
      <nav className="navbar">
        <form>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search Car Name"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
          <select
            name="vehicle"
            id="vehicle"
            value={searchQuery1}
            onChange={handleInputChange1}
          >
            <option value="">Vehicle</option>
            <option value="car">car</option>
            <option value="bike">bike</option>
          </select>
        </form>
        <div className="logo">
          <h1>Car Seller</h1>
        </div>
      </nav>
    </>
  );
};

export default Nav;
