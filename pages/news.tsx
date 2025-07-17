import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../graphql/queries/news";
import Layout from "../components/Layout";

const NewsPage = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useQuery(GET_CHARACTERS, {
    variables: { page },
  });

  if (loading) return <Layout title="Загрузка...">Загрузка...</Layout>;
  if (error) return <Layout title="Ошибка">Ошибка: {error.message}</Layout>;

  const { results, info } = data.characters;

  return (
    <Layout title="Новости (Rick & Morty)">
      <h1>Новости (персонажи)</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          padding: "2rem 0",
        }}
      >
        {results.map((c: any) => (
          <div
            key={c.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              textAlign: "center",
            }}
          >
            <img
              src={c.image}
              alt={c.name}
              style={{ width: "100px", borderRadius: "50%" }}
            />
            <h3>{c.name}</h3>
            <p>Status: {c.status}</p>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button disabled={!info.prev} onClick={() => setPage(page - 1)}>
          ← Назад
        </button>
        <span>
          Страница {page} из {info.pages}
        </span>
        <button disabled={!info.next} onClick={() => setPage(page + 1)}>
          Вперед →
        </button>
      </div>
    </Layout>
  );
};

export default NewsPage;
