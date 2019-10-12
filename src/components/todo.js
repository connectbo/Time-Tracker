import React, { Component } from "react";

class Todo extends Component {
  state = {
    todoList: [{ id: Date.now(), content: "list1" }]
  };

  addItem = () => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        { id: Date.now(), content: document.getElementById("newList").value }
      ]
    });
    document.getElementById("newList").value = "";
  };

  removeItem = e => {
    const itemId = e.target.parentNode.id;
    this.setState({
      todoList: this.state.todoList.filter(e => e.id != itemId)
    });
  };

  checked = e => {
    const itemId = e.target.parentNode.id;
    if (e.target.checked) {
      document.getElementById(itemId).style.color = "grey";
    } else {
      document.getElementById(itemId).style.color = "black";
    }
  };

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.todoList.map(li => (
            <li key={li.id} id={li.id}>
              {li.content}
              <input type="checkbox" onChange={e => this.checked(e)}></input>
              <button type="button" onClick={e => this.removeItem(e)}>
                -
              </button>
            </li>
          ))}
        </ul>
        <form>
          <input type="text" id="newList"></input>
          <button type="button" onClick={this.addItem}>
            Add to List
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Todo;
