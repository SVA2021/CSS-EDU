import React from 'react';
import style from './PositionDemo.module.css'

const flexParent: any = {
    flexDirection: ["row", "row-reverse", "column", "column-reverse", "initial", "inherit"],
    justifyContent: ["flexStart", "flexEnd", "center", "spaceBetween", "spaceAround", "spaceEvenly", "initial", "inherit"],
    color: ["red", "green", "yellow", "white"]
    // flexWrap: [],
    // flexFlow: [],
    // alignItems: [],
    // alignContent: [],
}

const currentStyle: any = {};

for (const key in flexParent) {
    if (Object.hasOwnProperty.call(flexParent, key)) {
        currentStyle[key] = flexParent[key][3];
    }
}


const PositionDemo = () => {
    return (
        <article className={style.main__position__demo} style={currentStyle}>
            <h3>PositionDemo will be here</h3>
            <p>{currentStyle?.flexDirection}</p>
            <p>{currentStyle?.justifyContent}</p>
        </article>
    )
}

export default PositionDemo;