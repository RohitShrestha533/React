// Import required modules
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

// Initialize Express app
const app = express();
const port = 3000;

// Middleware to handle CORS and parse JSON request bodies
app.use(cors());
app.use(bodyParser.json());

// MySQL connection configuration
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "practice_db",
});

// Connect to MySQL database
function connectDatabase() {
  db.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err.message);
      setTimeout(connectDatabase, 2000); // Attempt to reconnect every 2 seconds
    } else {
      console.log("MySQL Connected...");
    }
  });

  db.on("error", (err) => {
    console.error("MySQL error:", err.message);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      connectDatabase(); // Reconnect if connection is lost
    } else {
      throw err;
    }
  });
}

connectDatabase(); // Initial connection attempt

// Endpoint to add a new user
app.post("/api/add-user", (req, res) => {
  // Extract data from the request body
  const { uid, name, phone } = req.body;
  const sql = "INSERT INTO practice_table (uid, name, phone) VALUES (?, ?, ?)";
  // Execute the SQL query with provided data
  db.query(sql, [uid, name, phone], (err, result) => {
    if (err) {
      // Log an error message and respond with an error status if query fails
      console.error("Error executing query:", err.message);
      res.status(500).json({ error: "Failed to add user" });
    } else {
      // Respond with a success message if query is successful
      res.json({ success: true, message: "User added successfully" });
    }
  });
});

// Start the Express server and listen on the specified port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
