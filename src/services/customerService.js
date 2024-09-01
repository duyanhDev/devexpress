const Customer = require("./../models/customer");

const getCustomerService = async () => {
  try {
    let result = await Customer.find({});
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const postCreateCustomerSeriver = async (data) => {
  try {
    let result = await Customer.create({
      name: data.name,
      address: data.address,
      phone: data.phone,
      email: data.email,
      image: data.image,
      description: data.description,
    });
    return result;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

const createArrayCustomerService = async (data) => {
  try {
    let result = await Customer.insertMany(data);
    return result;
  } catch (error) {
    console.log(error);

    return null;
  }
};

const putCutomerService = async (id, name, email) => {
  console.log(id);

  let result = Customer.findByIdAndUpdate(id, { name, email });
  return result;
};

const deleteCutomerService = async (id) => {
  let result = await Customer.deleteOne({ _id: id });
  return result;
};

module.exports = {
  postCreateCustomerSeriver,
  createArrayCustomerService,
  getCustomerService,
  putCutomerService,
  deleteCutomerService,
};
