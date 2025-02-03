const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sourabh:egUg5OBCk16z13cN@test.b6yopve.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Test");

const notesSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  isImportant: Boolean,
  uploadedBy: String,
  date:{
    type: Date,
    default: Date.now
  }
});

mongoose.model("Notes", notesSchema);

module.exports = mongoose.model("Notes")
