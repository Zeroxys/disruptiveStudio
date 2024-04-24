const { Topic } = require("../models/topic");

exports.topicsCreateController =  async (req, res) => {
  const tematica = new Topic(req.body);

  try {
    await tematica.save();
    res.status(201).send({data: tematica});
  } catch (error) {
    res.status(400).send({message: error});
  }
}

exports.topicsDeleteController = async (req, res) => {
  try {
    const deletedTopic = await Topic.findByIdAndDelete(req.params.id);
    if (!deletedTopic) {
      return res.status(404).send({message: "Tema no encontrado"});
    }
    res.status(200).send({message: "Tema eliminado correctamente"});
  } catch (error) {
    res.status(500).send({message: error});
  }
};


exports.topicsUpdateController = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const updatedTopic = await Topic.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedTopic) {
      return res.status(404).send({message: "Tema no encontrado"});
    }
    res.status(200).send({data: updatedTopic});
  } catch (error) {
    res.status(500).send({message: error});
  }
};


exports.topicsGetAllController = async (req, res) => {
  try {
    const topics = await Topic.find({});
    res.status(200).send({data: topics});
  } catch (error) {
    res.status(500).send({message: error});
  }
};
