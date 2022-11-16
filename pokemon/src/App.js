
import './App.css';

import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom";
import Create from './components/Create';
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>


      <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/create" element={<Create />} />

    </Routes>

     
    </div>
  );
}

export default App;
