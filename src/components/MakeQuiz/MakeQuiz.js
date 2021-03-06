import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragScreen } from './DragScreen';
import DropScreen from './DropScreen';

export default class MakeQuiz extends Component {
  render() {
    const makeQuizStyle = {
      display: 'flex',
      width: '100%',
      position: 'absolute',
      top: '64px',
      bottom: '64px'
    };

    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div style={makeQuizStyle}>
          <DragScreen />
          <DropScreen />
        </div>
      </DragDropContextProvider>
    );
  }
}
