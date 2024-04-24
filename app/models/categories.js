
const mongoose = require("mongoose");

const categorySchema =  new mongoose.Schema({
  name: String,
  permitImages: Boolean,
  permitVideos: Boolean,
  permitTexts: Boolean,
  topics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topic', name: String }]
})

const category = mongoose.model('Category', categorySchema);

module.exports = {
  category,
  categorySchema
}