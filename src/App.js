import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from './Home';
import Meme from './Meme';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/meme" element = { <Meme/> } />
      </Routes>
    </div>
  );
}

export default App;
