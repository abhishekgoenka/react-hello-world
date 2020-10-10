import React, {useState, useEffect} from 'react'

function InvervalHoolCounter() {
    const [count, updateCount] = useState(0);

    useEffect(() => {
        const handle = setTimeout(() => updateCount(count + 1), 1000);

        return () => clearInterval(handle)
    }, [count])

    return (
        <div>
            {count}
        </div>
    )
}

export default InvervalHoolCounter
