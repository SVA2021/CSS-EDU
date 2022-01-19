import MainOptions from './MainOptions';
import CommmonOptions from './CommonOptions';
import { useAppSelector } from '../../app/hooks';
import { selectSlider } from '../../app/demoSlice';
import { isEmpty } from '../../app/commonFunctions';

const SideBar = () => {
    const page = useAppSelector(selectSlider);
    let showSideBar = isEmpty(page) ? null : true;
    return (
        showSideBar &&
        <section className={"sidebar"} >
            <MainOptions />
            <CommmonOptions />
        </section>
    )
}

export default SideBar;