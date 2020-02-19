import Input from '../Input/Input.react';
import styles from './textarea.module.css';

const Textrea = (props) => <Input as='textarea' className={styles.textarea} {...props} />;

export default Textrea;
