import React, { Component } from 'react'

class Message extends Component {

    constructor() {
        super();
        this.state = {
            message: 'Welcome Visitor'
        };        
    }

    clickMe(msg) {
        this.setState({
            message : msg
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.clickMe('Changed')}>Click</button>
            </div>
        )
    }
}

export default Message;