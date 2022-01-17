import React from 'react';
import { HeroTitle, IconLabel, SectionTitle } from '../common/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faFontAwesomeFlag, faGitAlt, faGithub, faHtml5, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import springImg from '../../img/react-spring-svg.svg';
import typescriptImg from '../../img/typescript.svg';
import reduxImg from '../../img/redux.svg';
import cssModulesImg from '../../img/css-modules-logo.svg';

import style from './Preloader.module.scss';

const Preloader = () => {
    return (
        <section className={'preloader'}>
            <HeroTitle>
                "CSS EDU" project was created to demonstrate how to make SPA, based on React and Redux.
                Target of this project is site where I can see what happened if dynamically change some CSS properties of elements.
            </HeroTitle>
            <div className={style.main}>
                <SectionTitle>Technologies:</SectionTitle>
                <ul>
                    <li>
                        <IconLabel>HTML5</IconLabel>
                        <FontAwesomeIcon className={style.icon} icon={faHtml5} size="4x" color="#f5f5f5" />
                    </li>
                    <li>
                        <IconLabel>React</IconLabel>
                        <FontAwesomeIcon className={style.icon} icon={faReact} size="4x" color="#f5f5f5" />
                    </li>
                    <li>
                        <IconLabel>Redux</IconLabel>
                        <img className={style.icon} src={reduxImg} alt="Redux logo" />
                    </li>
                    <li>
                        <IconLabel>Redux Toolkit</IconLabel>
                        <img className={style.icon} src={reduxImg} alt="Redux logo" />
                    </li>
                    <li>
                        <IconLabel>TypeScript</IconLabel>
                        <img className={style.icon} src={typescriptImg} alt="typescript logo" />
                    </li>
                    <li>
                        <IconLabel>react-spring</IconLabel>
                        <img className={style.icon} src={springImg} alt="react-spring logo" />
                    </li>
                    <li>
                        <IconLabel>Font Awesome</IconLabel>
                        <FontAwesomeIcon className={style.icon} icon={faFontAwesomeFlag} size="4x" color="#f5f5f5" />
                    </li>
                    <li>
                        <IconLabel>SASS</IconLabel>
                        <FontAwesomeIcon className={style.icon} icon={faSass} size="4x" color="#f5f5f5" />
                    </li>
                    <li>
                        <IconLabel>CSS3</IconLabel>
                        <FontAwesomeIcon className={style.icon} icon={faCss3Alt} size="4x" color="#f5f5f5" />
                    </li>
                    <li>
                        <IconLabel>CSS modules</IconLabel>
                        <img className={style.icon} src={cssModulesImg} alt="CSS modules logo" />
                    </li>
                    <li>
                        <IconLabel>GitHub</IconLabel>
                        <FontAwesomeIcon className={style.icon} icon={faGithub} size="4x" color="#f5f5f5" />
                    </li>
                    <li>
                        <IconLabel>Git</IconLabel>
                        <FontAwesomeIcon className={style.icon} icon={faGitAlt} size="4x" color="#f5f5f5" />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Preloader;