// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from './login';
import Navbar from './Navbar';
import Home from './Home';

function App() {

  return (
    
      <div className="App">
      
        
        <Routes>
        
        <Route path='/' element={<Login/>} />
        <Route path='Home' element={<Home/>}/>
       
  
        </Routes>
       
      </div>
 
  );
}

export default App;
