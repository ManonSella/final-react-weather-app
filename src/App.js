import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Athens" />
        <footer>
          This project was coded by Manon Sella and is {""}
          <a href="https://github.com/ManonSella/final-react-weather-app">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
