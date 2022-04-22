
import axios from 'axios'
import { useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routers from './router/Routers';
function App() {


  //////////////////////////
  // Source API: https://reqres.in/
  // https://reqres.in/api/users?page=1
  // https://reqres.in/api/users/2
  // https://reqres.in/api/unknown
  // https://reqres.in/api/unknown/2
  // https://reqres.in/api/users
  // https://reqres.in/api/register
  // https://reqres.in/api/login
  // https://reqres.in/api/users?delay=3

  ///////////////////////

  useEffect(() => {
    TestApi()
  }, [])

  const TestApi = () => {
    axios.get('https://reqres.in/api/users?page=1')
      .then(res => {
        console.log(res);
      })
  }

  return (
    
      <Router>
        <Routers/>
      </Router>
  
  );
}

export default App;
