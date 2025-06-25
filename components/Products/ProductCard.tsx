import Image from "next/image";
import Link from "next/link";
import styles from "./Products.module.sass";

type Props = {
  title: string;
  image: string;
  link: string;
};

const ProductCard = ({ title, image, link }: Props) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt={title} width={200} height={194} />
      <h3 className={styles.title}>{title}</h3>
      <Link href={link} className={styles.link}>
        Подробнее{" "}
        <Image
          src={"/images/line-angle-right-icon.svg"}
          width={6}
          height={11}
          alt={"Arrow"}
        />
      </Link>
    </div>
  );
};

export default ProductCard;
