import logo from './logo.svg';
import './App.css';
import Home from "../src/components/Home/Home"
import Navbar from "../src/components/Navbar/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
