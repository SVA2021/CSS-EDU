import React from 'react';

const MainBtn = (props) => {

    return (
        <button onClick={props.setMain} className={props.class}>
            {props.value}
        </button>
    )
}

export default MainBtn;