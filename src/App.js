import React, { Component } from 'react';
import './App.css';
// import {mailProject} from './mailProject';
import AuthContext, {AuthProvider,AuthConsumer} from './Context/AuthContext';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      userName  : "pk",
      todoItms : [
       { action : 'Sleep' , done : false},
       { action : 'Eat' , done : false},
        {action : 'Go to gym' , done : false},
      ],
      newToDo: '',
    }
  }

  changeStateData = () =>{
    this.setState({
      userName:this.state.userName === 'pk' ? 'kulkarni' : 'No Sirname',
    
    })
  }
  toggleDone = (todo) => 
  this.setState(
    {
      todoItms : this.state.todoItms.map(
        (item) => item.action === todo.action ? {...item,done : !item.done} : item
      ),
    }
  )

  toDoListRow = () =>
    this.state.todoItms.map((items)=>(
      <tr key={items.action}>
      <td>{items.action}</td>
      <td>
      <input type="checkbox" checked={items.done} onChange={()=>this.toggleDone(items)}  />
      </td>
      </tr>
    ));
  
    updateValue = (event) =>{
        this.setState(
          {
            newToDo : event.target.value,
          }
        )
    };

    toDoAdd = ()=>{
    this.setState({
      todoItms : [
        ...this.state.todoItms,
        {action: this.state.newToDo, done: false} ], 
        newToDo: ''
      }
    )}


  render (){
    return(
      <div>
      <h1>App Component</h1>
        <AuthProvider>
            <Child/>
            <Child2/>
        </AuthProvider>

        <h1>Simple class based component project - {this.state.userName}</h1>
   <button onClick={this.changeStateData}>Send</button> 
<div>
    <input type="text"
    id="thisst"
    name="message" value={this.state.newToDo} onChange={this.updateValue}/>
   <button onClick={this.toDoAdd}>submit and add in todo list</button>
    </div>
   <table>
      <thead>
         <tr>
          <th>Tasks</th>
          <th>Complete</th>
        </tr>
      </thead>
   <tbody>
        {this.toDoListRow()}
   </tbody> 
     </table>
     <div className="flex-container">
              <div className="mainchild">hello</div>
              <div className="midchild">Flex testing</div>
              <div className="mainchild">byee</div>
     </div>
    </div>
    )
  };
}
class Child extends Component {
  
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

class Child2 extends Component{
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


Child.contextType = AuthContext;



// Three ways we can do it -
// 1st way - to attached property of child component  ( i.e. by consuming context)
// 2nd way - we can add static contextType = AuthContext; in child component instead on adding like Child.contextType = AuthContext;
//3rd way - It contains data that our context is providing and as auth consumer is expecting function
// AuthCosumer has datat that provider provides and As it sharing same state so if we do something in one then it will rerender in other also.


export default App;
