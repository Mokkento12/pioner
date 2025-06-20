import styles from "./Header.module.sass";
import TopBar from "./TopBar";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <TopBar />
      </div>
    </header>
  );
};

export default Header;
