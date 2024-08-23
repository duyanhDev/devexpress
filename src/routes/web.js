const express = require("express");
const router = express.Router();
const {
  getHompage,
  postCresteUser,
  getCreatePage,
  getUpdateUser,
  postUpdateUser,
} = require("../controllers/homeController");
router.get("/", getHompage);

router.get("/create", getCreatePage);
router.post("/create-user", postCresteUser);

router.get("/gaixinh", (req, res) => {
  res.render("sample.ejs");
});

router.get("/update-user/:id", getUpdateUser);
router.post("/updateUser", postUpdateUser);

module.exports = router;
