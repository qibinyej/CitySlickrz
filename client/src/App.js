// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from './login';
import Navbar from './Navbar';
import Cities from "./Cities";
import Profile from "./Profile";
function App() {

  // sample fetch, still uncertain about where the keys go 
  // const [data, setData] = useState([])

  
  // useEffect(() => {
  // const url = "https://api.roadgoat.com/api/v2/destinations/:id"
  // fetch(url,{
  //   method: "GET",
  //   withcCredentials: true,
  //   headers: {
  //   access_key: 59ee86bd208094c9fc0faabcb86871a7
  //   secret_key: 1d6a1043f5f09a7c48dd43ccf156d14e
  //   }
  // })
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
        <Route path='/profile' element={<Profile/>}  />
        </Routes>
      </div>
 
  );
}

export default App;
