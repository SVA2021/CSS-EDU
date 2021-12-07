import React from 'react';
import style from './Demo.module.css'

const Demo = (props) => {

    const childArray = [];
    const childQty = props.qty;

    for (let i = 0; i < 3; i++) {
        childArray.push(i);
    }

    return (
        <section className={"demo"}>
            <h3>Demo will be here</h3>
            <div className={style.parent}>parent
                {childArray.map((item) =>
                    <div key={item} className={style.child}>child #{item}</div>
                )}
            </div>
        </section>
    )
}

export default Demo;