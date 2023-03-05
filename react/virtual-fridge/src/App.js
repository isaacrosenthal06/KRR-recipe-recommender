import React from 'react';
import './App.css';
import UpdateFridge from './pages/updatefridge';
import About from './pages/about';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/myfridge' element={<UpdateFridge/>}/>
      </Routes>
    </Router>
  );
}

export default App;
