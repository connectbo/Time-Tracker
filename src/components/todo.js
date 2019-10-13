import React, { Component } from "react";

class Todo extends Component {
  state = {
    todoList: [{ id: Date.now(), content: "list1" }]
  };

  addItem = () => {
    if (document.getElementById("newList").value == "") {
      alert("must have a value");
    } else {
      this.setState({
        todoList: [
          ...this.state.todoList,
          { id: Date.now(), content: document.getElementById("newList").value }
        ]
      });
      document.getElementById("newList").value = "";
    }
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
        <form className="my-3">
          <div className="row">
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                id="newList"
                placeholder="new task"
              ></input>
            </div>
            <div className="col-4 d-flex justify-content-end">
              <button
                type="button"
                onClick={this.addItem}
                className="btn btn-info mb-2 btn-block"
              >
                Add
              </button>
            </div>
          </div>
        </form>
        <ul className="list-group">
          {this.state.todoList.map(li => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={li.id}
              id={li.id}
            >
              <span>
                <input
                  type="checkbox"
                  onChange={e => this.checked(e)}
                  className="mr-2"
                ></input>
                {li.content}
              </span>
              <button
                className="btn btn-outline-info btn-sm"
                type="button"
                onClick={e => this.removeItem(e)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Todo;
