import React, { Component } from 'react'
import HOCCounter from './HOCCounter'

class ClickCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.incrementCounter}>Clicked {this.props.count} times</button>
            </div>
        )
    }
}

export default HOCCounter(ClickCounter)
