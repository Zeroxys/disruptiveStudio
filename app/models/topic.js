const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  permissions: [String]
})

const Topic = mongoose.model('Topic', topicSchema);

module.exports = {
  Topic,
  topicSchema
}