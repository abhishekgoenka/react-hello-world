import React, { Component } from 'react'

class Person extends Component {
    render() {
        return (
            <div>I am {this.props.person.name}. I am {this.props.person.age} year old. I know {this.props.person.skill}</div>
        )
    }
}

export default Person
