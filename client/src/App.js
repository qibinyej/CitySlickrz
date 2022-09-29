// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from './login';
import Navbar from './Navbar';
import { useState, useEffect } from "react"
import Cities from "./Cities";

function App() {

  // sample fetch, still uncertain about where the keys go 
  // const [data, setData] = useState([])

  
  // useEffect(() => {
  //   fetch("https://api.roadgoat.com/api/v2/destinations/:id")
  //   .then(r => r.json())
  //   .then(data => {
  //     setData(data)
  //   })
  // }, [])
  
  
  
  
  
  return (
    
      <div className="App">
        <Navbar/>
        
        <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/cities' element={<Cities/>} />
        </Routes>
      </div>
 
  );
}

export default App;
