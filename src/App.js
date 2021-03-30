import './App.css';
import { Component } from 'react';
import AddToDo from './Components/add.js'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {
  state = {
    todos: [
      { Id: '1', Title: 'Push your code to github', Status: 'Done' },
      { Id: '2', Title: 'Email to your manager', Status: 'Pending' }
    ]
 };
 deleteToDo = (todo) => {
  const filteredItems = this.state.todos.filter(x => x.Id !== todo.Id);
  this.setState({
       todos: filteredItems
  });
};
editToDo = (x) => {
  this.setState(state => ({
       todos: state.todos.map(todo => {
         if (todo.Id === x.Id) {
             return {
                   ...todo,
                   Status: todo.Status === "Done" ? "Pending" : "Done"
             };
        } else {
            return todo;
        }
    })
}));
};
addToDo = (todo) => {
  this.setState({
      todos: [...this.state.todos, todo]
  });
};
  render(){

    return(
      <div>
        <AddToDo onAdd={this.addToDo}></AddToDo>
        <table cellpadding="0" cellspacing="0" border="0">
        <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Status</th>
          <th>Edit</th>
        </tr>
        </thead>
        <tbody>
         {this.state.todos.map(x => {
                 return (
              <tr key={x.Id}>
              <td>{x.Id}</td>
              <td>{x.Title}</td>
              <td style={{ color: x.Status === "Done" ? "green" : "red" }}>{x.Status}</td>
              <td>
              <button className="btn btn-outline-dark" onClick={() => this.deleteToDo(x)}>
              <span>
                <FontAwesomeIcon icon="trash"></FontAwesomeIcon> 
               </span>
               </button>
                <button className="btn btn-outline-dark" onClick={() => this.editToDo(x)}>
                 <span>
                 <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
              </span>
              </button>
               </td>
              </tr>
               )
              })}
            </tbody>
        </table>
      </div>
    )
  }
}

export default App;
