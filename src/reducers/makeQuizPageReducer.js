import { makeQuizTypes, multipleChoiceTypes } from "../actions/types";
import shortid from "shortid";

const { ADD_MULTIPLE_CHOICE } = makeQuizTypes;
const {
  ADD_OPTION,
  CHANGE_OPTION,
  CHANGE_QUESTION,
  TOGGLE_CORRECT
} = multipleChoiceTypes;
const initialState = {
  title: "",
  description: "",
  questions: []
};

// change option to new text value
const changeOption = (question, action) =>
  question.options.map(
    option =>
      option.id === action.option ? { ...option, val: action.value } : option
  );

// toggles a boolean which indicates this option is correct
const toggleOption = (question, action) =>
  question.options.map(
    option =>
      option.id === action.option
        ? { ...option, correct: !option.correct }
        : option
  );

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MULTIPLE_CHOICE:
      return {
        ...state,
        questions: [
          ...state.questions,
          {
            id: shortid.generate(),
            question: "",
            format: "multiple choice",
            options: [],
            answer: ""
          }
        ]
      };
    case ADD_OPTION:
      return {
        ...state,
        questions: state.questions.map(question => {
          // find the question which matches the given id
          return question.id === action.index
            ? // add a new option if this is the right question
              {
                ...question,
                options: [
                  ...question.options,
                  { val: "", id: shortid.generate(), correct: false }
                ]
              }
            : // else return the quiz already in place
              { ...question };
        })
      };

    case CHANGE_QUESTION:
      return {
        ...state,
        questions: [
          ...state.questions.map(question => {
            return question.id === action.question
              ? { ...question, question: action.payload }
              : question;
          })
        ]
      };
    case CHANGE_OPTION:
      return {
        ...state,
        questions: [
          ...state.questions.map(
            question =>
              question.id === action.question
                ? {
                    ...question,
                    options: changeOption(question, action)
                  }
                : question
          )
        ]
      };
    case TOGGLE_CORRECT:
      return {
        ...state,
        questions: [
          ...state.questions.map(
            question =>
              question.id === action.question
                ? {
                    ...question,
                    options: toggleOption(question, action)
                  }
                : question
          )
        ]
      };

    default:
      return state;
  }
};
