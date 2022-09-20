import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './Login';
import Navbar from './Navbar';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    
      <div className="App">
        <Navbar>
        <Switch>
          <Route path='/login' element={<Login/>} />
            <h1>Test Route</h1>
         
          <Route path="/">
            <h1>Page Count: {count}</h1>
          </Route>
        </Switch>
        </Navbar>
      </div>
 
  );
}

export default App;
