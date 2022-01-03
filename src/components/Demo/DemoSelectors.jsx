import { useAppSelector } from '../../app/hooks';
import { selectDemo } from '../../app/demoSlice';
import style from './DemoSelectors.module.scss'
import './selectors.scss'
import { SectionTitle } from '../common/Typography';

const DemoSelectors = () => {

    const activeStyle = useAppSelector(selectDemo);
    const part1 = activeStyle.part1.elementAndClass;

    return (
        <section className={"demo"}>
            <SectionTitle>CSS Selectors</SectionTitle>
            <div className={style.fix}>
                <header>
                    <p><b>CSS: </b>{part1?.class}</p>
                    <p><b>description: </b>{part1?.description}</p>
                </header>
                <div className={part1?.style}>
                    <ul className={style.main}>
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
                    <p className={style.additionP}>external p</p>
                    <ol>
                        <li>1</li>
                        <li id="news">2</li>
                    </ol>
                    <ul className={style.main}>
                        <li>
                            <a href="#00">special link #00</a>
                            <a href="#01w3schools.pdf" >special link #01</a>
                            <a href="#02 w3schools">special link #02</a>
                            <a href="#news">special link #02</a>
                        </li>
                        <li>
                            <input type="text" placeholder='this is placeholder' readOnly />
                            <label for="type1" value="checked"><input type="checkbox" name="type1" checked />checked</label>
                            <label for="type2"><input type="checkbox" name="type2" />not checked</label>
                            <input type="number" min="5" max="10" value="7" required />
                            <input type="number" min="5" max="10" value="17" />
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