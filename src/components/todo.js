import React, { Component } from "react";

class Todo extends Component {
  state = {
    todoList: ["todo1", "todo2"]
  };

  render() {
    return (
      <ul>
        {this.state.todoList.map(li => (
          <li>{li}</li>
        ))}
      </ul>
    );
  }
}

export default Todo;
