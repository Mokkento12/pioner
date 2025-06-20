import styles from "./Header.module.sass";

type ContactItemProps = {
  type: "email" | "phone";
  value: string;
};

const ContactItem = ({ type, value }: ContactItemProps) => {
  const href = type === "email" ? `mailto:${value}` : `tel:${value}`;
  const label =
    type === "email" ? "По вопросам и предложениям" : "Для консультаций";
  return (
    <div className={styles.contactItems}>
      <span className={styles.contactItem}>{label}</span>
      <a className={styles.contactLink} href={href}>
        {value}
      </a>
    </div>
  );
};

export default ContactItem;
