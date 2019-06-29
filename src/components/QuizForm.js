import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuestion, submitQuiz } from '../actions/QuizActions';
import QuestionBuilder from './QuestionBuilder';
import { history } from '../App';
var shuffle = require('knuth-shuffle').knuthShuffle;

class QuizForm extends Component {
  state = {
    name: ''
  };

  componentDidMount() {
    //initialize first question
    if (this.props.questions.length === 0) {
      this.props.addQuestion();
    }
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  setErrorMessage(message) {
    this.setState({
      error: message
    });
    setTimeout(() => {
      this.setState({
        error: null
      });
    }, 3000);
  }

  onSubmit = async e => {
    e.preventDefault();
    //check if all required fields for all questions are not empty
    let incomplete = this.props.questions.filter(
      q => q.requiredFieldsEmpty === true
    );
    if (incomplete.length > 0) {
      this.setErrorMessage('Please fill out all questions');
    } else {
      let questions = this.props.questions.map(q => {
        let randomOrderedAnswers = shuffle(
          [
            q.correct_answer,
            q.other_answers1,
            q.other_answers2,
            q.other_answers3
          ].slice(0)
        );
        return {
          correct_answer: q.correct_answer,
          created: q.created,
          error: q.error,
          id: q.id,
          img_src: q.img_src,
          index: q.index,
          answers: randomOrderedAnswers,
          question: q.question
        };
      });
      let quiz = {
        questions,
        name: this.state.name
      };
      const id = await this.props.submitQuiz(quiz);
      history.push(`/quiz/${id}`);
    }
  };
  render() {
    let content = this.props.questions
      ? this.props.questions.map((q, i) => (
          <React.Fragment key={i}>
            <QuestionBuilder key={q.id} {...q} index={i} />
          </React.Fragment>
        ))
      : null;
    return (
      <div>
        <div className='input-group input-group-lg mb-3'>
          <div className='input-group-prepend'>
            <span className='input-group-text bg-info text-white'>
              Quiz Name:
            </span>
          </div>
          <input
            className='form-control'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
            type='text'
            placeholder='Name your quiz'
          />
        </div>

        <div>{content}</div>
        {this.state.error && (
          <div className='alert alert-danger' role='alert'>
            {this.state.error}
          </div>
        )}
        <div className='btn-group d-flex justify-content-center'>
          <button
            className='btn btn-success btn-sm btn-block'
            onClick={this.props.addQuestion}
          >
            {' '}
            Add question{' '}
          </button>
        </div>
        <input
          className='btn btn-primary btn-block'
          type='submit'
          value='Create Quiz'
          onClick={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ quizBuilder: { name, questions } }) => ({
  name,
  questions
});

export default connect(
  mapStateToProps,
  { addQuestion, submitQuiz }
)(QuizForm);
