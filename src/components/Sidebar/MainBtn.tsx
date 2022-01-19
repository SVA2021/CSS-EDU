const MainBtn = (props: { value: string, class: string, setMain: any }) => {

    return (
        <button onClick={props.setMain} className={props.class}>
            {props.value}
        </button>
    )
}

export default MainBtn;