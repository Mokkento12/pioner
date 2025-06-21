import styles from "./Header.module.sass";
import MainNav from "./MainNav";
import TopBar from "./TopBar";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <TopBar />
        <MainNav />
      </div>
    </header>
  );
};

export default Header;
