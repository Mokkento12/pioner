import { ApolloProvider, useQuery } from "@apollo/client";
import countriesClient from "../lib/countriesClient";
import { GET_COUNTRIES } from "../graphql/queries/countries";
import Layout from "../components/Layout";

const ProductsContent = () => {
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  if (loading) return <Layout title="Загрузка...">Загрузка...</Layout>;
  if (error) return <Layout title="Ошибка">Ошибка: {error.message}</Layout>;

  return (
    <Layout title="Список стран">
      <h1>Страны мира</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
          padding: "2rem 0",
        }}
      >
        {data.countries.slice(0, 6).map((c: any) => (
          <div
            key={c.code}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              textAlign: "center",
            }}
          >
            <span style={{ fontSize: "2rem" }}>{c.emoji}</span>
            <h3>{c.name}</h3>
            <p>Код: {c.code}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

const ProductsPage = () => (
  <ApolloProvider client={countriesClient}>
    <ProductsContent />
  </ApolloProvider>
);

export default ProductsPage;
