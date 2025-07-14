import Image from "next/image";
import styles from "./News.module.sass";
import Link from "next/link";

type NewsCardProps = {
  image: string;
  text: string;
  date: string;
  link: string;
};

const NewsCard = ({ image, text, date, link }: NewsCardProps) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt={text} width={380} height={251} />
      <p className={styles.text}>{text}</p>
      <div className={styles.footer}>
        <Link href={link} className={styles.readMore}>
          Читать далее
        </Link>
        <span className={styles.date}>{date}</span>
      </div>
    </div>
  );
};

export default NewsCard;
