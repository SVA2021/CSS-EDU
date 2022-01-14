import { useAppSelector } from '../../app/hooks';
import { selectDemo } from '../../app/demoSlice';
import style from './DemoSelectors.module.scss'
import './selectors.scss'
import { Highlighted, SectionTitle, Strong } from '../common/Typography';

const DemoSelectors = () => {

    const activeStyle = useAppSelector(selectDemo);
    const activeDemoStatus = (activeStyle) ? activeStyle.part1.elementAndClass : null;
    const description = (activeDemoStatus) ? activeDemoStatus.description : null;
    const selectorStyle = (activeDemoStatus) ? activeDemoStatus.style : null;
    const selectorCSS = (activeDemoStatus) ? activeDemoStatus.class : null;

    return (
        <section className={"demo"}>
            <SectionTitle>CSS Selectors</SectionTitle>
            <div className={style.demo__selectors__container}>
                <header className={style.demo__description}>
                    <Highlighted><Strong>CSS: </Strong>{selectorCSS}</Highlighted>
                    <Highlighted><Strong>description: </Strong>{description}</Highlighted>
                </header>
                <div className={selectorStyle}>
                    <ul className={style.demo__selectors__main}>
                        ul
                        <li>li-1
                            <p className='class1 class2'>p-1 class = name1 name2
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Mollitia sit atque delectus enim assumenda minima reiciendis
                            </p>
                        </li>
                        <li>li-2
                            <p id='firstname'>p-2-1 id = firstname</p>
                            <p>p-2-2</p>
                        </li>
                        <li className='class1'>li-3 class = name1
                            <div>
                                <p className='class2'>p-3 class = name2</p>
                                div3
                            </div>
                        </li>
                        <li>li-4
                            <p>p-4-1</p>
                            <span>span4</span>
                            <p className={'intro'}>p-4-2 class = intro </p>
                            <p lang='en'>p-4-3 lang=en</p>
                            <p></p>
                        </li>
                        <li>li-5
                            <div>div5</div>
                            <p title='flower'>p-5 "\n /n"
                                title=flower</p>
                        </li>
                    </ul>
                    <p className={style.demo__selectors__externalP}>external p</p>
                    <ol>
                        <li>1</li>
                        <li id="news">2</li>
                    </ol>
                    <ul className={style.demo__selectors__main}>
                        <li>
                            <a href="#00">special link #00</a>
                            <a href="#01w3schools.pdf" >special link #01</a>
                            <a href="#02 w3schools">special link #02</a>
                            <a href="#news">special link #02</a>
                        </li>
                        <li>
                            <input type="text" placeholder='this is placeholder' readOnly />
                            <label htmlFor="type1" value="checked"><input type="checkbox" name="type1" checked readOnly />checked</label>
                            <label htmlFor="type2"><input type="checkbox" name="type2" />not checked</label>
                            <input type="number" min="5" max="10" value="7" required onChange={(e) => (e)} />
                            <input type="number" min="5" max="10" value="17" onChange={(e) => (e)} />
                            <input type="text" required />
                            <input type="text" disabled placeholder='this input disabled' />
                        </li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default DemoSelectors;