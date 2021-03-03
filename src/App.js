import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Team from './components/Team/Team';
function App() {
  return (
    <div className="App">
      <h1 className="font-weight-bold">Dream Club</h1>
      <Team></Team>
    </div>
  );
}

export default App;
