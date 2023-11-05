import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import './App.css';
import Footer from './Components/Footer/Footer';
import Homepage from './Components/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar';
import About from "./Components/About/About";

function App() {
  return (
    <BrowserRouter>

    <div id='display'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>

    </BrowserRouter>
  );
}

export default App;
