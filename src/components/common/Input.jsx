import styles from './Input.module.scss';

const InputRange = (props) => {
  return (
    <input type="range" className={styles.slider} {...props} />
  )
};

export default InputRange;