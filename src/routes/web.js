const express = require("express");
const router = express.Router();
const { getHompage, getABC } = require("../controllers/homeController");
router.get("/", getHompage);
router.get("/abc", getABC);
router.get("/gaixinh", (req, res) => {
  res.render("sample.ejs");
});

module.exports = router;
