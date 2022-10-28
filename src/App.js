import './App.css';
import Board from './components/Board';
import boardData from './data/boardData.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Board boardData={boardData} />
    </div>
  );
}

export default App;
