import styles from './label.module.css';

const Label = ({label, children}) => (
  <label className={styles.wrapper}>
    <div className={styles.label}>
      {label}
    </div>
    {children}
  </label>
);

export default Label;
