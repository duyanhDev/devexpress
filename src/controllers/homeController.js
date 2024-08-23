const getHompage = (req, res) => {
  res.send("Hello World duy anh!");
};

const getABC = (req, res) => {
  res.send("check abc");
};

module.exports = {
  getHompage,
  getABC,
};
