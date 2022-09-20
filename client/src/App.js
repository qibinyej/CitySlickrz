// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from './Login';
import Navbar from './Navbar';

function App() {

  return (
    
      <div className="App">
        <Navbar/>
        
        <Routes>
        <Route path='/login' element={<Login/>} />
  
        </Routes>
      </div>
 
  );
}

export default App;
