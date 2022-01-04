import { useAppSelector } from '../../app/hooks';
import style from './DemoAnimation.module.scss'
import { selectDemo } from '../../app/demoSlice';
import { SectionTitle } from '../common/Typography';

const DemoAnimation = (props) => {
    const activeStyle = useAppSelector(selectDemo);

    let description;

    const childArray = [];
    const childQty = 3;

    for (let i = 0; i < childQty; i++) {
        childArray.push(i);
    }

    return (
        <section className={"demo"}>
            <SectionTitle>Animation</SectionTitle>
            <div className={style.fix}>
                <p><b>Animated property: </b>{description}</p>
                <div className={style.parent}>
                    {childArray.map((item) =>
                        <div key={item} className={style.child} >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default DemoAnimation;