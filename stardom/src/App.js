import './App.css';
import Data from './components/Data';
// import Prostar from './components/Prostar';
import pos from "./prostars.json"


function App() {
  return (
    <div className="App">
      <Data data={pos}/>
    </div>
  );
}

export default App;
