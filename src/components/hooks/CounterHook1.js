import React, { useState, useEffect } from 'react'

function CounterHook1() {
    const [count, increment] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('document title updated')
        document.title = `Count ${count}`


        return () => {
            console.log(`cleanup code goes here`);
        }
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={() => increment(prev => prev + 1)}>Count {count}</button>
        </div>
    )
}

export default CounterHook1
