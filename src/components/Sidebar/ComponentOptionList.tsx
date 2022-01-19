import { useAppSelector } from '../../app/hooks';
import { selectDemo } from '../../app/demoSlice';
import OptionBlock from './OptionBlock';
import { SubTitleUpper } from '../common/Typography';

const ComponentOptionList = (props: { key: string, section: string, sectionOfOptions: Array<any> }) => {

    const activeOption = useAppSelector(selectDemo);
    const groupName = props.section;
    const sectionOfOptions = props.sectionOfOptions;

    const sectionKeys = Object.keys(sectionOfOptions);
    const activeCurrentOption = activeOption[groupName];

    return (
        <article>
            <SubTitleUpper>Options for {groupName}</SubTitleUpper>
            <div>
                {sectionKeys.map((item: any) =>
                    <OptionBlock
                        key={item}
                        optionName={item}
                        group={groupName}
                        activeOption={activeCurrentOption}
                        optionValues={sectionOfOptions[item]}
                    />)}
            </div>
        </article>
    )
}

export default ComponentOptionList;