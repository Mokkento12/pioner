import { Logo } from "../UI/LogoFooter";
import styles from "./Footer.module.sass";
import MainNav from "./MainNav";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <MainNav />
      </div>
    </div>
  );
};

export default Footer;
