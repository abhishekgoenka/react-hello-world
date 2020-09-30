import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }

        this.greet = this.greet.bind(this);
    }
    
    greet(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`);
    }

    render() {
        return (
            <div>
                <ChildComponent greetParent={this.greet}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent
