import styles from "./Hero.module.sass";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Российский завод силовых машин</h1>
        <p className={styles.text}>
          научно-производственное предприятие, занимающееся разработкой и
          производством силовых машин.
        </p>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/hero-img.png"
          width={1180}
          height={440}
          alt="Hero image"
        />
      </div>
    </section>
  );
};

export default Hero;
