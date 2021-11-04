import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <Dictionary />
        <footer className="mt-5">
          <a
            href="https://github.com/KarenStewart1/React-Dictionary-App"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Karen Stewart
        </footer>
      </div>
    </div>
  );
}

export default App;
