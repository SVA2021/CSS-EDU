import React from 'react';
import style from './PositionSideBar.module.css'

const flexParent = {
    flexDirection: ["row", "row-reverse", "column", "column-reverse", "initial", "inherit"],
    justifyContent: [],
    flexWrap: [],
    flexFlow: [],
    alignItems: [],
    alignContent: [],
    color: ["red", "green", "yellow", "white"]
}

console.log(flexParent);
// delete flexParent.justifyContent;
// console.log();


// let str = JSON.stringify(flexParent);
// console.log(JSON.parse(str));

const OptionBtn = (props: any) => {
    let classes = (props.isActive)
        ? style.sidebar__optionItem__btn
        : style.sidebar__optionItem__btn + style.sidebar__optionItem__btn__active;

    return (
        <button className={classes}>
            {props.value}
        </button>
    )
}

const OptionItem = (props: any) => {
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

const PositionSideBar = (props: any) => {
    return (
        <article className={style.main__position__sidebar} >
            <h2>Settings</h2>
            <div className={style.sidebar__mainBtn} style={{ color: 'yellow' }}>
                {/* // flexParent[color][2] */}
                here will be array of main BTN
            </div>
            <div className={style.sidebar__options}>
                here will be list of all possible options that can be for this area
            </div>
        </article>
    )
}
 
export default PositionSideBar;