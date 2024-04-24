const { category } = require("../models/categories");

exports.categoriesCreateController = async (req, res) => {
  const categoria = new category(req.body);
  try {
    await categoria.save();
    res.status(201).send({data: categoria});
  } catch (error) {
    res.status(400).send({message: error});
  }
}

exports.categoriesDeleteController = async (req, res) => {
  try {
    const deletedCategory = await category.findByIdAndDelete(req.body.id);
    if (!deletedCategory) {
      return res.status(404).send({message: "Categoría no encontrada"});
    }
    res.status(200).send({data: deletedCategory});
  } catch (error) {
    res.status(500).send({message: error});
  }
};

exports.categoriesUpdateController = async (req, res) => {
  const { id, ...updateData } = req.body;
  try {
    const updatedCategory = await category.findByIdAndUpdate(id, updateData, {new: true});
    if (!updatedCategory) {
      return res.status(404).send({message: "Categoría no encontrada"});
    }
    res.status(200).send({data: updatedCategory});
  } catch (error) {
    res.status(500).send({message: error});
  }
};

exports.categoriesController = async (req, res) => {
  try {
    const categories = await category.find({});
    res.status(200).send({data: categories});
  } catch (error) {
    res.status(500).send({message: error});
  }
};