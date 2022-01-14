import { SectionTitle, SubTitleUpper } from '../common/Typography';
import style from './Demo.module.scss';

const DemoBlank = (props) => {

    return (
        <section className={"demo"}>
            <SectionTitle>Demo</SectionTitle>
            <header className={style.demo__description}>
                <SubTitleUpper>choose option in Settings</SubTitleUpper>
            </header>
        </section>
    )
}

export default DemoBlank;