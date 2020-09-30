import React, { Component } from 'react'

class Eventbind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        // this.buttonClick  = this.buttonClick.bind(this);
    }
    
    buttonClick() {
        // console.log(this);
        this.setState({
            message: 'changed value'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.buttonClick}>Click</button>
            </div>
        )
    }
}

export default Eventbind
