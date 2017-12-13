
import React, { Component } from 'react';
import Task from "./task";
import NewTask from "./NewTask";

class Developer extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      taskName: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      taskName: event.target.value
    });
  }

  handleClick(event){
    const tasks = [...this.state.tasks, this.state.taskName];
    this.setState({
      tasks: tasks
    });
    // TODO: reset input value to empty string
  }

  render() {
    return (
      <div className="card">
        <img src="http://style.anu.edu.au/_anu/4/images/placeholders/person.png" className="avatar"/>
        <div>{this.props.name}</div>
        <div className="task-container">
          <NewTask onClick={this.handleClick} onChange={this.handleChange}/>
          {this.state.tasks.map((task, i) => {
            return <Task name={task} key={i}/>
          })}
        </div>
      </div>
    )
  }
}

export default Developer;
