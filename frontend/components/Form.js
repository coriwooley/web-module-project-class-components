import React from 'react'

export default class Form extends React.Component {
  state = {
    inputText: ""
  }
handleChange = e => {
  this.setState({inputText: e.target.value})
}
handleSubmit = e => {
  e.preventDefault()
  this.props.addNewTodo(this.state.inputText)
  this.setState({inputText: ""})

}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.inputText} type="text" placeholder="what do u need to do?"></input>
        <button>add</button>
      </form>
    )
  }
}
