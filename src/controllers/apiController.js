const User = require("../models/user");

const getUsersAPI = async (req, res) => {
  // render raview
  let results = await User.find({});

  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};

const postCreateUsersAPI = async (req, res) => {
  // render raview
  let { email, name, city } = req.body;
  let user = await User.create({ email: email, name: name, city: city });

  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};

const putUpdateCreateAPI = async (req, res) => {
  let { email, name, city, id } = req.body;
  let user = await User.updateOne(
    { _id: id },
    {
      email: email,
      name: name,
      city: city,
    }
  );
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};

const deleteUserAPI = async (req, res) => {
  let id = req.body.id;
  let user = await User.deleteOne({
    _id: id,
  });

  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};

module.exports = {
  getUsersAPI,
  postCreateUsersAPI,
  putUpdateCreateAPI,
  deleteUserAPI,
};
