import logo from "./logo.svg";
import "./App.css";
import { Message } from "./components/Message";
const text = "Переданный текст из константы";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message text={text} />
      </header>
    </div>
  );
}
export default App;
