import { useReducer } from 'react';
import './App.css';
import Board from './components/Board';
import boardData from './data/boardData.js';

function App() {
  const [ state, dispatch ] = useReducer(
    () => {},
    {
      boardData,
      question: '',
    },
  );
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Mr. Ferrarello
        </p>
      </header>
      <Board
        boardData={state.boardData}
        question={state.question}
      />
    </div>
  );
}

export default App;
