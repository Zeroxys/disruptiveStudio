const { category } = require("../models/categories");

exports.categoriesController = async (req, res) => {

  console.log(req.body)


  const categoria = new category(req.body);
  try {
    await categoria.save();
    res.status(201).send({data: categoria});
  } catch (error) {
    res.status(400).send({message: error});
  }
}