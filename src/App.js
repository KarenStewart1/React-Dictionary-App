import "./App.css";
import Dictionary from "./Dictionary";
import "./Audio.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary </h1>
        <Dictionary defaultWord="sunset" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://linkedin.com/in/karenstewartnl"
            target="_blank"
            rel="noreferrer"
          >
            Karen Stewart
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/KarenStewart1/React-Dictionary-App"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
