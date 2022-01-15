const express = require("express");
const app = express();
const { Pool } = require("pg");
app.use(express.json()); //This means the body will be automatically parsed from a string into a JSON object.

const pool = new Pool({
  user: "",
  host: "localhost",
  database: "sql_test",
  password: "",
  port: 5432,
});

// USE COMMAND LINE NOT WSL !!!!!
app.listen(3000, function () {
  console.log("Server is listening on port 6000. Ready to accept requests!");
});

app.get("/", function (req, res) {
  console.log("Run...");

  pool.query("SELECT * FROM customers ORDER BY name", (error, result) => {
    res.json(result.rows); // THIS ONLY WORKS IN COMMAND LINE NOT WSL !!!!
  });
});
