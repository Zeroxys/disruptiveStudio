
const mongoose = require("mongoose");

const categorySchema =  new mongoose.Schema({
  nombre: String,
  permiteImagenes: Boolean,
  permiteVideos: Boolean,
  permiteTextos: Boolean
})

const category = mongoose.model('Category', categorySchema);

module.exports = {
  category,
  categorySchema
}