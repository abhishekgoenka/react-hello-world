import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Abhishek'
        }

        console.log(`LifecycleB constructor`);
        this.changeState = this.changeState.bind(this);
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log(`LifecycleB getDerivedStateFromProps`);

        return null;
    }

    componentDidMount() {
        console.log(`LifecycleB componentDidMount`);
    }

    shouldComponentUpdate() {
        console.log(`LifecycleB shouldComponentUpdate`);

        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`LifecycleB getSnapshotBeforeUpdate`);

        return null;
    }

    componentDidUpdate() {
        console.log(`LifecycleB componentDidUpdate`);
    }

    changeState() {
        this.setState({
            name: 'changed value'
        });
    }

    render() {
        console.log(`LifecycleB render`);
        return (
            <div>
                LifecycleB
                <button onClick={this.changeState}>Change state</button>
            </div>
        )
    }
}

export default LifecycleB
