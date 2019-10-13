import React, { Component } from "react";

class Todo extends Component {
  state = {
    todoList: []
  };

  componentDidMount() {
    fetch("https://localhost:5000/getActivity")
      .then(response => response.json())
      .then(data => this.setState({ todoList: data }));
  }

  addItem = () => {
    if (document.getElementById("newList").value == "") {
      alert("must have a value");
    } else {
      this.setState({
        todoList: [
          ...this.state.todoList,
          {
            id: Date.now(),
            content: document.getElementById("newList").value,
            finished: false
          }
        ]
      });
      document.getElementById("newList").value = "";
    }
  };

  removeItem = e => {
    const itemId = e.currentTarget.parentNode.parentNode.id;
    this.setState({
      todoList: this.state.todoList.filter(e => e.id != itemId)
    });
    const text = e.currentTarget.parentNode.parentNode.textContent;
    const added = document.querySelectorAll(".added");
    for (let el of added) {
      if (el.textContent === text) {
        el.textContent = "";
        el.classList.remove("added", "finished");
      }
    }
  };

  checked = e => {
    const itemId = e.target.parentNode.parentNode.id;
    document.getElementById(itemId).style.background = "grey";
    const text = e.target.parentNode.parentNode.textContent;
    const added = document.querySelectorAll(".added");
    if (e.target.checked) {
      for (let el of added) {
        if (el.textContent === text) {
          el.classList.add("finished");
        }
      }
    } else {
      document.getElementById(itemId).style.background = "white";
      for (let el of added) {
        if (el.textContent === text) {
          el.classList.remove("finished");
        }
      }
    }
  };

  addToTask = e => {
    if (e.currentTarget.parentNode.previousSibling.firstChild.checked) {
      alert("task already finished");
    } else {
      const task = e.currentTarget.parentNode.parentNode.textContent;
      const id = e.currentTarget.parentNode.parentNode.id;
      const clickItem = document.querySelectorAll(".clicked");
      for (let el of clickItem) {
        el.textContent = task;
        el.classList.remove("clicked");
        el.classList.add("added");
      }
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
              <label className="pt-2">
                <input
                  type="checkbox"
                  onChange={this.checked}
                  className="mr-2"
                ></input>
                {li.content}
              </label>
              <div>
                <button
                  className="btn btn-outline-white"
                  type="button"
                  onClick={this.addToTask}
                >
                  <i className="fas fa-plus-circle fa-2x"></i>
                </button>
                <button
                  className="btn btn-outline-white"
                  type="button"
                  onClick={this.removeItem}
                >
                  <i className="fas fa-backspace fa-2x"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Todo;
