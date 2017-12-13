import React from "react";
import "./task.css";

class Task extends React.Component {
  constructor() {
    super();
    this.state = {completed: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("completed task!");
    if (this.state.completed === false){
      this.setState({
        completed: true
      });
    } else {
      this.setState({
        completed: false
      });
    }
  }

  render() {
    return(
        <div className="task-card">
          <div className={ `task ${(this.state.completed) ? "completed" : ""}` }>{this.props.name}</div>
          <div className="checkbox" onClick={this.handleClick}>
            <i aria-hidden="true" className={ `fa fa-${(this.state.completed) ? "times" : "check" }` }></i>
          </div>
        </div>
      )
    };
}

export default Task;
