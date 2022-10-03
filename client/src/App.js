// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from './login';
import Navbar from './Navbar';
import Cities from "./Cities";
import Profile from "./Profile";
import Home from "./Home";

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

// const net = require('follow-redirects').https;
// const fs = require('fs');
// const auth_key = Buffer.from('access_key:secret_key').toString('base64');

// var options = {
//   'method': 'GET',
//   'hostname': 'api.roadgoat.com',
//   'port': 80,
//   'path': '/api/v2/destinations/auto_complete?q=barcelona',
//   'headers': {
//     'Authorization': `Basic ${auth_key}`
//   },
//   'maxRedirects': 20
// };

// var req = net.request(options, function (res) {
//   var chunks = [];
  
  
  
  
  
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
