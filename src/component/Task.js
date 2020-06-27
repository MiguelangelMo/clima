import React, { Component } from 'react';
import '../css/task.css'
import PropTypes from 'prop-types';

class Task extends Component {

    // React: se agregan valores tambien de esta manera en forma lineal
    // dentro de la estiqueta, se declara un object y se le pasa a la etiqueta
    Style() {
        return {
            background: this.props.task.status ? 'rgba(0,0,0,0.7)' : 'red'
        }
    }

    DeleNote = () => {
        return this.props.deleteTask(this.props.task.id)
    }

    render() {
        // Cuando se resive una propiedad se debe llamar con la palabra reservada
        // 'props' y obviamente el this.props y luego la propiedad que nos mandan 
        // que en este caso es 'task'
        
        const { task } = this.props;
        console.log(task.update)
        return <div>
            <ul id="container">
                <li className="lista">{task.id}</li>
                <li className="lista">{task.task}</li>
                <li className="lista" style={this.Style()}>{task.description}</li>
                <li className="lista" style={{ background: 'black' }}>{task.status}</li>
                <li className="lista">
                    <input type="checkbox" onChange = {this.props.update.bind(this, task.id)} />
                    <button onClick = { this.props.delete.bind(this, task.id) }>X</button>
                </li>
            </ul>
        </div>
    }
}

// Los propsTypes: sirve para designar que tipo de dato espero, en este ejemplo le digo
// que espero un object
Task.propTypes = {
    task: PropTypes.object.isRequired
}

export default Task;