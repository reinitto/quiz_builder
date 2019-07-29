const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();
const Quiz = require('./models/Quiz');
const app = express();
const PORT = process.env.PORT || 5000;
const db = process.env.MONGO_URI;
require('dotenv').config();
//Connect Database

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log(`MongoDB Connected on port ${PORT}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

connectDB();

app.use(express.json({ extended: false }));
// @route       POST /quiz
// @desc        Register a new quiz
// @access      Public
app.post('/quiz', async (req, res) => {
  const { name, questions } = req.body;
  try {
    let newQuiz = new Quiz({
      name,
      questions
    });
    const quiz = await newQuiz.save();
    res.json(quiz._id);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});
app.get('/quiz/:id', async (req, res) => {
  try {
    let quiz = await Quiz.findById(req.params.id);
    res.json(quiz);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});
// @route       GET /quiz/:id
// @desc        Get guiz by id
// @access      Public
app.get('/getquiz/:id', async (req, res) => {
  try {
    let quiz = await Quiz.findById(req.params.id);
    res.json(quiz);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'src', 'App.js'));
});

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(PORT, () =>
  console.log(`QuizBuilder app listening on port ${PORT}!`)
);
