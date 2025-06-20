import { mockContacts } from "../../utils/mockContacts";
import { Logo } from "../UI/Logo";
import ContactItem from "./ContactItem";
import styles from "./Header.module.sass";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <div className={styles.contacts}>
        <ContactItem type="email" value={mockContacts.email} />
        <ContactItem type="phone" value={mockContacts.phone} />
      </div>
    </div>
  );
};

export default TopBar;
