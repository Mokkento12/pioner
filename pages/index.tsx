import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout";
import "normalize.css";

const IndexPage = () => (
  <Layout title="Главная | Пионер">
    <Hero />
    <About />
  </Layout>
);

export default IndexPage;
