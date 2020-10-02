import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic: 'Angular'
        }

        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onCommentChange = this.onCommentChange.bind(this);
        this.onTopicChange = this.onTopicChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onUsernameChange(event) {
        // debugger;

        this.setState( {
            username : event.target.value
        })
    }

    onCommentChange(event) {
        this.setState({
            comments : event.target.value
        })
    }

    onTopicChange(event) {
        this.setState({
            topic : event.target.value
        })
    }

    onSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        const {username, comments, topic} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={this.onUsernameChange} ></input>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.onCommentChange}></textarea >
                </div>
                <div>
                    <label>Topics</label>
                    <select value={topic} onChange={this.onTopicChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default Form
