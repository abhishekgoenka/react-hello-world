import React, { useState, useMemo } from 'react'

function CounterMemoHook() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const counter1Hander = () => {
        setCounter1(counter1 + 1)
    }

    const counter2Hander = () => {
        setCounter2(counter2 + 1)
    }

    const isEven = useMemo(() => {
        console.log(`isEven event called`);
        return counter1 % 2 === 0
    }, [counter1])

    return (
        <div>
            UseMemoHook
            <div>
                <h3>Counter1 : {counter1}</h3> {isEven ? 'even' : 'odd'}
                <button onClick={counter1Hander}>Increase Counter 1</button>
            </div>

            <div>
                <h3>Counter2 : {counter2}</h3>
                <button onClick={counter2Hander}>Increase Counter 2</button>
            </div>
        </div>
    )
}

export default CounterMemoHook
