const { Topic } = require("../models/topic");

exports.topicsController =  async (req, res) => {
  const tematica = new Topic(req.body);

  try {
    await tematica.save();
    res.status(201).send(tematica);
  } catch (error) {
    res.status(400).send(error);
  }
}