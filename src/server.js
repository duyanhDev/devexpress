require("dotenv").config();
const express = require("express");

const configViewEngine = require("./config/viewEngine");
const connection = require("../src/config/database");
const webRoutes = require("./routes/web");
const app = express();
const port = process.env.PORT || 8088;
const hostname = process.env.HOST_NAME;

// config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true }));
configViewEngine(app);
// config static file
app.use("/", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
