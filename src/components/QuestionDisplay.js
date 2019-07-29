import React from 'react';
import { connect } from 'react-redux';
import { updateAnswer } from '../actions/answerQuizActions';

const QuestionDisplay = props => {
  const {
    showCorrectAnswer,
    question,
    answers,
    correct_answer,
    img_src,
    id: question_id,
    userAnswer
  } = props;

  const answerClassNames = a => {
    if (showCorrectAnswer) {
      //showCorrectAnswer ==true
      //after quiz is submited
      if (a === correct_answer) {
        //bg-success if correct answer
        return 'list-group-item list-group-item-action text-white bg-success';
      } else if (a === userAnswer && a !== correct_answer) {
        //bg-danger if user selected answer is not correct
        return 'list-group-item list-group-item-action text-white bg-danger';
      } else {
        //otherwise return normal style
        return 'list-group-item list-group-item-action';
      }
    } else {
      //Before quiz is submited
      return (
        'list-group-item list-group-item-action' +
        (userAnswer === a ? ' text-white bg-secondary' : '')
      );
    }
  };

  const onClick = e => {
    props.updateAnswer(e.target.innerHTML, question_id);
  };

  return (
    <div>
      {/* <span className='float-left text-secondary' style={{ fontSize: '2rem' }}>
        {`#${index + 1} `}{' '}
      </span> */}
      <h3 className='text-center'>{question}</h3>
      <div className='d-flex'>
        {img_src ? (
          <div className='w-50 mb-3 mr-3'>
            {' '}
            <img className='img-fluid' src={img_src} alt='fluid' />{' '}
          </div>
        ) : null}
        <ul
          className={'list-group text-center' + (img_src ? ' w-50' : ' w-100')}
        >
          {answers.map((a, i) => (
            <li
              onClick={e => onClick(e, question_id)}
              key={i}
              className={answerClassNames(a)}
            >
              {a}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default connect(
  null,
  { updateAnswer }
)(QuestionDisplay);
