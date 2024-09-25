import React, { useState } from "react";
// import Hotel from "./firstreact/hotel";
import Nav from "./firstreact/navbar";
import Box from "./firstreact/box";
import detail from "./api/detailsapi";

const App = () => {
  const [detailData, setDetailData] = useState(detail);

  return (
    <>
      <Nav />
      <div className="body">
        <Box detailData={detailData} />
      </div>
    </>
  );
};

export default App;
