require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const connection = require("../src/config/database");
const webRoutes = require("./routes/web");
const app = express();
const port = process.env.PORT || 8088;
const hostname = process.env.HOST_NAME;

const kitten = require("./models/Kitten");

// test connetion

//seft  running arrouw functiton

// config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true }));
configViewEngine(app);
// // config static file
app.use("/", webRoutes);
app.get("/admin", (req, res) => {
  res.send("hello word");
});

const cat = new kitten({ name: "Model duy anh" });
cat.save();

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
