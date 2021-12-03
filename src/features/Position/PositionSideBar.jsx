import React from 'react';
import style from './PositionSideBar.module.css'

const flexParent = {
    display: "flex",
    flexDirection: ["row", "row-reverse", "column", "column-reverse", "initial", "inherit"],
    justifyContent: ["flexStart", "flexEnd", "center", "spaceBetween", "spaceAround", "spaceEvenly", "initial", "inherit"],
    flexWrap: ["nowrap", "wrap", "wrapReverse", "initial", "inherit"],
    alignItems: ["stretch", "center", "flexStart", "flexEnd", "baseline", "initial", "inherit"],
    alignContent: ["stretch", "center", "flexStart", "flexEnd", "spaceBetween", "spaceAround", "initial", "inherit"],
    color: ["red", "green", "yellow", "white"]
}

const flexChildItem = {
    alignSelf: ["stretch", "center", "flexStart", "flexEnd", "baseline", "initial", "inherit"]
}

const flex = {
    parent: {
        display: "flex",
        flexDirection: ["row", "row-reverse", "column", "column-reverse", "initial", "inherit"],
        justifyContent: ["flexStart", "flexEnd", "center", "spaceBetween", "spaceAround", "spaceEvenly", "initial", "inherit"],
        flexWrap: ["nowrap", "wrap", "wrapReverse", "initial", "inherit"],
        alignItems: ["stretch", "center", "flexStart", "flexEnd", "baseline", "initial", "inherit"],
        alignContent: ["stretch", "center", "flexStart", "flexEnd", "spaceBetween", "spaceAround", "initial", "inherit"],
        color: ["red", "green", "yellow", "white"]
    }, 
    childItem: {
        alignSelf: ["stretch", "center", "flexStart", "flexEnd", "baseline", "initial", "inherit"]
    }
}

console.log(flexParent);

const OptionBtn = (props) => {
    let classes = (props.isActive)
        ? style.sidebar__optionItem__btn
        : style.sidebar__optionItem__btn + style.sidebar__optionItem__btn__active;

    return (
        <button className={classes}>
            {props.value}
        </button>
    )
}

const OptionItem = (props) => {
    return (
        <article className={style.sidebar__optionItem}>
            <h3 className={style.sidebar__optionItem__header}>
                OptionName
            </h3>
            <div className={style.sidebar__optionItem__btnList}>
                ButtonList
            </div>
        </article>
    )
}

let st = `display: "flex", flex-direction: "row"`

const PositionSideBar = (props) => {
    return (
        <article className={style.main__position__sidebar} >
            <h2>Settings</h2>
            <div className={style.sidebar__mainBtn} style={{ color: 'yellow' }}>
                here will be array of main BTN
            </div>
            <div className={style.sidebar__options}>
                here will be list of all possible options that can be for this area
            </div>
        </article>
    )
}

export default PositionSideBar;