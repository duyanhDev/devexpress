const connection = require("../config/database");

const getAllUsers = async () => {
  const [rows, fields] = await connection.query("SELECT * FROM Users");
  return rows;
};

const getUpdateAllUsers = async (id) => {
  const [results, fields] = await connection.query(
    "SELECT * FROM Users Where id = ?",
    [id]
  );
  return results;
};
const postUpdateUsers = async (email, name, city, id) => {
  const [results, fields] = await connection.query(
    `UPDATE Users Set email = ?, name = ? , city =? Where id =?`,
    [email, name, city, id]
  );
  return results;
};

const postDeleteUser = async (id) => {
  let [results, fields] = await connection.query(
    `
     DELETE 
     FROM Users
     WHERE id =? 
    `,
    [id]
  );
  return results;
};

module.exports = {
  getAllUsers,
  getUpdateAllUsers,
  postUpdateUsers,
  postDeleteUser,
};
