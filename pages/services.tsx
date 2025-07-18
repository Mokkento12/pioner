import { ApolloProvider, useQuery } from "@apollo/client";
import countriesClient from "../lib/countriesClient";
import { GET_COUNTRIES } from "../graphql/queries/countries";
import Layout from "../components/Layout";

const ServicesContent = () => {
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  if (loading) return <Layout title="Загрузка...">Загрузка...</Layout>;
  if (error) return <Layout title="Ошибка">Ошибка: {error.message}</Layout>;

  return (
    <Layout title="Услуги">
      <h1>Услуги (по странам 😊)</h1>
      <ul>
        {data.countries.slice(0, 10).map((country: any) => (
          <li key={country.code}>
            {country.emoji} {country.name}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

const ServicesPage = () => (
  <ApolloProvider client={countriesClient}>
    <ServicesContent />
  </ApolloProvider>
);

export default ServicesPage;
