import React from 'react'

function Hero({name}) {
    if (!name) {
        throw new Error('Invalid hero');
    }

    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default Hero
