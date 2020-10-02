import React, { Component } from 'react'
import FRInput from './FRInput'

class ParentFRInput extends Component {

    constructor(props) {
        super(props)
    
        this.FRRef = React.createRef();
        this.buttonClick = this.buttonClick.bind(this);
    }
    
    buttonClick() {
        this.FRRef.current.focus();
    }

    render() {
        return (
            <div>
                <FRInput ref={this.FRRef}></FRInput>
                <button onClick={this.buttonClick}>Focus</button>
            </div>
        )
    }
}

export default ParentFRInput
