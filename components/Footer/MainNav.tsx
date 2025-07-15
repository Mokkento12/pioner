import Link from "next/link";
import styles from "./Footer.module.sass";

const navLinks = [
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
      <ul className={styles.navList}>
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
