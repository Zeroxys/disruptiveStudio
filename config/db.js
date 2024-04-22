const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/mediaContentApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB Connected');
}).catch(err => {
  console.log('MongoDB connection error:', err);
});