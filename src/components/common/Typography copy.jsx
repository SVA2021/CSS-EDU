import s from './Typography.module.scss';

export const HeroTitle = ({ children }) => (
    <h1 className={s.heroTitle}>
        {children}
    </h1>
);

export const SectionTitle = ({ children }) => (
    <h3 className={s.sectionTitle}>
        {children}
    </h3>
);

export const SubTitle = ({ children }) => (
    <h4 className={s.subTitle}>
        {children}
    </h4>
);

export const SubTitleUpper = ({ children }) => (
    <h4 className={s.subTitleUpper}>
        {children}
    </h4>
);

export const SubTitleUpperDark = ({ children }) => (
    <h4 className={s.subTitleUpper__dark}>
        {children}
    </h4>
);

export const Strong = ({ children }) => (
    <strong className={s.strong}>
        {children}
    </strong>
);

export const Highlighted = ({ children }) => (
    <p className={s.highlighted}>
        {children}
    </p>
);


export const IconLabel = ({ children }) => (
    <p className={s.icon_label}>
        {children}
    </p>
);