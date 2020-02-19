import styles from './chirp.module.css';

const Chirp = ({
  name,
  message
}) => (
  <article className={styles.chirp}>
    <div className={styles.name}>@{name}</div>
    <div className={styles.message}>
      {message.split(/\n{2,}/).map((text, i) => (
        <p className={styles.p} key={i}>
          {text}
        </p>
      ))}
    </div>
  </article>
);

export default Chirp;
