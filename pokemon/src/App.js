
import './App.css';
import Card from "./components/Card";
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom";
import Create from './components/Create';

function App() {
  return (
    <div className="App">


      <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/create" element={<Create />} />

    </Routes>

     
    </div>
  );
}

export default App;
