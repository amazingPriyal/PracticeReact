import React, { Component } from 'react';
import AuthContext from './Context/AuthContext';
import './App.css';
export class Child1 extends Component {
  
    render(){
      const {userName,isAuthenticated,logIn,logOut} = this.context;
      console.log(this.context)
      return(
          <div className="child1Style">
              <h1>Child Component</h1>
              <h1>Username : {userName}</h1>
              <h1> Auth : {isAuthenticated ? "User is isAuthenticated" : "User is not isAuthenticated"}</h1>
              <button onClick={logIn}>Log In</button>
              <button onClick={logOut}> Log Out</button>
          </div>
      )
    }
  }
  Child1.contextType = AuthContext;
  export default Child1;