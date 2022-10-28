import './App.css';
import Board from './components/Board';
import boardData from './data/boardData.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Mr. Ferrarello
        </p>
      </header>
      <Board boardData={boardData} />
    </div>
  );
}

export default App;
