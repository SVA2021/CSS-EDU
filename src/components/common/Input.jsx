import styles from './Input.module.scss';

export const InputRange = (props) => {
  return (
    <input type="range" className={styles.slider} {...props} />
  )
};

export const InputNumber = (props) => {
  return (
    <input type="number" className={styles.number} {...props} />
  )
};
