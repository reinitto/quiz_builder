import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllQuizzes } from "../actions/QuizActions";

export class QuizList extends Component {
  componentDidMount() {
    this.props.getAllQuizzes();
  }
  render() {
    let { someQuizzes } = this.props;
    return (
      <div className="d-flex flex-column">
        <h3>Random Quizes</h3>
        {someQuizzes &&
          someQuizzes.length > 0 &&
          someQuizzes.map((quiz) => {
            return (
              <a key={quiz._id} href={`/quiz/${quiz._id}`}>
                <div className="bg-light m-2">
                  <h5>{quiz.name}</h5>
                  <p>{quiz.questions.length} Questions</p>
                </div>
              </a>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = ({ quizBuilder: { someQuizzes } }) => ({
  someQuizzes,
});

export default connect(mapStateToProps, { getAllQuizzes })(QuizList);
