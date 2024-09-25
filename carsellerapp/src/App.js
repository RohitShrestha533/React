import React, { useState } from "react";
import Nav from "./component/Nav";
import "./App.css";
import Carboc from "./component/Carboc";
import details from "./detailData/details";
const App = () => {
  const [detail, setDetails] = useState(details);
  const [search, setSearch] = useState("");
  const [search1, setSearch1] = useState("");

  // Function to handle search submissions
  const handleSearch = (query, query1) => {
    setSearch(query); // Update the search state with the query
    setSearch1(query1); // Update the search state with the query
  };

  return (
    <>
      <div id="navbar">
        <Nav onSearch={handleSearch} />
      </div>
      <div className="content">
        <Carboc detail={detail} search={search} search1={search1} />
      </div>
    </>
  );
};
export default App;
