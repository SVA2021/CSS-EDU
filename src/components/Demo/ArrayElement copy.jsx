import style from './Demo.module.scss';

const ArrayElement = (props) => {
    const index = props.index;
    const status = (props.modified) ? style.demo__array__modified : style.demo__array__original;
    return (
        <div className={status}>{index}</div>
    )
}

export default ArrayElement;