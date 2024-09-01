const customer = require("./../models/customer");
const {
  postCreateCustomerSeriver,
  createArrayCustomerService,
  getCustomerService,
  putCutomerService,
  deleteCutomerService,
} = require("./../services/customerService");
const { uploadSingleFile } = require("./../services/fileService");
module.exports = {
  postCreateCustomer: async (req, res) => {
    let { name, address, phone, email, description } = req.body;
    console.log(
      "check =>>",
      name,
      "check address",
      address,
      phone,
      email,
      description
    );
    let imageUrl = "";
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    } else {
      let result = await uploadSingleFile(req.files.image);
      imageUrl = result.path;
    }
    console.log(imageUrl);

    let customers = {
      name: name,
      address: address,
      phone: phone,
      email: email,
      image: imageUrl,
      description: description,
    };
    let data = await postCreateCustomerSeriver(customers);
    return res.status(200).json({
      ec: 0,
      data: data,
    });
  },

  postCreateArrayCustomer: async (req, res) => {
    let customer = await createArrayCustomerService(req.body.Customer);
    console.log(customer);
    if (customer) {
      return res.status(200).json({
        EC: 0,
        data: customer,
      });
    } else {
      return res.status(200).json({
        EC: -1,
        data: customer,
      });
    }
  },

  getCustomerService: async (req, res) => {
    let results = await getCustomerService();

    return res.status(200).json({
      EC: 0,
      data: results,
    });
  },

  putCutomerService: async (req, res) => {
    let { id, name, email } = req.body;
    let data = await putCutomerService(id, name, email);
    console.log(data);
    return res.status(200).json({
      EC: 0,
      data: data,
    });
  },

  // deleteCutomerServices: async (req, res) => {
  //   console.log("Check", req.body);
  //   let data = await deleteCutomerService(req.body);
  //   return res.status(200).json({
  //     EC: 0,
  //     data: data,
  //   });
  // },
  deleteCutomerServices: async (req, res) => {
    let { _id } = req.body;
    console.log("Check", _id);
    let data = await deleteCutomerService(_id);
    return res.status(200).json({
      EC: 0,
      data: data,
    });
  },
};
