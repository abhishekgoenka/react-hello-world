import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class UserContextExample extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username) => {
                        return <div>Hello {username}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default UserContextExample
