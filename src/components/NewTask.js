import React, { Component } from 'react';
import './new_task.css'

class NewTask extends Component {
  render() {
    return (
      <div className="task-card">
        <input onChange={this.props.onChange} id="input" className="task" type="text" placeholder="Add new task..."></input>
        <div className="checkbox" onClick={this.props.onClick}><strong>+</strong></div>
      </div>
    );
  }
}

export default NewTask;
