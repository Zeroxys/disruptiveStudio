const { category } = require("../models/categories");

exports.categoriesController = async (req, res) => {
  const categoria = new category(req.body);
  try {
    await categoria.save();
    res.status(201).send(categoria);
  } catch (error) {
    res.status(400).send(error);
  }
}