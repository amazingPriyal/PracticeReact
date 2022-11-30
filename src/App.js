import React, { Component } from 'react';
import './App.css';
// import {mailProject} from './mailProject';
import {AuthProvider} from './Context/AuthContext';
import Child1 from './Child1';
import Child2 from './Child2';
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
      <h1>App Componentttt</h1>
        <AuthProvider>
            <Child1/>
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





//Child.contextType = AuthContext;



// Three ways we can do it -
// 1st way - to attached property of child component  ( i.e. by consuming context)
// 2nd way - we can add static contextType = AuthContext; in child component instead on adding like Child.contextType = AuthContext;
//3rd way - It contains data that our context is providing and as auth consumer is expecting function
// AuthCosumer has datat that provider provides and As it sharing same state so if we do something in one then it will rerender in other also.


export default App;
