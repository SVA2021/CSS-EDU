import React from 'react';
import style from './MainBtn.module.scss'

const MainBtn = (props) => {

    return (
        <button onClick={props.setMain} className={props.class}>
            {props.value}
        </button>
    )
}

export default MainBtn;