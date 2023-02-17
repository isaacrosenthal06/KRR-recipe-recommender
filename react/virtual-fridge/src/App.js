import React from 'react';
import './App.css';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import FavRecipes from './pages/favrecipes';
import About from './pages/about';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/favrecipes' element={<FavRecipes/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
