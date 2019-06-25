import React, { Component } from "react";
import uuidv4 from "uuid/v4";

export default class Question extends Component {
  state = {
    id: this.getId(),
    question: "",
    img_src: "",
    correct_answer: "",
    other_answers1: "",
    other_answers2: "",
    other_answers3: "",
    error: ""
  };
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  getId() {
    return uuidv4();
  }

  allFieldsEmpty() {
    if (
      this.state.question === "" &&
      this.state.correct_answer === "" &&
      this.state.other_answers1 === "" &&
      this.state.other_answers2 === "" &&
      this.state.other_answers3 === ""
    )
      return true;
  }

  setErrorMessage(message) {
    this.setState({
      error: message
    });
    setTimeout(() => {
      this.setState({
        error: ""
      });
    }, 3000);
  }

  onClick(e) {
    if (this.allFieldsEmpty()) {
      this.setErrorMessage("Please fill in all fields");
    } else {
      let question = {
        id: this.state.id,
        question: this.state.question,
        correct_answer: this.state.correct_answer,
        other_answers: [
          this.state.other_answers1,
          this.state.other_answers2,
          this.state.other_answers3
        ]
      };
      this.props.addQuestion(question);
    }
  }
  render() {
    return (
      <div className="form-group list-group-item">
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text bg-info text-white">
              Question:
            </span>
          </div>
          <input
            className="form-control"
            type="text"
            name="question"
            onChange={this.handleChange.bind(this)}
            placeholder="Question"
          />
        </div>

        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text bg-info text-white">Image:</span>
          </div>
          <input
            className="form-control"
            type="text"
            name="img_src"
            onChange={this.handleChange.bind(this)}
            placeholder="Image link (Optional)"
          />
        </div>

        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text bg-info text-white">
              Correct answer:
            </span>
          </div>
          <input
            className="form-control"
            type="text"
            name="correct_answer"
            onChange={this.handleChange.bind(this)}
            placeholder="Correct answer"
          />
        </div>

        <div className="input-group input-group-sm mb-3 ">
          <div className="input-group-prepend">
            <span className="input-group-text bg-info text-white">
              Other answers:
            </span>
          </div>
          <input
            className="mr-2 form-control"
            type="text"
            name="other_answers1"
            onChange={this.handleChange.bind(this)}
            placeholder="Other answer 1"
          />
          <input
            className="mr-2 form-control"
            type="text"
            name="other_answers2"
            onChange={this.handleChange.bind(this)}
            placeholder="Other answer 2"
          />
          <input
            className="mr-2 form-control"
            type="text"
            name="other_answers3"
            onChange={this.handleChange.bind(this)}
            placeholder="Other answer 3"
          />
        </div>
        <div>
          {this.state.error && (
            <div className="alert alert-warning" role="alert">
              {this.state.error}
            </div>
          )}
        </div>
        <div className="btn-group d-flex justify-content-center">
          <button
            className="btn btn-success btn-sm"
            onClick={this.onClick.bind(this)}
          >
            {" "}
            Add question{" "}
          </button>
          {!this.allFieldsEmpty() && (
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => this.props.updateQuestion(this.state)}
            >
              {" "}
              Update question{" "}
            </button>
          )}
        </div>
      </div>
    );
  }
}
