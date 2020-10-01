import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }


    render() {

        return this.state.isLoggedIn ? <div>Hello Abhishek</div> : <div>Hello Guest</div>


        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Hello Abhishek
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Hello Guest
        //         </div>
        //     )
        // }
    }
}

export default UserGreeting
