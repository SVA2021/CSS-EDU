import React from 'react';
import { SectionTitle } from '../common/Typography';
import image from '../../img/OrangeCar.png';

const Preloader = () => {
    return (
        <section className={'preloader'}>
            <SectionTitle>preloader will be here</SectionTitle>
            <img src={image} alt="animated" width={'500px'} />
            <p>
                at this page was used :
                react
                react-spring
                sass
                css modules
                git
                github
                ts
                redux
                redux-toolkit
            </p>
        </section>
    )
}

export default Preloader;