import logo from './logo.svg';
import './App.css';
import First from './components/First.js';

function App() {
  let name = "Gajendra Singh Pawar";
  return (
    <div className="App">
       <First name = {name} />
    </div>
  );
}

export default App;
