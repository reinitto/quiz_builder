const mongoose = require('mongoose');

const QuizSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  questions: {
    type: Array
  }
});

module.exports = mongoose.model('quiz', QuizSchema);
