const connection = require("../config/database");
const {
  getAllUsers,
  getUpdateAllUsers,
  postUpdateUsers,
  postDeleteUser,
} = require("../services/CRUDService");
const getHompage = async (req, res) => {
  let rows = await getAllUsers();
  console.log(rows);

  return res.render("home.ejs", { listUsers: rows });
};
// create
const getCreatePage = (req, res) => {
  res.render("create.ejs");
};
const postCresteUser = async (req, res) => {
  // let email = req.body.name;
  // let name = req.body.name;
  // let city = req.body.city;

  let { email, name, city } = req.body;

  const [rows, fields] = await connection.query(
    `INSERT INTO Users(email,name,city)
     VALUES (?,?,?)`,
    [email, name, city]
  );

  res.send("Created user succeed");
};

// update
const getUpdateUser = async (req, res) => {
  let id = +req.params.id;

  const results = await getUpdateAllUsers(id);

  let listUsers = results.length > 0 ? results[0] : {};

  res.render("edit.ejs", { listUsers: listUsers });
};
const postUpdateUser = async (req, res) => {
  let { id, email, name, city } = req.body;
  let results = await postUpdateUsers(email, name, city, id);
  console.log("cap nhat ", results);
  res.redirect("/");
};

const postDeteleUser = async (req, res) => {
  let { name } = req.body;
  console.log("check name", name);

  let id = +req.params.id;

  const results = await getUpdateAllUsers(id);

  res.render("delete.ejs", { results: results[0] });
};

const postHandleRemove = async (req, res) => {
  let { id } = req.body;
  let results = await postDeleteUser(id);
  console.log(results);

  res.redirect("/");
};

module.exports = {
  getHompage,
  postCresteUser,
  getCreatePage,
  getUpdateUser,
  postUpdateUser,
  postDeteleUser,
  postHandleRemove,
};
