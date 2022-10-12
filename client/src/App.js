import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from './login';
import Navbar from './Navbar';
import Cities from "./Cities";
import Profile from "./Profile";
import Home from "./Home";

function App() {

  // sample fetch, still uncertain about where the keys go 
  const [data, setData] = useState([])

  const auth_key = Buffer.from('59ee86bd208094c9fc0faabcb86871a7:1d6a1043f5f09a7c48dd43ccf156d14e').toString('base64')

  useEffect(() => {
  const url = `https://api.roadgoat.com/api/v2/destinations/6588544`
  fetch(url,{
    method: "GET",
    withCredentials: true,
    headers: {
    'Authorization': `Basic 59ee86bd208094c9fc0faabcb86871a7, ${auth_key}`
    }
  })
    .then(r => r.json())
    .then(data => {
      setData(data)
      console.log(data)
    })
  }, []);

  
  
  
  
  
  return (
    
      <div className="App">
      
        <Navbar/>
        <Routes>
        
        <Route path='/' element={<Login/>} />
        <Route path='/cities' element={<Cities/>} />
        <Route path='/profile' element={<Profile/>}  />
        <Route path='/home' element={<Home/>} />
        </Routes>
       
      </div>
 
  );
};

export default App;
