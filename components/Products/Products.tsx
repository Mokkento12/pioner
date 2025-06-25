import { mockProducts } from "../../data/products";
import ProductCard from "./ProductCard";
import styles from "./Products.module.sass";

const Products = () => {
  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <h3 className={styles.productTitle}>Продукция</h3>
        <div className={styles.cardsWrapper}>
          {mockProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              link={product.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
