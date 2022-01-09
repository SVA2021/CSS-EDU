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
                result[key] = obj[key].name;
            }
        }
        return result;
    }

    let parentStyle = propertyCopy(activeStyle.parent);
    let childStyle = propertyCopy(activeStyle.childItem);
    let parentText = JSON.stringify(parentStyle, null, ' ').replace(/"/gm, '');
    let childText = JSON.stringify(childStyle, null, ' ').replace(/"/gm, '');

    const childArray = [];
    const childQty = 7;

    for (let i = 0; i < childQty; i++) {
        childArray.push(i);
    }

    return (
        <section className={"demo"}>
            <SectionTitle>Position of elements</SectionTitle>
            <div className={style.fix}>
                <p><b>CSS of parent:</b>{parentText}</p>
                <p><b>CSS of child:</b>{childText}</p>
                <div style={parentStyle}
                    className={style.parent}>parent
                    {childArray.map((item) =>
                        <div
                            key={item}
                            style={childStyle}
                            className={style.child}
                        >
                            <b>child #{item} </b>  
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default DemoPosition;