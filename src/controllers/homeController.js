const connection = require("../config/database");
const { ObjectId } = require("mongodb");
const {
  getAllUsers,
  getUpdateAllUsers,
  postUpdateUsers,
  postDeleteUser,
} = require("../services/CRUDService");

const User = require("../models/user");

const getHompage = async (req, res) => {
  // render raview
  let rows = await User.find({});

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
  console.log(email, name, city);

  // const [rows, fields] = await connection.query(
  //   `INSERT INTO Users(email,name,city)
  //    VALUES (?,?,?)`,
  //   [email, name, city]
  // );
  await User.create({
    email: email,
    name: name,
    city: city,
  });
  res.send("Created user succeed");
};

// update
const getUpdateUser = async (req, res) => {
  const id = new ObjectId(req.params.id);
  const user = await User.findById(id);
  console.log(user);
  res.render("edit.ejs", { listUsers: user });
};

const postUpdateUser = async (req, res) => {
  try {
    // Lấy id và dữ liệu cần cập nhật từ req.body
    const { id, email, name, city } = req.body;

    // Tìm tài liệu người dùng theo id
    const user = await User.findById(id).exec();

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Cập nhật thuộc tính của tài liệu người dùng
    user.email = email;
    user.name = name;
    user.city = city;

    // Lưu tài liệu đã cập nhật vào cơ sở dữ liệu
    const updatedUser = await user.save();

    console.log("Cập nhật thành công:", updatedUser);

    // Chuyển hướng người dùng về trang chính
    res.redirect("/");
  } catch (error) {
    console.error("Lỗi khi cập nhật người dùng:", error);
    res.status(500).send("Lỗi máy chủ");
  }
};

const postDeteleUser = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("Check ID:", id);

    // Tìm tài liệu người dùng theo id
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Render trang delete với thông tin người dùng
    res.render("delete.ejs", { results: user });
  } catch (error) {
    console.error("Error finding user:", error);
    res.status(500).send("Server error");
  }
};

const postHandleRemove = async (req, res) => {
  let { id } = req.body;
  let results = await User.findByIdAndDelete(id);
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
