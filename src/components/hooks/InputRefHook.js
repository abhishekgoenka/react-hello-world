import React , {useEffect, useRef} from 'react'

function InputRefHook() {
    const refInputControl = useRef(null);
    useEffect(() => {
        refInputControl.current.focus();
    }, [])

    return (
        <div>
            <input type="text" ref={refInputControl}></input>
        </div>
    )
}

export default InputRefHook
