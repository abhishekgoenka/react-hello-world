import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Abhishek'
        }

        console.log(`LifecycleA constructor`);
        this.changeState = this.changeState.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        console.log(`LifecycleA getDerivedStateFromProps`);

        return null;
    }

    componentDidMount() {
        console.log(`LifecycleA componentDidMount`);
    }

    shouldComponentUpdate() {
        console.log(`LifecycleA shouldComponentUpdate`);

        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`LifecycleA getSnapshotBeforeUpdate`);

        return null;
    }

    componentDidUpdate() {
        console.log(`LifecycleA componentDidUpdate`);
    }

    changeState() {
        this.setState({
            name: 'changed value from parent'
        });
    }

    render() {
        console.log(`LifecycleA render`);
        return (
            <div>
                <div>
                    LifecycleA
                    <button onClick={this.changeState}>Change state</button>
                </div>
                <LifecycleB></LifecycleB>

            </div>
        )
    }
}

export default LifecycleA
