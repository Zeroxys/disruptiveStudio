const mongoose = require("mongoose");
const { Category } = require("./categories"); 

const topicSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  permissions: [String],
});

topicSchema.pre('remove', async function(next) {
  const topic = this;
  try {
    await Category.updateMany(
      { tematicas: topic._id },
      { $pull: { tematicas: topic._id } }
    );
    next();
  } catch (error) {
    next(error);
  }
});

const Topic = mongoose.model('Topic', topicSchema);

module.exports = { Topic, topicSchema };
