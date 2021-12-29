// import React from 'react';
import { useAppSelector } from '../../app/hooks';
import style from './DemoPosition.module.scss'
import { selectDemo } from '../../app/demoSlice';
import { SectionTitle } from '../common/Typography';

const DemoPosition = (props) => {
    const activeStyle = useAppSelector(selectDemo);

    const propertyCopy = (obj) => {
        let result = {};
        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                // const element = obj[key];
                result[key] = obj[key].name;
            }
        }
        return result;
    }

    let parentStyle = propertyCopy(activeStyle.parent);
    let childStyle = propertyCopy(activeStyle.childItem);

    const childArray = [];
    const childQty = 7;

    for (let i = 0; i < childQty; i++) {
        childArray.push(i);
    }

    return (
        <section className={"demo"}>
            <SectionTitle>Select option from left to change position of elements</SectionTitle>
            <div className={style.fix}>

                <div style={parentStyle}
                    className={style.parent}> parent
                    {childArray.map((item) =>
                        <div
                            key={item}
                            style={childStyle}
                            className={style.child}
                        >
                            child #{item}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default DemoPosition;