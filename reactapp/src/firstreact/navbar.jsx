import React, { useState } from "react";
import detail from "../api/detailsapi";
import Box from "./box";

const Nav = () => {
  // eslint-disable-next-line
  const [detailData, setDetailData] = useState(detail);

  const filterItems = (title) => {
    const updateDetails = detail.filter((curElem) => curElem.title === title);
    setDetailData(updateDetails);
  };

  const resetFilter = () => {
    setDetailData(detail);
  };

  return (
    <>
      <header className="nav">
        <div className="navbar">
          <a href="/" onClick={() => filterItems("Breakfast")}>
            Breakfast
          </a>
          <a href="/" onClick={() => filterItems("Evening")}>
            Evening
          </a>
          <a href="/" onClick={() => filterItems("Lunch")}>
            Lunch
          </a>
          <a href="/" onClick={() => filterItems("Dinner")}>
            Dinner
          </a>
          <a href="/" onClick={resetFilter}>
            All
          </a>
        </div>
      </header>
      <Box detailData={detailData} />
    </>
  );
};

export default Nav;
