import logo from "./logo.svg";
import "./App.css";
import ReactPlayer from "react-player";

function App() {
  const vidUrl = "https://www.youtube.com/watch?v=rMfugUZD2dA";
  return (
    <div className="App">
      <h1>React player example</h1>
      <ReactPlayer url={vidUrl} playing={false} volume={0.5} controls />
    </div>
  );
}

export default App;
