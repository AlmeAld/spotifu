import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>hola.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
    </div>
  );
}

export default App;
