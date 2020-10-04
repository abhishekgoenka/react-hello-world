import React, { useState, useEffect } from 'react'

function CounterHook1() {
    const [count, increment] = useState(0);

    useEffect(() => {
        document.title = `Count ${count}`
    })

    return (
        <div>
            <button onClick={() => increment(prev => prev + 1)}>Count {count}</button>
        </div>
    )
}

export default CounterHook1
