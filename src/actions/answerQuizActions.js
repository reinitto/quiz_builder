import { SET_QUIZ, UPDATE_ANSWER, SHOW_ANSWERS } from './types';

export const setQuiz = id => async dispatch => {
  let res = await fetch(`/getquiz/${id}`);
  const data = await res.json();
  dispatch({
    type: SET_QUIZ,
    payload: data
  });
};

export const updateAnswer = (answer, question_id) => {
  return {
    type: UPDATE_ANSWER,
    payload: { question_id, answer }
  };
};

export const showAnswers = () => {
  return {
    type: SHOW_ANSWERS
  };
};
