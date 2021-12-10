import React, { useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import style from './DemoPosition.module.css'
import { selectDemo } from '../Main/demoSlice';

const DemoPosition = (props) => {
    const activeStyle = useAppSelector(selectDemo);
    const childArray = [];
    const childQty = 3;

    for (let i = 0; i < childQty; i++) {
        childArray.push(i);
    }

    return (
        <section className={"demo"}>
            <h3>Select option from left to change position of elements</h3>
            <div style={activeStyle.parent}
                className={style.parent}> parent
                {childArray.map((item) =>
                    <div key={item} style={activeStyle.childItem} className={style.child}>
                        child #{item}
                    </div>
                )}
            </div>
        </section>
    )
}

export default DemoPosition;