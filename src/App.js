import logo from './logo.svg';
import './App.css';
import Home from "../src/components/Home/Home"
import Navbar from "../src/components/Navbar/Navbar"
import bg from "../src/assets/bg.png"

function App() {
  return (
    <div className="App" 
    // style={{backgroundImage: `url(${bg})`}}
    >
       <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
