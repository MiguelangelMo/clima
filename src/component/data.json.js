import React, { Component } from 'react'

export default class Datajson extends Component {

    state = {
        posts: []
    }

    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const query = await res.json();
        console.log(query)
        this.setState({posts:query})
    } 

    render() {
        return (
            <div>
                {
                    this.state.posts.map(element => {
                       return <div>
                           <ul key = {element.id}>
                               <li>{element.title}</li>
                               <li>{element.body}</li>
                           </ul>
                       </div>
                    })
                }
            </div>
        )
    }
}
