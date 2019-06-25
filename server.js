const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const router = express.Router();

require("dotenv").config();
const Quiz = require("./models/Quiz");
const app = express();
const PORT = process.env.PORT || 3000;
const db = process.env.MONGO_URI;
require("dotenv").config();
//Connect Database

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log("MongoDB Connected...");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

connectDB();

// @route       POST /quiz
// @desc        Register a new quiz
// @access      Public
router.post("/quiz", async (req, res) => {
  const { name, questions } = req.body;

  try {
    let newQuiz = new Quiz({
      name,
      questions
    });
    const quiz = await newQuiz.save();
    res.json(quiz);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});
// @route       GET /logs
// @desc        Get all logs
// @access      Public
router.get("/quiz/:id", async (req, res) => {
  if (req.params.id) {
    console.log("req.params.id", req.params.id);
    try {
      let quiz = await Quiz.findById(req.params.id);
      res.json(quiz);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  } else {
  }
});

app.use(express.json({ extended: false }));

// app.use('/submitQuiz', require('./routes/techs'));
// app.use('/getQuiz', require('./routes/techs'));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => console.log("Gator app listening on port 3000!"));
