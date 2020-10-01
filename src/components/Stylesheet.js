import React from 'react'
import './myStyles.css'
import style from './myStyle2.module.css'

function Stylesheet(props) {
    const classPrimary = props.primary? 'primary' : '';

    return (
        <div>
            <h1 className={classPrimary}>Stylesheet</h1>
            <h1 className={style.bgColor}>Module Stylesheet</h1>
        </div>
    )
}

export default Stylesheet
