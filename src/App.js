import React from 'react';
import './App.css';
import TodoItems from './TodoItem';
import todosData from "./todosData"


// Class Component that constructs the state which takes in the Data Array
//Line 15 is the binder that handles the data change

class App extends React.Component {
  constructor() {
    super()
      this.state = {
         todoItems: todosData
      }
      this.handleChange = this.handleChange.bind(this);
  }
// Method that changes the state and maps the todoItems to show if they have been completed or not
  handleChange(id) {
    this.setState(prevState =>{
      const updatedTodoItems = prevState.todoItems.map(todoItem => {
        if(todoItem.id === id) {
          todoItem.completed = !todoItem.completed
        }
        return todoItem
      })
      return {
        todos:updatedTodoItems
      }
    })
  }
//  Render method element that controls what the user sees on the screen, using state and how the method 
// handles the state change, todoItems.js contains the function that turns those Items into props
// Using the key: item.id and the item from todosData they are passed through {todoItems} then the className="todo-List"
// Finally rendering the list to the page with checkbox functionality and styling only on checked boxes
    render () {
      const todoItems = this.state.todoItems.map(item => <TodoItems key={item.id} item={item}
      handleChange={this.handleChange}/>)
      return (  
          <div className='todo-list'>
            {todoItems}
          </div>
      );
      
    }

}

export default App;
