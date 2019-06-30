import React from 'react';
import './App.css';
import Homepage from './Component/Homepage/Homepage';
import Login from './Component/login/login';
import Signup from './Component/signup/signup';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Userpage from './Component/Userpage/userpage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../node_modules/font-awesome/css/font-awesome.min.css';



function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/fonts" render={()=> <div className="ftn">&#xF002; </div>}/>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/userpage" component={Userpage}/>
      </div>
    </Router>
      
  );
}

export default App;
