import React from 'react';
import style from './Position.module.css'
import PositionDemo from './PositionDemo';
import PositionSideBar from './PositionSideBar';

const Position = () => {
    return (
        <section className={style.main__position}>
            <PositionSideBar />
            <PositionDemo />
        </section>
    )
}

export default Position;