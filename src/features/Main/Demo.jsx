import React from 'react';
import { useAppSelector } from '../../app/hooks';
import style from './Demo.module.css'
import { selectDemo } from './demoSlice';

const Demo = (props) => {
    const activeStyle = useAppSelector(selectDemo);
    const childArray = [];
    const childQty = props.qty;

    for (let i = 0; i < 1; i++) {
        childArray.push(i);
    }

    return (
        <section className={"demo"}>
            <h3>Demo</h3>
            <div style={activeStyle.parent}
                className={style.parent}>parent
                {childArray.map((item) =>
                    <div
                        style={activeStyle.childItem}
                        key={item}
                        className={style.child}>
                        child #{item}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Demo;