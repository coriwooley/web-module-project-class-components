import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

const todos = [
  {
    name: 'Organize Garage',
    id: 1528817077286, // could look different, you could use a timestamp to generate it
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

export default class App extends React.Component {
  state = {
    todos: todos
  }

  addNewTodo = todo => {
    const newTodo = {
      name: todo,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...todos, newTodo]
    })
  }

  toggleCompleted = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(id === todo.id){
          return {
            ...todo,
            completed: !todo.completed
          }     
        }
        return todo
      })
    })
  }
  
  render() {
    const {todos} = this.state
    return (
      <div>
        <TodoList toggleCompleted={this.toggleCompleted} todos={todos}/>
        <Form addNewTodo={this.addNewTodo}/>
        
        <button>clear completed</button>
      </div>
    )
  }
}
