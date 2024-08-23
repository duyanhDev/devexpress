require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const mysql = require("mysql2");
const webRoutes = require("./routes/web");
const app = express();
const port = process.env.PORT || 8088;
const hostname = process.env.HOST_NAME;

// test database connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "123456",
  database: "hoidanit",
});

connection.query(`SELECT  * FROM Users `, function (err, results, fields) {
  console.log("checkk", results);
  console.log("fields", fields);
});

configViewEngine(app);
// config static file
app.use("/", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
