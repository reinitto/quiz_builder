import React, { Component } from 'react';
import Question from './Question';
import QuestionDisplay from './QuestionDisplay';
import uuidv4 from 'uuid/v4';
import { history } from '../App';
class QuizForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      questions: [{ id: 777 }]
    };
    this.handleChange = this.handleChange.bind(this);
    this.newQuestion = this.newQuestion.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.handleQuestion = this.handleQuestion.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
  }

  addQuestion(question) {
    //id is in array
    let isInArray = this.state.questions.filter(q => q.id === question.id);
    if (isInArray.length === 0) {
      this.setState({
        questions: [...this.state.questions, question]
      });
    }
  }

  handleQuestion(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  newQuestion(e, question) {
    e.preventDefault();
    this.addQuestion(question);
  }

  updateQuestion(state) {
    //find question by id
    let newQuestion = { ...state };
    this.setState({
      questions: [
        ...this.state.questions.filter(q => q.id !== state.id),
        newQuestion
      ]
    });
  }
  getId() {
    return uuidv4();
  }

  onSubmit = async e => {
    e.preventDefault();
    let quiz = {
      ...this.state,
      questions: this.state.questions.filter(q => q.id !== 777)
    };

    const res = await fetch('/quiz', {
      method: 'POST',
      body: JSON.stringify(quiz),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    console.log('data:', data);

    if (data !== undefined) {
      console.log('data:', data);
      history.push(`/quiz/${data}`);
    }
  };
  render() {
    let content = this.state.questions.map((q, i) => (
      <React.Fragment key={i}>
        <QuestionDisplay {...q} />
        <Question
          handleQuestion={this.handleQuestion}
          key={q.id}
          updateQuestion={this.updateQuestion}
          addQuestion={this.addQuestion}
        />
      </React.Fragment>
    ));
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

export default QuizForm;
