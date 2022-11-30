import React, { Component } from 'react';

const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends Component {
    state = {
        userName : "",
        isAuthenticated : false
    }

    logIn = () =>{
        this.setState({ userName: "PRIYAL" , isAuthenticated : true});
    }
    logOut = () =>{
        this.setState({ userName: "" , isAuthenticated : false});
    }

    render(){
        const {userName,isAuthenticated} = this.state;
        const {logIn,logOut} = this;

        return(
            <AuthContext.Provider value={{
                userName,
                isAuthenticated,
                logIn,
                logOut
            }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContext;

//const AuthContext = React.createContex();

// in () we can pass any value (It will be a initial / default state value)
//AuthContext is an object that contain the component.