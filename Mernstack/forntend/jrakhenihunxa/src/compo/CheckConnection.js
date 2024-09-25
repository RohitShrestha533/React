import React, { useEffect, useState } from "react";

const CheckConnection = () => {
  const [connectionStatus, setConnectionStatus] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/check-db")
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          setConnectionStatus(data.message);
        } else {
          setConnectionStatus("Failed to connect to the database");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setConnectionStatus("Error connecting to the backend");
      });
  }, []);

  return (
    <div>
      <h1>Connection Status</h1>
      <p>{connectionStatus}</p>
    </div>
  );
};

export default CheckConnection;
