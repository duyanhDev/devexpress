require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const connection = require("../src/config/database");
const webRoutes = require("./routes/web");
const routerAPI = require("./routes/api");
const app = express();
const port = process.env.PORT || 8088;
const hostname = process.env.HOST_NAME;

// test connetion

//seft  running arrouw functiton

// config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true }));
configViewEngine(app);
// // config static file
app.use("/", webRoutes);
app.use("/v1/api/", routerAPI);
app.get("/admin", (req, res) => {
  res.send("hello word");
});

(async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Backend zero app listening on port ${port}`);
    });
  } catch (error) {
    console.log(">>check error connection db", error);
  }
})();
