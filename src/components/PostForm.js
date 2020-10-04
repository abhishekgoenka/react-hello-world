import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userID: '',
            title: '',
            body: ''
        }

        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }


    submitHandler(event) {
        event.preventDefault();
        console.log(this.state);
        axios.post(`https://jsonplaceholder.typicode.com/posts`, this.state).then((res) => console.log(`data submitted`, res)).catch(err => console.error(err));
    }


    changeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const { userID, title, body } = this.state;

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>UserID</label>
                        <input type="text" name="userID" onChange={this.changeHandler} value={userID}></input>
                    </div>
                    <div>
                        <label>Title</label>
                        <input type="text" name="title" onChange={this.changeHandler} value={title}></input>
                    </div>
                    <div>
                        <label>Body</label>
                        <textarea name="body" onChange={this.changeHandler} value={body}></textarea>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PostForm
