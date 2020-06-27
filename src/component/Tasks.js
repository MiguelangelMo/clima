import React, { Component } from 'react';
import Task from './Task'

class Tasks extends Component {
    
    render(){
        console.log(this.props);
        return this.props.tasks.map(response => <Task task = {response} key={response.id} delete = {this.props.deleteTask} update = {this.props.updateTask} />)
    }
}

export default Tasks;