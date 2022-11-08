import { useReducer } from 'react';
import './App.css';
import Board from './components/Board';
import boardData from './data/boardData.js';
import reducer from './data/reducer.js';

function App() {
  const [ state, dispatch ] = useReducer(
    reducer,
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
        clearQuestion={
          (question) => dispatch({
            type: 'setQuestion',
            value: '',
          })
        }
        question={state.question}
        setQuestion={
          (question) => {
            dispatch({
              type: 'markRead',
              value: question,
            })
            dispatch({
              type: 'setQuestion',
              value: question,
            })
          }
        }
      />
    </div>
  );
}

export default App;
