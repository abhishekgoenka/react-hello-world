import React, { Component } from 'react'

const HOCCounter = OriginalComponent => {
    class NewComponent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }

            this.incrementCounter = this.incrementCounter.bind(this);
        }

        incrementCounter() {
            this.setState({
                count: this.state.count + 1
            })
        }

        render() {
            return <OriginalComponent incrementCounter={this.incrementCounter} count={this.state.count}></OriginalComponent>
        }
    }

    return NewComponent
}

export default HOCCounter