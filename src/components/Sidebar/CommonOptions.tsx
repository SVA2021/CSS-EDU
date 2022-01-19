import { useAppSelector } from '../../app/hooks';
import { selectMainOption, selectSlider } from '../../app/demoSlice';
import GroupOfOptions from './GroupOfOptions';
import { SubTitleUpper } from '../common/Typography';

const CommmonOptions = () => {

    const page = useAppSelector(selectSlider);
    const activeMainOption = useAppSelector(selectMainOption);

    if (!activeMainOption) {
        return (
            <SubTitleUpper>choose option in Settings</SubTitleUpper>
        )
    }

    const mainOption = page[activeMainOption];
    const optionListKeys = Object.keys(mainOption);

    return (
        <article>
            {optionListKeys.map((item) =>
                <GroupOfOptions
                    key={item}
                    section={item}
                    sectionOfOptions={mainOption[item]}
                />
            )}
        </article>
    )
}

export default CommmonOptions;