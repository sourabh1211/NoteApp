const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sourabh:egUg5OBCk16z13cN@test.b6yopve.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Test");

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profilePic: String,
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('User', userSchema);

module.exports = mongoose.model('User');
