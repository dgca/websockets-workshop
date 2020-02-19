import styles from './button.module.css';

const Button = ({as: Wrapper = 'button', ...rest}) => <Wrapper className={styles.button} {...rest} />;

export default Button;
