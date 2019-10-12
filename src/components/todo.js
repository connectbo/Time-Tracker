import React, { Component } from "react";

class Todo extends Component {
  state = {
    todoList: [{ id: Date.now(), content: "list1" }]
  };

  addList = () => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        { id: Date.now(), content: document.getElementById("newList").value }
      ]
    });
  };

  render() {
    console.log(this.state.todoList);
    return (
      <React.Fragment>
        <ul>
          {this.state.todoList.map(li => (
            <li key={li.id}>{li.content} </li>
          ))}
        </ul>
        <form>
          <input type="text" id="newList"></input>
          <button type="button" onClick={this.addList}>
            Add to List
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Todo;
