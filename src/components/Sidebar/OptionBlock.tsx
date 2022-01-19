import style from './SideBar.module.scss';
import OptionBtn from './OptionBtn';
import { SubTitle } from '../common/Typography';

export interface OptionBtnType {
    key: any
    value: any
    group: string
    optionName: string
    activeOption: any
    isAlone: boolean
}

const OptionBlock = (props: { group: string, optionName: string, optionValues: Array<any>, activeOption: string }) => {

    const optionName = props?.optionName;
    const optionValues = props?.optionValues;
    const activeOption = props?.activeOption;

    let isAlone = (optionValues.length === 1);
    let key = optionValues.length;
    return (
        <div>
            <SubTitle>{optionName}</SubTitle>
            <div className={style.optionBlock__list}>
                {optionValues.map((item) =>
                    <OptionBtn
                        key={key++}
                        value={item}
                        group={props.group}
                        optionName={optionName}
                        activeOption={activeOption}
                        isAlone={isAlone}
                    />)}
            </div>
        </div>
    )
}

export default OptionBlock;