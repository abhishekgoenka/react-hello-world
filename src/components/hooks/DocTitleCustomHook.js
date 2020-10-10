import React, { useEffect, useState } from 'react'

export function DocTitleCustomHook() {
    const [count, setCount] = useState(0);

    function incrementCountHandler() {
        setCount(count + 1);
    }

    useDocumentTitle(count);

    return (
        <div>
            Custom hook
            <div>
                <button onClick={incrementCountHandler}>Increment Count</button>
            </div>

        </div>
    )
}

export function useDocumentTitle(count) {
    useEffect(() => {
        document.title = `count ${count}`
    }, [count])
}