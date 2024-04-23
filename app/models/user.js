const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['lector', 'creador', 'admin'] }
});

const user = mongoose.model('User', userSchema);

module.exports = {
  user,
  userSchema
}
