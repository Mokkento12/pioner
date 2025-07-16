import Link from "next/link";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  links: NavLink[];
  classNameUl?: string;
  classNameLi?: string;
  classNameLink?: string;
};

const NavLinks = ({
  links,
  classNameUl,
  classNameLi,
  classNameLink,
}: Props) => {
  return (
    <ul className={classNameUl}>
      {links.map(({ label, href }) => (
        <li key={href} className={classNameLi}>
          <Link href={href} className={classNameLink}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
