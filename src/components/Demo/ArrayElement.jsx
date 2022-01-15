import style from './ArrayElement.module.scss';

const ArrayElement = (props) => {
    const index = props.index;
    const status = (props.modified) ? style.modified : style.original;
    return (
        <div className={status}>{index}</div>
    )
}

export default ArrayElement;