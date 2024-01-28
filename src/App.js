import "./App.css";
import Tooltip from "./components/tooltip/Tooltip";

function App() {
  return (
    <div className="container">
      <Tooltip infoText="Welcome to React JS Hover Component.">
        <button className="btn">Hover</button>
      </Tooltip>
    </div>
  );
}

export default App;
