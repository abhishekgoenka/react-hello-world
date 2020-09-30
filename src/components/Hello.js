import React from 'react'

const Hello = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.Name} {props.heroName}</h1>
            <h2>{props.children}</h2>
        </div>
    )
    // return React.createElement('div', { 'id': 'someID', 'className': 'dummy class' }, React.createElement('h1', null, 'Hello Abhi'))
}

export default Hello;