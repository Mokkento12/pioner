import Link from "next/link";
import styles from "./Header.module.sass";
import Image from "next/image";

const navLinks = [
  { label: "Главная", href: "/" },
  { label: "О предприятии", href: "/about" },
  { label: "Новости", href: "/news" },
  { label: "Продукция", href: "/products" },
  { label: "Услуги", href: "/services" },
  { label: "Поддержка", href: "/support" },
  { label: "География поставок", href: "/geo" },
  { label: "Контакты", href: "/contacts" },
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
      <button className={styles.callButton}>
        <Image src="/images/phone.svg" alt="Phone" width={16} height={16} />
        <span className={styles.callText}>Перезвоните мне</span>
      </button>
    </nav>
  );
};

export default MainNav;
