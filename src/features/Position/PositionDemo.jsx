import React from 'react';
import style from './PositionDemo.module.css'

const flexParent = {
    flexDirection: ["row", "row-reverse", "column", "column-reverse", "initial", "inherit"],
    justifyContent: ["flexStart", "flexEnd", "center", "spaceBetween", "spaceAround", "spaceEvenly", "initial", "inherit"],
    color: ["red", "green", "yellow", "white"]
}

const currentStyle = {};

for (const key in flexParent) {
    if (Object.hasOwnProperty.call(flexParent, key)) {
        currentStyle[key] = flexParent[key][3];
    }
}

const PositionDemo = () => {
    return (
        <article className={style.main__position__demo} style={currentStyle}>
            <ul>
                <li>
                    <p>1</p>
                </li>
                <li>
                    <p>2</p>
                </li>
                <li>
                    <p>3</p>
                </li>
                <li>
                    <p>4</p>
                </li>
                <li>
                    <p>5</p>
                </li>
            </ul>
        </article>
    )
}

export default PositionDemo;