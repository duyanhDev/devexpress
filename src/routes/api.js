const express = require("express");
const routerAPI = express.Router();
const {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFileApi,
  postUploadMultipleFilesAPI,
} = require("./../controllers/apiController");

const {
  postCreateCustomer,
  postCreateArrayCustomer,
  getCustomerService,
  putCutomerService,
  deleteCutomerServices,
} = require("./../controllers/customerController");

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
routerAPI.post("/users", postCreateUserAPI);

//update
routerAPI.put("/users", putUpdateUserAPI);

routerAPI.delete("/users", deleteUserAPI);

routerAPI.post("/file", postUploadSingleFileApi);

routerAPI.post("/files", postUploadMultipleFilesAPI);

//get customer

routerAPI.get("/customers", getCustomerService);

// post custommer

routerAPI.post("/customers", postCreateCustomer);

routerAPI.post("/customers-many", postCreateArrayCustomer);

// put

routerAPI.put("/customers", putCutomerService);

//delete

routerAPI.delete("/customers", deleteCutomerServices);

module.exports = routerAPI;
