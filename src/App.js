import logo from './logo.svg';
import './App.css';
import TextField from './TextField';
import LabeledTextField from './LabeledTextField';
import Button from './Button';

const NewLabeledTextField = LabeledTextField(TextField,"First Name");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <TextField/>
        <br/>
        <NewLabeledTextField/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button text = "Click Me"/>
      </header>
    </div>
  );
}

export default App;
