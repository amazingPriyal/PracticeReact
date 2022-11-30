import React, { Component } from 'react';
import  {AuthConsumer} from './Context/AuthContext';
import './App.css';

export class Child2 extends Component{
    render(){
      return(
        <AuthConsumer> 
            {
              props => {const {userName,isAuthenticated,logIn,logOut} = props;
              return(
                <div className="child2Style">
                <h1>Child 2 Component</h1>
                <h1>Username : {userName}</h1>
                <h1> Auth : {isAuthenticated ? "User is isAuthenticated" : "User is not isAuthenticated"}</h1>
                <button onClick={logIn}>Log In</button>
                <button onClick={logOut}> Log Out</button>
            </div>
              )
            }
            }
        </AuthConsumer>
      )
    }
    }

export default Child2;