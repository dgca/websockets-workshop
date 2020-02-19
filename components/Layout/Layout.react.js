import styles from './layout.module.css';

const Layout = ({sidebar, children}) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <h1 className={styles.title}>Chirpy 🐦</h1>
      <div className={styles.content}>
        <div className={styles.sidebar}>
          {sidebar}
        </div>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  </div>
);

export default Layout;
