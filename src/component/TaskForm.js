import React, { Component } from 'react';

class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = (event) => {
        this.props.addtask(this.state.title, this.state.description); 
        event.preventDefault();
        
    }

    OnChange = (event) => {
        this.setState({ 
                [event.target.name] : event.target.value,
                //descripcion : event.target.value,
            });
    }

    render() {
        
        return <form onSubmit={this.onSubmit}>

            <input type="text" placeholder="Escriba lo que vayas a escribir." style={{ padding: '1em', margin: '2em' }} onChange={this.OnChange} value={this.state.title} name = "title" />
            
            <textarea cols="20" rows="10" placeholder="Escriba la descripcion." onChange={this.OnChange} value={this.state.description} name = "description" >
            </textarea>

            <br />
            <input type="submit" value="Enviar data" />
        </form>
    }
}

export default TaskForm;