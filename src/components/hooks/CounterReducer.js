import React, { useReducer } from 'react'

const initializerArg = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;

        case 'decrement':
            return state - 1;

        case 'reset':
            return initializerArg;
        default:
            return state;
    }
}

function CounterReducer() {
    const [counter, dispatch] = useReducer(reducer, initializerArg);

    return (
        <div>
            Counter using Reducer : {counter}
            <div>
                <button onClick={() => dispatch('increment')}>increment</button>
                <button onClick={() => dispatch('decrement')}>decrement</button>
                <button onClick={() => dispatch('reset')}>reset</button>
            </div>

        </div >
    )
}

export default CounterReducer
