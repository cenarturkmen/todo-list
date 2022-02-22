import './App.css';
import Todo from './Components/Todo/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todo />
      </header>

      <footer className="App-footer">
        <p>Made with ❤️</p>
        <a href="https://github.com/cenarturkmen/">Github</a>
      </footer>
    </div>
  );
}

export default App;
