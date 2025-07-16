import styles from "./Footer.module.sass";
import NavLinks from "../NavLinks/NavLinks";

const footerLinks = [
  { label: "Главная", href: "/" },
  { label: "О предприятии", href: "/about" },
  { label: "Новости", href: "/news" },
  { label: "Продукция", href: "/products" },
  { label: "Услуги", href: "/services" },
  { label: "Поддержка", href: "/support" },
  { label: "География поставок", href: "/geo" },
  { label: "Контакты", href: "/contacts" },
  { label: "Файлы", href: "/files" },
  { label: "Поддержка", href: "/support" },
  { label: "Политика конфеденциальности", href: "/privacy policy" },
];

const MainNav = () => {
  return (
    <nav className={styles.mainNav}>
      <NavLinks
        links={footerLinks}
        classNameUl={styles.navList}
        classNameLi={styles.navItem}
        classNameLink={styles.navLink}
      />
    </nav>
  );
};

export default MainNav;
