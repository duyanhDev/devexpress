const express = require("express");
const routerAPI = express.Router();
const {
  getUsersAPI,
  postCreateUsersAPI,
  putUpdateCreateAPI,
  deleteUserAPI,
} = require("./../controllers/apiController");
routerAPI.get("/", (req, res) => {
  res.send("Hello world with apis");
});
routerAPI.get("/abc", (req, res) => {
  res.status(201).json({
    data: "hello world first apis",
  });
});
routerAPI.get("/users", getUsersAPI);

// post
routerAPI.post("/users", postCreateUsersAPI);

//update
routerAPI.put("/users", putUpdateCreateAPI);

routerAPI.delete("/users", deleteUserAPI);
module.exports = routerAPI;
