import React from 'react'

// function FRInput() {
//     return (
//         <div>
//             <input type="test"></input>
//         </div>
//     )
// }

const FRInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="test" ref={ref}></input>
        </div>
    )
})

export default FRInput