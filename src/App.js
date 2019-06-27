import React from 'react';
import './App.css';
import Homepage from './Component/Homepage/Homepage';
import Login from './Component/login/login';
import Signup from './Component/signup/signup';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';




function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
      </div>
    </Router>
      
  );
}

export default App;
