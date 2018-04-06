import React, { Component } from "react";
import { submitQuiz } from "../../actions/makequiz";
import { DropTarget } from "react-dnd";
import MultipleChoice from "./Questions/MultipleChoice";
import TrueFalse from "./Questions/TrueFalse";
import Dropdown from "./Questions/Dropdown";
import { connect } from "react-redux";
import types from "./types";
const spec = {
    drop() {
      return { name: "builder" };
    }
  },
  collect = (connect, monitor) => {
    return {
      hovered: monitor.isOver(),
      connectDropTarget: connect.dropTarget()
    };
  };
class DropScreen extends Component {
  render() {
    const {
      title,
      description,
      questions,
      hovered,
      connectDropTarget,
      submitQuiz
    } = this.props;
    return connectDropTarget(
      <div
        style={{
          color: "#fff",
          padding: "20px",
          backgroundColor: hovered ? "darkslategray" : "#c7c7c7",
          width: "50%",
          flexBasis: "auto"
        }}
      >
        <p>DropScreen</p>
        <div>
          {questions.map(question => {
            switch (question.format) {
              case "multiple choice":
                return (
                  <MultipleChoice key={question.id} questionData={question} />
                );
              case "true false":
                return <TrueFalse key={question.id} questionData={question} />;
              case "dropdown":
                return <Dropdown key={question.id} questionData={question} />;
              default:
                return null;
            }
          })}
          {questions.length > 0 ? (
            <button
              onClick={event => {
                event.preventDefault();
                submitQuiz({ title, description, questions });
              }}
            >
              Submit
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}
export default connect(
  state => ({
    questions: state.makeQuizzes.questions,
    title: state.titleAndDescription.title,
    description: state.titleAndDescription.description
  }),
  { submitQuiz }
)(DropTarget(types.BOX, spec, collect)(DropScreen));
