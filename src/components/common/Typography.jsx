import s from './Typography.module.scss';

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