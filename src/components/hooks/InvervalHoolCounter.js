import React, {useState, useEffect} from 'react'

function InvervalHoolCounter() {
    const [count, updateCount] = useState(0);

    const tick = () => {
        updateCount(count + 1)
    }

    useEffect(() => {
        const handle = setTimeout(tick, 1000);

        return () => clearInterval(handle)
    }, [count])

    return (
        <div>
            {count}
        </div>
    )
}

export default InvervalHoolCounter
