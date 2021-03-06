import React, { Fragment } from "react";
import { connect } from "react-redux";
import { setQuiz, showAnswers } from "../actions/answerQuizActions";
import QuestionDisplay from "./QuestionDisplay";
import QuizList from "./QuizList";
class Quiz extends React.Component {
  state = {
    score: null,
    submitted: false,
  };
  componentDidMount() {
    this.props.setQuiz(this.props.match.params.id);
  }

  setErrorMessage(message) {
    this.setState({
      error: message,
    });
    setTimeout(() => {
      this.setState({
        error: null,
      });
    }, 3000);
  }

  onSubmit() {
    //check if all questions have been amswered
    let unanswered = this.props.questions.filter((q) => !q.userAnswer);

    if (unanswered.length === 0) {
      //all questions answered
      //show correct answers
      this.props.showAnswers();
      //set score
      this.setState({
        score: this.calculateScore(this.props.questions),
        submitted: true,
      });
    } else {
      this.setErrorMessage("Please answer all questions");
    }
  }

  calculateScore(questions) {
    const score = questions.reduce((acc, q) => {
      if (q.correct_answer === q.userAnswer) {
        return ++acc;
      } else return acc;
    }, 0);
    return score;
  }

  render() {
    const questions =
      this.props.questions &&
      this.props.questions.length > 0 &&
      this.props.questions.map((q, i) => <QuestionDisplay key={i} {...q} />);
    return (
      <Fragment>
        <div className="d-flex">
          <div className="w-25 mx-2">
            <QuizList />
          </div>
          <div className="container">
            <h1 className="text-center">{this.props.name}</h1>
            {questions}

            {this.state.error && (
              <div className="alert alert-danger mt-3" role="alert">
                {this.state.error}
              </div>
            )}
            {this.state.submitted && (
              <div className="alert alert-success mt-3" role="alert">
                {`You scored  ${this.state.score} / ${this.props.questions.length} questions`}
              </div>
            )}
            <div className="d-flex">
              <div>
                <div className="input-group-prepend">
                  <span className="input-group-text">Enter your name:</span>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <button
                disabled={this.state.submitted}
                onClick={() => this.onSubmit()}
                className="btn btn-success mx-auto p-3 m-3 w-25"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ answerQuiz: { name, questions, showAnswers } }) => ({
  name,
  questions,
  showAnswers,
});

export default connect(mapStateToProps, { setQuiz, showAnswers })(Quiz);
