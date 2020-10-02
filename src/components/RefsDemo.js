import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef();
        this.buttonClick = this.buttonClick.bind(this);
    }
    
    componentDidMount() {
        this.inputRef.current.focus();
    }

    buttonClick() {
        alert(this.inputRef.current.value);
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}></input>
                <button onClick={this.buttonClick}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
