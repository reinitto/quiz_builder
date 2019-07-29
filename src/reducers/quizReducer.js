import {
  SUBMIT_QUIZ,
  ADD_QUESTION,
  UPDATE_QUESTION,
  DELETE_QUESTION
} from '../actions/types';

//Initial state for quiz
const initialState = { name: '', questions: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case SUBMIT_QUIZ:
      return {
        ...state
      };
    case ADD_QUESTION:
      //check if question id is already in array
      let isInArray = state.questions.filter(q => q.id === action.payload.id);

      if (isInArray.length === 0) {
        let qs = [
          ...state.questions.filter(q => q.id !== action.payload.id),
          action.payload
        ].sort((a, b) => a.created > b.created);
        return {
          ...state,
          questions: qs
        };
      } else {
        return state;
      }
    case UPDATE_QUESTION:
      let qs = [
        ...state.questions.filter(q => q.id !== action.payload.id),
        action.payload
      ].sort((a, b) => a.created - b.created);
      return {
        ...state,
        questions: qs
      };
    case DELETE_QUESTION:
      let Qs = [...state.questions.filter(q => q.id !== action.payload)].sort(
        (a, b) => a.created - b.created
      );
      return {
        ...state,
        questions: Qs
      };
  }
};
