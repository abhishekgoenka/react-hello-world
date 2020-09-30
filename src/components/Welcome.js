import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name} from class component</h1>
                <h2>{this.props.children}</h2>
            </div>
        )
    }
}

export default Welcome;