import React, { Component } from "react";
import {
  addQuestion,
  updateQuestion,
  deleteQuestion,
} from "../actions/QuizActions";
import QuestionPreview from "./QuestionPreview";
import { connect } from "react-redux";

class QuestionBuilder extends Component {
  state = {
    id: this.props.id,
    question: this.props.question,
    img_src: this.props.img_src,
    correct_answer: this.props.correct_answer,
    other_answers1: this.props.other_answers1,
    other_answers2: this.props.other_answers2,
    other_answers3: this.props.other_answers3,
    requiredFieldsEmpty: this.props.requiredFieldsEmpty,
    index: this.props.index,
    error: this.props.error,
    created: this.props.created,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.props.updateQuestion(this.state);
      if (this.requiredFieldsEmpty()) {
        this.setState(
          {
            requiredFieldsEmpty: true,
          },
          () => this.props.updateQuestion(this.state)
        );
      } else {
        this.setState(
          {
            requiredFieldsEmpty: false,
          },
          () => this.props.updateQuestion(this.state)
        );
      }
    });
  };

  requiredFieldsEmpty() {
    if (
      this.state.question === undefined ||
      this.state.question === "" ||
      this.state.correct_answer === undefined ||
      this.state.correct_answer === "" ||
      this.state.other_answers1 === undefined ||
      this.state.other_answers1 === "" ||
      this.state.other_answers2 === undefined ||
      this.state.other_answers2 === "" ||
      this.state.other_answers3 === undefined ||
      this.state.other_answers3 === ""
    ) {
      return true;
    } else {
      return false;
    }
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

  render() {
    return (
      <div className="form-group list-group-item bg-secondary my-2">
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span
              className="input-group-text bg-info text-white"
              style={{
                width: "120px",
              }}
            >
              Question:
            </span>
          </div>
          <input
            className="form-control"
            type="text"
            name="question"
            value={this.state.question || ""}
            onChange={this.handleChange}
            placeholder="Question"
          />
        </div>

        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span
              className="input-group-text bg-info text-white"
              style={{
                width: "120px",
              }}
            >
              Image URL:
            </span>
          </div>
          <input
            className="form-control"
            type="text"
            name="img_src"
            onChange={this.handleChange}
            value={this.state.img_src || ""}
            placeholder="Image link (Optional)"
          />
        </div>

        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span
              className="input-group-text bg-info text-white"
              style={{
                width: "120px",
              }}
            >
              Correct answer:
            </span>
          </div>
          <input
            className="form-control"
            type="text"
            name="correct_answer"
            onChange={this.handleChange}
            value={this.state.correct_answer || ""}
            placeholder="Correct answer"
          />
        </div>

        <div className="input-group input-group-sm mb-3 ">
          <div className="input-group-prepend">
            <span
              className="input-group-text bg-info text-white"
              style={{
                width: "120px",
              }}
            >
              Other answers:
            </span>
          </div>
          <input
            className="mr-2 form-control"
            type="text"
            name="other_answers1"
            onChange={this.handleChange}
            value={this.state.other_answers1 || ""}
            placeholder="Other answer 1"
          />
          <input
            className="mr-2 form-control"
            type="text"
            name="other_answers2"
            onChange={this.handleChange}
            value={this.state.other_answers2 || ""}
            placeholder="Other answer 2"
          />
          <input
            className="mr-2 form-control"
            type="text"
            name="other_answers3"
            onChange={this.handleChange}
            value={this.state.other_answers3 || ""}
            placeholder="Other answer 3"
          />
        </div>
        <p className="text-left">
          * <i>Answers will be shuffled automatically</i>{" "}
        </p>
        <div>
          {this.state.error && (
            <div className="alert alert-warning" role="alert">
              {this.state.error}
            </div>
          )}
        </div>
        <QuestionPreview {...this.state} />

        <button
          className="btn btn-danger mt-3"
          onClick={() => this.props.deleteQuestion(this.props.id)}
        >
          Remove Question
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ quizBuilder: { questions } }) => ({ questions });

export default connect(mapStateToProps, {
  addQuestion,
  updateQuestion,
  deleteQuestion,
})(QuestionBuilder);
