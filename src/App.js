import React from 'react';
import './App.css';
import Tasks from './xample/tasks.json';
import Task from './component/Tasks'
import TaskForm from './component/TaskForm'
import Data from './component/data.json';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {

  state = {
    tasks: Tasks
  }

  AddTask = (task, description) => {
    const nextTask = {
      task: task,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, nextTask]
    })
  }

  UpdateTask = (id) => {
    const newUpdate = this.state.tasks.map(res => {
      if (res.id === id) {
        res.status = !res.status;
      }
      return res;
    })
    this.setState({
      task: newUpdate
    })
  }

  DeleteTask = (id) => {
    const Newdelete = this.state.tasks.filter(res => res.id !== id)
    console.log("Lógica", Newdelete)
    this.setState({ tasks: Newdelete })
  }

  // O tras formas de declarar componentes
  // Hola(){
  //   return (<span>Hola mundo</span>)
  // }

  // Fine = () => {
  //   return (<span>Todo Bien</span>)
  // }

  render() {
    return <div>
      <Router>

        <Link to = "/">Home</Link>
        <Link to = "/list">List of Rigth</Link>

        <Route exact path="/" render={() => {

          return <div>
            
            <TaskForm addtask={this.AddTask}></TaskForm>
            <Task tasks={this.state.tasks}
              deleteTask={this.DeleteTask}
              updateTask={this.UpdateTask}></Task>
          </div>
        }} >

        </Route>

        <Route path = "/list" component = {Data}>
        </Route>

      </Router>
    </div>
  }
  //<p><this.Hola/></p>
  //<p><this.Fine/></p>
}

export default App;
