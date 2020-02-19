import classnames from 'classnames';
import styles from './input.module.css';

const Input = ({as: Wrapper = 'input', className, ...rest}) => (
  <Wrapper className={classnames(styles.input, className)} {...rest} />
);

export default Input;
