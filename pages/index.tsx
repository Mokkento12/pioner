import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout";
import Map from "../components/Map/Map";
import News from "../components/News/News";
import Products from "../components/Products/Products";

import "normalize.css";

const IndexPage = () => (
  <Layout title="Главная | Пионер">
    <Hero />
    <About />
    <Products />
    <Map />
    <News />
  </Layout>
);

export default IndexPage;
