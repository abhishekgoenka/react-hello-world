import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(e => this.setState({
            posts: e.data
        })).catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                <h1>List of Post</h1>
                {
                    this.state.posts.map(e => <div key={e.id}>{e.title}</div>)
                }
            </div>
        )
    }
}

export default PostList
