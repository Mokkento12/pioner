import { mockNews } from "../../data/news";
import NewsCard from "./NewsCard";
import styles from "./News.module.sass";

const News = () => {
  return (
    <section className={styles.news}>
      <div className={styles.container}>
        <h1 className={styles.title}>Новости</h1>
        <div className={styles.newsBlock}>
          {mockNews.map((item) => (
            <NewsCard
              key={item.id}
              image={item.image}
              text={item.text}
              date={item.date}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
