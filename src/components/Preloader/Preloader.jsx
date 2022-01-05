import React from 'react';
import { SectionTitle } from '../common/Typography';

const Preloader = () => {
    return (
        <section className={'preloader'}>
            <SectionTitle>preloader will be here</SectionTitle>
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