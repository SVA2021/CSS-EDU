import React from 'react';
import style from './DemoSelectors.module.scss'

const DemoSelectors = () => {
    return (
        <article className={"demo"}>
            <h3>description will be here</h3>
            <ul className={style.main}>
                <li>li-1
                    <p>p-1</p>
                </li>
                <li>li-2
                    <p>p-2</p>
                </li>
                <li>li-3
                    <p>p-3</p>
                </li>
                <li>li-4
                    <p>p-4-1</p>
                    <p>p-4-2</p>
                    <p>p-4-3</p>
                </li>
                <li>li-5
                    <p>p-5</p>
                </li>
            </ul>
        </article>
    )
}

export default DemoSelectors;