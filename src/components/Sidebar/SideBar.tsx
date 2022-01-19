import MainBtnList from './MainBtnList';
import TotalOptionList from './TotalOptionList';
import { useAppSelector } from '../../app/hooks';
import { selectSlider } from '../../app/demoSlice';
import { isEmpty } from '../../app/commonFunctions';

const SideBar = () => {
    const page = useAppSelector(selectSlider);
    let showSideBar = isEmpty(page) ? null : true;
    return (
        showSideBar &&
        <article className={"sidebar"} >
            <MainBtnList />
            <TotalOptionList />
        </article>
    )
}

export default SideBar;